// middleware/auth.js
import { defineNuxtRouteMiddleware, abortNavigation, navigateTo } from 'nuxt/app'
import { useAuthStore } from '../stores/authStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        const response = await fetch("/api/me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include' // บอกให้เบราว์เซอร์ส่งคุกกี้ไปพร้อมกับคำขอ

        })
        // console.log(response.status == 401);

        if (response.status == 401) {
            return await navigateTo("/auth/login")
        }
        const data = await response.json()

        useAuthStore().setUser(data.user)



    } catch (error) {
        console.log(error);
    }

})
