export default (dispatch) => ({
  keepState: async (data) => {
    try {
      dispatch({ type: "KEEP_STATE", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
