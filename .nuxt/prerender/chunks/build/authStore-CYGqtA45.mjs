import { ref } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { e as defineStore } from './server.mjs';

const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  function setUser(dataUser) {
    user.value = dataUser;
  }
  return { setUser, user };
});

export { useAuthStore as u };
//# sourceMappingURL=authStore-CYGqtA45.mjs.map
