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

export default function App() {
  const [windoWidth, setwindoWidth] = useState(window.innerWidth);
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
        <SwiperSlide>
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
                    src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/author1.jpg"
                    alt="Maxine Butler"
                  />
                </div>

                <div className="bio-wrapper">
                  <h4 className="name">Maxine Butler</h4>

                  <span className="designation">Product Designer</span>
                </div>
              </div>

              <p>
                Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis
                tincidunt id aliquet risus. Consequat nisl vel pretium lectus
                quam id. Velit scelerisque in dictum non of the ntconsectetur.{" "}
              </p>
              <div className="star_rating">
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
              </div>

              <img
                className="quote-icon"
                src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/quotes.svg"
                alt="Maxine Butler"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sec_card">
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
                    src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"
                    alt="Maxine Butler"
                  />
                </div>

                <div className="bio-wrapper">
                  <h4 className="name">Maxine Butler</h4>

                  <span className="designation">Product Designer</span>
                </div>
              </div>

              <p>
                Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis
                tincidunt id aliquet risus. Consequat nisl vel pretium lectus
                quam id. Velit scelerisque in dictum non of the ntconsectetur.{" "}
              </p>
              <div className="star_rating">
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
              </div>

              <img
                className="quote-icon"
                src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/quotes.svg"
                alt="Maxine Butler"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="third_card">
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
                    src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/testi_author3.jpeg"
                    alt="Maxine Butler"
                  />
                </div>

                <div className="bio-wrapper">
                  <h4 className="name">Maxine Butler</h4>

                  <span className="designation">Product Designer</span>
                </div>
              </div>

              <p>
                Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis
                tincidunt id aliquet risus. Consequat nisl vel pretium lectus
                quam id. Velit scelerisque in dictum non of the ntconsectetur.{" "}
              </p>
              <div className="star_rating">
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
                <span className="fa-solid fa-star"></span>
              </div>

              <img
                className="quote-icon"
                src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/quotes.svg"
                alt="Maxine Butler"
              />
            </div>{" "}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./slider.css";

// // import required modules
// import { Pagination, Navigation, FreeMode } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         // style={{
//         //   "--swiper-navigation-fount-size": "24px",
//         //   "--swiper-pagination-color": "#fff",
//         // }}
//         loop={true}
//         slidesPerView={2}
//         spaceBetween={30}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         Autoplay={{
//           delay: 1000,
//         }}
//         modules={[Pagination, Navigation, FreeMode]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="first_card ">
//             <div className="testimonial">
//               <div className="testimonial-content-wrapper">
//                 <div className="avatar">
//                   <img
//                     className="quotes-dot"
//                     src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
//                     alt="Maxine Butler"
//                   />
//                   <img
//                     className="author-image"
//                     src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/author1.jpg"
//                     alt="Maxine Butler"
//                   />
//                 </div>

//                 <div className="bio-wrapper">
//                   <h4 className="name">Maxine Butler</h4>

//                   <span className="designation">Product Designer</span>
//                 </div>
//               </div>

//               <p>
//                 Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis
//                 tincidunt id aliquet risus. Consequat nisl vel pretium lectus
//                 quam id. Velit scelerisque in dictum non of the ntconsectetur.{" "}
//               </p>
//               <div className="star_rating">
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//               </div>

//               <img
//                 className="quote-icon"
//                 src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/quotes.svg"
//                 alt="Maxine Butler"
//               />
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="sec_card">
//             <div className="testimonial">
//               <div className="testimonial-content-wrapper">
//                 <div className="avatar">
//                   <img
//                     className="quotes-dot"
//                     src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
//                     alt="Maxine Butler"
//                   />
//                   <img
//                     className="author-image"
//                     src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"
//                     alt="Maxine Butler"
//                   />
//                 </div>

//                 <div className="bio-wrapper">
//                   <h4 className="name">Maxine Butler</h4>

//                   <span className="designation">Product Designer</span>
//                 </div>
//               </div>

//               <p>
//                 Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis
//                 tincidunt id aliquet risus. Consequat nisl vel pretium lectus
//                 quam id. Velit scelerisque in dictum non of the ntconsectetur.{" "}
//               </p>
//               <div className="star_rating">
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//               </div>

//               <img
//                 className="quote-icon"
//                 src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/quotes.svg"
//                 alt="Maxine Butler"
//               />
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="third_card">
//             <div className="testimonial">
//               <div className="testimonial-content-wrapper">
//                 <div className="avatar">
//                   <img
//                     className="quotes-dot"
//                     src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
//                     alt="Maxine Butler"
//                   />
//                   <img
//                     className="author-image"
//                     src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/testi_author3.jpeg"
//                     alt="Maxine Butler"
//                   />
//                 </div>

//                 <div className="bio-wrapper">
//                   <h4 className="name">Maxine Butler</h4>

//                   <span className="designation">Product Designer</span>
//                 </div>
//               </div>

//               <p>
//                 Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis
//                 tincidunt id aliquet risus. Consequat nisl vel pretium lectus
//                 quam id. Velit scelerisque in dictum non of the ntconsectetur.{" "}
//               </p>
//               <div className="star_rating">
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//                 <span className="fa-solid fa-star"></span>
//               </div>

//               <img
//                 className="quote-icon"
//                 src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/quotes.svg"
//                 alt="Maxine Butler"
//               />
//             </div>{" "}
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
