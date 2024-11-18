class CharacterItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set character(character) {
    this._character = character;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .image-character {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .character-info {
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          width: 25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-block: 10px;
          background-color: #FFF !important;
          border: solid #141E46 5px;
        }
        .character-info > h2 {
          font-weight: bold;
          font-family: 'Montserrat', sans-serif;

        }
        .character-info > p {
          font-family: 'Young Serif', serif;
          font-weight: bold;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
     
      <div class="character-info">
      <img class="image-character" src="${this._character.img}" alt="Character Image">
        <h2>${this._character.name}</h2>
        <p>${this._character.level}</p>
      </div>
    `;
  }
}

customElements.define('character-item', CharacterItem);
