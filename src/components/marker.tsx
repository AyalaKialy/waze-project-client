
import React from 'react';
import '../css/marker.css';

export default function Marker(props:any) {
    const { color, name, id ,description, phone} = props;
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={'name: '+name+' '+'details: '+ description+' '+'phone :'+ phone}
        />
        <div className="pulse" />
      </div>
    );
  };
