import React from 'react';
import './style.css';
import UnorderedList from '../UnorderedList';
import Modal from '../Modal';


const Category = ({category}) => {
    const [isLarge, setIsLarge] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const hasGivenEmailAddress = () => {
      if (email) {
        setIsLarge(!isLarge)
      } else {
        setShowModal(true)
      }
    }


    return (
      <div className='category'>
          <button 
            onClick={() => setIsLarge(!isLarge)} 
            style={{fontSize: isLarge ? '20px' : '16px'}}>
            {category.name}
          </button>
          {showModal ? <Modal /> : 
          <div>
            {isLarge && 
            <div className='categoryInfo'>
              <p>{category.description}</p>
              <UnorderedList title={"Scenarios you may need this tool: "} unorderedList={category.reasons}/>
              <UnorderedList title={"Vendors"} unorderedList={category.vendors}/>
            </div>}
          </div>}
      </div>
    )
}

export default Category;