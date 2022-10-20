
import {  observable, computed ,makeAutoObservable,action} from "mobx";
import { createSystem, getAllSystems, getSystemByManagerId, getSystemByUrlName, getSystemsBySearchWord } from "../api/system";

import { System } from "../models/system.model";

export class SystemsStore {
@observable systems: System[] = [];

// @observable system: System = {_id:'',   topic:'', objectName:'', managerId:'', urlName:'',description:'', email:'', phone:'',systemUrl:''};
@observable system:any;

@observable AllSystems: System[] = [];

    constructor() {
        makeAutoObservable(this);
    }
    
    @action
    setAllSystems = async() => {
        const data = await getAllSystems();
        this.AllSystems = data;
    }

    @action
    loudsystems = async (managerId: string) => {
        console.log(managerId);
        const systems = await getSystemByManagerId(managerId);
        this.systems = systems;
    }

    @action
    SearchSystem = async (searchWord: String) => {
        console.log(searchWord);
        const data = await getSystemsBySearchWord(searchWord);
        if(data.length)
            this.AllSystems = data;  
    }

//    @action
//     loudSystem = async(url:string) => {
//         const system=await getSystemByUrlName(url);
//         console.log(system);
//         this.currentSystem = system;
//         console.log(this.currentSystem);
//     }

    @action
    addSystem = async(system:System) => {
        const data = await createSystem(system);
        return data;
    }

     @action
     setSystem = (newSystem: System) => {
         this.system = newSystem;
         console.log(this.system);
    }

}
const systemsStore = new SystemsStore();
export default systemsStore;