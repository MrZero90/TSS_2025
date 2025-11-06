async function loadSpettacoli() {
    try {
        const container = document.getElementById('shows-container');
        
        if (!container) {
            console.error('shows-container not found');
            return;
        }
        
        container.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
        
        const response = await fetch('http://localhost:8080/api/spettacoli');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const spettacoli = await response.json();
        container.innerHTML = '';
        
        if (spettacoli.length === 0) {
            container.innerHTML = '<div class="alert alert-info">Nessuno spettacolo disponibile.</div>';
            return;
        }
        
        const row = document.createElement('div');
        row.className = 'row';
        
        spettacoli.forEach(spettacolo => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${spettacolo.titolo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${spettacolo.autore}</h6>
                        <p class="card-text">
                            <strong>Regista:</strong> ${spettacolo.regista}<br>
                            <strong>Prezzo:</strong> €${spettacolo.prezzo.toFixed(2)}
                        </p>
                    </div>
                </div>
            `;
            
            row.appendChild(col);
        });
        
        container.appendChild(row);
        
    } catch (error) {
        console.error('Error loading spettacoli:', error);
        const container = document.getElementById('shows-container');
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <strong>Errore!</strong> Impossibile caricare gli spettacoli. 
                    <button class="btn btn-sm btn-outline-danger ms-2" onclick="loadSpettacoli()">Riprova</button>
                </div>
            `;
        }
    }
}
