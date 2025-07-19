import { useState, useCallback,useEffect, useRef } from "react";
import './App.css'


function App(){

  const[length, setLength] = useState(8);
  const[number, setNumber] = useState(false);
  const[char, setChar] = useState(false);
  const[password, setPassword] = useState('');

  const copyPassword = useCallback(()=>{
    inputref.current?.select();
    inputref.current?.setSelectionRange(3,7);//agr kisi range mein select krna hai toh
    window.navigator.clipboard.writeText(password);//window object milta hai only in react env, next js mein server side rendering hoti hai toh not available there
   
  }, [password])

  const inputref = useRef(null);

  const passwordGenerator = useCallback(()=>{
     let pass = "";
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(number) str+= "0123456789";
      if(char) str+= "!@#$%^&*_+{}[]()";

      for(let i=0; i<length; i++){
        const element = Math.floor( Math.random() * str.length + 1);
        pass += str.charAt(element);
      }
      setPassword(pass);
  },[length, number, char, setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[passwordGenerator, length, number, char])

  return(
    <div className="app">

      <h1>Password Generator</h1>

      <div className="main">


          <div className="display">

          <input 
          type="text"
          id="password"
          placeholder="Password"
          value={password}
          readOnly
          ref = {inputref}        
          />
           <button
           onClick={copyPassword}
           >Copy</button>
          </div>
          

          <div className="setting">

            <input type="range"
            min = "8"
            max= "20"
            value={length}
            onChange={(e)=>setLength(Number(e.target.value))}
            />
            <label>length</label>

            <input type="checkbox"
            defaultChecked={number}
            id="number-input"
            onChange={()=>{
              setNumber((number)=>!number);
            }}
            />
            <label>Number</label>


            <input type="checkbox"
            defaultChecked={char}
            id="number-input"
            onChange={()=>{
              setChar((prev)=>!prev);
            }}
            />
            <label>Character</label>

         
            

          </div>
  
      </div>

    </div>
  );
}

export default App;