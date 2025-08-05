// Footer Component
class Footer {
  render() {
    return `
      <footer>
        <div class="container">
          <div class="footer-content">
            <p>Grundbulten 144568 AB| Organisational Number: 559536-6823 | D-U-N-S® Number: 351516756 </p>
            <p>&copy; 2024 Color Aura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }

  mount(container) {
    container.innerHTML = this.render();
  }
}

// Auto-mount footer when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    const footer = new Footer();
    footer.mount(footerContainer);
  }
});
