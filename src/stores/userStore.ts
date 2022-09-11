import { Console } from 'console';
import {autorun, observable, computed,action, makeAutoObservable } from 'mobx';
import { getManagerByUserId, getManagerByUserIdAndBySystemId } from '../api/manager';
import { getSystemByManagerId } from '../api/system';
import { getUserByUid } from '../api/user';
import { Role } from '../models/manager.model';
import { User } from '../models/user.model';


export class UserStore {
    @observable user:any;
    @observable token:any; 
    @observable manager:any;  
    @observable numSystems:number | undefined; //נתון לשמירה גלובלית כמה סיסטמס למשתמש זה
    @observable potoUrl:string | undefined;

    constructor() { 
        makeAutoObservable(this);    
    }
    @action
    setUser = async(uid:string) => {
        const user=await getUserByUid(uid);
        this.user = user;
        console.log(user);
    }
     @action
    setManager = async(userId:string,systemId:string) => {
      const manager=await getManagerByUserIdAndBySystemId(userId,systemId);
      this.manager=manager;
      console.log(this.manager);
    }

     @action
    setNumSystems = async(userId:string) => {
      const data=await getSystemByManagerId(userId);
      console.log(data);
      this.numSystems=data.length;
      console.log(this.numSystems);
    }

   @action
    setToken = (token:string) => {
      this.token=token;
      console.log(this.token);
    }

     @action
    setPotoUrl = (poto:string) => {
      this.potoUrl=poto;
      console.log(this.potoUrl);
    }



}

const userStore = new UserStore();
export default userStore;