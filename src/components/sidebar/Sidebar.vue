<script setup lang="ts">
import { ref } from 'vue';

import { useSidebarStore } from '@/stores-pinia/Sidebar';

const sidebarStore = useSidebarStore();


const isToggled = ref(false);

const modeSwitch = () => {
  isToggled.value = !isToggled.value;
  if (isToggled.value) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

const toggle = ref(false);
const handleClick = () => {
  sidebarStore.toggle();
  toggle.value = !toggle.value;
};

</script>

<template>
  <div class="sidebar" :class="{ close: sidebarStore.isClose }">
    <div class="header">
      <div class="image-text">
        <div class="header-text">
          <svg xmlns="http://www.w3.org/2000/svg" class="logo" width="50" height="50" viewBox="0 0 180 180">
            <path
              d="M82.646 37.0917C85.7401 35.3054 89.552 35.3054 92.646 37.0917L133.614 60.7445L105.286 77.3318C100.901 72.9296 94.8325 70.2051 88.128 70.2051C81.1554 70.2051 74.871 73.1519 70.4523 77.8681L41.4416 60.8811L82.646 37.0917Z"
              fill="#8ec2e3" />
            <path
              d="M64.9303 87.4484L35.9141 70.4582V117.952L64.8222 101.025C64.2287 98.9258 63.9111 96.7109 63.9111 94.4219C63.9111 91.9977 64.2673 89.6567 64.9303 87.4484Z"
              fill="#8ec2e3" />
            <path
              d="M70.1924 110.694L41.8975 127.262L82.646 150.788C85.74 152.574 89.552 152.574 92.646 150.788L133.158 127.398L105.556 111.236C101.152 115.8 94.9714 118.639 88.128 118.639C81.0175 118.639 74.6227 115.574 70.1924 110.694Z"
              fill="#8ec2e3" />
            <path
              d="M111.22 101.739L139.376 118.226C139.377 118.162 139.378 118.098 139.378 118.034V70.1831L111.101 86.7403C111.908 89.154 112.345 91.7369 112.345 94.4219C112.345 96.9723 111.951 99.4305 111.22 101.739Z"
              fill="#8ec2e3" />
          </svg>
        </div>
        <div class="toggle-menu" @click="handleClick">
          <button :class="['toggle__botton', { activo: toggle }]">
            <span class="l1 span"></span>
            <span class="l2 span"></span>
            <span class="l3 span"></span>
          </button>
        </div>
      </div>
      <svg class="toggle svg-icon" @click="sidebarStore.toggle" xmlns="http://www.w3.org/2000/svg" width="24"
        height="24" viewBox="0 0 24 24">
        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
      </svg>
    </div>
    <div class="menu-bar">
      <div class="menu">
        <!-- <li class="search-box">
                <svg class="svg-icon icon icon-tabler icons-tabler-outline icon-tabler-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg> 
                <input type="search" placeholder="Search..."/>
            </li> -->
        <ul class="menu-links">
          <li class="nav-link">
            <a class="active">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-layout-dashboard">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
              </svg>
              <p class="text nav-text">Dashboard</p>
            </a>
          </li>
          <li class="nav-link">
            <router-link to="/checker">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="currentColor">
                <path
                  d="m438-342 139-139q12-12 29-12t29 12q12 12 12 29t-12 29L466-254q-12 12-28 12t-28-12l-85-85q-12-12-12-29t12-29q12-12 29-12t29 12l55 55ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
              </svg>
              <p class="text nav-text">Checador</p>
            </router-link>
          </li>
          <li class="nav-link">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-tag">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M11.172 2a3 3 0 0 1 2.121 .879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1 -4.822 0l-7.71 -7.71a3 3 0 0 1 -.879 -2.121v-5.172a4 4 0 0 1 4 -4zm-3.672 3.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" />
              </svg>
              <p class="text nav-text">Ventas</p>
            </a>
          </li>
          <li class="nav-link">
            <router-link to="/clients">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-user">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
              <p class="text nav-text">Clientes</p>
            </router-link>
          </li>

          <li class="nav-link">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-google-analytics">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10 9m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                <path
                  d="M17 3m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              </svg>
              <p class="text nav-text">Dashboard</p>
            </a>
          </li>

          <li class="nav-link">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-tag">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path
                  d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
              </svg>
              <p class="text nav-text">Dashboard</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="bottom-content">
        <li class="">
          <a>
            <svg class="svg-icon icon icon-tabler icons-tabler-outline icon-tabler-logout"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
            <span class="text">Cerrar sesion</span>
          </a>
        </li>
        <li class="mode">
          <div class="moon-sun">
            <svg class="icon icon-tabler icons-tabler-outline icon-tabler-moon moon" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
            <svg class="icon icon-tabler icons-tabler-outline icon-tabler-sun sun" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
          </div>
          <span class="monde-text text">Dark Mode</span>
          <div @click="modeSwitch" class="toggle-switch">
            <span class="switch"></span>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  width: 220px;
  padding: 10px 14px;
  background-color: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 10;
}


