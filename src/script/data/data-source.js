class DataSource {
  static searchCharacters() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://digimon-api.vercel.app/api/digimon");
      xhr.onload = () => {
        if (xhr.status === 200) {
          const responseJson = JSON.parse(xhr.responseText);
          resolve(responseJson);
        } else {
          reject("Data not found");
        }
      };
      xhr.onerror = () => {
        reject("Request failed");
      };
      xhr.send();
    });
  }

  static searchCharacter(keyword) {
    if (keyword !== "") {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://digimon-api.vercel.app/api/digimon/name/${keyword}`);
        xhr.onload = () => {
          if (xhr.status === 200) {
            const responseJson = JSON.parse(xhr.responseText);
            resolve(responseJson);
          } else {
            reject("Data not found");
          }
        };
        xhr.onerror = () => {
          reject("Request failed");
        };
        xhr.send();
      });
    } else {
      return this.searchCharacters();
    }
  }
}

export default DataSource;