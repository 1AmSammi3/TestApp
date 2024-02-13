import React from "react"
import Style from "./Button.css"

const Button = (props) => {
  
  let mode = props.on ? "On" : "Off";
  
  const styles = {
    background: props.on ? "lightyellow" : "black",
    color: props.on ? "black" : "white",
    border: "solid 1px"
  }
    
  return(
    <button 
    height="50px"
    width="50px"
    onClick={props.click}
    style={styles}
    >
    {mode}
    </button>  
  )
}

export default Button