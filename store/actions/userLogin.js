export default (dispatch) => ({
  userLogin: async (data) => {
    try {
      dispatch({ type: "USER_LOGIN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
