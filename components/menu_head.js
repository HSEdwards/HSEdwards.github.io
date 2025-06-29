class menu_head extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
          background:  #34623F;
          font-size: 13px;
        }
      </style>
      
      <header id="header">
            <nav class="nav">
                <button class="toggle-menu">
                <span></span>
                </button>
            </nav>
        </header>

        <div id="menu" class="">
            <nav class="main-nav">
                <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Portfolio</a></li>
                <li><a href="neurodivergent.html">Accomidations</a></li>
                <li><a href="expectations.html">What to Expect</a></li>
                </ul>
            </nav>
        </div>
    `;
  }
}

customElements.define('menu-component', menu_head);