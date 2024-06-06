import React from 'react';
import './style.css';


const VendorList = ({vendorList}) => {
    return (
      <ul>
          {vendorList.map((vendor, index) => <li key={index}><a    
            href={vendor.link}>{vendor.name}</a></li>)}
        </ul>
    )
}

export default VendorList;