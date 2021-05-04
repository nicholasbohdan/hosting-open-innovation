import React, { createContext, useReducer, useMemo } from "react";

import { userReducer, defaultUser } from "./reducers/user";
import { menuReducer, defaultMenu } from "./reducers/menu";
import { visitPlanReducer, defaultVisitPlan } from "./reducers/visitPlan";

import userLogin from "./actions/userLogin";
import setMenu from "./actions/setMenu";
import keepState from "./actions/keepState";
import setPlanVisibility from "./actions/setPlanVisibility";
import setPlanAvability from "./actions/setPlanAvability";
import setPlanCatatan from "./actions/setPlanCatatan";
import setPlanCheckIn from "./actions/setPlanCheckIn";
import setDefaultVisitPlan from "./actions/setDefaultVisitPlan";

const Stores = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      return {
        userReducer: userReducer(prevState.userReducer, action),
        menuReducer: menuReducer(prevState.menuReducer, action),
        visitPlanReducer: visitPlanReducer(prevState.visitPlanReducer, action),
      };
    },
    {
      userReducer: defaultUser,
      menuReducer: defaultMenu,
      visitPlanReducer: defaultVisitPlan,
    }
  );

  const actions = useMemo(
    () => ({
      ...userLogin(dispatch),
      ...setMenu(dispatch),
      ...keepState(dispatch),
      ...setPlanVisibility(dispatch),
      ...setPlanAvability(dispatch),
      ...setPlanCatatan(dispatch),
      ...setPlanCheckIn(dispatch),
      ...setDefaultVisitPlan(dispatch),
    }),
    []
  );

  return (
    <Stores.Provider value={{ state, dispatch, actions }}>
      {children}
    </Stores.Provider>
  );
};

export { Stores, Store };
