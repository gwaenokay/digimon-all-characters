import '../component/character-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const characterListElement = document.querySelector('character-list');
  
  const onButtonSearchClicked = () => {
    searching(searchElement.value);
  };

  const searching = async (keyword) => {
    try {
      const result = await DataSource.searchCharacter(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const searchingCharacters = async () => {
    try {
      const result = await DataSource.searchCharacters();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  searchingCharacters();

 

  const renderResult = results => {
    characterListElement.characters = results;
  };

  const fallbackResult = message => {
    characterListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
