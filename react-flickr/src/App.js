import React, { Component } from 'react';
import './templatemo_style.css';
import Image from './components/Image';
import connectAPI from './utils/connectAPI';
// import * as Config from './constants/Config';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listImage: [],
      page: 1,
      limit: 0,
      hasMoreImage: true,
    }
  }

  loadFunc = (page) => {
    console.log(page)
    connectAPI(page, 'GET', null).then((res) => {
      const data = res.data.photos;
      if (res.data) {
        this.setState({
          listImage: [...this.state.listImage].concat(data.photo)
        })
      } else {
        this.setState({
          hasMore: false
        })
      }

    })
  }

  render() {
    console.log(this.state.listImage)
    let images = this.state.listImage.map((image, index) => {
      return <Image
        key={index}
        image={image}
        index={index}
      />
    });
    const loader = (<div className="loader" key={0}>Loading ...</div>);
    return (
      <div className="container">
        <div className="navbar navbar-default">
          <a className="navbar-brand">Explore</a>
        </div>
          <InfiniteScroll
            pageStart={0}
            loadMore={(i) => this.loadFunc(i)}
            hasMore={this.state.hasMoreImage}
            loader={loader}
          >
            <div className="listImg">{images}</div>
          </InfiniteScroll>
      </div>
    );
  }
}

export default App;
