<script setup lang="ts">
import { ref } from 'vue';

const isClose = ref(false);

const toggle = () => {
    isClose.value = !isClose.value;
};


    const isToggled = ref(false);

    const modeSwitch = () => {
      isToggled.value = !isToggled.value;
      if (isToggled.value) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };


</script>

<template>
  <div class="sidebar"  :class="{ close: isClose }">
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
        </div>
        <svg class="toggle svg-icon" @click="toggle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
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
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" /></svg>
                      <p class="text nav-text">Dashboard</p>
                    </a>
                </li>
                <li class="nav-link">
                    <a>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        <p class="text nav-text">Administrador</p>
                    </a>
                </li>
                <li class="nav-link">
                    <a>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        <p class="text nav-text">Clientes</p>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-category-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
                        <p class="text nav-text">Productos</p>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-google-analytics"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 9m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" /><path d="M17 3m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>
                        <p class="text nav-text">Dashboard</p>
                    </a>
                </li>
         
                <li class="nav-link">
                    <a href="#">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tag"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" /></svg>
                        <p class="text nav-text">Dashboard</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="bottom-content">
            <li class="">
                <a>
                    <svg class="svg-icon icon icon-tabler icons-tabler-outline icon-tabler-logout" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
                    <span class="text">Cerrar sesion</span>
                </a>
            </li>
            <li class="mode">
                <div class="moon-sun">
                    <svg class="icon icon-tabler icons-tabler-outline icon-tabler-moon moon" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
                    <svg class="icon icon-tabler icons-tabler-outline icon-tabler-sun sun" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
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

.header-text > svg {
  color: var(--text-color);
  
}


.sidebar.close .text  {
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
}


.sidebar li a:hover {
  background-color: var(--item-hover);
}




.sidebar  li:hover svg,
.sidebar li:hover .text {
  color: var(--purple-color);
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
  justify-content: center;
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

  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.menu-bar .mode  .monde-text {
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
  transform:  translateY(-50%);
  background-color: var(--sidebar-color);
  transition: var(--tran-03);
}


@media screen and (max-width: 768px) {
  .sidebar {
      position: fixed;
  }

  /* .sidebar.close .header {
      display: flex;
      justify-content: center;
      align-items: center;
  } */

  .sidebar.close .header-text > .name {
      color: var(--text-color);
      font-weight: 500;
      font-size: 1.2rem;
      margin-left: 10px;
 
  }
  
}

</style>
