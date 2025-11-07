// Fetch and display all theaters
// async function loadTeatri() {
//     try {
//         // Show loading indicator
//         const container = document.getElementById('body-container');
//         container.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
        
//         // Fetch theaters from API
//         const response = await fetch('http://localhost:8080/api/teatri'); // Adjust endpoint to match your API
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const teatri = await response.json();
        
//         // Clear container
//         container.innerHTML = '';
        
//         // Check if there are theaters
//         if (teatri.length === 0) {
//             container.innerHTML = '<div class="alert alert-info">Nessun teatro disponibile.</div>';
//             return;
//         }
        
//         // Create Bootstrap row
//         const row = document.createElement('div');
//         row.className = 'row';
        
//         // Create card for each theater
//         teatri.forEach(teatro => {
//             const col = document.createElement('div');
//             col.className = 'col-md-4 mb-4';
            
//             col.innerHTML = `
//                 <div class="card h-100 shadow-sm">
//                     <div class="card-body">
//                         <h5 class="card-title">${teatro.nome}</h5>
//                         <p class="card-text">
//                             <strong>Codice:</strong> ${teatro.codTeatro}<br>
//                             <strong>Capienza:</strong> ${teatro.posti} posti
//                         </p>
//                     </div>
//                     <div class="card-footer bg-transparent">
//                         <button class="btn btn-primary btn-sm" onclick="viewTeatroDetails('${teatro.codTeatro}')">
//                             Dettagli
//                         </button>
//                     </div>
//                 </div>
//             `;
            
//             row.appendChild(col);
//         });
        
//         container.appendChild(row);
        
//     } catch (error) {
//         console.error('Error loading teatri:', error);
//         const container = document.getElementById('theaters-container');
//         container.innerHTML = `
//             <div class="alert alert-danger" role="alert">
//                 <strong>Errore!</strong> Impossibile caricare i teatri. 
//                 <button class="btn btn-sm btn-outline-danger ms-2" onclick="loadTeatri()">Riprova</button>
//             </div>
//         `;
//     }
// }

// // View theater details (optional - can expand later)
// function viewTeatroDetails(codTeatro) {
//     // You can implement a modal or redirect to a details page
//     alert(`Dettagli per teatro: ${codTeatro}`);
//     // Or fetch specific theater details:
//     // window.location.href = `teatro-details.html?id=${codTeatro}`;
// }

// // Load theaters when page loads
// document.addEventListener('DOMContentLoaded', loadTeatri);


// Fetch and display all theaters
async function loadTeatri() {
    try {
        const container = document.getElementById('theaters-container');
        
        if (!container) {
            console.error('theaters-container not found');
            return;
        }
        
        container.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
        
        const response = await fetch('http://localhost:8080/api/teatri');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const teatri = await response.json();
        container.innerHTML = '';
        
        if (teatri.length === 0) {
            container.innerHTML = '<div class="alert alert-info">Nessun teatro disponibile.</div>';
            return;
        }
        
        const row = document.createElement('div');
        row.className = 'row';
        
        teatri.forEach(teatro => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${teatro.nome}</h5>
                        <p class="card-text">
                            <strong>Codice:</strong> ${teatro.codTeatro}<br>
                            <strong>Capienza:</strong> ${teatro.posti} posti
                        </p>
                    </div>
                </div>
            `;
            
            row.appendChild(col);
        });
        
        container.appendChild(row);
        
    } catch (error) {
        console.error('Error loading teatri:', error);
        const container = document.getElementById('theaters-container');
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <strong>Errore!</strong> Impossibile caricare i teatri. 
                    <button class="btn btn-sm btn-outline-danger ms-2" onclick="loadTeatri()">Riprova</button>
                </div>
            `;
        }
    }
}

// DON'T auto-load on DOMContentLoaded - let router.js handle it
// Remove or comment out this line:
// document.addEventListener('DOMContentLoaded', loadTeatri);
