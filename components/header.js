class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:  #0a0a23;
        }

        ul {
          padding: 0;
        }

        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }

        li {
         display: inline;
        }
      </style>
      
      <header>
        <nav>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About Me</a></li>
                <li><a href="./gallery.html">Gallery</a></li>
                <li><a href="./expectations.html">What to Expect</a></li>
                <li><a href="./neurodivergent.html">Neurodivergent Services</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);