import { observable, computed ,makeAutoObservable, action} from "mobx";

export interface IMap {
    zoom:number,
    center:{lat:number,lng:number}
}

export class MapStore {

currentMap: IMap = {
    zoom:7,
    center:{lat:31.0461,lng:34.8516}
};

    constructor() {
        makeAutoObservable(this);
    }

    // @action
    setZoom=(zoom:number)=> {
    }

     setCenter=(center:{})=> {
    }
    
  };

  const mapStore = new MapStore();
export default mapStore;
