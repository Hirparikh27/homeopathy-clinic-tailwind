import React from "react";
import { Link } from "react-scroll";
import logoImg from "../assets/images/Group.png";
import whatsappIcon from "../assets/images/wp.svg";
import instagramIcon from "../assets/images/insta.svg";
import facebookIcon from "../assets/images/FB.svg";
import youtubeIcon from "../assets/images/yt.svg";

const Footer = () => {
  return (
    <footer className="bg-[#FAF5F0] pt-[60px] sm:pt-[80px] pb-[30px] sm:pb-[40px]">
      <div className="container px-3 sm:px-5 mx-auto max-w-[1158px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-0 mb-12 sm:mb-20">
          {/* Brand Column */}
          <div className="flex flex-col items-start w-full lg:max-w-[531.31px] gap-[20px] sm:gap-[25px]">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer no-underline"
            >
              <img
                src={logoImg}
                alt="Enaaya"
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="font-cooper text-[24px] sm:text-[28px] lg:text-[34.18px] font-normal text-[#295C51] tracking-[0.04em] leading-none">
                  Enaaya
                </span>
                <span className="font-instrument text-[14px] sm:text-[16px] lg:text-[18.43px] text-[#E8B086] font-semibold tracking-[0.03em] leading-none capitalize mt-0.5 sm:mt-1">
                  Homeopathy
                </span>
              </div>
            </Link>
            <p className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[130%] text-[#1A1A1A99]">
              Homeopathy is a natural system of medicine that stimulates the
              body&apos;s self-healing ability.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-[#295C51]/20 flex items-center justify-center transition-all duration-300 hover:bg-[#295C51] group"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-auto h-5 sm:h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>
              <a
                href="#"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-[#295C51]/20 flex items-center justify-center transition-all duration-300 hover:bg-[#295C51] group"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-auto h-5 sm:h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>
              <a
                href="#"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-[#295C51]/20 flex items-center justify-center transition-all duration-300 hover:bg-[#295C51] group"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-auto h-5 sm:h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>
              <a
                href="#"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-[#295C51]/20 flex items-center justify-center transition-all duration-300 hover:bg-[#295C51] group"
              >
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-auto h-5 sm:h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-[104px] w-full lg:w-auto">
            {/* Quick Links Column */}
            <div className="flex flex-col w-full lg:w-[113px]">
              <h3 className="font-josefin font-bold text-[18px] sm:text-[20px] text-[#295C51] mb-4 sm:mb-6">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-[16px] sm:gap-[24px]">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 cursor-pointer no-underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 cursor-pointer no-underline"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 cursor-pointer no-underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonials"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 cursor-pointer no-underline"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div className="flex flex-col w-full lg:w-[211px]">
              <h3 className="font-josefin font-bold text-[18px] sm:text-[20px] text-[#295C51] mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-[16px] sm:gap-[24px]">
                <div className="flex flex-col gap-1">
                  <span className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51]">
                    Email
                  </span>
                  <a
                    href="mailto:hello@enaaya.com"
                    className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 no-underline"
                  >
                    hello@enaaya.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51]">
                    Phone
                  </span>
                  <a
                    href="tel:+11234567890"
                    className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 no-underline"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51]">
                    Clinic Timings:
                  </span>
                  <span className="font-josefin font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#295C51]">
                    Mon-Sat, 9 AM - 7 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#295C51]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-josefin font-normal text-[14px] sm:text-[18px] lg:text-[21px] text-[#295C51] text-center md:text-left">
            &copy; 2025 NAME. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="font-josefin font-normal text-[14px] sm:text-[18px] lg:text-[21px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 no-underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-josefin font-normal text-[14px] sm:text-[18px] lg:text-[21px] text-[#295C51] hover:text-[#E8B086] transition-colors duration-300 no-underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
