import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slider.css";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import Rating from "./Rating";

export default function App() {
  const [sliderdata, setsliderdata] = useState([
    {
      s_imageurl:
        "https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg",
      s_title: "Maxine Butler",
      s_subTitle: "Product Designer",
      S_disc:
        "Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id. Velit scelerisque in dictum non of the ntconsectetur.",
      s_rating: 3,
    },
    {
      s_imageurl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5L1axIiYnR57FkGOockVnOxNhCJQSQzdOYmXXhGCU=s32-c-mo",
      s_title: "Amit Kanojiya",
      s_subTitle: "FrantEnd Developer",
      S_disc:
        "Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id. Velit scelerisque in dictum non of the ntconsectetur.",
      s_rating: 4,
    },
    {
      s_imageurl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5j04dcqsPZdQ57UwjHs8sjN1CyUIzgSiyx1NNUmQ=s64-c-mo",
      s_title: "Nikhil Shah",
      s_subTitle: "FrantEnd Developer",
      S_disc:
        "Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id. Velit scelerisque in dictum non of the ntconsectetur.",
      s_rating: 5,
    },
  ]);

  const [perview, setperview] = useState(2);
  const gwtwidth = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 750) {
      setperview(1);
    }
  };
  window.addEventListener("resize", gwtwidth);

  return (
    <>
      <Swiper
        style={{
          "--swiper-Navigation-color": "#fff",
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={perview}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: null }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {sliderdata.map((srow, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="first_card ">
                <div className="testimonial">
                  <div className="testimonial-content-wrapper">
                    <div className="avatar">
                      <img
                        className="quotes-dot"
                        src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                        alt="Maxine Butler"
                      />
                      <img
                        className="author-image"
                        src={srow.s_imageurl}
                        alt="Maxine Butler"
                      />
                    </div>

                    <div className="bio-wrapper">
                      <h4 className="name">{srow.s_title}</h4>

                      <span className="designation">{srow.s_subTitle}</span>
                    </div>
                  </div>

                  <p>{srow.S_disc}</p>
                  <Rating rate={srow.s_rating} />

                  <img
                    className="quote-icon"
                    src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/quotes.svg"
                    alt="Maxine Butler"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
