export default (dispatch) => ({
  setPlanVisibility: async (data) => {
    try {
      dispatch({ type: "SET_PLAN_VISIBILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
