import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

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

  return (
    <>
      <div className="w-full h-[95.77px]">
        <nav
          className={`w-full flex justify-center items-center z-[999] transition-all duration-300 ${
            scroll
              ? "fixed top-0 left-0 w-full h-16 sm:h-20 bg-background border-b border-primary/10 p-0"
              : "relative h-[70px] sm:h-[80px] lg:h-[95.77px] bg-background py-4 sm:py-6 lg:py-8"
          }`}
        >
          <div className="max-w-[1190px] mx-auto flex justify-between items-center w-full p-0 px-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              className="flex items-center gap-1.5 min-[414px]:gap-2 sm:gap-3 no-underline cursor-pointer flex-shrink-0"
              onClick={closeMobileMenu}
            >
              <img
                src="/src/assets/images/Group.png"
                alt="Enaaya"
                className="h-6 min-[414px]:h-8 sm:h-10 lg:h-12 w-auto"
              />
              <div className="flex flex-col line-clamp-1 leading-none">
                <span className="font-cooper text-[18px] min-[414px]:text-[24px] sm:text-[28px] lg:text-[34.18px] font-normal color-[#295C51] tracking-[0.04em] leading-none">
                  Enaaya
                </span>
                <span className="font-instrument text-[12px] min-[414px]:text-[14px] sm:text-[16px] lg:text-[18.43px] text-[#E8B086] font-semibold tracking-[0.03em] leading-none capitalize mt-0.5">
                  Homeopathy
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
              {/* Hamburger Icon: Visible on Mobile (default), Hidden on Desktop (lg) */}
              <div
                className="block lg:hidden text-[1.3rem] min-[414px]:text-[1.5rem] sm:text-[1.8rem] text-primary-dark cursor-pointer z-50"
                onClick={handleClick}
              >
                {click ? <FaTimes /> : <FaBars />}
              </div>

              <ul
                className={`
            flex flex-col absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-background transition-transform duration-500 z-40
            ${click ? "translate-x-0" : "-translate-x-full"}
            lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0 lg:visible lg:flex lg:gap-8
          `}
              >
                <li className="w-full text-center lg:w-auto">
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-[#295C51] font-josefin font-normal text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 lg:inline-block lg:w-auto lg:p-0"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="w-full text-center lg:w-auto">
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 lg:inline-block lg:w-auto lg:p-0"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className="w-full text-center lg:w-auto">
                  <Link
                    to="trust"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 lg:inline-block lg:w-auto lg:p-0"
                    onClick={closeMobileMenu}
                  >
                    Why Us?
                  </Link>
                </li>
                <li className="w-full text-center lg:w-auto">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 lg:inline-block lg:w-auto lg:p-0"
                    onClick={closeMobileMenu}
                  >
                    Our Dr
                  </Link>
                </li>
                <li className="w-full text-center lg:w-auto">
                  <Link
                    to="testimonials"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 lg:inline-block lg:w-auto lg:p-0"
                    onClick={closeMobileMenu}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="w-full text-center lg:w-auto">
                  <Link
                    to="faq"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[#295C51] font-josefin font-normal text-[21px] leading-[1.1] tracking-normal cursor-pointer transition-colors duration-300 hover:text-secondary block w-full p-8 lg:inline-block lg:w-auto lg:p-0"
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>

              <div className="hidden lg:block">
                <Link
                  to="footer"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="bg-primary text-white h-12 px-6 flex items-center justify-center rounded-[72px] font-medium font-josefin text-[21px] leading-none no-underline hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
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
