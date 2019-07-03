export interface User {
    name: string;
    email: string;
    id: string;
    isAdmin?: boolean;
    isStoreManager?: boolean;
}


// export class User{
//     constructor(public id: string, public name: string, public email: string,
//                  isAdmin?: boolean, isStoreManager?: boolean) {}
// }