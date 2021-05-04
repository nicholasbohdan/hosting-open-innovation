const defaultVisitPlan = {
  visibility: [],
  avability: [],
  catatan: "",
  checkIn: "",
};

const visitPlanReducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAN_VISIBILITY":
      return { ...state, visibility: action.payload };
    case "SET_PLAN_AVABILITY":
      return { ...state, avability: action.payload };
    case "SET_PLAN_CATATAN":
      return { ...state, catatan: action.payload };
    case "SET_PLAN_CHECK_IN":
      return { ...state, checkIn: action.payload };
    case "SET_DEFAULT_VISIT_PLAN":
      return { ...defaultVisitPlan };
    default:
      return state;
  }
};

export { visitPlanReducer, defaultVisitPlan };
