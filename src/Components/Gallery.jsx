import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import './Gallery.css'
const Gallery = ({gallery}) => {
  const [slideNumber,setSlideNumber]=useState(0)
  const [openImg,setOpen]=useState(false)
  const [display,setDisplay]=useState(true)

  const [text,setText]=useState("");

  const handleOpen=(index)=>{
    setSlideNumber(index)
    setOpen(true)
     setDisplay(false)
  }
  
    const handleClose=()=>{

  setOpen(false)
  setDisplay(true)

  }
  const handlePrev=()=>{
    slideNumber===0?setSlideNumber(gallery.length-1):setSlideNumber(slideNumber -1)
  }
  const handleNext=()=>{
    slideNumber===gallery.length-1?setSlideNumber(0):setSlideNumber(slideNumber+1)
  }
  
    return (
        <div className='container'> 
                    <strong>Responsive Photo Gallery</strong>

              <div className='inputBox'>
            <input
                type="text"
                placeholder='Search Image here'
                 onChange={e=>setText(e.target.value)}
              />
              <button>🔍</button>
            
        </div>
        <br />
            <br />
            {
                openImg && 
                <div className="slideWrap">
                <FontAwesomeIcon onClick={handleClose} icon={faCircleXmark} className='btnclose' />
                <FontAwesomeIcon onClick={handlePrev} icon={faCircleChevronLeft} className='btnleft' />
                <FontAwesomeIcon onClick={handleNext} icon={faCircleChevronRight} className='btnright' />
               <div className="fullscreenImage">
                <img src={gallery[slideNumber].img} alt="" />
        
               </div>
               {slideNumber+1}/{gallery.length}
                </div>
            }
           
            
             <div className='galleryWrapper' style={{display:display?'flex':'none'}}  >
        {
            gallery && 
            gallery.filter((val)=>{
                if(text===""){
                    return val;
                }else if(val.name.toLowerCase().includes(text.toLowerCase())){
                  return val;                    
                }
            })
            .map((slide,index)=>{
                return(
                    <div className="images" key={index} onClick={()=>handleOpen(index)}>
                    <img src={slide.img} alt="" />
                     </div>
                )
            })
        }
    </div>
      </div>
  
  )
}

export default Gallery;