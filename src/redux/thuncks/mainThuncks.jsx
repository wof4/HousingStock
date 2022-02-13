import { actions } from '../reducers/mainReducer';
import apiAddress from '../../api/apiAddress';

export const getStreetsListTc = () => (dispatch) => {
  dispatch(actions.setLoadStatus(true));
  apiAddress.getStreets().then((response) => {
    dispatch(actions.setstreetsList(response));
    dispatch(actions.setLoadStatus(false));
  });
};
export const getHouseTc = (value) => (dispatch) => {
  if (value) {
    dispatch(actions.setSelectedStreet(value));
    dispatch(actions.setHouseLoadStatus(true));
    apiAddress.getHouseById(value.id).then((response) => {
      dispatch(actions.setHouseList(response));
      dispatch(actions.setHouseLoadStatus(false));
    });
  }
};
export const getFlatsTc = (value) => (dispatch) => {
  if (value) {
    dispatch(actions.setSelectedHouse(value));
    dispatch(actions.setFlatsLoadStatus(true));
    apiAddress.getFlatsById(value.id).then((response) => {
      dispatch(actions.setFlatsList(response));
      dispatch(actions.setFlatsLoadStatus(false));
    });
  }
};

export const deleteSelectedFlatsTc = () => (dispatch) => {
  dispatch(actions.setSelectedFlat(null));
};

export const deleteSelectedHouseTc = () => (dispatch) => {
  dispatch(actions.setSelectedHouse(null));
  dispatch(actions.setSelectedFlat(null));
  dispatch(actions.setFlatsList([]));
};

export const deleteSelectedStreetTc = () => (dispatch) => {
  dispatch(actions.setSelectedStreet(null));
  dispatch(actions.setHouseList([]));
  dispatch(actions.setFlatsList([]));
  dispatch(deleteSelectedFlatsTc());
  dispatch(deleteSelectedHouseTc());
};
