import { observable, makeAutoObservable, action} from "mobx";

export interface IMap {
    zoom:number,
    center: { lat: number, lng: number }
}

export class MapStore {

 @observable currentMap: IMap = {
    zoom:8,
     center: { lat: 31.0461, lng: 34.8516 },
};

    constructor() {
        makeAutoObservable(this);
    }

    @action
   setZoom = (zoom:number) => {
        this.currentMap.zoom = zoom;
    }
    
    @action
     setCenter = (lat:number,lng:number) => {
        this.currentMap.center.lat = lat;
        this.currentMap.center.lng = lng;
    }
    
  };

  const mapStore = new MapStore();
export default mapStore;
