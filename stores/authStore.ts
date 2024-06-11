import { defineStore } from 'pinia'

export interface User {
    id: number;
    username: string;
    isAdmin: boolean;
    firstName: string;
    lastName: string;
    email: string;
    salary: number;
    createdDate: string;
    updatedDate: string;
}
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)


    function setUser(dataUser: User) {
        user.value = dataUser
    }

    return { setUser, user }

})
