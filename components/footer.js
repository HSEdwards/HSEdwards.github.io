class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          height: 100%;
          width: 100%;
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

customElements.define('footer-component', Footer);