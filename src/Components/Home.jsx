import React, { useEffect, useRef } from 'react';
import './Home.css';
import sadhu from './image.png';
import house from './House.png';
import peter from './Peter.png'
import { gsap } from 'gsap';
import bubble from './SpeechBubble.png'
import { useGSAP } from '@gsap/react';
const Home = () => {
const gsapref=useGSAP(()=>{
  gsap.from(gsapref.current,{
    x:1000,
    duration:2,
    delay:1
  })
})

  return (
    <div className='Home'>
      <div className="Main">
        <div className="Title">
          <br />
          <strong>Welcome to imagica</strong>
          <p>Store your Memories</p>
          <button><b>Explore More</b></button>
        </div>
        <div className="img">
          <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9pbmRpYW5fZmFtaWx5X2hhcHB5X21vZGVybl9mYW1pbHlfcF8yMGU4ZjM0My00NWQwLTRjNGYtYjk4Ny1hYWZkODRiN2MxMGFfMS5qcGc.jpg" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxs3-8L5bOlvVgcgom86ucxAkt9xmcKLymfZLby21SbQ&s" alt="" />
          <img src="https://t3.ftcdn.net/jpg/06/69/94/84/360_F_669948452_Ew9QwGAnVvhZTjLgqECytuoRSallQt95.jpg" alt="" />
        </div>
      </div>
      <div ref={gsapref} className="AboutUs" >
        <h2 style={{ color: '#fff' }}>AboutUs</h2>
        <div className="description" >
          <p>Click photos of your loved one's, and create memories
            <br />
            <br />
            <button className='upload'>Upload</button>
          </p>
          <div className="imgBox" >
            <img src={house} alt="" id='img1' />
            <img src={sadhu} alt="" id='img3' />
          </div>
        </div>
      </div>
      <div className="Camera">
      <div className="txtBubble">
                <img src={bubble} alt=""  />
                <p>Say cheese!</p>
</div>
<img className='peter' src={peter} alt="" />
      </div>
      <footer>
        <div className="foot">
          <ul>
            <h2>Contact Us</h2>
            <li>
            Phone: [Your Phone Number]



          </li>
          <li>
          Email: [Your Email Address]
          </li>
          <li>
          Address: [Your Physical Address, if applicable]

            </li>
            </ul>
          <ul>
            <h2>Quick Links:

</h2>
            <li>Home</li>
            <li>Gallery</li>
            <li>Arists</li>
           
          </ul>
        <ul className="NewsLetter">
          <h3>Privacy Policy | Terms of Service

</h3>
<p>Subscribe to Our Newsletter: <br />
Stay updated with our latest exhibitions, events, and artist features.</p>
<br />
<div className="inputBox">
<input type="text" value="" placeholder='Subscribe Here' />
<button>Subscribe</button>
</div>

        </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
