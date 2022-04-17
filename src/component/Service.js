import React, { useEffect } from "react";
import "./Service.css";
import Slider from "./Slider";

function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <section className="top-conatiner ">
        <div className="container  ">
          <h1 className="top_tital">We are Development Experts</h1>

          <div className="inner_tital">
            <a href="https://quiety-wp.themetags.com/">Home</a>
            <span className="dot"></span>
            <span className="service"> Service</span>
          </div>
        </div>
      </section>

      <section className="secondsecction csec_section">
        <div className="container  mb-3 pt-5">
          <div className="row">
            <div className="col-md-6 mx-auto pt-5">
              <div className="text-center">
                <h1 className="sec_titale">
                  Best Services Grow Your Business Value
                </h1>
                <p className="sec_description">
                  Globally actualize cost effective with resource maximizing
                  leadership skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 ">
              <div className="row ">
                <div className="col-md-4 mb-1 ">
                  <div className=" p-3 leftcard">
                    <div className="aside_wrap  m-2">
                      <div className="aside_icon ">
                        <div className="rounded-circle icon_box p-2">
                          <i className=" p-2 fa-solid fa-chart-column icon_bar"></i>
                        </div>
                        <div className="icon_box_discription pt-3">
                          <h4 className="icon_box__title font-weight-600">
                            Automated Reports
                          </h4>
                          <p className="icon-box__description">
                            Synergistically pursue accurate initiatives without
                            economically imperatives.
                          </p>
                        </div>
                      </div>
                      <div className="icon_box_discription-2">
                        <p>
                          Professionally architect unique process improvements
                          via optimal.
                        </p>
                      </div>
                      <div className="elementor-container pb-3">
                        <h6 className=" inculd_tital font-weight-bold">
                          Included with...
                        </h6>
                      </div>
                      <div className="check_box_aside">
                        <ul className="tt__list">
                          <li className="list-item ">
                            <i className="fa-solid fa-circle-check"></i>
                            <span className="list-text pl-2">
                              High-converting
                            </span>
                          </li>

                          <li className="list-item ">
                            <i className="fa-solid fa-circle-check"></i>
                            <span className="list-text pl-2">
                              Personal branding
                            </span>
                          </li>

                          <li className="list-item ">
                            <i className="fa-solid fa-circle-check"></i>

                            <span className="list-text pl-2">
                              Modernized prospecting
                            </span>
                          </li>

                          <li className="list-item ">
                            <i className="fa-solid fa-circle-check"></i>

                            <span className="list-text pl-2">
                              Clean and modern
                            </span>
                          </li>

                          <li className="list-item ">
                            <i className="fa-solid fa-circle-check"></i>

                            <span className="list-text pl-2">
                              Showcasing success
                            </span>
                          </li>

                          <li className="list-item ">
                            <i className="fa-solid fa-circle-check"></i>

                            <span className="list-text pl-2">
                              Bootstrap latest version
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="view_box  ">
                        <a href="/service/service-details/">
                          <span className="">View Details</span>
                          <span>
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className=" p-2 leftcard ">
                        <div>
                          <div className="first_icon m-3">
                            <div className=" first_icon_box rounded-circle p-2">
                              <i className="fa-solid fa-file-lines p-2"></i>
                            </div>
                            <div className="firsticon_box_discription">
                              <h3 className="ficon_box__title">
                                Automated Reports
                              </h3>
                              <p className="icon-box__description">
                                Synergistically pursue accurate initiatives
                                without economically imperatives.
                              </p>
                            </div>
                            <div className="fview_box_d">
                              <div className="fview_box pb-4">
                                <a href="/service/service-details/">
                                  <span className="p-1">View Details</span>
                                  <span>
                                    <i
                                      aria-hidden="true"
                                      className="fas fa-arrow-right"
                                    ></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6  ">
                      <div className=" p-2 leftcard">
                        <div>
                          <div className="sec_icon m-3">
                            <div className=" sec_icon_box rounded-circle p-2">
                              <i className="fa-solid fa-user-group p2"></i>
                            </div>
                            <div className="firsticon_box_discription">
                              <h3 className="ficon_box__title">
                                User Journey Flow
                              </h3>
                              <p className="icon-box__description">
                                Quickly productize prospective value before
                                collaborative benefits.
                              </p>
                            </div>
                            <div className="fview_box pb-4">
                              <a href="/service/service-details/">
                                <span
                                  className="p-1
                                "
                                >
                                  View Details
                                </span>
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-arrow-right"
                                  ></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6  pt-4 ">
                      <div className=" p-2 leftcard">
                        <div>
                          <div className="first_icon m-3">
                            <div className=" third_icon_box rounded-circle p-2">
                              <i className="fa-solid fa-spell-check p-2"></i>
                            </div>
                            <div className="firsticon_box_discription">
                              <h3 className="ficon_box__title">
                                Automated Reports
                              </h3>
                              <p className="icon-box__description">
                                Synergistically pursue accurate initiatives
                                without economically imperatives.
                              </p>
                            </div>
                            <div className="fview_box pb-4">
                              <a href="/service/service-details/">
                                <span className="p-1">View Details</span>
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-arrow-right"
                                  ></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6  pt-4 ">
                      <div className=" p-2 leftcard">
                        <div>
                          <div className="first_icon m-3">
                            <div className=" four_icon_box rounded-circle p-2">
                              <i className="fa-solid fa-gear p-2"></i>
                            </div>
                            <div className="firsticon_box_discription">
                              <h3 className="ficon_box__title">
                                Automated Reports
                              </h3>
                              <p className="icon-box__description">
                                Synergistically pursue accurate initiatives
                                without economically imperatives.
                              </p>
                            </div>
                            <div className="fview_box pb-4">
                              <a href="/service/service-details/">
                                <span className="p-1">View Details</span>
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-arrow-right"
                                  ></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third_section">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-6 mx-auto  pb-5">
              <div className="text-center">
                <h5 className="th_heading">Testimonials</h5>
                <h3 className="th_title"> What They Say About Us</h3>

                <p className="th_title_description   pt-2">
                  Dynamically initiate market positioning total linkage with
                  clicks-and-mortar technology compelling data for cutting-edge
                  markets.
                </p>
              </div>
            </div>
            <Slider />
          </div>
        </div>

        {/* /jkndknlglrglk */}
        <div></div>
      </section>

      {/* //kjsbkjalkjggrjkot */}

      <section className=" section_four">
        <div className="backgroud_section">
          <div className="four_main-container text-warning">
            <div className="mb-3 text-center">
              <h5 className="text-warning ">Let's Try! Get Free Support</h5>
              <h1 className="text-white">Start Your 14-Day Free Trial</h1>
              <p className=" mb-5 mt-3">
                We can help you to create your dream website for better business
                revenue.
              </p>
            </div>
            <div className="btn_contact d-flex justify-content-center">
              <div className="d-flex">
                <button>Contact With Us </button>

                <div className="p_button rounded-circle">
                  <i className="fa fa-play"></i>
                  <a href="http://www.youtube.com/watch?v=hAP2QF--2Dg">
                    How It Works
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <ul className="secfour_section_list row">
                <li>
                  <i className="fa fa-check "></i> Free 14-day trial
                </li>
                <li>
                  <i className="fa fa-check"></i> No credit card required
                </li>
                <li>
                  <i className="fa fa-check"></i> Support 24/7
                </li>
                <li>
                  <i className="fa fa-check"></i> Cancel anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* secfive */}

      <section className="sec_five ">
        <div className="container">
          <div className="row ">
            <div className="col-md-5 col-sm-6 col-6  mb-3 pr-5">
              <img
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/11/logo-color.svg"
                className="mb-3"
              />
              <p>
                Our latest news, articles, and resources, we will sent to your
                inbox weekly.
              </p>

              <form className="secfour_form">
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control email_t_box   col-md-6 col-lg-9 "
                    placeholder="Email"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-primary ml-2   col-md-6 col-lg-3"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-3 col-sm-6 col-6 ">
              <h4 className=" mb-3 head_sec_f">Primary Pages</h4>
              <div>
                <ul className="primary_lists">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6">
              <h4 className=" mb-3 head_sec_f">Pages</h4>
              <div>
                <ul className="primary_lists">
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Request for Demo</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6">
              <h4 className=" mb-3 head_sec_f">Template</h4>
              <div>
                <ul className="primary_lists">
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Service</a>
                  </li>
                  <li>
                    <a href="">Integrations</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_top ">
        <div className="container ">
          <div className=" row d-flex footer-main p-3">
            <div className="copy_right col-md-6">
              <p>
                © 2022 Quiety - All Rights Reserved Made by
                <a href="/" className="pl-1 footer_them">
                  <span>Theme Tags</span>
                </a>
              </p>
            </div>

            <div className="     col-md-6">
              <ul className="footer-social-link d-flex  ">
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Service;
