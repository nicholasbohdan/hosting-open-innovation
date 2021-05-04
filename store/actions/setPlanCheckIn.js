export default (dispatch) => ({
  setPlanCheckIn: async (data) => {
    try {
      dispatch({ type: "SET_PLAN_CHECK_IN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
