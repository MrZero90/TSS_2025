// Mostra le repliche disponibili per uno spettacolo
async function mostraRepliche(codSpettacolo, titoloSpettacolo, prezzoSpettacolo) {
    try {
        const container = document.getElementById('body-container');
        
        // Mostra loading
        container.innerHTML = `
            <div class="container mt-4">
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Caricamento...</span>
                    </div>
                </div>
            </div>
        `;
        
        // Fetch repliche per questo spettacolo
        const response = await fetch(`http://localhost:8080/api/repliche/${codSpettacolo}`);
        
        if (!response.ok) {
            throw new Error('Errore nel caricamento delle repliche');
        }
        
        const repliche = await response.json();
        
        // Mostra pagina di selezione replica
        container.innerHTML = `
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="card shadow">
                            <div class="card-header bg-primary text-white">
                                <h3 class="mb-0">Seleziona Replica</h3>
                            </div>
                            <div class="card-body">
                                <h4>${titoloSpettacolo}</h4>
                                <p class="text-muted mb-4">Prezzo: €${prezzoSpettacolo.toFixed(2)}</p>
                                
                                <h5 class="mb-3">Repliche Disponibili:</h5>
                                
                                ${repliche.length === 0 ? 
                                    '<div class="alert alert-warning">Nessuna replica disponibile per questo spettacolo.</div>' 
                                    : 
                                    '<div class="list-group">' +
                                    repliche.map(replica => {
                                        const dataReplica = new Date(replica.dataReplica);
                                        const formattedDate = dataReplica.toLocaleDateString('it-IT', {
                                            weekday: 'long',
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric'
                                        });
                                        const formattedTime = dataReplica.toLocaleTimeString('it-IT', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        });
                                        
                                        return `
                                            <button class="list-group-item list-group-item-action" 
                                                    onclick="mostraFormAcquisto('${replica.codReplica}', '${titoloSpettacolo}', ${prezzoSpettacolo}, '${formattedDate} - ${formattedTime}')">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">${formattedDate}</h5>
                                                    <small>Ore ${formattedTime}</small>
                                                </div>
                                            </button>
                                        `;
                                    }).join('') +
                                    '</div>'
                                }
                                
                                <button class="btn btn-secondary mt-3" onclick="loadPage('home')">
                                    Torna alla Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
    } catch (error) {
        console.error('Errore:', error);
        const container = document.getElementById('body-container');
        container.innerHTML = `
            <div class="container mt-4">
                <div class="alert alert-danger">
                    <strong>Errore!</strong> ${error.message}
                    <button class="btn btn-sm btn-outline-danger ms-2" onclick="loadPage('home')">
                        Torna alla Home
                    </button>
                </div>
            </div>
        `;
    }
}

// Mostra il form di acquisto per una replica selezionata
function mostraFormAcquisto(codReplica, titoloSpettacolo, prezzoSpettacolo, dataReplicaFormatted) {
    const container = document.getElementById('body-container');
    
    container.innerHTML = `
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="card shadow">
                        <div class="card-header bg-success text-white">
                            <h3 class="mb-0">Completa Acquisto</h3>
                        </div>
                        <div class="card-body">
                            <h4>${titoloSpettacolo}</h4>
                            <p class="text-muted">
                                <strong>Replica:</strong> ${dataReplicaFormatted}<br>
                                <strong>Prezzo:</strong> €${prezzoSpettacolo.toFixed(2)}
                            </p>
                            
                            <hr>
                            
                            <form id="form-acquisto">
                                <h5 class="mb-3">Seleziona Cliente</h5>
                                
                                <div class="mb-3">
                                    <label for="cliente-select" class="form-label">Cliente *</label>
                                    <select class="form-select" id="cliente-select" required>
                                        <option value="">Caricamento...</option>
                                    </select>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="quantita" class="form-label">Quantità *</label>
                                    <input type="number" class="form-control" id="quantita" min="1" max="10" value="1" required>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="tipo-pagamento" class="form-label">Metodo di Pagamento *</label>
                                    <select class="form-select" id="tipo-pagamento" required>
                                        <option value="">-- Seleziona --</option>
                                        <option value="Carta di Credito">Carta di Credito</option>
                                        <option value="PayPal">PayPal</option>
                                        <option value="Contanti">Contanti</option>
                                    </select>
                                </div>
                                
                                <div class="mb-3">
                                    <div class="card bg-light">
                                        <div class="card-body">
                                            <h5>Totale: <span id="totale">€${prezzoSpettacolo.toFixed(2)}</span></h5>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="d-flex gap-2">
                                    <button type="submit" class="btn btn-success flex-fill">
                                        Conferma Acquisto
                                    </button>
                                    <button type="button" class="btn btn-secondary" onclick="loadPage('home')">
                                        Annulla
                                    </button>
                                </div>
                            </form>
                            
                            <div id="risultato-acquisto" class="mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Carica clienti nel dropdown
    loadClientiSelect();
    
    // Aggiorna totale quando cambia quantità
    const quantitaInput = document.getElementById('quantita');
    const totaleSpan = document.getElementById('totale');
    
    quantitaInput.addEventListener('input', () => {
        const quantita = parseInt(quantitaInput.value) || 1;
        const totale = prezzoSpettacolo * quantita;
        totaleSpan.textContent = `€${totale.toFixed(2)}`;
    });
    
    // Gestisci invio form
    const form = document.getElementById('form-acquisto');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inviaAcquisto(codReplica);
    });
}

