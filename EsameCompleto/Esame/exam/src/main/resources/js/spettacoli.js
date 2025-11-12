async function loadSpettacoli() {
    const container = document.getElementById('shows-container');
    
    try {
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
            const image = `../static/${spettacolo.titolo}.jpg`;
            
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <!-- Immagine in cima alla card -->
                    <img src="${image}" 
                         class="card-img-top" 
                         alt="${spettacolo.titolo}"
                         style="height: 300px; object-fit: cover;"
                         onerror="this.src='../static/placeholder.jpg'">
                    
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${spettacolo.titolo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${spettacolo.autore}</h6>
                        <p class="card-text">
                            <strong>Regista:</strong> ${spettacolo.regista}<br>
                            <strong>Prezzo:</strong> €${spettacolo.prezzo.toFixed(2)}<br>
                            <strong>Teatro:</strong> ${spettacolo.teatro ? spettacolo.teatro.nome : 'N/A'}
                        </p>
                        <button class="btn btn-primary mt-auto" onclick="mostraRepliche('${spettacolo.codSpettacolo}', '${spettacolo.titolo}', ${spettacolo.prezzo})">
                            Acquista Biglietto
                        </button>
                    </div>
                </div>
            `;
            
            row.appendChild(col);
        });
        
        container.appendChild(row);
        
    } catch (error) {
        console.error('Error loading spettacoli:', error);
        container.innerHTML = '<div class="alert alert-danger">Errore nel caricamento degli spettacoli.</div>';
    }
}

function mostraRepliche(codSpettacolo, titoloSpettacolo, prezzo) {
    loadReplichePage(codSpettacolo, titoloSpettacolo, prezzo);
}
