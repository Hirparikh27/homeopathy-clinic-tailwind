import React from "react";
import frameImg from "../assets/images/Frame.png";
import leafImg from "../assets/images/image 105.png";

const TextRibbon = () => {
  return (
    <div className="bg-[#FAF5F0] w-full flex items-center justify-center mb-10 md:mb-12 lg:mb-20 px-5 py-10 md:py-12 lg:h-[180px] lg:px-2">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="font-cooper font-normal text-[#1A1A1A] text-center leading-[1.2] text-[28px] md:text-[42px] lg:text-[56px]">
          BHMS Qualified Doctor,{" "}
          <img
            src={frameImg}
            alt="flower"
            className="w-auto inline-block align-middle mx-[10px] relative -top-1 h-[30px] lg:h-[60px] md:h-[50px]"
          />{" "}
          Safe for All Ages <br />
          Holistic & Natural Treatment{" "}
          <img
            src={leafImg}
            alt="leaf"
            className="w-auto inline-block align-middle mx-[10px] relative -top-1 h-[30px] lg:h-[60px] md:h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TextRibbon;
