// Page loader/router
function loadPage(pageName) {
    const container = document.getElementById('body-container');

    // Clear current content
    container.innerHTML = '';

    // Load appropriate page content
    switch (pageName) {
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
        case 'acquista':
            // Initial load, actual content loaded by openAcquistaPage
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

function openAcquistaPage(codSpettacolo) {
    loadPage('acquista');
    // Pass the show code to the purchase page
    setTimeout(() => {
        if (typeof loadAcquistaPage === 'function') {
            loadAcquistaPage(codSpettacolo);
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
