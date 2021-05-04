import {
  API_URL,
  API_BANNER,
  API_MENU,
  API_MENUWITHSUBMENUS,
  API_SUBMENU,
  API_KATEGORISWITHSUBKATEGORIS,
  API_KATEGORIS,
  API_SUBKATEGORIS,
  API_TOPIKS,
  API_SUBTOPIKS,
  API_TOPIKSWITHSUBTOPIKS,
  API_TAGS,
  // TOKEN,
} from "./constant";

// var now = new Date();
// var date = now.getDate();
// var month = now.getMonth() + 1;
// var year = now.getFullYear();

const getBanner = () => {
  return fetch(
    API_URL + API_BANNER,
    {
      headers: {
        // apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMenu = () => {
  return fetch(
    API_URL + API_MENU,
    {
      headers: {
        // apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getMenu,
  getBanner,
};
