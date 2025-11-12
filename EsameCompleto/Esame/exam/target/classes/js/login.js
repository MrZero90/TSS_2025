function loadLogin() {
    const container = document.getElementById('login-container');
    
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Accedi al Sistema</h3>
                        
                        <form id="loginForm" onsubmit="handleLogin(event)">
                            <div class="mb-3">
                                <label for="codiceCliente" class="form-label">Codice Cliente</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="codiceCliente" 
                                    placeholder="Inserisci il tuo codice cliente"
                                    required
                                    min="1"
                                >
                                <div class="form-text">Inserisci il tuo numero identificativo (es. 1, 2, 3...)</div>
                            </div>
                            
                            <div id="errorMessage" class="alert alert-danger d-none" role="alert"></div>
                            
                            <button type="submit" class="btn btn-success w-100">
                                Accedi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

async function handleLogin(event) {
    event.preventDefault();
    
    const codiceCliente = document.getElementById('codiceCliente').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Hide previous error messages
    errorMessage.classList.add('d-none');
    
    try {
        // Call backend API to get cliente info
        const response = await fetch(`http://localhost:8080/api/clienti/${codiceCliente}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Codice cliente non trovato');
            }
            throw new Error(`Errore durante il login: ${response.status}`);
        }
        
        const cliente = await response.json();
        
        // Save user session
        sessionStorage.setItem('loggedUser', JSON.stringify(cliente));
        
        // Update navbar
        updateNavbar();
        
        setTimeout(() => {
            loadPage('home');
        }, 300);
        
    } catch (error) {
        console.error('Login error:', error);
        errorMessage.textContent = error.message || 'Errore durante il login. Riprova.';
        errorMessage.classList.remove('d-none');
    }
}

function updateNavbar() {
    const user = sessionStorage.getItem('loggedUser');
    const loginBtn = document.getElementById('loginBtn');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (user) {
        // User is logged in
        const userData = JSON.parse(user);
        if (loginBtn) loginBtn.style.display = 'none';
        if (userInfo) userInfo.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (userName) userName.textContent = `${userData.nome} ${userData.cognome}`;
    } else {
        // User is not logged in
        if (loginBtn) loginBtn.style.display = 'block';
        if (userInfo) userInfo.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('loggedUser');
    updateNavbar();
    loadPage('home');
}

document.addEventListener('DOMContentLoaded', () => {
    // Wait for navbar to be included
    setTimeout(updateNavbar, 300);
});