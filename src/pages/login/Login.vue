<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores-pinia/Guards'
import { useRouter } from 'vue-router'
// import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css"
// import APis from '@/services/APIs'


const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// const toast = Toast();
const router = useRouter();


const handleSubmit = async () => {
  const authStore = useAuthStore();


  let data = {
    email: email.value,
    password: password.value,
  };
  authStore.login({ data, status: true });
  router.push('/');
  // try {  
  //   const response: any = await APis.login(data);

  //   const user = response.data.user;
  //   authStore.setUser(user);
  //   authStore.login({ user, status: true });
  //   localStorage.setItem('token', response.data.token);

  //   // Redirige al usuario
  //   router.push('/');
  // } catch (error) {
  //   console.error('Error al iniciar sesión:', error);
  // }
};


</script>

<template>
  <div class="login">
    <div class="login__container">
      <!-- Lado izquierdo con ilustración -->
      <div class="left">
        <div class="left__container">
          <div class="brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>GymSystem</span>
          </div>

          <div class="illustration">
            <div class="illustration-circle"></div>
            <div class="illustration-circle"></div>
            <div class="illustration-circle"></div>
            <div class="illustration-shape"></div>
          </div>

          <div class="welcome-text">
            <h1>Bienvenido de nuevo</h1>
            <p>Accede a tu cuenta para gestionar tus clientes y servicios</p>
          </div>
        </div>
      </div>

      <!-- Lado derecho con formulario -->
      <div class="right">
        <div class="right__container">
          <form @submit.prevent="handleSubmit" class="login-form">
            <div class="logo__container">
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" class="logo" width="70" height="70" viewBox="0 0 180 180">
                  <path
                    d="M82.646 37.0917C85.7401 35.3054 89.552 35.3054 92.646 37.0917L133.614 60.7445L105.286 77.3318C100.901 72.9296 94.8325 70.2051 88.128 70.2051C81.1554 70.2051 74.871 73.1519 70.4523 77.8681L41.4416 60.8811L82.646 37.0917Z"
                    fill="#3f3f3f" />
                  <path
                    d="M64.9303 87.4484L35.9141 70.4582V117.952L64.8222 101.025C64.2287 98.9258 63.9111 96.7109 63.9111 94.4219C63.9111 91.9977 64.2673 89.6567 64.9303 87.4484Z"
                    fill="#3f3f3f" />
                  <path
                    d="M70.1924 110.694L41.8975 127.262L82.646 150.788C85.74 152.574 89.552 152.574 92.646 150.788L133.158 127.398L105.556 111.236C101.152 115.8 94.9714 118.639 88.128 118.639C81.0175 118.639 74.6227 115.574 70.1924 110.694Z"
                    fill="#3f3f3f" />
                  <path
                    d="M111.22 101.739L139.376 118.226C139.377 118.162 139.378 118.098 139.378 118.034V70.1831L111.101 86.7403C111.908 89.154 112.345 91.7369 112.345 94.4219C112.345 96.9723 111.951 99.4305 111.22 101.739Z"
                    fill="#3f3f3f" />
                </svg>
              </div>
              <p class="title">Astra</p>
            </div>

            <div class="container__title">
              <h2 class="form-title">Iniciar Sesión</h2>
              <p class="form-subtitle">Ingresa tus credenciales para continuar</p>
            </div>
            <div class="input-group">
              <label for="email">Correo electrónico</label>
              <div class="input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"> <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <input id="email" v-model="email" type="email" placeholder="ejemplo@correo.com" required />
              </div>
            </div>

            <div class="input-group">
              <label for="password">Contraseña</label>
              <div class="input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="input-icon">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••" required />
                <button type="button" @click="togglePasswordVisibility" class="toggle-password"
                  aria-label="Toggle password visibility">
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-options">
              <div class="remember-me">
                <input type="checkbox" id="remember" v-model="rememberMe" />
                <label for="remember">Recordarme</label>
              </div>
              <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" class="login-button">
              Iniciar sesión
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>

            <div class="form-footer">
              <p>¿No tienes una cuenta? <a href="#" class="signup-link">Regístrate</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Variables de color para mantener consistencia */
:root {
  --primary-color: #4A90E2;
  --primary-light: #8ac3ef;
  --primary-dark: #1d75c3;
  --accent-color: #FFCC00;
  --text-color: #333333;
  --text-light: #707070;
  --background-light: #F6F5FF;
  --white: #FFFFFF;
  --error: #F44336;
  --success: #4CAF50;
  --border-radius: 12px;
  --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s ease;
}

.right__container img {
  fill: #333333;
}

/* Estilos generales */
.login {
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
}

.login__container {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}



/* Estilos del lado izquierdo */
.left {
  background: linear-gradient(135deg, #4A90E2 0%, #1d75c3 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.left__container {
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.logo__container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}


.logo__container .title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #3f3f3f;
}

.container__title {
  text-align: center;
}


.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.5rem;
}

.illustration {
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.illustration-circle:nth-child(1) {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.illustration-circle:nth-child(2) {
  width: 150px;
  height: 150px;
  top: 30%;
  left: 60%;
  background: rgba(255, 255, 255, 0.15);
}

.illustration-circle:nth-child(3) {
  width: 100px;
  height: 100px;
  bottom: 20%;
  right: 30%;
  background: rgba(255, 255, 255, 0.2);
}

.illustration-shape {
  position: absolute;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  transform: rotate(45deg);
}

.welcome-text {
  text-align: center;
}

.welcome-text h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.welcome-text p {
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.6;
}

/* Estilos del lado derecho */
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.right__container {
  width: 100%;
  max-width: 450px;
}

.login-form {
  background-color: rgb(255, 255, 255);

  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.form-title {
  color: #3f3f3f;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.form-subtitle {
  color: var(--text-light);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group svg {
  color: var(--text-color);
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
  font-size: 0.95rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  color: var(--text-light);
}

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 10px 10px 10px 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition);
  color: var(--text-color);
}

input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.toggle-password {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
}

.remember-me input[type="checkbox"] {
  accent-color: var(--primary-color);
  width: 16px;
  height: 16px;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
}

.forgot-password:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 0.9rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.login-button svg {
  transition: transform 0.3s ease;
}



.login-button:hover svg {
  transform: translateX(5px);
}

.form-footer {
  margin-top: 2rem;
  text-align: center;
  color: var(--text-light);
  font-size: 0.95rem;
}

.signup-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.signup-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Estilos responsivos */
@media (max-width: 992px) {
  .login__container {
    grid-template-columns: 1fr;
  }

  .left {
    display: none;
  }

  .right {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .login-form {
    padding: 30px;
  }

  .form-title {
    font-size: 1.7rem;
  }

  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .forgot-password {
    margin-left: 24px;
  }
}
</style>