import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const SocialLinks = () => {
  const [width, setWidth] = useState(0);

  const linkedinIconWidth = width < 768 ? 32 : width < 1024 ? 36 : 40;
  const githubIconWidth = width < 768 ? 32 : width < 1024 ? 36 : 40;
  const codepenIconWidth = width < 768 ? 34 : width < 1024 ? 38 : 42;
  const stackoverflowIconWidth = width < 768 ? 26 : width < 1024 ? 30 : 34;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="mt-10 mb-4 w-full grid grid-cols-4 grid-rows-1 gap-x-[44px] md:gap-x-4 md:justify-items-center">
      <a
        href="https://www.linkedin.com/in/ali-radmanesh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="ant-design:linkedin-outlined"
          width={linkedinIconWidth}
          className="text-light-white"
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
          className="text-light-white"
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
          className="text-light-white"
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
          className="text-light-white"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
