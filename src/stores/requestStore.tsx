import { Console } from 'console';
import {autorun, observable, computed,action, makeAutoObservable } from 'mobx';
import { getRequestsBySystemId } from '../api/request';


export class RequestStore {
    @observable requests:any;


    constructor() { 
        makeAutoObservable(this);    
    }
  
     @action
    getRequests = async(systemId:string) => {
      const data =await getRequestsBySystemId(systemId);
      this.requests = data;
      console.log(this.requests);
    }

}

const requestStore = new RequestStore();
export default requestStore;