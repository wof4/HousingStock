import apiClient from '../../api/apiClient';
import { actions } from '../reducers/clientReducer';
import { actions as mainActions } from '../reducers/mainReducer';

export const getClientByFlatsIdTc = (value) => (dispatch) => {
  if (value) {
    dispatch(mainActions.setSelectedFlat(value));
    dispatch(actions.setClientLoadStatus(true));
    apiClient.getClientByFlatsId(value.id).then((response) => {
      dispatch(actions.setClientList(response));
      dispatch(actions.setClientLoadStatus(false));
    });
  }
};

export const updateClientDataTc = (value, selectedFlat) => (dispatch) => {
  if (value) {
    apiClient.updateClientData(value).then((response) => {
      if (response.status === 200) {
        dispatch(getClientByFlatsIdTc(selectedFlat));
      }
    });
  }
};

export const addClientDataTc = (value, selectedFlat) => async (dispatch) => {
  const response = await apiClient.updateClientData(value);
  if (response.status === 200) {
    const result = await apiClient.addClientData(
      { ClientId: response.data.id, AddressId: selectedFlat.id },
    );
    if (result.status === 200) {
      dispatch(getClientByFlatsIdTc(selectedFlat));
    }
  }
};

export const deleteClientTc = (value, selectedFlat) => (dispatch) => {
  if (value) {
    apiClient.deleteClientById(value).then((response) => {
      if (response.status === 200) {
        dispatch(getClientByFlatsIdTc(selectedFlat));
      }
    });
  }
};

export const deleteClientListTc = () => (dispatch) => {
  dispatch(actions.setClientList([]));
};

export const deleteSelectedClientTc = () => (dispatch) => {
  dispatch(actions.setClientList([]));
};
