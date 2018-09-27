import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  
  render() {
    const PHOTO_SET = [
      {
        src: "https://farm2.staticflickr.com/1917/43093640830_01bc8b0b34.jpg",
        width: 4,
        height: 3,
        title: "img 1"
      },
      {
        src: "https://farm2.staticflickr.com/1901/44862052082_1cb3c365e3.jpg",
        width: 1,
        height: 1,
        title: "img 1"
      },
      {
        src: "https://farm2.staticflickr.com/1908/44861722212_ca6a61df36.jpg",
        width: 4,
        height: 3,
      },
      {
        src: "https://farm2.staticflickr.com/1919/43091790340_bb695489b6.jpg",
        width: 1,
        height: 1,
        title: "img 1"
        
      },
      {
        src: "https://farm2.staticflickr.com/1903/31030626658_42fb04c266.jpg",
        width: 1,
        height: 1
      },
      {
        src: "https://farm2.staticflickr.com/1972/44911939711_b5d6fb7a78.jpg",
        width: 1,
        height: 1
      },
      {
        src: "https://farm2.staticflickr.com/1962/31031192018_a1d081e852.jpg",
        width: 1,
        height: 1
      }
    ];
    return (
      <div className="container">
        <div className="hover-img">
          <Gallery photos={PHOTO_SET} onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}/>
        </div>
      </div>
    );
  }
  _onMouseEnter = (e) => {
    e.preventDefault();
    this.setState({
      hover: true
    })
    console.log("aaaaaaa");
  }

  _onMouseLeave = (e) => {
    e.preventDefault();
    this.setState({
      hover: false
    })
  }
}

export default App;
