// import React from 'react'
import './pin.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Pinned = () => {


    useGSAP(()=> {
        ScrollTrigger.create({
          trigger:".right",
          markers:true,
          start:"top top",
          end:"bottom top",
          pin:".box",
          scrib:true,
        })})
        


  return (
    <div className="main-container">
     
    <div className="left">
    <div className="gallery">
      <h1>Frontender</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a, saepe consectetur autem id facere corrupti. Sequi, doloremque nam? Sit, officiis nemo! Nostrum, nobis error repudiandae aliquam magnam veritatis iusto?</p>
    </div>
    <div className="gallery">
      <h1>Frontender</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a, saepe consectetur autem id facere corrupti. Sequi, doloremque nam? Sit, officiis nemo! Nostrum, nobis error repudiandae aliquam magnam veritatis iusto?</p>
    </div>
    <div className="gallery">
      <h1>Frontender</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a, saepe consectetur autem id facere corrupti. Sequi, doloremque nam? Sit, officiis nemo! Nostrum, nobis error repudiandae aliquam magnam veritatis iusto?</p>
    </div>

    </div>
    <div className="right">
      <div className="box">

      </div>
    </div>
</div>    

)
}

export default Pinned