import { ref } from "vue";
import { d as defineStore } from "../server.mjs";
const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  function setUser(dataUser) {
    user.value = dataUser;
  }
  return { setUser, user };
});
export {
  useAuthStore as u
};
//# sourceMappingURL=authStore-CjG5wzUO.js.map
