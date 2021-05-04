export default (dispatch) => ({
  setDefaultVisitPlan: async () => {
    try {
      dispatch({ type: "SET_DEFAULT_VISIT_PLAN" });
    } catch (e) {
      console.log(e);
    }
  },
});
