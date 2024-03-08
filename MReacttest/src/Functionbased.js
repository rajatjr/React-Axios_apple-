import React, { useEffect, useState } from "react";
import axios from 'axios';
function Functionbased() {

  const [data, setData] = useState(0);
  const [randomnumber, setRandomnumber] = useState()

  //This Function generate Random Number
  function GenerateRandomNumber() {
    const rnumber = Math.floor((Math.random() * 100) + 1);
    setRandomnumber(rnumber);
  }

    // api call

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${randomnumber}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
  }, [randomnumber]);

  // render data
  
  return (
    <div>
      <div className="App">

        <h1 className="header">Function Based Products Details</h1>

        {data ?
          <div>
            <h2>TITLE:  {data.title}</h2>
            <h2>BRAND:  {data.brand}</h2>
            <h2>PRICE:  {data.price}</h2>
            <h2>IMAGE:</h2>
              <img src={data.images[0]} alt=""/>
          </div>
          : <h2>NO RECORD FOUND !!</h2>}
        <button onClick={GenerateRandomNumber}>Change Record</button>
      </div>
    </div>

  )
}

export default Functionbased;