// Funzione per caricare clienti nel dropdown
async function loadClientiSelect() {
    try {
        const response = await fetch('http://localhost:8080/api/clienti');
        if (!response.ok) throw new Error('Errore caricamento clienti');
        
        const clienti = await response.json();
        const select = document.getElementById('cliente-select');
        
        select.innerHTML = '<option value="">-- Seleziona un cliente --</option>' +
            clienti.map(c => `
                <option value="${c.codCliente}">
                    ${c.nome} ${c.cognome} - ${c.email}
                </option>
            `).join('');
            
    } catch (error) {
        console.error('Errore:', error);
        document.getElementById('cliente-select').innerHTML = 
            '<option value="">Errore caricamento clienti</option>';
    }
}



// Invia l'acquisto al backend
async function inviaAcquisto(codReplica) {
    try {
        const codCliente = parseInt(document.getElementById('cliente-select').value);
        const quantita = parseInt(document.getElementById('quantita').value);
        const tipoPagamento = document.getElementById('tipo-pagamento').value;
        
        if (!codCliente) {
            throw new Error('Seleziona un cliente');
        }
        
        // Recupera i dati del cliente selezionato dal dropdown
        const clienteSelect = document.getElementById('cliente-select');
        const clienteNomeCompleto = clienteSelect.options[clienteSelect.selectedIndex].text;
        
        // Crea oggetto biglietto SENZA cod_operazione (lo genera il backend)
        const biglietto = {
            cliente: {
                codCliente: codCliente
            },
            replica: {
                codReplica: codReplica
            },
            data_ora: new Date().toISOString(),
            tipoPagamento: tipoPagamento,
            quantita: quantita
        };
        
        console.log('Invio biglietto:', JSON.stringify(biglietto, null, 2));
        
        // Invia al backend
        const response = await fetch('http://localhost:8080/api/biglietti/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(biglietto)
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Errore dal server:', errorText);
            throw new Error('Errore durante l\'acquisto');
        }
        
        // Recupera il biglietto salvato (con l'ID generato dal backend)
        const bigliettoSalvato = await response.json();
        
        // Mostra successo
        const risultato = document.getElementById('risultato-acquisto');
        risultato.innerHTML = `
            <div class="alert alert-success">
                <h5>✓ Acquisto completato con successo!</h5>
                <p>Codice operazione: <strong>${bigliettoSalvato.cod_operazione}</strong></p>
                <p>Cliente: <strong>${clienteNomeCompleto}</strong></p>
                <button class="btn btn-primary mt-2" onclick="loadPage('prenotazioni')">
                    Vedi le tue prenotazioni
                </button>
            </div>
        `;
        
        // Disabilita form
        document.getElementById('form-acquisto').querySelectorAll('input, select, button').forEach(el => {
            el.disabled = true;
        });
        
    } catch (error) {
        console.error('Errore:', error);
        const risultato = document.getElementById('risultato-acquisto');
        risultato.innerHTML = `
            <div class="alert alert-danger">
                <strong>Errore!</strong> ${error.message}
            </div>
        `;
    }
}
