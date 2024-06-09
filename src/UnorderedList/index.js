import React from 'react';
import './style.css';


const UnorderedList = ({title, unorderedList}) => {
    return (
        <div className="unOrderedList">
            <p>{title}</p>
            <ul>
                {unorderedList.map((item, index) => <li key={index}><a    
                    style={{color: 'black'}} target="_blank" href={item.link ? item.link : null}>{item.name}</a></li>)}
            </ul>
        </div>
    )
}

export default UnorderedList;