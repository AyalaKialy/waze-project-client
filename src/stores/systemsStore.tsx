
import {  observable, computed ,makeAutoObservable,action} from "mobx";
import { createSystem, getAllSystems, getSystemByManagerId, getSystemByUrlName } from "../api/system";

import { System } from "../models/system.model";

export class SystemsStore {
@observable systems: System[] = [];

@observable system: System = {   topic:'', objectName:'', managerId:'', urlName:'',description:'', email:'', phone:'',systemUrl:''};

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
    loudsystems = async(managerId:string) => {
        const systems = await getSystemByManagerId(managerId);
        this.systems = systems;
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
        const data=await createSystem(system);
        return data;
        // this.system = data;
        // console.log(this.system);
    }


     @action
     setSystem = async (newSystem: System) => {
         this.system = newSystem;
    }
//   public addMarker = (marker: IMarker) => {
//     console.log("addMarker");
//     this.markers.push(marker);
//   };


//   public updateMarker = (updateMarker: IMarker) => {
//   console.log("updateMarker");
//     // const updateMarkers = this.markers.map(todo => {
//     //   if (todo.id === updatedTodo.id) {
//     //     return { ...updatedTodo };
//     //   }
//     //   return todo;
//     // });
//     // this.markers = updateMarkers;
//   };

//   public deleteMarker = (id: number) => {
//     console.log("deleteMarker");
//     // const updatedTodos = this.todos.filter(todo => todo.id !== id);
//     // this.todos = updatedTodos;
//     // toast.info("Todo deleted", {
//     //   position: toast.POSITION.BOTTOM_CENTER
//     // });
//   };

}
const systemsStore = new SystemsStore();
export default systemsStore;