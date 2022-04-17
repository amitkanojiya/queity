import React, { useEffect } from "react";
import "../component/Team";
import Team from "../component/Team";
import Location from "./Location";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../component/mystyle.css";

function About() {
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <section className="firstsec">
        <div className="container-fluid">
          <div className="container fisrtpart">
            <div className="row backimg d-flex">
              <div className="col-md-6">
                <div className="leftfstpart">
                  <h1>
                    Grow your Business & Customer Satisfaction with Quiety
                  </h1>
                  <p>
                    Dynamically disintermediate technically sound technologies
                    with compelling quality vectors error-free communities.
                  </p>
                  <div className="leftbtn">
                    <button className="btn btn-primary btn-outline btn-lg">
                      <span>Meet Our Team</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="rightfstpart">
                  <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/about-img-2.jpeg"></img>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <div className="firstsecimg">
                  <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/about-img-1.jpeg"></img>
                </div>
              </div>
              <div className="col-md-7">
                <div className="rightsecimg">
                  <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/about-img-3.jpeg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secondsec ">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 p-2">
              <div className="tblebox">
                <table className="table table-bordered bdrtble">
                  <tr className="bdrtble">
                    <td className="p-5 firsttdr">
                      <h1 className="count1">550+</h1>
                      <p className="tblepara">Active Users</p>
                    </td>
                    <td className="p-5">
                      <h1 className="count2">250+</h1>
                      <p className="tblepara">Team Members</p>
                    </td>
                  </tr>
                  <tr className="bdrtble">
                    <td className="p-5">
                      <h1 className="count3">$20M+</h1>
                      <p className="tblepara">Revenue Per/Year</p>
                    </td>
                    <td className="p-5 firsttdr">
                      <h1 className="count4">8 Years</h1>
                      <p className="tblepara">In Business</p>
                    </td>
                  </tr>
                  <tr className="bdrtble ">
                    <td className="p-5 firsttdr">
                      <h1 className="count5">425+</h1>
                      <p className="tblepara">Clients Worldwide</p>
                    </td>
                    <td className="p-5">
                      <h1 className="count3">855 +</h1>
                      <p>Projects Completed</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="rightletterbox ml-5">
                <h5 className="text-primary">Our Story</h5>
                <h1 className="rightpara">
                  A Great Story Starts with a Friendly Team
                </h1>
                <p>
                  Globally e-enable principle-centered e-business before dynamic
                  quality vectors cross-media materials before proactive
                  outsourcing leverage other's vertical technology leadership.
                </p>
                <div className="logo-title">
                  <h2>We Are Awarded By-</h2>
                </div>
                <div className="rightlogo">
                  <div className="mr-4">
                    <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/awards-01.svg"></img>
                  </div>
                  <div>
                    <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/awards-02.svg"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid ">
          <div className="backgrdimages"></div>
        </div>
      </section>

      <section className="thirdsec">
        <div className="conatiner-fluid">
          <div className="container ">
            <div className="row featurepart">
              <div className="col-md-6">
                <div>
                  <h5 className="text-primary">Feature</h5>
                  <h1 className="section-title">
                    Powerful Solutions for Your Business Needs
                  </h1>
                  <p className="sectionpara">
                    Quickly incubate functional channels with multidisciplinary
                    architectures authoritatively fabricate.
                  </p>
                </div>

                <div className="lefticons ">
                  <div>
                    <div className="lefticon-container bg-primary ">
                      <i className="fas fa-bezier-curve"></i>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h5 className="camsect">Pixel Perfect Design</h5>
                    <p className="sectionpara">
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed.
                    </p>
                  </div>
                </div>

                <div className="lefticons ">
                  <div>
                    <div className="lefticon-container bg-danger ">
                      <i aria-hidden="true" className="fas fa-fingerprint"></i>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h5 className="camsect">Pixel Perfect Design</h5>
                    <p className="sectionpara">
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed.
                    </p>
                  </div>
                </div>

                <div className="lefticons ">
                  <div>
                    <div className="lefticon-container infrt ">
                      <i aria-hidden="true" className="fas fa-cog"></i>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h5 className="camsect">Pixel Perfect Design</h5>
                    <p className="sectionpara">
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="rightthrdimg">
                  <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/feature-img3.jpeg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourthsec">
        <div className="container">
          <div className="row frthsec">
            <div className="col-md-7 mx-auto text-center">
              <div className="ourteam">
                <h5 className="text-primary">Our Team</h5>
                <h1>The People Behind Quiety</h1>
                <p>
                  Intrinsicly strategizes cutting-edge before interoperable
                  applications incubate extensive expertise through integrated
                  intellectual capital.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row pt-5 ">
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-1.jpeg"
              name="Penny Tool"
              type="Analyst"
            />
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-2.jpeg"
              name="Ravi Leigh"
              type="Manager"
            />
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-3.jpeg"
              name="Joss Sticks"
              type="Sumo founder"
            />
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-4.jpeg"
              name="Joanne Bell"
              type="CEO"
            />
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-5.jpeg"
              name="Rogelio Comer"
              type="CEO"
            />
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-6.jpeg"
              name="Jennifer Miller"
              type="CEO"
            />
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-7.jpeg"
              name="Jennifer Miller"
              type="CEO"
            />
            <Team
              src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/team-8.jpeg"
              name="Jennifer Miller"
              type="CEO"
            />
          </div>
        </div>
      </section>

      <section className="fifthsec">
        <div className="container-fluid">
          <div className="container ">
            <div className="row ">
              <div className="col-md-7 mx-auto text-center ">
                <div className="testimal">
                  <h5 className="text-primary">Testimonials</h5>
                  <h1>What They Say About Us</h1>
                  <p>
                    Dynamically initiate market positioning total linkage with
                    clicks-and-mortar technology compelling data for
                    cutting-edge markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="row slideshowpart">
              <>
                <Swiper
                  speed={5000}
                  loop={true}
                  autoplay={{ delay: 100, disableOnInteraction: false }}
                  navigation={true}
                  slidesPerView={2}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating tt-star-50">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating tt-star-50">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating tt-star-50">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating tt-star-50">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating tt-star-50">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating tt-star-50">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide_img_container">
                      <div>
                        <div className="slide_img_container_row1">
                          <img
                            className="bg_image"
                            src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/quotes-dot.svg"
                          ></img>
                          <div className="slide_img_container_row1_inner">
                            <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg"></img>
                            <div className="slide_img_container_row1_inner_contant">
                              <div>
                                <h4 className="name">Maxine Butler</h4>
                                <span className="designation">
                                  Product Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide_img_container_row2_inner">
                        <p>
                          Pellentesque nec nam aliquam sem. Ultricies lacus sed
                          turpis tincidunt id aliquet risus. Consequat nisl vel
                          pretium lectus quam id. Velit scelerisque in dictum
                          non of the ntconsectetur.
                        </p>
                      </div>

                      <div className="star_rating">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </section>

      <section className="sixthsec">
        <div className="container-fluid">
          <div className="container">
            <div className="row ">
              <div className="col-md-7 mx-auto text-center ">
                <div className="testimal">
                  <h5 className="text-primary">Our Office</h5>
                  <h1>Located Around the World</h1>
                  <p>
                    Dynamically technically sound technologies with parallel
                    task convergence quality vectors through excellent
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container locatepart">
            <div className="row">
              <Location
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/office-img-1-1.jpeg"
                name="Singapoure"
                type="4636 Bombardier Way Sr,Worthington, California(CA), 94102"
              />
              <Location
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/office-img-2.jpeg"
                name="Los Angeles"
                type="794 Mcallister St. Oak Harbor, Washington(WA), 98277"
              />
              <Location
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/office-img-3.jpeg"
                name="New York"
                type="4219 Snowbird Lane St Carthage, New York(NY), 13619"
              />
              <Location
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/office-img-5.jpeg"
                name="Barlin City"
                type="Brandenburgische Straße DE. Berlin Kreuzberg, Berlin(CA), 10997"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="seventhsec">
        <div className="container-fluid backlstimg">
          <div className="container ">
            <div className="row list-part-two">
              <div className="col-md-10 mx-auto text-center">
                <div className="smallpara">
                  <h5 className="text-warning">Let's Try! Get Free Support</h5>
                  <h1 className="text-white">Start Your 14-Day Free Trial</h1>
                  <p className="description">
                    We can help you to create your dream website for better
                    business revenue.
                  </p>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <div>
                    <button className="btn btn-primary btn-lg">
                      Contact With Us
                    </button>
                  </div>
                  <div className="ml-4 ">
                    <div className="tt-button-wrapper ">
                      <a
                        href="http://www.youtube.com/watch?v=hAP2QF--2Dg"
                        className="play-button btn-fill"
                      >
                        <i
                          className="fa fa-play rded-circle mr-3 "
                          aria-hidden="true"
                        ></i>
                        <span className="text-white">How It Works</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="smptconter">
                  <ul className="inline-items tt_list">
                    <li className="text-white mr-3">
                      <i
                        className="fa fa-check-circle pr-2"
                        aria-hidden="true"
                      ></i>
                      <span>Free 14-day trial</span>
                    </li>
                    <li className="text-white mr-2">
                      <i
                        className="fa fa-check-circle pr-2"
                        aria-hidden="true"
                      ></i>
                      <span>No credit card required</span>
                    </li>
                    <li className="text-white mr-2">
                      <i
                        className="fa fa-check-circle pr-2"
                        aria-hidden="true"
                      ></i>
                      <span> Support 24/7</span>
                    </li>
                    <li className="text-white mr-2">
                      <i
                        className="fa fa-check-circle pr-2"
                        aria-hidden="true"
                      ></i>
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="eightsec">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="lastmenupart">
                  <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/11/logo-color.svg"></img>
                  <p className="pt-3">
                    Our latest news, articles, and resources, we will sent to
                    your inbox weekly.
                  </p>
                </div>
                <div className="d-flex">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg firstinpt"
                        id="usr"
                      />
                    </div>
                  </form>
                  <div className="pl-2">
                    <button className="btn btn-primary btn-lg">
                      Subscitbe
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <h5 className="text-center paratextp">Primary Pages</h5>
                <div className="mt-4">
                  <ul className="pageslst">
                    <li className="pl-4">
                      <a href="">home</a>
                    </li>
                    <li className="pl-4">
                      <a href="">About</a>
                    </li>
                    <li className="pl-4">
                      <a href="">Contact</a>
                    </li>
                    <li className="pl-4">
                      <a href="">Services</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <h5 className="text-center paratextp">Pages</h5>
                <div className="mt-4">
                  <ul className="pageslst">
                    <li className="pl-3">
                      <a href="">home</a>
                    </li>
                    <li className="pl-3">
                      <a href="">About</a>
                    </li>
                    <li className="pl-3">
                      <a href="">Contact</a>
                    </li>
                    <li className="pl-3">
                      <a href="">Services</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <h5 className="text-center paratextp">Templates</h5>
                <div className="mt-4">
                  <ul className="pageslst">
                    <li className="">
                      <a href="">home</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                    <li>
                      <a href="">Services</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <footer className="footsec">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="lstftr mt-4 mb-4">
                    <span>
                      © 2022 Quiety - All Rights Reserved Made by
                      <a href="" className="pl-2">
                        ThemeTags
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex mt-4 mb-4 righticon">
                    <div className="liasticons">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="liasticons">
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="liasticons">
                      <i className="fa-brands fa-dribbble"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default About;
