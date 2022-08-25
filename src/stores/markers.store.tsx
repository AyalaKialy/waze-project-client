import {  observable, computed ,makeAutoObservable} from "mobx";

export interface IMarker {
    name:string,
    description:string,
    phone:string,
    lat:number,
    lng:number
}

export class MarkersStore {
@observable markers: IMarker[] = [];
// currentMarker: any = null;

    constructor() {
        makeAutoObservable(this);

        this.markers.push({
            name: "levi",
            description:"EE",
            phone:"089798989",
            lat: 31.0461,
            lng: 34.8516,
        })
        this.markers.push({
            name: "COHEN",
            description:"YY",
            phone:"089292929",
            lat: 31.0461,
            lng: 36.8516,
        })
    }

  public addMarker = (marker: IMarker) => {
    console.log("addMarker");
    this.markers.push(marker);
  };

  public updateMarker = (updateMarker: IMarker) => {
  console.log("updateMarker");
    // const updateMarkers = this.markers.map(todo => {
    //   if (todo.id === updatedTodo.id) {
    //     return { ...updatedTodo };
    //   }
    //   return todo;
    // });
    // this.markers = updateMarkers;
  };

  public deleteMarker = (id: number) => {
    console.log("deleteMarker");
    // const updatedTodos = this.todos.filter(todo => todo.id !== id);
    // this.todos = updatedTodos;
    // toast.info("Todo deleted", {
    //   position: toast.POSITION.BOTTOM_CENTER
    // });
  };

}
  const markersStore = new MarkersStore();
export default markersStore;