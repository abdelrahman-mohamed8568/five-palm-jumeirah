"use client";
import "@/app/styles/header.css";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import logo1 from "@/public/images/brand/logo1.webp";
import logo2 from "@/public/images/brand/logo2.webp";
import logo3 from "@/public/images/brand/logo3.webp";
import logo4 from "@/public/images/brand/logo4.webp";
import logo5 from "@/public/images/brand/logo5.webp";
import logo6 from "@/public/images/brand/logo6.webp";
import logo7 from "@/public/images/brand/logo7.webp";
import offer1 from "@/public/images/offers/offer1.webp";
import offer2 from "@/public/images/offers/offer2.webp";
import offer3 from "@/public/images/offers/offer3.webp";
import logo from "@/public/images/logo.webp";
import play1 from "@/public/images/play/play1.webp";
import play2 from "@/public/images/play/play2.webp";
import play3 from "@/public/images/play/play3.webp";
import play4 from "@/public/images/play/play4.webp";
import play5 from "@/public/images/play/play5.webp";
import play6 from "@/public/images/play/play6.webp";
import play7 from "@/public/images/play/play7.webp";
import play8 from "@/public/images/play/play8.webp";
import play9 from "@/public/images/play/play9.webp";
import play10 from "@/public/images/play/play10.webp";
import play11 from "@/public/images/play/play11.webp";
import play12 from "@/public/images/play/play12.webp";
import play13 from "@/public/images/play/play13.webp";
import play14 from "@/public/images/play/play14.webp";
import room1 from "@/public/images/rooms/room1.webp";
import room2 from "@/public/images/rooms/room2.webp";
import room3 from "@/public/images/rooms/room3.webp";
import room4 from "@/public/images/rooms/room4.webp";
import room5 from "@/public/images/rooms/room5.webp";
import room6 from "@/public/images/rooms/room6.webp";
import room7 from "@/public/images/rooms/room7.webp";
import room8 from "@/public/images/rooms/room8.webp";
import room9 from "@/public/images/rooms/room9.webp";
import room10 from "@/public/images/rooms/room10.webp";
import room11 from "@/public/images/rooms/room11.webp";
import room12 from "@/public/images/rooms/room12.webp";
import room13 from "@/public/images/rooms/room13.webp";
import room14 from "@/public/images/rooms/room14.webp";
import room15 from "@/public/images/rooms/room15.webp";
import room16 from "@/public/images/rooms/room16.webp";
import room17 from "@/public/images/rooms/room17.webp";
import room18 from "@/public/images/rooms/room18.webp";
import room19 from "@/public/images/rooms/room19.webp";
import room20 from "@/public/images/rooms/room20.webp";
import room21 from "@/public/images/rooms/room21.webp";
import room22 from "@/public/images/rooms/room22.webp";
import room23 from "@/public/images/rooms/room23.webp";
import room24 from "@/public/images/rooms/room24.webp";
import room25 from "@/public/images/rooms/room25.webp";
import event1 from "@/public/images/events/event1.webp";
import event2 from "@/public/images/events/event2.webp";
import event3 from "@/public/images/events/event3.webp";
import event4 from "@/public/images/events/event4.webp";
import pacha from "@/public/images/pacha.webp";
import pachaImage from "@/public/images/pachaImage.webp";
import playGround1 from "@/public/images/playGround/playGround1.webp";
import playGround2 from "@/public/images/playGround/playGround2.webp";
import playGround3 from "@/public/images/playGround/playGround3.webp";
import playGround4 from "@/public/images/playGround/playGround4.webp";
import playGround5 from "@/public/images/playGround/playGround5.webp";
import playGround6 from "@/public/images/playGround/playGround6.webp";
import playGround7 from "@/public/images/playGround/playGround7.webp";
import playGround8 from "@/public/images/playGround/playGround8.webp";
import playGround9 from "@/public/images/playGround/playGround9.webp";
import playGround10 from "@/public/images/playGround/playGround10.webp";
import senses1 from "@/public/images/senses/senses1.webp";
import senses2 from "@/public/images/senses/senses2.webp";
import senses3 from "@/public/images/senses/senses3.webp";
import senses4 from "@/public/images/senses/senses4.webp";
import about from "@/public/images/about.webp";
import pressLogo1 from "@/public/images/press/pressLogo1.webp";
import pressLogo2 from "@/public/images/press/pressLogo2.webp";
import pressLogo3 from "@/public/images/press/pressLogo3.webp";
import pressLogo4 from "@/public/images/press/pressLogo4.webp";
import pressLogo5 from "@/public/images/press/pressLogo5.webp";
import press1 from "@/public/images/press/press1.webp";
import press2 from "@/public/images/press/press2.webp";
import press3 from "@/public/images/press/press3.webp";
import press4 from "@/public/images/press/press4.webp";
import press5 from "@/public/images/press/press5.webp";
import ply from "@/public/images/ply.webp";

