import './border.css' 
import gsap from 'gsap' 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, scroll)
const Border = () => {
gsap.utils.toArray(".border").forEach((border)=> {
    ScrollTrigger.create({
      trigger:border,
      start:"top 30%",
      toggleClass:"active",
      markers:true,
    })
  })
  
  return (
    <div className="wrapper">
    <div className="skill-wrapper">
      <div className="skill-content"><h1>HTML</h1></div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">HTML</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">HTML</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">HTML</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">HTML</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">HTML</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">HTML</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">HTML</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">CSS</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">JAVASCRIPT</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">NODE</div>
      <div className='border'></div>
    </div>
    <div className="skill-wrapper">
      <div className="skill-content">EXPRESS</div>
      <div className='border'></div>
    </div>
  </div>
  )
}

export default Border