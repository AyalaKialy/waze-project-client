import {  observable, action, makeAutoObservable} from "mobx";
import { getLocationsBySystemId, createLocation, deleteLocation, updateLocation } from "../api/location";
import { Location } from '../models/location.model';


export class MarkersStore {
  @observable markers: Location[] = [];
  @observable marker: Location = { managerId:'', systemId: '', lat: 0, lng: 0,description: '', name: '', notes: '', email: '', phone:''};
  @observable indexMarker: any = null;

    constructor() {
        makeAutoObservable(this);
  }
  
  @action
  loudLocations = async (systemId: string) => {
        this.markers = [];
        const locations = await getLocationsBySystemId(systemId);
        this.markers = locations;
        console.log('setArray ' + this.markers.length);

  }


  public addMarker = async (marker: Location) => {    
    this.markers.push(marker);

    await createLocation(marker);
    
  };

  // public updateMarker = (updateMarker: IMarker) => {
  // console.log("updateMarker");
  // };

  // public deleteMarker = (id: number) => {
  //   console.log("deleteMarker");
  // };

}
const markersStore = new MarkersStore();
export default markersStore;