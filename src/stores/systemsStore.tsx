import {  observable, computed ,makeAutoObservable,action} from "mobx";
import { getSystemByManagerId } from "../api/system";
import { System } from "../models/system.model";

export class SystemsStore {
@observable systems: System[] = [];
// @observable system: System = {};

    constructor() {
        makeAutoObservable(this);
    }

    @action
    loudsystems = async(managerId:string) => {
        const systems=await getSystemByManagerId(managerId);
        this.systems = systems;
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