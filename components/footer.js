class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
          background: radial-gradient(circle, #34623F, #FFBD00);
          font-size: 13px;
        }
      </style>
      
      <footer>
        <p>Tip to Tails Tailoring</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Header);