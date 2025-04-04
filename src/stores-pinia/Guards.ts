import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,  // Estado de si el usuario está autenticado o no
    user: null,       // Puedes almacenar el objeto del usuario aquí
  }),

  actions: {
    login(data: any) {
      this.loggedIn = data.status;
      this.user = data.user;
    },

    logout() {
      this.loggedIn = false;
      this.user = null;
    },

    setUser(userData: any) {
      this.user = userData;
    },

    clearUser() {
      this.user = null;
    }
  },

  getters: {
    isAuthenticated: (state) => state.loggedIn,
    getUser: (state) => state.user,
  }
});
