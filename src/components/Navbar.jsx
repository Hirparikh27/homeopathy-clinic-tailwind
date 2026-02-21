import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/Group.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [click]);

  return (
    <>
      <div className="w-full h-[95.77px]">
        <nav
          className={`w-full flex justify-center items-center z-[999] transition-all duration-300 ${
            scroll
              ? "fixed top-0 left-0 w-full h-16 sm:h-20 bg-background border-b border-primary/10 p-0"
              : "relative h-[70px] sm:h-[80px] md:h-[95.77px] bg-background py-4 sm:py-6 lg:py-8"
          }`}
        >
          <div className="max-w-[1190px] mx-auto flex justify-between md:justify-start items-center w-full p-0 px-4 md:gap-x-12">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              className="flex items-center gap-1.5 min-[414px]:gap-2 sm:gap-3 no-underline cursor-pointer flex-shrink-0"
              onClick={closeMobileMenu}
            >
              <img
                src={logo}
                alt="Enaaya"
                className="h-6 min-[414px]:h-8 sm:h-9 md:h-10 lg:h-12 w-auto"
              />
              <div className="flex flex-col line-clamp-1 leading-none">
                <span className="font-cooper text-[18px] min-[414px]:text-[24px] sm:text-[22px] md:text-[26px] lg:text-[34.18px] font-normal color-[#295C51] tracking-[0.04em] leading-none">
                  Enaaya
                </span>
                <span className="font-instrument text-[12px] min-[414px]:text-[14px] sm:text-[12px] md:text-[15px] lg:text-[18.43px] text-[#E8B086] font-semibold tracking-[0.03em] leading-none capitalize mt-0.5">
                  Homeopathy
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-3 sm:gap-2 md:gap-4 lg:gap-8 md:ml-auto">
              {/* Hamburger Icon: Visible on Mobile (default), Hidden on Desktop (lg) */}
              <div
                className="block md:hidden text-[1.3rem] min-[414px]:text-[1.5rem] sm:text-[1.8rem] text-primary-dark cursor-pointer z-50"
                onClick={handleClick}
              >
                {click ? <FaTimes /> : <FaBars />}
              </div>

              <ul
                className={`
            flex flex-col fixed top-0 left-0 w-full h-full bg-background transition-transform duration-500 z-40 pt-24 overflow-hidden touch-none
            ${click ? "translate-x-0" : "-translate-x-full"}
            md:flex-row md:static md:w-auto md:h-auto md:bg-transparent md:translate-x-0 md:visible md:flex md:gap-3 lg:gap-6 md:pt-0
          `}
              >
                <li className="w-full text-center md:w-auto">
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-[#295C51] font-josefin font-normal text-[21px] md:text-[16px] lg:text-[18px] min-[1100px]:text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 md:inline-block md:w-auto md:p-0"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] md:text-[16px] lg:text-[18px] min-[1100px]:text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 md:inline-block md:w-auto md:p-0"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                  <Link
                    to="trust"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] md:text-[16px] lg:text-[18px] min-[1100px]:text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 md:inline-block md:w-auto md:p-0"
                    onClick={closeMobileMenu}
                  >
                    Why Us?
                  </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] md:text-[16px] lg:text-[18px] min-[1100px]:text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 md:inline-block md:w-auto md:p-0"
                    onClick={closeMobileMenu}
                  >
                    Our Dr
                  </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                  <Link
                    to="testimonials"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] md:text-[16px] lg:text-[18px] min-[1100px]:text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 md:inline-block md:w-auto md:p-0"
                    onClick={closeMobileMenu}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="w-full text-center md:w-auto">
                  <Link
                    to="faq"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] md:text-[16px] lg:text-[18px] min-[1100px]:text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 md:inline-block md:w-auto md:p-0"
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>

              <div className="hidden md:block">
                <Link
                  to="footer"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="bg-primary text-white h-12 px-4 lg:px-6 flex items-center justify-center rounded-[72px] font-medium font-josefin text-[18px] lg:text-[21px] leading-none no-underline hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
