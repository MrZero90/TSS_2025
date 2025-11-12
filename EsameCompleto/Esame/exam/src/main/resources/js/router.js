function loadPage(pageName) {
    const container = document.getElementById('body-container');

    // Clear current content
    container.innerHTML = '';

    // Load appropriate page content
    switch (pageName) {
        case 'home':
            loadHomePage();
            break;
        case 'login':
            loadLoginPage()
            break;
        case 'repliche':
            loadReplichePage();
            break;
        case 'prenotazioni':
            loadPrenotazioniPage();
            break;
        default:
            loadHomePage();
    }
}

function loadHomePage() {
    const container = document.getElementById('body-container');
    container.innerHTML = `
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1>Spettacoli Disponibili</h1>
            </div>
            <div id="shows-container">
                <!-- Show cards will be inserted here -->
            </div>
        </div>
    `;
    // Execute spettacoli.js logic
    if (typeof loadSpettacoli === 'function') {
        loadSpettacoli();
    }
}

function loadLoginPage() {
    const container = document.getElementById('body-container');
    container.innerHTML = `
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1>Login</h1>
            </div>
            <div id="login-container">
                <!-- Login form will be inserted here -->
            </div>
        </div>
    `;
    if (typeof loadLogin === 'function') {
        loadLogin();
    }

}

function loadReplichePage(codSpettacolo, titoloSpettacolo, prezzo) {
    const container = document.getElementById('body-container');
    container.innerHTML = `
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Seleziona Data</h1>
                    <p class="text-muted mb-0">Spettacolo: <strong>${titoloSpettacolo || 'N/A'}</strong></p>
                    <p class="text-muted">Prezzo: <strong>€${prezzo ? prezzo.toFixed(2) : '0.00'}</strong></p>
                </div>
                <button class="btn btn-secondary" onclick="loadPage('home')">
                    Torna agli Spettacoli
                </button>
            </div>
            <div id="repliche-container">
                <!-- Repliche cards will be inserted here -->
            </div>
        </div>
    `;
    // Execute repliche.js logic
    if (typeof loadRepliche === 'function') {
        loadRepliche(codSpettacolo, titoloSpettacolo, prezzo);
    }
}

function loadPrenotazioniPage() {
    const container = document.getElementById('body-container');
    container.innerHTML = `
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1>Prenotazioni</h1>
                <button class="btn btn-success" onclick="loadPrenotazioni()">
                    Aggiorna
                </button>
            </div>
            <div id="bookings-container">
                <!-- Bookings will be inserted here -->
            </div>
        </div>
    `;

    // Execute prenotazioni.js logic
    if (typeof loadPrenotazioni === 'function') {
        loadPrenotazioni();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Wait for navbar to load, then load home page
    setTimeout(() => {
        loadPage('home');
    }, 200);
});