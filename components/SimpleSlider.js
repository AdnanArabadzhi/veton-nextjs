import Image from 'next/image';
import React, { Component } from 'react';
import Slider from 'react-slick';
const image1 = require('../public/images/KuhnqS.jpg');
const image2 = require('../public/images/KuhnqS2.jpg');
import { API_URL } from '../environment';

import globalStyles from '../styles/global.js';

export default class SimpleSlider extends Component {
  render() {
    let carousel = this.props.carousel;
    let styling = this.props.styling;
    let image = carousel.gallery[0];

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      //
      // fade: true,
      accessibility: true,
      slidesToScroll: 1,
      adaptiveHeight: true,
      // arrows: true,
      // variableWidth: true,
      // width: 500,
      // height: 500,
    };

    return (
      <div>
        <Slider {...settings} style={{ width: '100%' }}>
          {/* {carousel.map((image) => (
                      <div>
                      <Image
                        src={'http://localhost:1337' + image.url}
                        alt="nz2"
                        width={640}
                        height={400}
                        layout="responsive"
                      ></Image>
                    </div>
          )} */}

          {carousel.gallery.map((image) => (
            <div key={image.id}>
              <div>
                <h1 className="title">{image.alternativeText}</h1>
              </div>
              <Image
                loading="eager"
                className="image"
                src={API_URL + image.url}
                alt="nz2"
                width={image.width}
                height={image.height}
                layout="responsive"
              ></Image>
            </div>
          ))}
        </Slider>
        {/* // <div>
          //   <Image
          //     src={'http://localhost:1337' + carousel}
          //     alt="nz2"
          //     width={640}
          //     height={400}
          //     layout="responsive"
          //   ></Image>
          // </div>
          // <div>
          //   <Image
          //     src={image1}
          //     alt="nz2"
          //     width={640}
          //     height={400}
          //     layout="responsive"
          //   ></Image>
          // </div>
        // </Slider>*/}
        <style jsx>{styling}</style>
      </div>
    );
  }
}
