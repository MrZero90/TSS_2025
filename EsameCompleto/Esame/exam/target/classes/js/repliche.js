async function loadRepliche(codSpettacolo, titoloSpettacolo, prezzo) {
    const container = document.getElementById('repliche-container');
    
    try {
        container.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Caricamento...</span></div></div>';
        
        const response = await fetch(`http://localhost:8080/api/repliche/spettacolo/${codSpettacolo}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const repliche = await response.json();
        container.innerHTML = '';
        
        if (repliche.length === 0) {
            container.innerHTML = '<div class="alert alert-info">Nessuna replica disponibile per questo spettacolo.</div>';
            return;
        }
        
        const row = document.createElement('div');
        row.className = 'row';
        
        // ⚠️ Carica disponibilità per ogni replica
        for (const replica of repliche) {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            
            const dataReplica = new Date(replica.dataReplica);
            const dataFormattata = dataReplica.toLocaleDateString('it-IT', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // ⚠️ Recupera disponibilità
            const disponibilita = await getDisponibilita(replica.codReplica);
            
            const isEsaurito = disponibilita.postiDisponibili <= 0;
            const isUltimiPosti = disponibilita.postiDisponibili <= 10 && disponibilita.postiDisponibili > 0;
            
            col.innerHTML = `
                <div class="card h-100 shadow-sm ${isEsaurito ? 'border-danger' : ''}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${dataFormattata}</h5>
                        <p class="card-text">
                            <strong>Codice Replica:</strong> ${replica.codReplica}<br>
                            <strong>Prezzo:</strong> €${prezzo.toFixed(2)}<br>
                            <strong>Posti disponibili:</strong> 
                            <span class="badge ${isEsaurito ? 'bg-danger' : isUltimiPosti ? 'bg-warning' : 'bg-success'}">
                                ${disponibilita.postiDisponibili} / ${disponibilita.postiTotali}
                            </span>
                        </p>
                        ${isEsaurito ? 
                            '<button class="btn btn-secondary mt-auto" disabled>Esaurito</button>' :
                            `<button class="btn btn-success mt-auto" onclick="acquistaBiglietto('${replica.codReplica}', '${titoloSpettacolo}', '${dataFormattata}', ${prezzo}, ${disponibilita.postiDisponibili})">
                                Acquista Biglietto
                            </button>`
                        }
                    </div>
                </div>
            `;
            
            row.appendChild(col);
        }
        
        container.appendChild(row);
        
    } catch (error) {
        console.error('Error loading repliche:', error);
        container.innerHTML = '<div class="alert alert-danger">Errore nel caricamento delle repliche. Riprova più tardi.</div>';
    }
}

// ⚠️ NUOVA FUNZIONE: Recupera disponibilità
async function getDisponibilita(codReplica) {
    try {
        const response = await fetch(`http://localhost:8080/api/biglietti/disponibilita/${codReplica}`);
        if (!response.ok) {
            throw new Error('Errore recupero disponibilità');
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting disponibilita:', error);
        return { postiTotali: 0, postiVenduti: 0, postiDisponibili: 0 };
    }
}

// ⚠️ MODIFICA: Aggiungi parametro postiDisponibili
function acquistaBiglietto(codReplica, titoloSpettacolo, dataReplica, prezzo, postiDisponibili) {
    const user = sessionStorage.getItem('loggedUser');
    
    if (!user) {
        alert('Devi effettuare il login per acquistare un biglietto!');
        loadPage('login');
        return;
    }
    
    const userData = JSON.parse(user);
    
    mostraFormPagamento(codReplica, titoloSpettacolo, dataReplica, prezzo, userData, postiDisponibili);
}
function mostraFormPagamento(codReplica, titoloSpettacolo, dataReplica, prezzo, userData, postiDisponibili) {
    const container = document.getElementById('repliche-container');
    
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow">
                    <div class="card-header bg-success text-white">
                        <h4 class="mb-0">Completa il Pagamento</h4>
                    </div>
                    <div class="card-body">
                        <!-- Riepilogo acquisto -->
                        <div class="alert alert-info" id="riepilogoOrdine">
                            <h5>Riepilogo Ordine</h5>
                            <p class="mb-1"><strong>Spettacolo:</strong> ${titoloSpettacolo}</p>
                            <p class="mb-1"><strong>Data:</strong> ${dataReplica}</p>
                            <p class="mb-1"><strong>Cliente:</strong> ${userData.nome} ${userData.cognome}</p>
                            <p class="mb-1"><strong>Prezzo unitario:</strong> €${prezzo.toFixed(2)}</p>
                            <p class="mb-1"><strong>Posti disponibili:</strong> <span class="badge bg-info">${postiDisponibili}</span></p>
                            <p class="mb-1"><strong>Quantità:</strong> <span id="quantitaDisplay">1</span></p>
                            <p class="mb-0"><strong>Totale:</strong> €<span id="totaleDisplay">${prezzo.toFixed(2)}</span></p>
                        </div>

                        <!-- Form pagamento -->
                        <form id="paymentForm" onsubmit="handlePayment(event, '${codReplica}', ${userData.codCliente}, ${prezzo})">
                            
                            <!-- Campo Quantità -->
                            <div class="mb-4">
                                <label for="quantita" class="form-label"><strong>Numero di Biglietti</strong></label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="quantita" 
                                    min="1" 
                                    max="${postiDisponibili}" 
                                    value="1" 
                                    required
                                    onchange="aggiornaRiepilogo(${prezzo})"
                                >
                                <div class="form-text">Massimo ${postiDisponibili} biglietti disponibili</div>
                            </div>

                            <!-- Metodo di pagamento -->
                            <div class="mb-4">
                                <label class="form-label"><strong>Seleziona Metodo di Pagamento</strong></label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="metodoPagamento" id="creditCard" value="carta" checked onchange="togglePaymentFields()">
                                    <label class="form-check-label" for="creditCard">
                                        💳 Carta di Credito
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="metodoPagamento" id="paypal" value="paypal" onchange="togglePaymentFields()">
                                    <label class="form-check-label" for="paypal">
                                        🅿️ PayPal
                                    </label>
                                </div>
                            </div>

                            <!-- Carta di Credito Fields -->
                            <div id="creditCardFields">
                                <div class="mb-3">
                                    <label for="cardNumber" class="form-label">Numero Carta</label>
                                    <input type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="cardExpiry" class="form-label">Scadenza (MM/AA)</label>
                                        <input type="text" class="form-control" id="cardExpiry" placeholder="MM/AA" maxlength="5" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="cardCVV" class="form-label">CVV</label>
                                        <input type="text" class="form-control" id="cardCVV" placeholder="123" maxlength="3" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="cardHolder" class="form-label">Intestatario Carta</label>
                                    <input type="text" class="form-control" id="cardHolder" placeholder="Nome come sulla carta" required>
                                </div>
                            </div>

                            <!-- PayPal Fields -->
                            <div id="paypalFields" style="display: none;">
                                <div class="mb-3">
                                    <label for="paypalEmail" class="form-label">Email PayPal</label>
                                    <input type="email" class="form-control" id="paypalEmail" placeholder="tuaemail@example.com">
                                </div>
                                <div class="alert alert-warning">
                                    <small>Verrai reindirizzato a PayPal per completare il pagamento.</small>
                                </div>
                            </div>

                            <div id="errorMessage" class="alert alert-danger d-none" role="alert"></div>

                            <div class="d-flex gap-2 justify-content-end">
                                <button type="button" class="btn btn-secondary" onclick="loadPage('home')">
                                    Annulla
                                </button>
                                <button type="submit" class="btn btn-success">
                                    Conferma e Paga €<span id="totaleButton">${prezzo.toFixed(2)}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function togglePaymentFields() {
    const metodoPagamento = document.querySelector('input[name="metodoPagamento"]:checked').value;
    const creditCardFields = document.getElementById('creditCardFields');
    const paypalFields = document.getElementById('paypalFields');
    
    if (metodoPagamento === 'carta') {
        creditCardFields.style.display = 'block';
        paypalFields.style.display = 'none';
        
        document.getElementById('cardNumber').required = true;
        document.getElementById('cardExpiry').required = true;
        document.getElementById('cardCVV').required = true;
        document.getElementById('cardHolder').required = true;
        document.getElementById('paypalEmail').required = false;
    } else {
        creditCardFields.style.display = 'none';
        paypalFields.style.display = 'block';
        
        document.getElementById('cardNumber').required = false;
        document.getElementById('cardExpiry').required = false;
        document.getElementById('cardCVV').required = false;
        document.getElementById('cardHolder').required = false;
        document.getElementById('paypalEmail').required = true;
    }
}


function aggiornaRiepilogo(prezzoUnitario) {
    const quantita = parseInt(document.getElementById('quantita').value) || 1;
    const totale = prezzoUnitario * quantita;
    
    document.getElementById('quantitaDisplay').textContent = quantita;
    document.getElementById('totaleDisplay').textContent = totale.toFixed(2);
    document.getElementById('totaleButton').textContent = totale.toFixed(2);
}

async function handlePayment(event, codReplica, codCliente, prezzo) {
    event.preventDefault();
    
    const metodoPagamento = document.querySelector('input[name="metodoPagamento"]:checked').value;
    const quantita = parseInt(document.getElementById('quantita').value) || 1;
    const errorMessage = document.getElementById('errorMessage');
    
    // Hide previous errors
    errorMessage.classList.add('d-none');
    
    // Validate payment data based on method
    if (metodoPagamento === 'carta') {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCVV = document.getElementById('cardCVV').value;
        const cardHolder = document.getElementById('cardHolder').value;
        
        if (!cardNumber || !cardExpiry || !cardCVV || !cardHolder) {
            errorMessage.textContent = 'Compila tutti i campi della carta di credito';
            errorMessage.classList.remove('d-none');
            return;
        }
    } else {
        const paypalEmail = document.getElementById('paypalEmail').value;
        
        if (!paypalEmail) {
            errorMessage.textContent = 'Inserisci l\'email PayPal';
            errorMessage.classList.remove('d-none');
            return;
        }
    }
    
    // Create biglietto
    await creaBiglietto(codReplica, codCliente, quantita, metodoPagamento);
}

async function creaBiglietto(codReplica, codCliente, quantita, metodoPagamento) {
    try {
        const response = await fetch('http://localhost:8080/api/biglietti/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                replica: { codReplica: codReplica },
                cliente: { codCliente: codCliente },
                tipoPagamento: metodoPagamento === 'carta' ? 'Carta di Credito' : 'PayPal',
                quantita: quantita
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Errore durante l\'acquisto');
        }
        
        const biglietto = await response.json();
        mostraConfermaAcquisto(biglietto, metodoPagamento);
        
    } catch (error) {
        console.error('Error creating biglietto:', error);
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            errorMessage.textContent = error.message || 'Errore durante l\'acquisto del biglietto. Riprova più tardi.';
            errorMessage.classList.remove('d-none');
        }
    }
}

function mostraConfermaAcquisto(biglietto, metodoPagamento) {
    const container = document.getElementById('repliche-container');
    
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="alert alert-success text-center">
                    <h2>✅ Acquisto Completato!</h2>
                    <p class="lead">I tuoi biglietti sono stati acquistati con successo.</p>
                    <hr>
                    <p><strong>Codice Operazione:</strong> ${biglietto.codOperazione}</p>
                    <p><strong>Quantità Biglietti:</strong> ${biglietto.quantita}</p>
                    <p><strong>Metodo di Pagamento:</strong> ${metodoPagamento === 'carta' ? 'Carta di Credito' : 'PayPal'}</p>
                    <p class="mb-4"><strong>Data Acquisto:</strong> ${new Date().toLocaleDateString('it-IT')}</p>
                    <button class="btn btn-primary" onclick="loadPage('home')">
                        Torna alla Home
                    </button>
                    <button class="btn btn-success" onclick="loadPage('prenotazioni')">
                        Vedi Prenotazioni
                    </button>
                </div>
            </div>
        </div>
    `;
}

