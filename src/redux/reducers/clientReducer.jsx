import apiClient from '../../api/apiClient';
import { actions as mainActions } from './mainReducer';

const initialState = {

  client: {
    clientList: [],
    isLoadClientList: false,
    clientInputOption: {
      name: 'flats',
      label: 'Квартира',
      optionText: 'Нет такой квартиры',
      loadingText: 'Загрузка квартир',
      width: 200,
    },
    reqDataId: null,
  },

};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENT_LIST': {
      return { ...state, client: { ...state.client, clientList: action.payload } };
    }
    case 'SET_CLIENT_LOAD_STATUS': {
      return { ...state, client: { ...state.client, isLoadClientList: action.payload } };
    }
    case 'SET_REQ_ID': {
      return { ...state, client: { ...state.client, reqDataId: action.payload } };
    }

    default: {
      return state;
    }
  }
};

export const actions = {

  setClientList: (payload) => ({ type: 'SET_CLIENT_LIST', payload }),
  setClientLoadStatus: (payload) => ({ type: 'SET_CLIENT_LOAD_STATUS', payload }),
  setReqId: (payload) => ({ type: 'SET_REQ_ID', payload }),
};

export const getClientByFlatsIdTc = (value) => (dispatch) => {
  if (value) {
    dispatch(mainActions.setSelectedFlat(value));
    dispatch(actions.setReqId(value.id));
    dispatch(actions.setClientLoadStatus(true));
    apiClient.getClientByFlatsId(value.id).then((response) => {
      dispatch(actions.setClientList(response));
      dispatch(actions.setClientLoadStatus(false));
    });
  }
};

export const updateClientDataTc = (value, id) => (dispatch) => {
  if (value) {
    apiClient.updateClientData(value).then((response) => {
      if (response.status === 200) {
        dispatch(getClientByFlatsIdTc({ id }));
      }
    });
  }
};

export const addClientDataTc = (value, id) => async (dispatch) => {
  const response = await apiClient.updateClientData(value);
  if (response.status === 200) {
    const result = await apiClient.addClientData({ ClientId: response.data.id, AddressId: id });
    if (result.status === 200) {
      dispatch(getClientByFlatsIdTc({ id }));
    }
  }
};

export const deleteClientTc = (value, id) => (dispatch) => {
  if (value) {
    apiClient.deleteClientById(value).then((response) => {
      if (response.status === 200) {
        dispatch(getClientByFlatsIdTc({ id }));
      }
    });
  }
};

export const deleteClientListTc = () => (dispatch) => {
  dispatch(actions.setClientList([]));
};

export default clientReducer;
