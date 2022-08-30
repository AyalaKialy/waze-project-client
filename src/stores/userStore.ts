import {autorun, observable, computed,action, makeAutoObservable } from 'mobx';
import { getUserByUid } from '../api/user';
import { User } from '../models/user.model';


export class UserStore {
    @observable user:any; //איך מגדירים שיוזר יהיה מסוג User
    @observable token:any; //בctor ככה שומרים עוד נתון במוביקס? צריך להוסיף משהו ?
    @observable role:any; 
    @observable numSystems:any;

    constructor() { 
        makeAutoObservable(this);    
    }
    @action
    loudUser = async(uid:string) => {
        const user=await getUserByUid(uid);
        this.user = user;
    }


}

const userStore = new UserStore();
export default userStore;