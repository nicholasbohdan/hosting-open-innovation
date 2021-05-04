const defaultMenu = {
  menu: [],
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      localStorage.setItem("menu", JSON.stringify(action.payload));
      return { ...state, menu: action.payload };
    case "KEEP_STATE":
      const userMenu = JSON.parse(localStorage.getItem("menu"));
      return { ...state, menu: userMenu };
    default:
      return state;
  }
};

export { menuReducer, defaultMenu };
