import React, { Component } from 'react';
import Image from 'next/image';
// import useStyles from '../styles/carousel-styles';
import styles from './Carousel.module.css';

const image1 = require('../public/images/KuhnqS.jpg');
const image2 = require('../public/images/KuhnqS2.jpg');

export default function Carousel() {
  //   const classes = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        {/* <img src="../public/images/KuhnqS2.jpg" alt="nz"></img> */}
        <Image
          loading="eager"
          src={image2}
          alt="nz2"
          width={640}
          height={200}
          layout="responsive"
        ></Image>
        <Image
          loading="eager"
          src={image1}
          alt="nz3"
          width={640}
          height={200}
          layout="responsive"
        ></Image>
      </div>
      <button id="prev">prev</button>
      <button id="next">next</button>
    </div>
  );
}
