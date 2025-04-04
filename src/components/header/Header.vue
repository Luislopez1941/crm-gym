<script setup lang="ts">
import { ref } from 'vue';
import { useSidebarStore } from '@/stores-pinia/Sidebar';

const sidebarStore = useSidebarStore();

const toggle = ref(false);
const handleClick = () => {
  sidebarStore.toggle();
  toggle.value = !toggle.value;
};
</script>

<template>
  <header class="hero">
    <div class="hero__container">
      <div class="toggle-menu_header"  @click="handleClick">
        <button :class="['toggle__botton', { activo: toggle }]">
          <span class="l1 span"></span>
          <span class="l2 span"></span>
          <span class="l3 span"></span>
        </button>
      </div>
      <div class="row__one">
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-bell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" /><path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" /></svg>
        </div>
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
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
    display: flex;
    justify-content: end;
    padding: 20px;
}

.hero__container {
    display: flex;
    justify-content: end;
}

.hero__container .row__one {
    display: flex;
    gap: 20px;
}

.hero__container .row__one svg {
    color: var(--text-color);
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
