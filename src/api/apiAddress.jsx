import instance from './api';

const apiAddress = {

  async getStreets() {
    try {
      return await instance
        .get('/Request/streets')
        .then((res) => res.data.filter((item) => item.cityId === 1));
    } catch (err) {
      return err;
    }
  },

  async getHouseById(value) {
    try {
      return await instance
        .get(`/Request/houses/${value}`)
        .then((res) => res.data);
    } catch (err) {
      return err;
    }
  },

  async getFlatsById(value) {
    try {
      return await instance
        .get(`/Request/house_flats/${value}`)
        .then((res) => res.data.filter((item) => item.typeName === 'Квартира'));
    } catch (err) {
      return err;
    }
  },

};

export default apiAddress;