function Header() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const handleClick = () => {
    window.scrollTo({ top: "600", behavior: "smooth" });
  };
  return (
    <div className="headerBox">
      <div className="headerBackground">
        <video
          autoPlay
          loop
          playsInline
          muted
          preload="none"
          className="videoBackground"
        >
          <source src="/videos/home/videoBackground.mp4" type="video/mp4" />
        </video>
        <div className="headerHover">
          <div className="hoverContent">
            <h4>stay</h4>
            <Image src={ply} alt="" className="span" />
            <h4>play</h4>
          </div>
          <p>
            COME PLAY AT DUBAI’S <br /> HOTTEST BEACH HOTEL
          </p>
        </div>
        <a href="#brand" className="hoverLink" onClick={handleClick}>
          explore
        </a>
      </div>
      <div className="brands">
        <div className="leftSwiper">
          <ul>
            {[...Array(30)].map((_, i) => (
              <li key={i}>
                come play
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        <div className="logoSwiper">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 5.5,
              },
              320: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={logo1} alt="Logo" className="brandLogo" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo2} alt="Logo" className="brandLogo" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo3} alt="Logo" className="brandLogo" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo4} alt="Logo" className="brandLogo" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo5} alt="Logo" className="brandLogo" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo6} alt="Logo" className="brandLogo" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo7} alt="Logo" className="brandLogo" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="rightSwiper">
          <ul>
            {[...Array(30)].map((_, i) => (
              <li key={i}>
                come play
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="offers">
        <div className="offersHeader">
          <h4>DUBAI’S HOTTEST BEACH HOTEL</h4>
          <p>
            Luxury rooms and suites. 150-m private beach. Picture perfect pools.
            Insta-views. Award-winning restaurants. Stunning spa. Our
            unashamedly luxurious resort has it all! <br />
            <strong className="offerText">
              Enjoy complimentary group yoga with all room bookings.
            </strong>
          </p>
        </div>
        <div className="offersBox">
          <h5 className="offersBoxHeader">ROOM OFFERS AT FIVE</h5>
          <div className="offersBoxs">
            <div className="offersContent">
              <div className="offersImageBox">
                <Image
                  src={offer1}
                  alt="offers image"
                  className="offersImage"
                />
              </div>
              <h5 className="textHover">PAY 3 STAY 4 OFFER</h5>
            </div>
            <div className="offersContent">
              <div className="offersImageBox">
                <Image
                  src={offer2}
                  alt="offers image"
                  className="offersImage"
                />
              </div>
              <h5 className="textHover">All-inclusive offer</h5>
            </div>
            <div className="offersContent">
              <div className="offersImageBox">
                <Image
                  src={offer3}
                  alt="offers image"
                  className="offersImage"
                />
              </div>
              <h5 className="textHover">
                Free Half<span>Board Offer</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="play">
        <div className="playHeader">
          <div className="playHeaderLogo">
            <h4>IT’S PLAYTIME </h4>
            <Image src={logo} alt="Logo" className="logo" />
          </div>
          <div className="playBtn">
            <button ref={prevRef} className="customPrev" aria-label="Prev">
              <img
                src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/dark/arrow-left.svg"
                alt=""
              />
            </button>
            <button ref={nextRef} className="customNext" aria-label="Next">
              <img
                src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/dark/arrow-right.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="playSwiperBox">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 4.5,
                spaceBetween: "40px",
              },
              320: {
                slidesPerView: 1.5,
                spaceBetween: "10px",
              },
            }}
            modules={[Navigation]}
            className="playSwiper"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <div className="playBox">
                <Image src={play1} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play1.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play2} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play2.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play3} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play3.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play4} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play4.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play5} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play5.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play6} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play6.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play7} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play8} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play8.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play9} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play9.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play10} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play10.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play11} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play11.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play12} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play12.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play13} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play13.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playBox">
                <Image src={play14} alt="" className="playImage" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="none"
                  className="videoPLay"
                >
                  <source src="/videos/play/play14.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="playText">
        <h2>A CELEBRATORY EXPERIENCE</h2>
        <p>
          Dubbed the Hottest Hotel in Dubai, Indulge Yourself at our
          Dare-to-be-Different Immersive Playground. Rediscover your Senses with
          our nonstop entertainment lineup, award-winning dining, top nightlife,
          industry-leading spa sanctuary, and our 150-metre private beach. Be
          Seen, Be Snapped, and Come Play at Palm Jumeirah’s Most Talked-About
          Resort.
        </p>
      </div>
      <div className="rooms">
        <div className="roomsHeader">
          <div className="roomsLogoBox">
            <h2>rooms</h2>
            <Image src={logo} alt="" className="roomsLogo" />
          </div>
          <div className="roomsHeaderText">
            <h5>Lifestyle Meets Luxury</h5>
            <div className="roomsHeaderBtn">
              <p>All Rooms</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="roomsBox">
        <div className="roomsHover">
          <div className="roomsHoverTop">
            <h4>all rooms</h4>
            <div className="playBtn">
              <button ref={prevRef} className="customPrev" aria-label="Prev">
                <img
                  src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/light/arrow-left-two.svg"
                  alt=""
                />
              </button>
              <span className="slideCounter">
                {currentSlide} / {totalSlides}
              </span>
              <button ref={nextRef} className="customNext" aria-label="Next">
                <img
                  src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/light/arrow-right-two.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <span className="swiperSpan"></span>
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          className="roomsSwiper"
          onInit={(swiper) => {
            setTotalSlides(swiper.slides.length);
            if (prevRef.current && nextRef.current) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex + 1);
          }}
        >
          <SwiperSlide>
            <Image src={room1} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>superior</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room2} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>superior | twin beds</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room3} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>superior | double queen</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room4} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>superior | sea view</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room5} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>luxe sea view</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room6} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>luxe sea view | double queen</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room7} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>junior suite | sea view</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room8} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>junior suite </h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room9} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>luxe 1 bedroom suite</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room10} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>luxe 2 bedroom suite</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room11} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>2 bed | penthouse duplex w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room12} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>4 bed | penthouse duplex w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room13} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>
                3 bed | xl terrace <br />
                pool suite | sea view
              </h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room14} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>
                4 bed | xl terrace <br />
                pool suite | sea view
              </h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room15} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>4 bed | come play penthouse w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room16} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>5 bed | penthouse duplex w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room17} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>2 bed | townhouse w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room18} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>4 bed | duplex w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room19} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>5 bed | beach villa w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room20} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>4 bed | beach villa w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room21} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>3 bed | beach villa w \ pool</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room22} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>3 bed | hotel apartment</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room23} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>2 bed | hotel apartment | sea view</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room24} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>2 bed | hotel apartment</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={room25} alt="" className="roomsImage" />
            <div className="roomsHoverBottom">
              <h4>1 bed | hotel apartment</h4>
              <span>
                <p>explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="events">
        <div className="eventsHeader">
          <div className="roomsHeader">
            <div className="roomsLogoBox">
              <h2>events</h2>
              <Image src={logo} alt="" className="roomsLogo" />
            </div>
            <div className="roomsHeaderText">
              <h5>Immersive Entertainment at FIVE</h5>
              <div className="roomsHeaderBtn">
                <p>All events</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="playBtn">
          <button ref={prevRef} className="customPrev" aria-label="Prev">
            <img
              src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/dark/arrow-left.svg"
              alt=""
            />
          </button>
          <button ref={nextRef} className="customNext" aria-label="Next">
            <img
              src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/dark/arrow-right.svg"
              alt=""
            />
          </button>
        </div>
        <div className="eventsBox">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 1.45,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: "-12px",
              },
            }}
            modules={[Navigation]}
            className="eventsSwiper"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <div className="eventSlide">
                <div className="eventTime">
                  <p>30th August, 10PM</p>
                </div>
                <div className="eventContent">
                  <h4>
                    The Penthouse <br /> Presents Tom & Collins
                  </h4>
                  <div className="eventBtns">
                    <span>
                      <p>book now</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </span>
                    <div className="eventBtn">
                      <img
                        src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/five-palm-hr/images/whatsapp.png.webp"
                        alt=""
                      />
                    </div>
                    <div className="eventBtn2">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3987 19.3327H19.332V14.1842L14.957 13.3022L11.9097 16.4604C10.9079 15.9081 10.0154 15.3485 9.2322 14.7815C8.44975 14.2137 7.74664 13.6032 7.12286 12.9499C6.50453 12.3362 5.9107 11.6478 5.34136 10.8848C4.77125 10.1226 4.21981 9.27991 3.68703 8.35668L6.83353 5.42835L5.84303 0.666016H0.665363V1.59935C0.665363 3.67602 1.15303 5.77679 2.12836 7.90168C3.1037 10.0273 4.47375 11.98 6.23853 13.7595C8.01809 15.5398 9.96447 16.9138 12.0777 17.8814C14.1901 18.8489 16.2971 19.3327 18.3987 19.3327ZM3.13986 7.26235C2.72842 6.33757 2.4142 5.42368 2.1972 4.52068C1.98097 3.61846 1.86159 2.72246 1.83903 1.83268H4.9062L5.58053 5.02352L3.13986 7.26235ZM12.9982 16.9854L15.3782 14.561L18.1654 15.1152V18.152C17.253 18.1388 16.343 18.0315 15.4354 17.83C14.5285 17.6278 13.7161 17.3462 12.9982 16.9854Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="eventImageBox">
                  <Image src={event1} alt="" className="eventImage" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="eventSlide">
                <div className="eventTime">
                  <p>6th September, 10PM</p>
                </div>
                <div className="eventContent">
                  <h4>
                    Skyline Satuurday | <br /> SHOUSE |The Penthouse
                  </h4>
                  <div className="eventBtns">
                    <span>
                      <p>book now</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </span>
                    <div className="eventBtn">
                      <img
                        src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/five-palm-hr/images/whatsapp.png.webp"
                        alt=""
                      />
                    </div>
                    <div className="eventBtn2">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3987 19.3327H19.332V14.1842L14.957 13.3022L11.9097 16.4604C10.9079 15.9081 10.0154 15.3485 9.2322 14.7815C8.44975 14.2137 7.74664 13.6032 7.12286 12.9499C6.50453 12.3362 5.9107 11.6478 5.34136 10.8848C4.77125 10.1226 4.21981 9.27991 3.68703 8.35668L6.83353 5.42835L5.84303 0.666016H0.665363V1.59935C0.665363 3.67602 1.15303 5.77679 2.12836 7.90168C3.1037 10.0273 4.47375 11.98 6.23853 13.7595C8.01809 15.5398 9.96447 16.9138 12.0777 17.8814C14.1901 18.8489 16.2971 19.3327 18.3987 19.3327ZM3.13986 7.26235C2.72842 6.33757 2.4142 5.42368 2.1972 4.52068C1.98097 3.61846 1.86159 2.72246 1.83903 1.83268H4.9062L5.58053 5.02352L3.13986 7.26235ZM12.9982 16.9854L15.3782 14.561L18.1654 15.1152V18.152C17.253 18.1388 16.343 18.0315 15.4354 17.83C14.5285 17.6278 13.7161 17.3462 12.9982 16.9854Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="eventImageBox">
                  <Image src={event2} alt="" className="eventImage" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="eventSlide">
                <div className="eventTime">
                  <p>16th August, 10PM</p>
                </div>
                <div className="eventContent">
                  <h4>
                    The Penthouse <br /> Presents HITTY
                  </h4>
                  <div className="eventBtns">
                    <span>
                      <p>book now</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </span>
                    <div className="eventBtn">
                      <img
                        src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/five-palm-hr/images/whatsapp.png.webp"
                        alt=""
                      />
                    </div>
                    <div className="eventBtn2">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3987 19.3327H19.332V14.1842L14.957 13.3022L11.9097 16.4604C10.9079 15.9081 10.0154 15.3485 9.2322 14.7815C8.44975 14.2137 7.74664 13.6032 7.12286 12.9499C6.50453 12.3362 5.9107 11.6478 5.34136 10.8848C4.77125 10.1226 4.21981 9.27991 3.68703 8.35668L6.83353 5.42835L5.84303 0.666016H0.665363V1.59935C0.665363 3.67602 1.15303 5.77679 2.12836 7.90168C3.1037 10.0273 4.47375 11.98 6.23853 13.7595C8.01809 15.5398 9.96447 16.9138 12.0777 17.8814C14.1901 18.8489 16.2971 19.3327 18.3987 19.3327ZM3.13986 7.26235C2.72842 6.33757 2.4142 5.42368 2.1972 4.52068C1.98097 3.61846 1.86159 2.72246 1.83903 1.83268H4.9062L5.58053 5.02352L3.13986 7.26235ZM12.9982 16.9854L15.3782 14.561L18.1654 15.1152V18.152C17.253 18.1388 16.343 18.0315 15.4354 17.83C14.5285 17.6278 13.7161 17.3462 12.9982 16.9854Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="eventImageBox">
                  <Image src={event3} alt="" className="eventImage" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="eventSlide">
                <div className="eventTime">
                  <p>22th August, 10PM</p>
                </div>
                <div className="eventContent">
                  <h4>
                    Hip Hop & RnB At The <br /> Penthouse | Cueball
                  </h4>
                  <div className="eventBtns">
                    <span>
                      <p>book now</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </span>
                    <div className="eventBtn">
                      <img
                        src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/five-palm-hr/images/whatsapp.png.webp"
                        alt=""
                      />
                    </div>
                    <div className="eventBtn2">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3987 19.3327H19.332V14.1842L14.957 13.3022L11.9097 16.4604C10.9079 15.9081 10.0154 15.3485 9.2322 14.7815C8.44975 14.2137 7.74664 13.6032 7.12286 12.9499C6.50453 12.3362 5.9107 11.6478 5.34136 10.8848C4.77125 10.1226 4.21981 9.27991 3.68703 8.35668L6.83353 5.42835L5.84303 0.666016H0.665363V1.59935C0.665363 3.67602 1.15303 5.77679 2.12836 7.90168C3.1037 10.0273 4.47375 11.98 6.23853 13.7595C8.01809 15.5398 9.96447 16.9138 12.0777 17.8814C14.1901 18.8489 16.2971 19.3327 18.3987 19.3327ZM3.13986 7.26235C2.72842 6.33757 2.4142 5.42368 2.1972 4.52068C1.98097 3.61846 1.86159 2.72246 1.83903 1.83268H4.9062L5.58053 5.02352L3.13986 7.26235ZM12.9982 16.9854L15.3782 14.561L18.1654 15.1152V18.152C17.253 18.1388 16.343 18.0315 15.4354 17.83C14.5285 17.6278 13.7161 17.3462 12.9982 16.9854Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="eventImageBox">
                  <Image src={event4} alt="" className="eventImage" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="pacha rooms">
        <div className="roomsHeader">
          <div className="roomsLogoBox">
            <h2>pacha icons</h2>
            <Image src={pacha} alt="" className="pachaLogo" />
          </div>
          <div className="pachaHeaderText">
            <h5>At FIFE LUXE</h5>
          </div>
        </div>
        <div className="eventsBox">
          <Swiper className="pachaSwiper">
            <SwiperSlide>
              <div className="eventSlide">
                <div className="eventTime">
                  <p>17th October, 7 PM (Doors Open 6 PM)</p>
                </div>
                <div className="eventContent">
                  <h4>
                    CARL COX | Grand Dubai
                    <br /> Season Opning |playa Pacha
                  </h4>
                  <div className="eventBtns">
                    <span>
                      <p>book now</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </span>
                    <div className="eventBtn">
                      <img
                        src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/five-palm-hr/images/whatsapp.png.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="eventImageBox">
                  <Image src={pachaImage} alt="" className="eventImage" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="playGround">
        <div className="playGroundHeader">
          <h3>YOUR CULINARY PLAYGROUND</h3>
          <div className="playBtn">
            <button ref={prevRef} className="customPrev" aria-label="Prev">
              <img
                src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/dark/arrow-left.svg"
                alt=""
              />
            </button>
            <button ref={nextRef} className="customNext" aria-label="Next">
              <img
                src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/svg/dark/arrow-right.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="playGroundBox">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 1.2,
                spaceBetween: "-5px",
              },
              320: {
                slidesPerView: 1,
                spaceBetween: "20px",
              },
            }}
            modules={[Navigation]}
            className="playGroundSwiper"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround1} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/penthouse.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround2} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/bohelialogo.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround3} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/cinque-1-1.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround4} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/Maiden-logo.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround5} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/jade-logo.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround6} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/07/praia.png.webp"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround7} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/NUMA-Black-logo.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround8} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/beach-by-five-logo-2.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround9} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/detox-me-logo.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="playGroundImageBox">
                <Image src={playGround10} alt="" className="playGroundImage" />
                <div className="playDroungHover">
                  <img
                    src={
                      "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/NEW-deli.svg"
                    }
                    alt=""
                    className="playGroundLogo"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="spanEnd"></div>
      <div className="senses">
        <div className="sensesHeader">
          <h2>
            REDISCOVER <br />
            YOUR SENSES
          </h2>
        </div>
        <div className="sensesBoxs">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              320: {
                slidesPerView: 1.3,
                spaceBetween: "95px",
              },
            }}
            className="sensesSwiper"
          >
            <SwiperSlide>
              <div className="sensesBox">
                <div className="sensesImageBox">
                  <Image src={senses1} alt="" className="sensesImage" />
                </div>
                <div className="sensesText">
                  <h4>Rooms</h4>
                  <Image src={logo} alt="" className="sensesLogo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sensesBox">
                <div className="sensesImageBox">
                  <Image src={senses2} alt="" className="sensesImage" />
                </div>
                <div className="sensesText">
                  <h4>eat & drink</h4>
                  <Image src={logo} alt="" className="sensesLogo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sensesBox">
                <div className="sensesImageBox">
                  <Image src={senses3} alt="" className="sensesImage" />
                </div>
                <div className="sensesText">
                  <h4>play</h4>
                  <Image src={logo} alt="" className="sensesLogo" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sensesBox">
                <div className="sensesImageBox">
                  <Image src={senses4} alt="" className="sensesImage" />
                </div>
                <div className="sensesText">
                  <h4>relax</h4>
                  <Image src={logo} alt="" className="sensesLogo" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="senses">
        <div className="sensesHeader">
          <h2>SUSTAINABLE INDULGENCE</h2>
        </div>
        <div className="about">
          <Image src={about} alt="" className="aboutImage" />
          <div className="aboutText">
            <p>
              At FIVE Palm Jumeirah, Luxury blends with Eco-Responsibility
              creating a Sustainable Entertainment Ecosystem. LEED Platinum
              Certified, and with a ‘You-Can-Have-It-All’ mindset, we harness
              technology and innovation for guilt-free indulgence.
            </p>
            <div className="aboutTextSectionBox">
              <div className="aboutTextSection">
                <strong>CARBON</strong>
                <p>
                  5x More Carbon Efficient vs the Average Luxury Resort in UAE
                  (CHSB 2023)
                </p>
              </div>
              <div className="aboutTextSection">
                <strong>ELECTRICITY</strong>
                <p>100% of Electricity sourced through Green Power</p>
              </div>
              <div className="aboutTextSection">
                <strong>WATER</strong>
                <p>
                  40.6% Reduction in Water Consumption per Capita in (2023 vs
                  2020)
                </p>
              </div>
            </div>
            <div className="roomsHeaderBtn">
              <p>know more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="playGround press">
        <div className="playGroundHeader">
          <h3>HOT OFF THE PRESS</h3>
          <div className="roomsHeaderBtn">
            <p>view all</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </div>
        </div>
        <div className="playGroundBox">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 4.5,
                spaceBetween: "30px",
              },
              320: {
                slidesPerView: 1.3,
                spaceBetween: "10px",
              },
            }}
            className="pressSwiper"
          >
            <SwiperSlide>
              <div className="pressBox">
                <Image
                  src={pressLogo1}
                  alt=""
                  className="pressLogo"
                  width={57}
                />
                <Image src={press1} alt="" className="pressImage" />
                <p>
                  FIVE Palm Jumeirah: an oasis of luxury in the heart of Dubai{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pressBox">
                <Image src={pressLogo2} alt="" className="pressLogo" />
                <Image src={press2} alt="" className="pressImage" />
                <p>Dubai’s FIVE is defining high-energy luxury for the world</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pressBox">
                <Image
                  src={pressLogo3}
                  alt=""
                  className="pressLogo"
                  width={100}
                />
                <Image src={press3} alt="" className="pressImage" />
                <p>Vogue Reviews: FIVE Palm Jumeirah, Dubai</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pressBox">
                <Image src={pressLogo4} alt="" className="pressLogo" />
                <Image src={press4} alt="" className="pressImage" />
                <p>Dubai hotel developer pins success on green credentials </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pressBox">
                <Image
                  src={pressLogo5}
                  alt=""
                  className="pressLogo"
                  width={73}
                />
                <Image src={press5} alt="" className="pressImage" />
                <p>The Best Hotels in Dubai </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Header;
