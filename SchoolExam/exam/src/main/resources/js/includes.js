// Function to include HTML files
async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    
    for (const element of elements) {
        const file = element.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                element.innerHTML = html;
            } else {
                console.error(`Error loading ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error loading ${file}:`, error);
        }
    }
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', includeHTML);
