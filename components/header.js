class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>@import url("https://fonts.googleapis.com/css?family=Lato");
* {
  box-sizing: border-box;
}
html,
body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  min-height: 100vh;
  padding: 0;
}
html:before,
body:before {
  background: linear-gradient(35deg, #34623F, #1DD3B0);
  bottom: 0;
  content: '';
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
}
svg {
  cursor: pointer;
  height: 44px;
  width: 44px;
}
svg path {
  fill: #fff;
}
ol {
  list-style-type: none;
}
a[href] {
  color: #fff;
  position: relative;
  text-decoration: none;
}
a[href]:hover:after {
  transform: scaleX(1);
}
a[href]:after {
  content: '';
  position: absolute;
  top: 100%;
  height: 4px;
  background: #fff;
  left: 0;
  right: 0;
  transition: transform 0.15s;
  transform-origin: left;
  transform: scaleX(0);
}
.menu {
  position: relative;
  width: 250px;
}
.menu__content {
  color: #fff;
  margin: 0;
  padding: 0 0 25px 0;
  position: absolute;
  right: 100%;
  top: 0;
  width: 250px;
  z-index: 2;
}
.menu__toggle-label {
  height: 44px;
  left: 0;
  position: absolute;
  width: 44px;
}
.menu__toggle-label svg {
  left: 0;
  position: absolute;
  top: 0;
  transition: transform 0.15s;
  z-index: 2;
}
.menu__toggle-label svg:nth-of-type(2) {
  left: 250px;
  transform: scale(0);
}
.menu__toggle {
  opacity: 0;
  position: fixed;
}
.menu__toggle:checked ~ .menu__toggle-label {
  background: rgba(0,0,0,0.65);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: background 0.15s;
  width: 100vw;
}
.menu__toggle:checked ~ .menu__toggle-label svg:nth-of-type(1) {
  transform: scale(0);
}
.menu__toggle:checked ~ .menu__toggle-label svg:nth-of-type(2) {
  left: 250px;
  transform: scale(1);
  transition: transform 0.15s;
  transition-delay: 0.925s;
}
.menu__toggle:checked ~ .menu__content {
  transform: translate(100%, 0);
}
.menu__toggle:checked ~ .menu__content .menu-item {
  transform: translateX(0);
  transition: transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.15s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(1) {
  border-color: #1E2F23;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(1) a[href]:after {
  background: #34623F;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(2) {
  border-color: #607744;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(2) a[href]:after {
  background: #1DD3B0;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(3) {
  border-color: #FFBD00;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(3) a[href]:after {
  background: #1DD3B0;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(4) {
  border-color: #607744;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(4) a[href]:after {
  background: #34623F;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(5) {
  border-color: #1E2F23;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(5) a[href]:after {
  background: #FFBD00;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(1) {
  transition-delay: 0.225s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(2) {
  transition-delay: 0.275s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(3) {
  transition-delay: 0.325s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(3) .menu-item:nth-of-type(1) {
  transition-delay: 0.375s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(3) .menu-item:nth-of-type(2) {
  transition-delay: 0.425s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(3) .menu-item:nth-of-type(3) {
  transition-delay: 0.475s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(4) {
  transition-delay: 0.525s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(4) .menu-item:nth-of-type(1) {
  transition-delay: 0.575s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(4) .menu-item:nth-of-type(2) {
  transition-delay: 0.625s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(4) .menu-item:nth-of-type(3) {
  transition-delay: 0.675s, 0.875s;
}
.menu__toggle:checked ~ .menu__content .menu-item:nth-of-type(5) {
  transition-delay: 0.725s, 0.875s;
}
.menu__content > .menu-item {
  border-left: 8px solid transparent;
}
.menu__content > .menu-item > a {
  line-height: 44px;
  min-width: 60px;
}
.sub-menu {
  padding: 0 0 0 44px;
}
.menu-item {
  line-height: 44px;
  min-height: 44px;
  padding: 0 12px;
  transform: translateX(-100%);
}
.menu-item .menu-item {
  transform: translateX(-150%);
}

      </style>

      <nav class="menu">
  <input id ="menu__toggle" type="checkbox" class='menu__toggle'/>
  <label for="menu__toggle" class="menu__toggle-label">
    <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
      <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
    </svg>
    <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </label>
  <ol class='menu__content'>
    <li class="menu-item"><a href="./index.html">Home</a></li>
    <li class="menu-item"><a href="./about.html">About</a></li>
    <li class="menu-item"><a href="./gallery.html">Gallery</a></li>
    <li class="menu-item"><a href="./expectations.html">What to Expect</a></li>
    <li class="menu-item"><a href="./neurodivergent.html">Neurodivergent Services</a></li>
    <li class="menu-item"><a href="./contact.html">Contact</a></li>
    <li class="menu-item">
      <a href="#0">Widgets</a>
      <ol class="sub-menu">
        <li class="menu-item"><a href="#0">Big Widgets</a></li>
        <li class="menu-item"><a href="#0">Bigger Widgets</a></li>
        <li class="menu-item"><a href="#0">Huge Widgets</a></li>
      </ol>
    </li>
    <li class="menu-item">
      <a href="#0">Kabobs</a>
      <ol class="sub-menu">
        <li class="menu-item"><a href="#0">Shishkabobs</a></li>
        <li class="menu-item"><a href="#0">BBQ kabobs</a></li>
        <li class="menu-item"><a href="#0">Summer kabobs</a></li>
      </ol>
    </li>
    <li class="menu-item"><a href="#0">Contact</a></li>
  </ol>
</nav>
    `;
  }
}

customElements.define('header-component', Header);