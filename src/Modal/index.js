import React from 'react';
import './style.css';


const Modal = () => {
    return (
        <div className='modal'>
            <div className='modalContent'>
                <h1>Enter your email address</h1>
                <input type='email' placeholder='Enter your email address' />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Modal;