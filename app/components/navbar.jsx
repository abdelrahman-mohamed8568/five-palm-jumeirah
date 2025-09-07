import "../styles/navbar.css";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import logo from "@/public/images/navLogo.webp";
import imageRight from "@/public/images/nav2.webp";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [navToggle, setNavToggle] = useState(false);
  const prevScrollY = useRef(0);

  const openNavbar = () => {
    setNavToggle(!navToggle);
  };
  useEffect(() => {
    if (navToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navToggle]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current && currentScrollY > 1) {
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isVisible ? "" : "hidden"}>
      <div className="navBox">
        <div className="navLogo">
          <input type="checkbox" id="checkbox" onClick={openNavbar} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bar bar--top"></div>
            <div className="bar bar--bottom"></div>
          </label>
          <Image src={logo} alt="Logo" className="navLogoImage" />
        </div>
        {!navToggle && (
          <div className="navLinks">
            <h3 className="textHover">rooms</h3>
            <h3 className="textHover">dine</h3>
            <h3 className="textHover">events</h3>
            <h3 className="textHover">relax</h3>
            <h3 className="textHover">music</h3>
            <h3 className="textHover">shop</h3>
          </div>
        )}
        <div className="navOptions">
          <span className="hiddenSvg"></span>
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3.81 3.77 16.38 16.38"
          >
            <path
              d="M19.4856 20.154L13.2236 13.892C12.7236 14.318 12.1486 14.6477 11.4986 14.881C10.8486 15.1144 10.1953 15.231 9.53859 15.231C7.93726 15.231 6.58193 14.6767 5.47259 13.568C4.36326 12.4587 3.80859 11.1037 3.80859 9.50304C3.80859 7.90238 4.36259 6.54671 5.47059 5.43604C6.57926 4.32471 7.93393 3.76904 9.53459 3.76904C11.1359 3.76904 12.4919 4.32371 13.6026 5.43304C14.7133 6.54238 15.2686 7.89804 15.2686 9.50004C15.2686 10.1947 15.1456 10.867 14.8996 11.517C14.6529 12.167 14.3296 12.723 13.9296 13.185L20.1916 19.446L19.4856 20.154ZM9.53859 14.23C10.8653 14.23 11.9856 13.7734 12.8996 12.86C13.8129 11.9467 14.2696 10.8264 14.2696 9.49904C14.2696 8.17238 13.8129 7.05238 12.8996 6.13904C11.9863 5.22571 10.8663 4.76904 9.53959 4.76904C8.21293 4.76904 7.09259 5.22571 6.17859 6.13904C5.26526 7.05238 4.80859 8.17238 4.80859 9.49904C4.80859 10.8257 5.26526 11.9457 6.17859 12.859C7.09193 13.7724 8.21193 14.23 9.53859 14.23Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="4 4 16 16"
            className="hiddenSvg"
          >
            <path
              d="M19.2 20C17.3987 20 15.5927 19.5853 13.782 18.756C11.9713 17.9267 10.303 16.749 8.777 15.223C7.26367 13.6977 6.08933 12.024 5.254 10.202C4.418 8.38 4 6.57933 4 4.8V4H8.438L9.287 8.083L6.59 10.593C7.04667 11.3837 7.51933 12.106 8.008 12.76C8.496 13.4133 9.005 14.003 9.535 14.529C10.0697 15.089 10.6723 15.6123 11.343 16.099C12.0143 16.5857 12.7793 17.0657 13.638 17.539L16.25 14.831L20 15.587V20H19.2ZM6.121 9.654L8.213 7.734L7.635 5H5.005C5.025 5.76267 5.12767 6.531 5.313 7.305C5.49967 8.07833 5.769 8.86133 6.121 9.654ZM14.571 17.988C15.1863 18.2973 15.883 18.5387 16.661 18.712C17.4383 18.8853 18.218 18.9773 19 18.988V16.385L16.612 15.91L14.571 17.988Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sustainability hiddenSvg"
          >
            <path
              d="M0.664437 15.2579C0.570437 15.1645 0.523438 15.0485 0.523438 14.9099C0.523438 14.7712 0.570104 14.6579 0.663437 14.5699L2.71244 12.5209C2.1791 11.9015 1.7601 11.1999 1.45544 10.4159C1.15077 9.63185 0.998437 8.80085 0.998437 7.92285C0.998437 5.96885 1.67644 4.31385 3.03244 2.95785C4.38977 1.60119 6.0451 0.922852 7.99844 0.922852H14.9984V7.92285C14.9984 9.87685 14.3204 11.5322 12.9644 12.8889C11.6071 14.2449 9.95177 14.9229 7.99844 14.9229C7.12044 14.9229 6.29377 14.7705 5.51844 14.4659C4.7431 14.1612 4.04544 13.7425 3.42544 13.2099L1.35244 15.2579C1.2631 15.3512 1.14944 15.3979 1.01144 15.3979C0.873437 15.3979 0.758437 15.3512 0.664437 15.2579ZM4.73344 11.1859C4.82677 11.2892 4.94177 11.3389 5.07844 11.3349C5.2151 11.3309 5.33144 11.2819 5.42744 11.1879L9.35244 7.28285C9.46244 7.17218 9.51744 7.05318 9.51744 6.92585C9.51744 6.79852 9.4641 6.68152 9.35744 6.57485C9.26077 6.47752 9.14344 6.42885 9.00544 6.42885C8.86677 6.42885 8.75311 6.47552 8.66444 6.56885L4.73344 10.4999C4.6401 10.5905 4.59344 10.7035 4.59344 10.8389C4.59344 10.9742 4.6401 11.0899 4.73344 11.1859Z"
              fill="#109C29"
            ></path>
          </svg>
        </div>
      </div>
      {navToggle && (
        <div className="navMenu">
          <div className="navBackground">
            <div className="navLeft"></div>
            <div className="navRight">
              <div>
                <Image src={imageRight} alt="" className="imageRight" />
              </div>
            </div>
          </div>
          <div className="navTop">
            <ul>
              <li>ROOMS</li>
              <li>DINE</li>
              <li>EVENTS</li>
              <li>RELAX</li>
              <li>FIVE MUSIC</li>
              <li>SHOP</li>
              <li>FIVE HOTELES & RESORTS</li>
            </ul>
            <div className="border"></div>
          </div>
          <div className="navBottom">
            <ul>
              <li>Private Events</li>
              <li>Sustainability</li>
              <li>What’s On</li>
              <li>Gallery</li>
              <li>Come Play Fly</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
