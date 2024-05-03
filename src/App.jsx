import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  const galleryImages=[{
    name:'ceiling',
    img:'https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-ceiling-of-the-library-at-the-university-of-cambridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name:'Kitchen',
    img:'https://images.pexels.com/photos/21369952/pexels-photo-21369952/free-photo-of-a-pot-and-kettle-sit-on-a-stove.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name:'fog',
    img:'https://images.pexels.com/photos/6296905/pexels-photo-6296905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name:'flowers',

    img:'https://images.pexels.com/photos/20684681/pexels-photo-20684681/free-photo-of-a-close-up-of-a-flower-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },{
    name:'redFlowers',

    img:'https://images.pexels.com/photos/21293939/pexels-photo-21293939/free-photo-of-a-close-up-of-a-bouquet-with-red-and-brown-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },


]
  return (
 
    <Router>
    <Routes>
      <Route path="/" element={
      <div>   <Navbar/> <Home /></div>
  } />
      <Route path="/gallery" element={
       
          <div className="App">
            <Navbar/>
            <strong>Responsive Photo Gallery</strong>
            <br />
            <br />
            <Gallery gallery={galleryImages} />
          </div>
      } />
    </Routes>
  </Router>
  );
}

export default App;
