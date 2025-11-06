// Page loader/router
function loadPage(pageName) {
    const container = document.getElementById('body-container');
    
    // Clear current content
    container.innerHTML = '';
    
    // Load appropriate page content
    switch(pageName) {
        case 'home':
            loadHomePage();
            break;
        case 'teatri':
            loadTeatriPage();
            break;
        case 'spettacoli':
            loadSpettacoliPage();
            break;
        case 'prenotazioni':
            loadPrenotazioniPage();
            break;
        default:
            loadHomePage();
    }
    
    // Update active button in navbar
    updateActiveNav(pageName);
}

// Load home page
function loadHomePage() {
    const container = document.getElementById('body-container');
    container.innerHTML = `
        <div class="container mt-4">
            <h1>Benvenuto a Che Opera!</h1>
            <p class="lead">Il tuo sistema di prenotazione teatrale</p>
            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Teatri</h5>
                            <p class="card-text">Scopri i nostri teatri</p>
                            <button class="btn btn-primary" onclick="loadPage('teatri')">Vai ai Teatri</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Spettacoli</h5>
                            <p class="card-text">Vedi tutti gli spettacoli</p>
                            <button class="btn btn-primary" onclick="loadPage('spettacoli')">Vai agli Spettacoli</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Prenotazioni</h5>
                            <p class="card-text">Gestisci le prenotazioni</p>
                            <button class="btn btn-primary" onclick="loadPage('prenotazioni')">Vai alle Prenotazioni</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load teatri page and execute teatri.js logic
function loadTeatriPage() {
    const container = document.getElementById('body-container');
    container.innerHTML = `
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1>I Nostri Teatri</h1>
                <button class="btn btn-success" onclick="loadTeatri()">
                    Aggiorna
                </button>
            </div>
            <div id="theaters-container">
                <!-- Theater cards will be inserted here -->
            </div>
        </div>
    `;
    
    // Execute teatri.js logic
    if (typeof loadTeatri === 'function') {
        loadTeatri();
    }
}

// Load spettacoli page
function loadSpettacoliPage() {
    const container = document.getElementById('body-container');
    container.innerHTML = `
        <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1>Spettacoli Disponibili</h1>
                <button class="btn btn-success" onclick="loadSpettacoli()">
                    Aggiorna
                </button>
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

// Load prenotazioni page
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

// Update active button in navbar
function updateActiveNav(pageName) {
    // This will run after navbar is loaded
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.navbar .btn');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page button
        const activeLink = Array.from(navLinks).find(link => 
            link.textContent.toLowerCase().includes(pageName)
        );
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }, 100);
}

// Load home page on initial load
document.addEventListener('DOMContentLoaded', () => {
    // Wait for navbar to load, then load home page
    setTimeout(() => {
        loadPage('home');
    }, 200);
});
