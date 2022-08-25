import {autorun, observable, computed,action, makeAutoObservable } from 'mobx';
import { getUser } from '../firebase'

export interface IUser {
    _id: string,
    uid: String,
    role: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String
}

export class UserStore {
    @observable user:any;

    constructor() { 
        makeAutoObservable(this);    
    }
    @action
    loudUser = async(uid:string) => {
        const user = await getUser(uid);
        this.user = user;
    }
}


const userStore = new UserStore();
export default userStore;