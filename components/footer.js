class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      </style>
      
      <footer>
        <p>Tip to Tails Tailoring</p>
      </footer>
    `;
  }
}

customElements.define('header-component', Header);