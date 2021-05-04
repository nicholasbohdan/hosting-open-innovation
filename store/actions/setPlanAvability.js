export default (dispatch) => ({
  setPlanAvability: async (data) => {
    try {
      dispatch({ type: "SET_PLAN_AVABILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
