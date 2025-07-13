// Header Component
class Header {
  constructor() {
    this.currentPage = this.getCurrentPage();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes("contact.html")) return "contact";
    if (path.includes("privacy.html")) return "privacy";
    if (path.includes("terms.html")) return "terms";
    return "home";
  }

  render() {
    return `
      <header>
        <div class="container">
          <nav class="nav">
            <div class="nav-left">
              <a href="index.html">
                <img src="assets/logo.png" alt="Color Aura" class="logo" />
              </a>
            </div>
            <button class="hamburger" id="hamburger-btn" aria-label="Open menu" aria-expanded="false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="nav-right" id="nav-menu">
              <a href="index.html" class="nav-link ${
                this.currentPage === "home" ? "active" : ""
              }">Home</a>
              <a href="contact.html" class="nav-link ${
                this.currentPage === "contact" ? "active" : ""
              }">Contact</a>
              <a href="privacy.html" class="nav-link ${
                this.currentPage === "privacy" ? "active" : ""
              }">Privacy</a>
              <a href="terms.html" class="nav-link ${
                this.currentPage === "terms" ? "active" : ""
              }">Terms</a>
            </div>
          </nav>
        </div>
      </header>
    `;
  }

  mount(container) {
    container.innerHTML = this.render();
    // Hamburger menu logic
    const hamburger = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        hamburger.classList.toggle("open");
        const expanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", !expanded);
      });
    }
  }
}

// Auto-mount header when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    const header = new Header();
    header.mount(headerContainer);
  }
});
