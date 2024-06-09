import React from 'react';
import './App.css';
import Category from './Category';
import { categories } from './data';

const App = () => {

  return (
    <div className="modal-backdrop">
      <div className='titleContainer'>
        <h1>Trust and Safety Tools</h1>
        <span>A non-comprehensive list of the type of third-party tools and vendors that support Trust and Safety operations at scale.</span>
      </div>
      {categories.map((cat, index) => <Category key={index} category={cat} />)}
    </div>
  )
}

export default App;
