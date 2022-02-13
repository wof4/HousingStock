const initialState = {

  street: {
    streetsList: [],
    isLoadingStretsList: false,
    selectedStreet: null,
    streetInputOption: {
      name: 'street',
      label: 'Улица',
      optionText: 'Нет такой улицы',
      loadingText: 'Загрузка улиц',
      width: 400,
    },
  },
  house: {
    houseList: [],
    isLoadingHouseList: false,
    selectedHouse: null,
    houseInputOption: {
      name: 'house',
      label: 'Дом',
      optionText: 'Нет такого дома',
      loadingText: 'Загрузка домов',
      width: 200,
    },
  },
  flats: {
    flatsList: [],
    isLoadingFlatsList: false,
    selectedFlat: null,
    flatsInputOption: {
      name: 'flats',
      label: 'Квартира',
      optionText: 'Нет такой квартиры',
      loadingText: 'Загрузка квартир',
      width: 200,
    },
  },

};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STREATS_LIST': {
      return { ...state, street: { ...state.street, streetsList: action.payload } };
    }
    case 'SET_SELECTED_STREET': {
      return { ...state, street: { ...state.street, selectedStreet: action.payload } };
    }
    case 'SET_LOAD_STATUS': {
      return { ...state, street: { ...state.street, isLoadingStretsList: action.payload } };
    }

    case 'SET_HOUSE_LIST': {
      return { ...state, house: { ...state.house, houseList: action.payload } };
    }
    case 'SET_HOUSE_LOAD_STATUS': {
      return { ...state, house: { ...state.house, isLoadingHouseList: action.payload } };
    }

    case 'SET_FLATS_LIST': {
      return { ...state, flats: { ...state.flats, flatsList: action.payload } };
    }
    case 'SET_SELECTED_FLAT': {
      return { ...state, flats: { ...state.flats, selectedFlat: action.payload } };
    }
    case 'SET_FLATS_LOAD_STATUS': {
      return { ...state, flats: { ...state.flats, isLoadingFlatsList: action.payload } };
    }
    case 'SET_SELECTED_HOUSE': {
      return { ...state, house: { ...state.house, selectedHouse: action.payload } };
    }

    default: {
      return state;
    }
  }
};

export const actions = {
  setstreetsList: (payload) => ({ type: 'SET_STREATS_LIST', payload }),
  setSelectedStreet: (payload) => ({ type: 'SET_SELECTED_STREET', payload }),
  setHouseList: (payload) => ({ type: 'SET_HOUSE_LIST', payload }),
  setFlatsList: (payload) => ({ type: 'SET_FLATS_LIST', payload }),
  setLoadStatus: (payload) => ({ type: 'SET_LOAD_STATUS', payload }),
  setHouseLoadStatus: (payload) => ({ type: 'SET_HOUSE_LOAD_STATUS', payload }),
  setSelectedFlat: (payload) => ({ type: 'SET_SELECTED_FLAT', payload }),
  setSelectedHouse: (payload) => ({ type: 'SET_SELECTED_HOUSE', payload }),
  setFlatsLoadStatus: (payload) => ({ type: 'SET_FLATS_LOAD_STATUS', payload }),
};

export default mainReducer;
