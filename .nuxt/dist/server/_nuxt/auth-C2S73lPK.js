import { f as defineNuxtRouteMiddleware, g as executeAsync, d as navigateTo } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { u as useAuthStore } from "./authStore-CYGqtA45.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "@vue/devtools-api";
import "vue3-easy-data-table";
import "vue-toastification";
import "vue/server-renderer";
const auth = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  try {
    const response = ([__temp, __restore] = executeAsync(() => fetch("/api/me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
      // บอกให้เบราว์เซอร์ส่งคุกกี้ไปพร้อมกับคำขอ
    })), __temp = await __temp, __restore(), __temp);
    if (response.status == 401) {
      return [__temp, __restore] = executeAsync(() => navigateTo("/auth/login")), __temp = await __temp, __restore(), __temp;
    }
    const data = ([__temp, __restore] = executeAsync(() => response.json()), __temp = await __temp, __restore(), __temp);
    useAuthStore().setUser(data.user);
  } catch (error) {
    console.log(error);
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-C2S73lPK.js.map
