import React from 'react';
import './style.css';
import VendorList from '../VendorList';


const Category = ({category}) => {
    const [isLarge, setIsLarge] = React.useState(false);
  
    return (
      <div className='category'>
          <button 
            onClick={() => setIsLarge(!isLarge)} 
            style={{fontSize: isLarge ? '20px' : '16px'}}>
            {category.name}
          </button>
          {isLarge && 
          <div>
            <p style={{paddingLeft: '10px'}}>{category.description}</p>
            <VendorList vendorList={category.vendors}/>
          </div>}
      </div>
    )
}

export default Category;