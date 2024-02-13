import React, { useState, useEffect } from "react";
import Style from "./Input.css";
import Button from "./Button";

const Input = () => {
  
  let Data =  [
  {
    id: 1,
    on: false
  },
  {
    id: 2,
    on: false
  },
  {
    id: 3,
    on: true
  },
  {
    id: 4,
    on: false
  },
  {
    id: 5,
    on: true
  },
  {
    id: 6,
    on: false
  }
];

  let [isOn, setIsOn] = useState(Data);
 
  let [isEmpty, setIsEmpty] = useState([]);
  
  let [name, setName] = useState({
    email: "",
    password: "",
    confirm: "",
    check: false,
    value: ""
  })
  
  let [count, setCount] = useState(1);
  
  let [starwarsData, setStarwarsData] = ({});
  
  useEffect(() => 
    fetch(`https://swapi.dev/api/people/${count}`)
     .then(res => res.json)
     .then(data => alert(data)), [count]
  )
  
  const toggle = (id) => {
    setIsOn(isOn => {
      return isOn.map(square => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }
  
  const alerty = (event) => {
    const {name, type, value, checked} = event.target
    setName(prevName => {
      return{
        ...prevName,
        [name]: type == "checkbox" ? checked : value
      }
    })
  }
  
  let pass;
  let see = () => {
    pass = name.password != name.confirm ? "Passwords do not match" : "Passwords match"
    alert(pass)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name);
  }

  let boxes = isOn.map(data => <Button 
  key={data.id}
  on={data.on}
  click={() => toggle(data.id)}
  />
  );
  
  return(
    <div className="inputContainer">
    {isEmpty.length > 0 ? <h1>You have {isEmpty.length} unread
    message{isEmpty.length > 1 && "s"}</h1> :
    <h1>You're All Caught Up</h1>}
      <button onClick= {count => setCount(count + 1)}></button>
    </div>
  )
}

export default Input;
//{boxes}
/*
<form onSubmit={handleSubmit} >
      <input
      name="email"
      type="email"
      value={name.email}
      onChange={alerty}
      placeholder= "Enter an email"
      />
      <input
      name="password"
      type="password"
      value={name.password}
      onChange={alerty}
      placeholder= "Enter a password"
      />
      <input
      name="confirm"
      type="password"
      value={name.confirm}
      onChange={alerty}
      placeholder= "Confirm password"
      />
      <p>{pass}</p>
      <div className="check">
        <input
        name="check"
        type="checkbox"
        checked={name.check}
        onChange={alerty}
      />
      <p>Do You Agree to our terms and conditions</p>
      </div>
      <select
      value={name.value}
      onChange={alerty}
      name="value"
      >
        <option value="" >-- Choose a value --</option>
        <option value="val1" >Val 1</option>
        <option value="val2" >Val 2</option>
        <option value="val3" >Val 3</option>
        <option value="val4" >Val 4</option>
        <option value="val5" >Val 5</option>
        <option value="val6" >Val 6</option>
        <option value="val7" >Val 7</option>
        <option value="val8" >Val 8</option>
        <option value="val9" >Val 9</option>
        <option value="val10" >Val 10</option>
      </select>
      <button onClick={see}>Submit</button>
    </form>
*/