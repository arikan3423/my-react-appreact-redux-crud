
export interface IUser {
    id: number;
    name: string;
    email: string;
}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "eror",
}

export interface IUserState {
    list: IUser[],
    listStatus :ApiStatus,
    createUserFormStatus: ApiStatus;
}

export const defaultList : IUser[] = [
    {
    id: 2,
    name: "elanur",
    email: "elanur@gmail.com"
},
{
    id: 3,
    name: "furkan",
    email: "furkan@gmail.com"
}
]
export interface IUserForm {
    name: string;
    email: string;
}