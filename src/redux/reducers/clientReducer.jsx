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

    default: {
      return state;
    }
  }
};

export const actions = {
  setClientList: (payload) => ({ type: 'SET_CLIENT_LIST', payload }),
  setClientLoadStatus: (payload) => ({ type: 'SET_CLIENT_LOAD_STATUS', payload }),
};

export default clientReducer;
