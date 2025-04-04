// APIConfiguration.ts
import axiosInstance from './APIConfiguration';  // Asegúrate de que esta ruta es correcta


const APis = {
  login: (data: any) => {
    return axiosInstance.post('auth/login', data);
  },
  list_customers: async (data: any, token: any) => {
    const response = await axiosInstance.get(`/list_customers/${data.section}/${data.type}/${data.filter}`, {
      headers: {
        'Authorization': token
      }
    });
    return response;
  },
  updateUser: (id: string, userData: any) => {
    return axiosInstance.put(`/users/${id}`, userData);
  }
};

export default APis;