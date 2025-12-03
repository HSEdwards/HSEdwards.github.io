class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          height: 100%;
          width: 100%;
          background: radial-gradient(circle, #073712; #d19a1a;);
          font-size: 13px;
        }
      </style>
      
      <header>
        <nav>
            <a href="index.html">Home</a>
            <a href="gallery.html">Portfolio</a>
            <a href="about.html">About</a></li>            
            <a href="neurodivergent.html">Accomidations</a>
            <a href="expectations.html">Expectations</a>           
            <a href="contact.html">Contact</a></li>
            <div id="indicator"></div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

