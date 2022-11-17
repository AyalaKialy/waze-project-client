import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createSystem } from '../api/system';
import {System} from '../models/system.model';
import {  useNavigate, useParams } from 'react-router-dom';
import userStore, { UserStore } from '../stores/userStore';
import { observer } from 'mobx-react';
import systemsStore from '../stores/systemsStore';
import { createManager, getManagerByUserIdAndBySystemId } from '../api/manager';
import { Role } from "../models/manager.model";
import NavBar from './navBar';
import Swal from 'sweetalert2';

 const CreateSystem = () => {
    const navigate = useNavigate();

    const [topic,setTopic] =useState('');
    const [objectName,setObjectName] =useState('');
    const [description,setDescription] =useState('');
    const [urlName, setUrlName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [systemUrl, setSystemUrl] = useState('');
    
    function isValidEmail(email: string) {
        return /^[-!#$%&\'*+\\.\/0-9=?A-Z^_`{|}~]+@([-0-9A-Z]+\.)+([0-9A-Z]){2,4}$/i.test(email);
    }
    function isValidPhone(phone: string) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
    }
    function isValidUrl(url: string) {
        return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(url);
    }

    const create = async () => {
        if (topic === "" || objectName === "" || description === "" || email === "" || phone === "" || urlName === "" || systemUrl === "" || !isValidEmail(email) || urlName.includes(" ") || !isValidPhone(phone) || !isValidUrl(systemUrl)) {
          console.log("Invalid");
            Swal.fire("your form is not validate!!", "You clicked the button!", "error");
        }
        else {
        console.log("Valid");
                    debugger;
        //create system
        const system = {
          topic: topic,
          objectName: objectName,
          managerId:String(userStore.user._id),
          description: description,
          urlName:urlName,
          email:email,
          phone:phone,
          systemUrl:systemUrl,
            }
            try{
             const data1=await systemsStore.addSystem(system);
             debugger
            //create manager
                const manager = {
                userId:String(userStore.user._id),
                systemId:String(data1?.data._id),
                active: true,
                display_name:String(userStore.user.lastName),
                role: Role.admin
            }
           const data= await createManager(manager);
           console.log(data);
            Swal.fire("Success!", "You clicked the button!", "success");
            debugger;
            navigate('/Begin');
            }catch(err){
                console.log(err);
            }
          }
        }

  return (
    <><NavBar></NavBar>
    <form className='auth-inner' onSubmit={create}>
      <h3>create new system</h3>
         <div className="mb-3">
          <label>topic</label>
                <TextField
                required
                multiline
                    type="string"
                    className="form-control"
                    placeholder="Enter topic"
                    onChange={(e) => setTopic(e.target.value)}
                    helperText={topic === "" ? "required!" : " "}
                    // error={topic === ""}
          />
        </div>
        <div className="mb-3">
          <label>objectName</label>
          <TextField
          required
            type="string"
            className="form-control"
                    placeholder="Enter objectName"
                    onChange={(e) => setObjectName(e.target.value)}
                    helperText={objectName === "" ? "required!" : " "}
                    // error={objectName === ""}
          />
        </div>
           <div className="mb-3">
          <label>description</label>
          <TextField
          required
            type="string"
            className="form-control"
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    helperText={description === "" ? "required!" : " "}
                    // error={description === ""}
          />
        </div>
            <div className="mb-3">
          <label>urlName</label>
          <TextField
          required
            type="string"
            className="form-control"
                    placeholder="Enter urlName"
                    onChange={(e) => setUrlName(e.target.value)}
                    helperText={urlName === "" ? "required!" : urlName.includes(" ") ? "url without space" : " "}
                    // error={(urlName === "" || urlName.includes(" "))}
          />
        </div>
          <div className="mb-3">
          <label>email</label>
          <TextField
          required
            type="string"
            className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    helperText={email === "" ? "required!" : isValidEmail(email) ? "" : "not valid email"}
                    // error={(email === "" || !isValidEmail(email))}
          />
        </div>
          <div className="mb-3">
          <label>phone</label>
          <TextField
          required
            type="string"
            className="form-control"
                    placeholder="Enter phone"
                    onChange={(e) => setPhone(e.target.value)}
                    helperText={phone === "" ? "required!" : isValidPhone(phone) ? "" : "not valid phone"}
                    // error={(phone === "" || !isValidPhone(phone)) }
          />
        </div>
          <div className="mb-3">
          <label>picture</label>
          <TextField
          required
            type="string"
            className="form-control"
                    placeholder="Enter picture"
                    onChange={(e) => setSystemUrl(e.target.value)}
                    helperText={systemUrl === "" ? "required!" : isValidUrl(systemUrl) ? "" : "not valid url"}
                    // error={systemUrl === ""  || !isValidUrl(systemUrl)}
          />
        </div>
          <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            </div>
    </form>
    </>
  );
}

export default observer(CreateSystem);