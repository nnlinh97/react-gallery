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
                <div className="img__description">
                    <h4>{image.title}</h4>
                    <p>by {image.ownername}</p>
                    <p>{image.views} views</p>
                </div>
            );
        }

        return (
            <div className="singleImg"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <img

                    src={image.url_s}
                    alt={image.id}
                />
                {info}
            </div>
        );
    }
}

export default Image;