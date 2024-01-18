import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import LogoVPN from "../../public/assets/logo2.svg";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header className={"fixed top-0 w-full  z-30 bg-white-500 transition-all " + (scrollActive ? " shadow-md pt-0" : " pt-4")}>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <a>
                <LogoVPN style={{ width: "100px", height: "20px" }} />
              </a>
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
          <Link href="/">
              <a className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative">
               Home
              </a>
            </Link>
            <Link href="/Data">
              <a className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative">
                Data
              </a>
            </Link>
            <Link href="/model">
              <a className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative">
                Models
              </a>
            </Link>
            <Link href="/About">
              <a className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative">
                About
              </a>
            </Link>
            <Link href="/Contact">
              <a className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative">
               Contact
              </a>
            </Link>
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="Model"
              spy={true}
              smooth={true}
              duration={1000}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (scrollActive ? " border-green-500 text-green-500" : " border-transparent")
              }
            >
              Models
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (scrollActive ? " border-green-500 text-green-500" : " border-transparent")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (scrollActive ? " border-green-500 text-green-500" : " border-transparent")
              }
            >
              Contact
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="data"
              spy={true}
              smooth={true}
              duration={1000}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (scrollActive ? " border-green-500 text-green-500" : " border-transparent")
              }
            >
              Data
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
