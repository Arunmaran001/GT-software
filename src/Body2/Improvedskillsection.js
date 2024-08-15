import React from 'react'
import img from '../images/image10.jpg'
import "./Improvrskillsectiom.css";


function Improvedskillsection() {
  
const list = [
  "Learn new recepies",
  "Experiment with food",
  "Write your own recepies",
  "Know nutrition facts",
  "Get cooking tips",
  "Get ranked"
]


return (
  <div className="section improve-skills">
      <div className="col img">
      <img src={img} alt="" />
      </div>
      <div className="col typography">
          <h1 className="title">Improve Your Culinary Skills</h1>
          { list.map((item, index) => (
              <p className="skill-item" key={index}>{item}</p>
          )) }
          {/* <button className="btn" style={{backgroundColor:"#ff0056",color:"white"}}  onClick={handleSignupClick}></button> */}
      </div>
  </div>
)
}
 
export default Improvedskillsection

