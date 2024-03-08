import React, { Component } from 'react';
import axios from 'axios';

class Classbased extends Component {
  state = {
    data: '',
    randomnumber: ''
  }

  //This Function generate Random Number
  GenerateRandomNumber = () => {
    const rnumber = Math.floor((Math.random() * 100) + 1);

    // api call
    axios.get(`https://dummyjson.com/products/${rnumber}`)
      .then(Response => {
        const data = Response.data;
        this.setState({ data: data });
      })
  }
  // render data
  render() {
    return (
      <div>
        <div className="App">

          <h1 className="header">Class Based Products Details</h1>

          {this.state.data ?
            <div>
              <h2>TITLE:{this.state.data.title}</h2>
              <h2>BRAND:{this.state.data.brand}</h2>
              <h2>PRICE:{this.state.data.price}</h2>
              <h2>IMAGE:</h2>
              <img src={this.state.data.images[0]} alt=""/>
            </div>
            : <h2>NO RECORD FOUND !!</h2>}
          <button onClick={this.GenerateRandomNumber}>Change Record</button>
        </div>
      </div>

    )
  }
}
export default Classbased