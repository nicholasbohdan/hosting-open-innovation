const initialState = {
  staffList: null,
  outletList: null,
  outletListById: null,
  projectModuleAccess: null,
  role: null,
  userDetails: null,
};


const ManageUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_STAFF_LIST_INFORMATION': {
      return {
        ...state,
        staffList: action.value,
      };
    }
    case 'ADD_MANAGE_STAFF': {
      return {
        ...state,
        staffList: [
          ...state.staffList,
          action.value,
        ],
      };
    }
    case 'UPDATE_STAFF_INFORMATION': {
      const { value } = action;
      delete value.outlet_id;
      const result = state.staffList.map((item) => {
        if (item.id !== action.id) {
          return item;
        }
        return {
          ...item,
          ...action.value,
        };
      });
      return {
        ...state,
        staffList: result,
      };
    }
    case 'STAFF_DETAIL_INFORMATION': {
      return {
        ...state,
        userDetails: action.value,
      };
    }

    case 'SET_STAFF_BY_ID': {
      const findStaff = state.staffList.filter(item => item.id === action.id);
      return {
        ...state,
        staffById: findStaff[findStaff.length - 1],
      };
    }
    case 'UPDATE_OUTLET_DATA': {
      return {
        ...state,
        outletListById: action.value,
      };
    }

    case 'GET_ALL_OUTLET_LIST': {
      return {
        ...state,
        outletList: action.value,
      };
    }

    default:
      return state;
  }
};


export default ManageUserReducer;
