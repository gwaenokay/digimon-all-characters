class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          background-color: #141E46 !important ; 
          color: #fff;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
          padding: 16px;
          font-size: 40px;
          font-family: 'Pixelify Sans', cursive;
          text-align: center
        }
      </style>
      
      <h2>DIGIMON ALL CHARACTERS INFORMATION</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
