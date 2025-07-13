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
            <div class="nav-right">
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
