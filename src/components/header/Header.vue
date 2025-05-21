<script setup lang="ts">
import { ref } from 'vue';
import { useSidebarStore } from '@/stores-pinia/Sidebar';

const sidebarStore = useSidebarStore();

const toggle = ref(false);
const handleClick = () => {
    sidebarStore.toggle();
    toggle.value = !toggle.value;
};

const isToggled = ref(false);

const modeSwitch = () => {
    isToggled.value = !isToggled.value;
    if (isToggled.value) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
};
</script>



<template>
    <header class="hero">
        <div class="hero__container">
            <div class="toggle-menu_header" @click="handleClick">
                <button :class="['toggle__botton', { activo: toggle }]">
                    <span class="l1 span"></span>
                    <span class="l2 span"></span>
                    <span class="l3 span"></span>
                </button>
            </div>
            <div class="breadcrumbs__container">
                <p class="title">Dashboard</p>
            </div>
            <div class="row__one">
                <div class="mode" @click="modeSwitch">
                    <transition name="fade-switch" mode="out-in">
                        <svg v-if="isToggled" key="moon" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" /></svg>
                        <svg v-else key="sun" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#FFCC00"  class="icon icon-tabler icons-tabler-filled icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" /><path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /><path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" /><path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /><path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /></svg>
                     
                  
                 
                    </transition>
                  </div>
                <div class="bell">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-bell">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
                        <path
                            d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
                    </svg>
                    </div>
                </div>
                <div class="user">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-user">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.hero {
    height: 80px;

}

.hero__container {
    padding: 20px;
}

.hero__container {
    display: flex;
    justify-content: space-between;
}

.breadcrumbs__container {

}

.breadcrumbs__container > .title {
    font-size: 1.5rem;
    color: var(--text-color);
    font-weight: 600;
}

.hero__container .row__one {
    display: flex;
    gap: 20px;
    align-items: center;
}

.hero__container .row__one svg {
    color: var(--color-text-header);
}

.hero__container .row__one .bell {
    background-color: var(--color-icon-header);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 5px;
    cursor: pointer;
}

.hero__container .row__one .user {
    background-color: var(--color-icon-header);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    cursor: pointer;
}


/*================Nav Modal=====================*/

.toggle-menu_header {
    display: none;
    justify-content: center;
    align-items: center;
    /* centra los elementos */
    width: 35px;
    height: 35px;
    z-index: 1;
}

.toggle-menu_header .toggle__botton {
    width: 35px;
    height: 35px;
    transform: scale(.8);
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;


}

.toggle-menu_header .span {
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

.toggle-menu_header .l1 {
    transform: translate(-50%, -15px);
}

.toggle-menu_header .l3 {
    transform: translate(-50%, 10px);
}

/* PARTE DE JAVASCRIPT */
.toggle-menu_header .activo .l1 {
    transform: translate(-50%, -50%)rotate(45deg);
}

.toggle-menu_header .activo .l3 {
    transform: translate(-50%, -50%)rotate(-45deg);
}

.toggle-menu_header .activo .l2 {
    width: 0;
}









.fade-switch-enter-active, .fade-switch-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .fade-switch-enter-from, .fade-switch-leave-to {
    opacity: 0;
    transform: scale(0.8) rotate(-90deg);
  }
  .fade-switch-enter-to, .fade-switch-leave-from {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

.hero__container .row__one .mode {
    position: relative;
}

.hero__container .row__one .mode .toggle-switch {
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

.hero__container .row__one .toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 44px;
    border-radius: 25px;
    background-color: var(--toggle-color);
}

.hero__container .row__one .switch::before {
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
    .toggle-menu_header {
        display: block;
    }

    .hero__container {
        justify-content: space-between;
    }

    .hero__container {
        justify-content: space-between;
    }





}
</style>
