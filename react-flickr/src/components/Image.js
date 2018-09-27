import React, { Component } from 'react';

class Image extends Component {
    render() {
        let {image} = this.props;
        return (
            <div className="responsive">
                <div className="gallery">
                    <a href="https://farm2.staticflickr.com/1917/43093640830_01bc8b0b34.jpg">
                        <img src={image.url_s} alt="" width="300" height="200" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Image;