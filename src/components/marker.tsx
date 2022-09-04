
import React from 'react';
import '../css/marker.css';
import { observer } from 'mobx-react';

const Marker = (props:any) => {
    const { color, name, id ,description, phone} = props;
    return (
      <div key={id}>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={'name: '+name+' '+'details: '+ description+' '+'phone :'+ phone}
        />
        <div className="pulse" />
      </div>
    );
};
  
export default observer(Marker);
