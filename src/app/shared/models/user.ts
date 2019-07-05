export interface User {
    name: string;
    email: string;
    id: string;
    isAdmin?: boolean;
    isStoreManager?: boolean;
}