import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import HeaderMenu from "../components/HeaderMenu";

import styles from "./styles.module.scss";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const linkedinIconWidth = width < 768 ? 32 : width < 1024 ? 40 : 44;
  const githubIconWidth = width < 768 ? 32 : width < 1024 ? 40 : 44;
  const codepenIconWidth = width < 768 ? 34 : width < 1024 ? 42 : 46;
  const stackoverflowIconWidth = width < 768 ? 26 : width < 1024 ? 34 : 38;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="px-8 md:px-12 lg:px-20 bg-light-white min-h-screen relative overflow-hidden">
      <HeaderMenu
        isMenuVisible={isMenuVisible}
        setMenuVisibility={setMenuVisibility}
      />
      <div className="mt-[50%] flex flex-col w-full items-center md:relative md:z-10 xl:mt-[10%] 2xl:mt-[15%]">
        <h1 className="font-Arial font-black text-[40px] leading-[3.5rem] text-navy-blue md:text-center lg:text-6xl">
          ALI RADMANESH
        </h1>
        <div className="flex items-center mt-1 mr-3 lg:mt-4 lg:mr-0">
          <div className="w-[3ch] h-[6px] ml-[6px] bg-green md:w-16 md:ml-3 md:mr-[6.5rem] lg:w-24 lg:h-[10px] lg:ml-0 lg:mr-32" />
          <h2 className="font-Arial font-black text-sm text-navy-blue ml-2 lg:text-2xl">
            FRONT-END DEVELOPER
          </h2>
        </div>
      </div>
      <div
        className={`${
          isMenuVisible ? "hidden" : "relative"
        } mt-[50%] w-full grid grid-cols-4 grid-rows-1 gap-x-[44px] z-10 md:mt-[45%] md:gap-x-4 md:px-32 md:justify-items-center xl:mt-[13%] xl:px-72 2xl:px-[30rem]`}
      >
        <a
          href="https://www.linkedin.com/in/ali-radmanesh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="ant-design:linkedin-outlined"
            width={linkedinIconWidth}
            className="text-navy-blue"
          />
        </a>
        <a
          href="https://github.com/AliRadmanesh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="iconoir:github-outline"
            width={githubIconWidth}
            className="text-navy-blue"
          />
        </a>
        <a
          href="https://codepen.io/ali_radmanesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="bxl:codepen"
            width={codepenIconWidth}
            className="text-navy-blue"
          />
        </a>
        <a
          href="https://stackoverflow.com/users/4579834/ali-radmanesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="academicons:stackoverflow"
            width={stackoverflowIconWidth}
            className="text-navy-blue"
          />
        </a>
      </div>
      <div className={styles.blurry_gradient} />
    </div>
  );
}
