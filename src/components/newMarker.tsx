import '../css/marker.css';
import Autocomplete from './autocomplete';
import markersStore from '../stores/markers.store';
import { useNavigate, useParams } from "react-router-dom";

export default function NewMarker() {

    const [name,setName] =useState('');
    const [description,setDescription] =useState('');
    const [phone, setPhone] = useState('');
    const [lat,setLat]= useState(0);
    const [lng,setLng]= useState(0);

    const create = async () => {
      try {
         await markersStore.addMarker(marker);
        markersStore.markers.map(marker => { 
        console.log(marker.name + ' ' + marker.lat + ' ' + marker.lng);
        })
        alert('the marker was added to the store ');
        navigate(`/MySystem/${systemUrl}`);

        }catch{
                console.log("failed in create marker");
            }
        }

    return (
      <form className='auth-inner' onSubmit={create}>
      <h3>create new marker</h3>
         <div className="mb-3">
          <label>name</label>
                <input
                    type="string"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(e) => marker.name  = e.target.value}
          />
        </div>
           <div className="mb-3">
          <label>description</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter description"
                    onChange={(e) => marker.description = e.target.value}
          />
        </div>
          <div className="mb-3">
          <label>phone</label>
          <input
            type="string"
            className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => marker.phone = e.target.value}
          />
        </div>
         <div className="mb-3">
          <label>location</label>
        <Autocomplete />
        </div>
          <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
    </form>
    );
  };
