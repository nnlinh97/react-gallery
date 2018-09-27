import React, { Component } from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    onMouseEnter = (e) => {
        e.preventDefault();
        this.setState({
            hover: true
        })
    }

    onMouseLeave = (e) => {
        e.preventDefault();
        this.setState({
            hover: false
        })
    }
    render() {
        let { image } = this.props;
        let info = "";
        if (this.state.hover) {
            info = (
                <div>
                    <p>{this.props.index + 1}.&nbsp;<b>{image.title}</b></p>
                    <label> by {image.ownername}</label><br />
                    <label>{image.views} views</label>
                </div>
            );
        }

        return (
            <div className="responsive" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="gallery">
                    <a href="https://farm2.staticflickr.com/1917/43093640830_01bc8b0b34.jpg">
                        <img src={image.url_s} alt="" width="300" height="200" />
                    </a>
                    {info}
                </div>
            </div>
        );
    }
}

export default Image;