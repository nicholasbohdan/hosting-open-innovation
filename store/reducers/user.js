const defaultUser = {
  user: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case "USER_LOGOUT":
      localStorage.clear();
      return { ...state, user: action.payload };
    case "KEEP_STATE":
      const userData = JSON.parse(localStorage.getItem("user"));
      return { ...state, user: userData };

    default:
      return state;
  }
};

export { userReducer, defaultUser };
