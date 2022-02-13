import instance from './api';

const apiClient = {

  async getClientByFlatsId(value) {
    try {
      return await instance
        .get(`/HousingStock/clients?addressId=${value}`)
        .then((res) => res.data);
    } catch (err) {
      return err;
    }
  },

  async addClientData(value) {
    try {
      return await instance
        .put('HousingStock/bind_client', value)
        .then((res) => res);
    } catch (e) {
      return 'ошибка';
    }
  },

  async updateClientData(value) {
    try {
      return await instance
        .post('HousingStock/client', value)
        .then((res) => res);
    } catch (e) {
      return 'ошибка';
    }
  },

  async deleteClientById(value) {
    try {
      return await instance
        .delete(`/HousingStock/bind_client/${value}`)
        .then((res) => res);
    } catch (e) {
      return 'ошибка';
    }
  },
};

export default apiClient;
