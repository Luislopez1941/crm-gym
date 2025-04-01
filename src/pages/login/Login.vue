<script setup lang="ts">
import { ref } from 'vue'


const email = ref('')
const password = ref('')
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  // Here you would typically handle the login logic
  console.log('Login attempted with:', { email: email.value, password: password.value })
}
</script>

<template>
  <div class="login">
    <div class="login__container">
        <div class="left">
            <div class="left__container">

            </div>
        </div>
        <div class="right">
            <div class="right__container">
                <form @submit.prevent="handleSubmit" class="login-form">
                    <h2 class="form-title">Welcome Back</h2>
                    <div class="input-group">
                      <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="input-icon icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                      <input v-model="email" type="email" placeholder="Email" required />
                    </div>
                    <div class="input-group">
                      <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="input-icon icon icon-tabler icons-tabler-filled icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" /></svg>
                      <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" required />
                      <button type="button" @click="togglePasswordVisibility" class="toggle-password"
>
                        <EyeIcon v-if="!showPassword" />
                        <EyeOffIcon v-else />
                      </button>
                    </div>
                    <button type="submit" class="login-button">Iniciar sesion</button>
                    <div class="form-footer">
                      <a href="#" class="forgot-password">Forgot Password?</a>
                      <a href="#" class="signup-link">Sign Up</a>
                    </div>
                  </form>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  background: linear-gradient(135deg, #8ac3ef 0%, #ffffff 100%);
}

.login__container {
    height: 100vh;
    width: 100vw;
    display: grid;
   
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.left {
    
}

.left__container {
    padding: 20px;
    background-color: #333;
    border-radius: 20px;
}

.right {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.right__container {
  










    width: 100%;
    max-width: 500px;
}

.login-form {
 
  padding: 2rem;
  border-radius: 10px;
  /* background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);*/
  background-color: #50a0dd;
  width: 100%;

}

.form-title {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-group {
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
}

.input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
}

input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #8ac3ef;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #50a0dd;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #8ac3ef;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.forgot-password, .signup-link {
  color: #50a0dd;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.forgot-password:hover, .signup-link:hover {
  color: #8ac3ef;
}
</style>