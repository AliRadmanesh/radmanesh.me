import React, { useState, useEffect } from "react";
import Image from "next/image";

import HeaderMenu from "../components/HeaderMenu";
import SocialLinks from "../components/SocialLinks";

import styles from "./styles.module.scss";

import AliImage from "../public/images/Ali_Radmanesh.jpg";

const Home = () => {
  const [width, setWidth] = useState(0);

  const AliImageDimension =
    width < 640 ? 250 : 768 ? 300 : width < 1024 ? 400 : 500;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 bg-dark min-h-screen relative overflow-hidden">
      <HeaderMenu />
      <div className="flex flex-col md:flex-row mt-12 md:mt-14 lg:mt-16 xl:mt-20 md:justify-center md:items-center">
        <div className="flex justify-center items-center md:mr-14 lg:mr-16 xl:mr-20">
          <Image
            src={AliImage}
            alt="Ali Radmanesh"
            placeholder="blur"
            width={AliImageDimension}
            height={AliImageDimension}
            className={styles.ali_image}
          />
        </div>
        <div>
          <p className="font-Arial font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[3.5rem] md:leading[4rem] lg:leading-[4.5rem] xl:leading-[5rem] text-light-white text-left">
            Hi,
            <br />
            I&rsquo;m <span className="text-orange">Ali Radmanesh</span>
            <br /> A Web Developer
          </p>
          <SocialLinks />
        </div>
      </div>
      {/* <div className={styles.blurry_gradient} /> */}
    </div>
  );
};

export default Home;
