//  street  //
export const getstreetsList = (state) => state.mainReducer.street.streetsList;
export const getLoadingStretsListStatus = (state) => state.mainReducer.street.isLoadingStretsList;
export const getStreetstreetInputOption = (state) => state.mainReducer.street.streetInputOption;
export const getSelectedStreet = (state) => state.mainReducer.street.selectedStreet;

export const getHouseList = (state) => state.mainReducer.house.houseList;
export const getLoadingHouseListStatus = (state) => state.mainReducer.house.isLoadingHouseList;
export const getHouseInputOption = (state) => state.mainReducer.house.houseInputOption;
export const getSelectedHouse = (state) => state.mainReducer.house.selectedHouse;

export const getFlatsList = (state) => state.mainReducer.flats.flatsList;
export const getLoadingFlatsListStatus = (state) => state.mainReducer.flats.isLoadingFlatsList;
export const getFlatsInputOption = (state) => state.mainReducer.flats.flatsInputOption;
export const getSelectedFlat = (state) => state.mainReducer.flats.selectedFlat;

export const getClientList = (state) => state.clientReducer.client.clientList;
