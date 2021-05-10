import { CreateMessage } from '@pmberjaya/mainsnackbar';
import MainSnackBarMessage from '@pmberjaya/mainsnackbar/build/redux/actions/MainSnackBarMessage';
import {
  getFetch, postFetch, putFetch,
} from '@pmberjaya/api-request';

export const initStaffListInformation = value => ({
  type: 'INIT_STAFF_LIST_INFORMATION',
  value,
});
export const updateStaffInformation = (value, id) => ({
  type: 'UPDATE_STAFF_INFORMATION',
  value,
  id,
});
export const addStaffInformation = value => ({
  type: 'ADD_MANAGE_STAFF',
  value,
});

export const clearUserReducers = value => ({
  type: 'CLEAR_USER_REDUCERS',
  value,
});


export const clearOutletByIdReducers = value => ({
  type: 'CLEAR_OUTLET_BY_ID_REDUCERS',
  value,
});


export const initPermissionStaffListInformation = value => ({
  type: 'STAFF_DETAIL_INFORMATION',
  value,
});

export const updateOutletInformation = value => ({
  type: 'UPDATE_OUTLET_DATA',
  value,
});


export const getAllOutletList = value => ({
  type: 'GET_ALL_OUTLET_LIST',
  value,
});

export function getStaffList(projectId) {
  return (dispatch) => {
    getFetch(`api/user/${projectId}/staff`)
      .then((response) => {
        if (response.status === true) {
          dispatch(initStaffListInformation(response.data));
        }
      })
      .catch((error) => {
        CreateMessage(error);
      });
  };
}


export function postStaffMember(props, value, callback) {
  const { match: { params: { projectId } } } = props;
  return (dispatch) => {
    postFetch(`api/user/${projectId}/staff`, value)
      .then((data) => {
        if (data.status === true) {
          dispatch(addStaffInformation(value));
          callback();
          CreateMessage({ message: MainSnackBarMessage.ADD_STAFF, variant: 'success' });
        }
      })
      .catch((error) => {
        CreateMessage(error);
      });
  };
}


function getUserDetail(dispatch, props, id) {
  const { match: { params: { projectId } } } = props;
  return getFetch(`api/user/${projectId}/staff_detail/${id}`)
    .then((response) => {
      if (response.status === true) {
        response.data.id = id;
        dispatch(initPermissionStaffListInformation(response.data));
      }
    });
}

function getOutletDetail(dispatch, props, id) {
  const { match: { params: { projectId } } } = props;
  return getFetch(`api/user/${projectId}/staff_outlet_permission/${id}`)
    .then((data) => {
      dispatch(updateOutletInformation(data.data));
    })
    .catch(() => {
      dispatch(updateOutletInformation([]));
      CreateMessage({ message: 'No Outlet Choosed', variant: 'warning' });
    });
}

export function getUserAndOutletDetail(props, id) {
  // const url = `${props.match.url.replace('/dashboard', '')}/${id}/edit`;
  return dispatch => Promise.all([
    getUserDetail(dispatch, props, id),
    getOutletDetail(dispatch, props, id),
  ]).then(() => {
    // props.history.push(url);
  });
}


export function updateStaffMember(projectId, value, id) {
  return () => {
    putFetch(`api/user/${projectId}/staff/${id}`, value)
      .then((data) => {
        if (data.status === true) {
          CreateMessage({ message: MainSnackBarMessage.EDIT_STAFF, variant: 'success' });
        }
      })
      .catch((error) => {
        CreateMessage(error);
      });
  };
}


export function RequestOutletList(projectId, handleState) {
  return (dispatch) => {
    getFetch(`api/project/${projectId}/outlet`)
      .then((resp) => {
        if (resp.status === true) {
          dispatch(getAllOutletList(resp.data));
          handleState('loading', true);
        }
      })
      .catch((error) => {
        CreateMessage(error);
      });
  };
}
