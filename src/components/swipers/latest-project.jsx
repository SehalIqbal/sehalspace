import React, { useState } from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // (kept in case you add pagination later)
import "./style.css";

// Removed arrow icons & Navigation module
// import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// Modules
import { Autoplay } from "swiper/modules";

const LatestProjectsSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  // No extra wheel handler needed; we'll disable swiping over images so the page scrolls.

  return (
    <div style={{ marginBottom: "200px" }}>
      <div className="container-fluid homefu fu-slider">
        {/* Title aligned LEFT (was text-end) */}
        <div className="py-4 text-start">
          <h3 className="fs-4 mb-2">My Projects</h3>
        </div>

        {/* Removed header with custom arrows */}

        <Swiper
          onSwiper={setSwiperRef}
          
          
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={15}
          // Removed navigation and arrow elements
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // Enable mouse interactions (drag with mouse). Wheel will scroll the page now.
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="swiper-container"
          // Fix: let page scroll even when cursor is over slider
          nested={true}
          touchReleaseOnEdges={true}
          touchStartPreventDefault={false}
          touchMoveStopPropagation={false}
          passiveListeners={true}
        >
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://images.unsplash.com/photo-1662003496587-8b41cf5818e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Project #1 preview"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://images.unsplash.com/photo-1516247524857-8dc5f4786cb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Project #2 preview"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #2</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://images.unsplash.com/photo-1588829608085-3a321dd3239f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Project #3 preview"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #3</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://images.unsplash.com/photo-1504587614488-3259c5c1d9b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Project #4 preview"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #4</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {/* ...keep/add more slides as needed ... */}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProjectsSwiper;
