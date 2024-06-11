export interface loginUser {
    username: string;
    password: string;
}

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