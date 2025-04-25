<script setup lang="ts">
import { ref } from 'vue';

import { useSidebarStore } from '@/stores-pinia/Sidebar';

const sidebarStore = useSidebarStore();

const statusSubMenu = ref('')

const openSubMenu = (value: string) => {
  statusSubMenu.value = statusSubMenu.value === value ? '' : value;
}

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
            <router-link to="/">
              <a class="active">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-layout-dashboard">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
                </svg>
                <p class="text nav-text">Dashboard</p>
              </a>
            </router-link>

          </li>
          <li class="nav-link">
            <a @click="openSubMenu('sales')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-tag">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M11.172 2a3 3 0 0 1 2.121 .879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1 -4.822 0l-7.71 -7.71a3 3 0 0 1 -.879 -2.121v-5.172a4 4 0 0 1 4 -4zm-3.672 3.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" />
              </svg>
              <p class="text nav-text">Ventas</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </a>
            <div class="sub_menu" :class="{ active: statusSubMenu == 'sales' }">
              <div>
                <router-link to="/inventories/products">
                  <p>Cotizacion</p>
                </router-link>
              </div>
              <div>
                <router-link to="/inventories/inventory">
                  <p>Orden de venta</p>
                </router-link>
              </div>
            </div>
          </li>
          <li class="nav-link">
            <a @click="openSubMenu('shopping')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
              </svg>
              <p class="text nav-text">Compras</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </a>
            <div class="sub_menu" :class="{ active: statusSubMenu == 'shopping' }">
              <div>
                <router-link to="/inventories/products">
                  <p>Requisicion</p>
                </router-link>
              </div>
              <div>
                <router-link to="/inventories/inventory">
                  <p>Orden de compra</p>
                </router-link>
              </div>
            </div>
          </li>
          <li class="nav-link">
            <a @click="openSubMenu('inventories')">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="currentColor">
                <path
                  d="M440-91v-366L120-642v321q0 22 10.5 40t29.5 29L440-91Zm80 0 280-161q19-11 29.5-29t10.5-40v-321L520-457v366Zm159-550 118-69-277-159q-19-11-40-11t-40 11l-79 45 318 183ZM480-526l119-68-317-184-120 69 318 183Z" />
              </svg>
              <p class="text nav-text">Inventario</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </a>
            <div class="sub_menu" :class="{ active: statusSubMenu == 'inventories' }">
              <div>
                <router-link to="/inventories/products">
                  <p>Prodcutos</p>
                </router-link>
              </div>
              <div>
                <router-link to="/inventories/inventory">
                  <p>Inventario</p>
                </router-link>
              </div>
            </div>
          </li>
          <li class="nav-link">
            <a @click="openSubMenu('reports')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-file-description">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm3 14h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2" />
                <path d="M19 7h-4l-.001 -4.001z" />
              </svg>
              <p class="text nav-text">Reportes</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </a>
            <div class="sub_menu" :class="{ active: statusSubMenu == 'reports' }">
              <div>
                <router-link to="/inventories/products">
                  <p>Prodcutos</p>
                </router-link>
              </div>
              <div>
                <router-link to="/inventories/inventory">
                  <p>Inventario</p>
                </router-link>
              </div>
            </div>
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
            <router-link to="/coaches">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-barbell">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1 -2 0v-3h-1a1 1 0 0 1 0 -2h1v-3a1 1 0 0 1 1 -1" />
                  <path d="M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1 -2 0v-8a1 1 0 0 1 1 -1" />
                  <path
                    d="M16 5a2 2 0 0 1 2 2v10a2 2 0 1 1 -4 0v-4h-4v4a2 2 0 1 1 -4 0v-10a2 2 0 1 1 4 0v4h4v-4a2 2 0 0 1 2 -2" />
                </svg>
                <p class="text nav-text">Entrenadores</p>
              </a>
            </router-link>
          </li>
          <li class="nav-link">
            <router-link to="/memberships">
              <a href="#">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="currentColor">
                  <path
                    d="m480-404 60 46q11 9 24 .5t8-22.5l-24-76 67-52q11-9 6-22.5T602-544h-78l-25-77q-5-14-19-14t-19 14l-25 77h-79q-14 0-18.5 13.5T345-508l65 52-24 77q-5 14 7 22.5t24-.5l63-47ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Z" />
                </svg>
                <p class="text nav-text">Membresías</p>
              </a>
            </router-link>

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

      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  width: 250px;
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

  font-weight: 500;
  color: var(--sidebar-text);
  transition: var(--tran-03);
  white-space: nowrap;
  opacity: 1;
}

.header-text>svg {
  color: var(--sidebar-text);

}


.sidebar.close .text {
  opacity: 0;
}

.sidebar.close .nav-link .icon-tabler-chevron-down {
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


}

.sidebar li .icon,
.sidebar li .text {
  color: var(--sidebar-text);
}



.sidebar .nav-link .icon {
  width: 25px;
  height: 25px;
}

.sidebar .nav-link {
  display: block;
  height: auto;



}

.sidebar .nav-link:hover {
  background-color: #1e1e1e
}

.sidebar .nav-link .sub_menu {
  display: block;
  height: 0;
  opacity: 0;
  background-color: #1e1e1e;
  color: #FFF;
  transition: all 500ms;

}


.sidebar .nav-link .sub_menu a {
  display: none;
  color: #FFF;
  padding: 10px;
}

.sidebar .nav-link .sub_menu.active a {
  display: block;
  color: #FFF;
  padding: 10px;
}



.sidebar .nav-link .sub_menu.active {
  display: block;
  height: 200px;
  opacity: 1;
  padding: 10px;
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
  height: 50px;
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

 
  transition: var(--tran-02);
  color: var(--primary-color);
}





.sidebar li a.active .text {

  color: var(--primary-color);
}

.sidebar li a.active svg {
 
  color: var(--primary-color);
}

.sidebar li a.active {

  color: var(--primary-color);
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
  gap: 20px;

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
