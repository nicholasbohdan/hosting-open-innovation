export default (dispatch) => ({
  setMenu: async (data) => {
    try {
      dispatch({ type: "SET_MENU", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
