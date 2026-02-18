import React from "react";
import footerImg from "../assets/images/footer-img.png";

const HomeopathyBanner = () => {
  return (
    <section className="relative w-full h-[456px] overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-[center_70%] bg-no-repeat"
        style={{ backgroundImage: `url(${footerImg})` }}
      ></div>

      {/* Content Container */}
      <div className="container relative z-10 max-w-[1190px] mx-auto px-4 lg:px-0">
        <h2
          className="font-cooper text-white text-[32px] sm:text-[42px] md:text-[52px] lg:text-[61px] font-normal leading-[1.1] max-w-[1000px] lg:leading-[100%]"
          style={{ letterSpacing: "0%" }}
        >
          Personalised homeopathic care <br className="hidden sm:block" />
          restoring balance to your mind <br className="hidden sm:block" />
          and body naturally.
        </h2>
      </div>
    </section>
  );
};

export default HomeopathyBanner;
