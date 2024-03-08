import React, {useState} from "react";
import Functionbased from "./Functionbased";
import Classbased from "./Class";
import './App.css';
function App() {
   const[slide,setSlide]=useState();
   return(
    <div>
       {slide?<Classbased />:<Functionbased />}
       <button className="button" onClick={()=>setSlide(!slide)}>Change Component</button>
    </div>
   )
}

export default App;
