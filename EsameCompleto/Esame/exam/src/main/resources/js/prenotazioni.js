
async function loadPrenotazioni() {
    try {
        const container = document.getElementById('bookings-container');
        
        if (!container) {
            console.error('bookings-container not found');
            return;
        }
        const response = await fetch('http://localhost:8080/api/biglietti');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const prenotazioni = await response.json();
        container.innerHTML = '';
        
        if (prenotazioni.length === 0) {
            container.innerHTML = '<div class="alert alert-info">Nessuna prenotazione disponibile.</div>';
            return;
        }
        
        const table = `
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Codice</th>
                            <th>Cliente</th>
                            <th>Spettacolo</th>
                            <th>Quantità</th>
                            <th>Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${prenotazioni.map(p => `
                            <tr>
                                <td>${p.codOperazione}</td>
                                <td>${p.cliente.nome} ${p.cliente.cognome}</td>
                                <td>${p.replica.spettacolo.titolo}</td>
                                <td>${p.quantita}</td>
                                <td>${p.tipoPagamento}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        container.innerHTML = table;
        
    } catch (error) {
        console.error('Error loading prenotazioni:', error);
        const container = document.getElementById('bookings-container');
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <strong>Errore!</strong> Impossibile caricare le prenotazioni. 
                    <button class="btn btn-sm btn-outline-danger ms-2" onclick="loadPrenotazioni()">Riprova</button>
                </div>
            `;
        }
    }
}
