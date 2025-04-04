import { useAuthStore } from '@/stores-pinia/Guards';  // Importamos el store de autenticación
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export function authGuard(
  to: RouteLocationNormalized, 
  from: RouteLocationNormalized, 
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();  // Usamos el store

  if (to.matched.some(route => route.meta.requiresAuth)) {  // Si la ruta requiere autenticación
    if (!authStore.loggedIn) {  // Verifica si el usuario está autenticado
      next('/login');  // Si no está autenticado, redirige al login
    } else {
      next();  // Si está autenticado, permite el acceso
    }
  } else {
    next();  // Si la ruta no requiere autenticación, permite el acceso
  }
}
