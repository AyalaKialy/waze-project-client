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
            lat:32.085504,
            lng: 34.886463,
        })
        this.markers.push({
            name: "cohen",
            description:"YY",
            phone:"089292929",
            lat: 31.0461,
            lng: 35.8516,
        })
    }

  public addMarker = (marker: IMarker) => {
    console.log("addMarker");
    this.markers.push(marker);
  };

  public updateMarker = (updateMarker: IMarker) => {
  console.log("updateMarker");
  };

  public deleteMarker = (id: number) => {
    console.log("deleteMarker");
  };

}
const markersStore = new MarkersStore();
export default markersStore;