export default (dispatch) => ({
  setPlanCatatan: async (data) => {
    try {
      dispatch({ type: "SET_PLAN_CATATAN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