.sidebar.close {
  width: 88px;
}


.sidebar .header {
  position: relative;
}

/* ///////////// Reusbale ccs //////////////// */

.sidebar .text {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  transition: var(--tran-03);
  white-space: nowrap;
  opacity: 1;
}

.header-text>svg {
  color: var(--text-color);

}


.sidebar.close .text {
  opacity: 0;
}

.sidebar .image {
  min-width: 60px;
  display: flex;
  align-items: center;
}

.sidebar li {
  height: 50px;
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
}

.sidebar li .icon {
  min-width: 60px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.sidebar li .icon,
.sidebar li .text {
  color: var(--text-color);
}

.sidebar .nav-link .icon {
  width: 25px;
  height: 25px;
}



/* .sidebar.close .nav-link .icon {
  width: 27px;
  height: 27px;
} */


.sidebar .search-box {
  background-color: var(--dark-purple);
  border-radius: 6px;
}

.search-box input {
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: var(--dark-purple);

}

.sidebar li a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 6px;
  transition: var(--tran-04);
  cursor: pointer;
}


.sidebar li a:hover {
  background-color: var(--item-hover);
}




.sidebar li:hover svg,
.sidebar li:hover .text {
  color: var(--primary-100);
  transition: var(--tran-02);
}





.sidebar li a.active .text {
  color: #8ec2e3;
}

.sidebar li a.active svg {
  color: #8ec2e3;
}

.sidebar li a.active {
  color: #8ec2e3;
}


.sidebar .image-text img {
  width: 40px;
  border-radius: 6px;
}


.sidebar .header .image-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar .header .image-text .header-text {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}



.image-text .name {
  font-weight: 600;
}

.image-text .profession {
  margin-top: -2px;
}


.sidebar .header .toggle {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: rotate(180deg);
  height: 25px;
  width: 25px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  fill: #FFF;
  font-size: 22px;
  transition: var(--tran-03);
}

.sidebar.close .header .toggle {
  transform: rotate(0deg);

}


body.dark .sidebar .header .toggle {
  color: var(--text-color);
}



.menu-bar .mode {
  position: relative;
  background-color: var(--primary-color-light);
  border-radius: 6px;
}


.sidebar .menu-bar {

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20pxyy;

}

.menu-bar .mode .moon-sun {
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
}



.menu-bar .mode svg {
  position: absolute;
}

.menu-bar .mode svg.sun {
  opacity: 0;
}

.menu-bar .mode .monde-text {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color) !important;
}


.menu-bar .mode .toggle-switch {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 60px;
  cursor: pointer;
  background-color: var(--primary-color-light);
  border-radius: 6px;

}

.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background-color: var(--toggle-color);
}

.switch::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: var(--sidebar-color);
  transition: var(--tran-03);
}


@media screen and (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -220px;
  }

  .sidebar .header .toggle {
    display: none;
  }

  .sidebar,
  .sidebar.close {
    width: 220px;
  }

  .sidebar.close {
    left: 0;
  }

  /* .sidebar.close .header {
      display: flex;
      justify-content: center;
      align-items: center;
  } */

  .sidebar.close .header-text>.name {
    color: var(--text-color);
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 10px;

  }

}



/*================Nav Modal=====================*/

.toggle-menu {
  display: none;
  justify-content: center;
  align-items: center;
  /* centra los elementos */
  width: 35px;
  height: 35px;
  z-index: 1;
}

.toggle-menu .toggle__botton {
  width: 35px;
  height: 35px;
  transform: scale(.8);
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;


}

.toggle-menu .span {
  background: var(--primary-color);
  width: 100%;
  height: 3px;
  border-radius: 5px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.4s, width 0.3s;
}

.toggle-menu .l1 {
  transform: translate(-50%, -15px);
}

.toggle-menu .l3 {
  transform: translate(-50%, 10px);
}

/* PARTE DE JAVASCRIPT */
.toggle-menu .activo .l1 {
  transform: translate(-50%, -50%)rotate(45deg);
}

.toggle-menu .activo .l3 {
  transform: translate(-50%, -50%)rotate(-45deg);
}

.toggle-menu .activo .l2 {
  width: 0;
}




@media screen and (max-width: 768px) {
  .toggle-menu {
    display: block;
  }

  .sidebar.close .text {
    opacity: 1;
  }

  .sidebar .header .image-text .header-text {
    padding: 0;
  }

}
</style>
