import React, { useEffect, useState } from "react";
import "../css/home.css";
import "../css/universalCommon.css";

export default function Home() {
  const [first, setfirst] = useState([
    {
      imgurl:
        "https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/author1.jpg",
      s_title: "Joe Richard",
      sub_title: "Visual Designer",
    },
    {
      imgurl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5j04dcqsPZdQ57UwjHs8sjN1CyUIzgSiyx1NNUmQ=s64-c-mo",
      s_title: "Joe Richard",
      sub_title: "Visual Designer",
    },
    {
      imgurl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5L1axIiYnR57FkGOockVnOxNhCJQSQzdOYmXXhGCU=s32-c-mo",
      s_title: "Joe Richard",
      sub_title: "Visual Designer",
    },
    {
      imgurl:
        "https://quiety-wp.themetags.com/wp-content/uploads/2021/10/teati_author2.jpeg",
      s_title: "Joe Richard",
      sub_title: "Visual Designer",
    },
  ]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <React.Fragment>
      <div className="bannerbackground container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="bannerleftpart">
                <h1
                  className="banner_title"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Get Fully Control and Visibility your Company
                </h1>

                <p
                  className="banner_description"
                  data-aos="fade-up"
                  data-aos-duration="1300"
                >
                  Proactively coordinate quality quality vectors vis-a-vis
                  supply chains. Quickly engage client-centric web services.
                </p>

                <div
                  className="bannerbuttonrow"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <button className="btn btn-primary">Request For Demo</button>

                  <div className="playbutton">
                    <i className="fa fa-play"></i>
                    <a href="http://www.youtube.com/watch?v=hAP2QF--2Dg">
                      How It Works
                    </a>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000">
                  <h4 className="bannerlogosTitles">Our Top Clients:</h4>
                  <ul className="bannerlogos">
                    <li>
                      <img
                        className="responsive-img"
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/client-1.svg"
                      />
                    </li>
                    <li>
                      <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/client-2.svg" />
                    </li>
                    <li>
                      <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/client-3.svg" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="col-lg-5"
            >
              <div className="banner_image">
                <img src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/banner/banner1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid section1">
        <div className="container">
          <div className="row">
            <div className="sectionHeading col-12">
              <h2>With all the Features You Need</h2>
              <p>
                Credibly grow premier ideas rather than bricks-and-clicks
                strategic theme areas
              </p>
              <p>distributed for stand-alone web-readiness.</p>
            </div>

            <div className="col-md-4">
              <div className="borderstroke">
                <div className="borderstrokehover">
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="iconBackground1">
                        <i className="fas fa-layer-group"></i>
                      </div>
                    </div>
                    <div className="iconcontainer">
                      <h3>
                        <a href="/service/">Good Performance</a>
                      </h3>
                      <p>
                        Appropriately grow competitive rather leadership the
                        leadership processes sound without state.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="borderstroke">
                <div className="borderstrokehover">
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="iconBackground2">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                    </div>
                    <div className="iconcontainer">
                      <h3>
                        <a href="/service/">Highly Secure</a>
                      </h3>
                      <p>
                        Appropriately grow competitive rather leadership the
                        leadership processes sound without state.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="borderstroke">
                <div className="borderstrokehover">
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="iconBackground3">
                        <i className="fas fa-pencil-ruler"></i>
                      </div>
                    </div>
                    <div className="iconcontainer">
                      <h3>
                        <a href="/service/">Fast Development</a>
                      </h3>
                      <p>
                        Appropriately grow competitive rather leadership the
                        leadership processes sound without state.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid section2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-col-6-1">
                <div className="main-promo-contant">
                  <div className="promo-contant">
                    <h3>Utilize your software data</h3>
                    <p>
                      Progressively reinvent models and niche revolutionary
                      benefits for integrated.
                    </p>
                    <button>Learn More</button>
                  </div>

                  <div className="promo-image">
                    <img src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/promo.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-col-6-2">
                <div className="main-promo-contant">
                  <div className="promo-contant">
                    <h3>Get real time updated anytime</h3>
                    <p>
                      Progressively reinvent models and niche revolutionary
                      benefits for integrated.
                    </p>
                    <button>Learn More</button>
                  </div>

                  <div className="promo-image">
                    <img src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/cta-img-2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid section3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div>
                <div className="sectionHeading1">
                  <div style={{ display: "flex" }}>
                    <div className="iconBackground1">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                  </div>
                  <h2>Advanced Analytics, Understand Business</h2>
                  <div>
                    <p>
                      Distinctively promote parallel vortals with ubiquitous
                      e-markets. Proactively benchmark turnkey optimize
                      next-generation strategic leadership without resource
                      sucking ideas.
                    </p>
                  </div>
                </div>
                <section>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 ">
                      <ul className="section3-list">
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Thought leadership</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Modernized prospecting</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                          <span className="list-text">Showcasing success</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <ul className="section3-list">
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Personal branding</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Better win rates</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Sales compliance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <div>
                  <div>
                    <a>
                      <span style={{ color: "#175cff" }}>
                        <span className="tt-btn-text">Know More About Us</span>
                        &nbsp;&nbsp;
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <img
                className="col-md-12"
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/widget-11.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid section3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <img
                className="col-md-12"
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/widget-12.png"
                alt="image"
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <div>
                <div className="sectionHeading1">
                  <div style={{ display: "flex" }}>
                    <div className="iconBackground3">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                  </div>
                  <h2>Match Everything to Brand and Style</h2>

                  <p>
                    Intrinsicly pontificate reliable metrics with enabled.
                    Holisticly maintains clicks-and-mortar manufactured products
                    empower viral customer service through resource
                    deliverables.
                  </p>
                  <p>
                    Customer service through resource pontificate reliable
                    metrics with enabled expedite resource maximizing
                    information maintain manufactured products.
                  </p>
                </div>

                <div>
                  <a>
                    <span style={{ color: "#175cff" }}>
                      <span className="tt-btn-text">Know More About Us</span>
                      &nbsp;&nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bannerbackground ">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="row mb-5">
            <div className="section4 col-12">
              <h3>Testimonial</h3>
              <h2>What They Say About Us</h2>
              <p>
                Uniquely promote adaptive quality vectors rather than
                stand-alone e-markets.
                <br /> pontificate alternative architectures whereas iterate.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="section4-left-part">
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/watermark.svg"
                        alt="Joe Richard"
                        height="65"
                        width="50"
                      />
                    </div>

                    <h3>The Best Template You Got to Have it!</h3>

                    <div style={{ color: "#fba824", marginBottom: "20px" }}>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>
                      Appropriately disintermediate one-to-one vortals through
                      cross functional infomediaries. Collaboratively pursue
                      multidisciplinary systems through stand-alone
                      architectures. Progressively transition covalent
                      architectures whereas vertical applications procrastinate
                      professional.
                    </p>

                    <h3>Joe Richard</h3>

                    <span>Visual Designer</span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="image-wrapper">
                    <img
                      className="first-image-wrapper"
                      src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/dot.png"
                      alt="The Best Template You Got to Have it!"
                    />
                    <div className="tab-image">
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor/assets/images/testimonial_tab_1.jpg"
                        alt="The Best Template You Got to Have it!"
                      />

                      <a
                        href="#http://www.youtube.com/watch?v=hAP2QF--2Dg"
                        className="play-img-button"
                      >
                        <i className="fas fa-play"></i>Watch Video
                      </a>
                    </div>
                    <div className="darkbackground"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="row all-author-card">
            {first.map((s_data, index) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-6  pl-0 pb-3 "
                  key={index}
                >
                  <li className="  single-author-card ">
                    <a>
                      <div className="author-image">
                        <img src={s_data.imgurl} alt="Joe Richard" />
                      </div>

                      <div className="author-info">
                        <h3 className="tab-name">{s_data.s_title}</h3>

                        <span className="tab-designation">
                          {s_data.sub_title}
                        </span>
                      </div>
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container-fluid section3">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-7 mx-auto text-center  ">
              <div className="section5 sectionHeading">
                <h3>Process</h3>
                <h2>We Follow Our Work Process</h2>
                <div>
                  Enthusiastically engage cross-media leadership skills for
                  alternative experiences.
                  <br /> Proactively drive vertical systems than intuitive
                  architectures.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-3">
              <img
                width="100%"
                className="corner-radious"
                height="100%"
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/office-img-1.jpeg"
              />
            </div>
            <div className="col-md-7">
              <div className="pl-3">
                <div className=" single-step-icon-row">
                  <div className="step-icon-container">
                    <i className="fas fa-folder-plus"></i>
                  </div>

                  <div>
                    <h4>Step 1 </h4>

                    <h3>Research and Content Planing </h3>

                    <p>
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed base
                      bandwidth.
                    </p>
                  </div>
                </div>

                <div className=" single-step-icon-row">
                  <div className="step-icon-container">
                    <i className="fas fa-bezier-curve"></i>
                  </div>

                  <div>
                    <h4>Step 2 </h4>

                    <h3>Publishing and Execution</h3>

                    <p>
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed base
                      bandwidth.
                    </p>
                  </div>
                </div>

                <div className=" single-step-icon-row">
                  <div className="step-icon-container">
                    <i className="fas fa-layer-group"></i>
                  </div>

                  <div>
                    <h4>Step 3 </h4>

                    <h3>Product Prototyping</h3>

                    <p>
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed base
                      bandwidth.
                    </p>
                  </div>
                </div>

                <div className=" single-step-icon-row mb-0">
                  <div className="step-icon-container">
                    <i className="fas fa-truck"></i>
                  </div>

                  <div>
                    <h4>Step 4 </h4>

                    <h3>Deliver the Final Product</h3>

                    <p>
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed base
                      bandwidth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid section3">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-7 mx-auto text-center">
              <div className="section5 sectionHeading">
                <h3>Pricing</h3>
                <h2>Check Our Valuable Price</h2>
                <div>
                  Conveniently mesh cooperative services via magnetic
                  outsourcing. Dynamically grow value whereas accurate
                  e-commerce vectors.
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="container">
          <div className="row custom-lr-margin">
            <div className="col-md-4 mb-2">
              <div>
                <div className="section-5-icon-single-row">
                  <div className="section-5-icon-single1">
                    <i className="far fa-credit-card"></i>
                  </div>
                  <h3>No credit card required</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div>
                <div className="section-5-icon-single-row">
                  <div className="section-5-icon-single2">
                    <i className="far fa-calendar-check"></i>
                  </div>
                  <h3>Get 30 day free trial</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div>
                <div className="section-5-icon-single-row">
                  <div className="section-5-icon-single3">
                    <i className="far fa-calendar-times"></i>
                  </div>
                  <h3>Cancel anytime</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="container-fluid mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="widget-container">
                <div className="mb-4">
                  <h2>Standard</h2>

                  <h3>
                    <span className="price">
                      <span>$</span>
                      <span>29</span>
                    </span>
                    <span className="pricing-period">/month</span>
                  </h3>
                </div>

                <div>
                  <ul>
                    <li>
                      <span className="bullet"></span>1 Team
                    </li>

                    <li>
                      <span className="bullet"></span>1 Installed Agent
                    </li>

                    <li>
                      <span className="bullet"></span> Real-Time Feedback
                    </li>

                    <li>
                      <span className="bullet"></span> Video Dedicated Support
                    </li>

                    <li>
                      <span className="bullet"></span>1 Attacked Targets Per
                      Month
                    </li>

                    <li>
                      <span className="bullet"></span> Team Collaboration Tools
                    </li>

                    <li>
                      <span className="bullet"></span> Automated Updated
                      Features
                    </li>

                    <li>
                      <span className="bullet"></span> 24/7 Life time Support
                    </li>
                  </ul>
                </div>

                <div className="mt-5">
                  <button href="" className="pricing-button">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="pricing-advance">
                <span className="feature-star">
                  <svg
                    width="56"
                    height="70"
                    viewBox="0 0 56 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.2605 3.08451C52.3941 1.17426 50.8033 0 49.0835 0H27.7273H6.37205C4.65223 0 3.06147 1.17426 2.19505 3.08451L0 7.92208H27.7273H55.4545L53.2605 3.08451Z"
                      fill="#C4C4C4"
                    ></path>
                    <path
                      d="M10.1384 68.144C10.1394 68.7198 10.4114 69.2478 10.8454 69.5226C11.2795 69.7973 11.8089 69.7746 12.2235 69.4616L24.0948 60.5163C26.3051 58.851 29.1485 58.851 31.3587 60.5163L43.2311 69.4616C43.6466 69.7746 44.1751 69.7985 44.6102 69.5238C45.0452 69.249 45.3151 68.7198 45.3161 68.144C45.3438 56.4569 45.3592 13.1982 45.3592 13.1982C45.3592 8.27996 46.9887 3.55282 49.9091 0H27.7283H5.54546C8.46582 3.55282 10.0953 8.28116 10.0953 13.1994C10.0953 13.1994 10.1117 56.4569 10.1384 68.144Z"
                      fill="white"
                    ></path>
                    <path
                      d="M27.0489 24.9271C27.3483 24.0057 28.6517 24.0057 28.9511 24.9271L31.1432 31.6738C31.2771 32.0858 31.661 32.3647 32.0943 32.3647H39.1882C40.1569 32.3647 40.5597 33.6044 39.776 34.1738L34.0369 38.3435C33.6864 38.5981 33.5397 39.0495 33.6736 39.4615L35.8657 46.2082C36.1651 47.1295 35.1106 47.8956 34.3269 47.3262L28.5878 43.1565C28.2373 42.9019 27.7627 42.9019 27.4122 43.1565L21.6731 47.3262C20.8894 47.8956 19.8349 47.1295 20.1343 46.2082L22.3264 39.4615C22.4603 39.0495 22.3136 38.5981 21.9631 38.3435L16.2241 34.1738C15.4403 33.6044 15.8431 32.3647 16.8118 32.3647H23.9057C24.339 32.3647 24.7229 32.0858 24.8568 31.6738L27.0489 24.9271Z"
                      fill="#162D89"
                    ></path>
                  </svg>
                </span>
                <div>
                  <div className="mb-4">
                    <h2>Advanced</h2>

                    <h3>
                      <span className="price">
                        <span>$45</span>
                        <span></span>
                      </span>
                      <span className="pricing-period text-white">/month</span>
                    </h3>
                  </div>

                  <div>
                    <ul>
                      <li>
                        <span className="bullet"></span>1 Team
                      </li>

                      <li>
                        <span className="bullet"></span>1 Installed Agent
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Real-Time Feedback
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Video Dedicated Support
                      </li>

                      <li>
                        <span className="bullet"></span>1 Attacked Targets Per
                        Month
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Team Collaboration Tools
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Automated Updated Features
                      </li>

                      <li>
                        <span className="bullet"></span>
                        24/7 Life time Support
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5">
                    <button href="" className="pricing-button">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="widget-container">
                <div>
                  <div className="mb-4">
                    <h2>Premium</h2>

                    <h3>
                      <span className="price">
                        <span>$</span>
                        <span>75</span>
                      </span>
                      <span className="pricing-period">/month</span>
                    </h3>
                  </div>

                  <div>
                    <ul>
                      <li>
                        <span className="bullet"></span>1 Team
                      </li>

                      <li>
                        <span className="bullet"></span>1 Installed Agent
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Real-Time Feedback
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Video Dedicated Support
                      </li>

                      <li>
                        <span className="bullet"></span>1 Attacked Targets Per
                        Month
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Team Collaboration Tools
                      </li>

                      <li>
                        <span className="bullet"></span>
                        Automated Updated Features
                      </li>

                      <li>
                        <span className="bullet"></span>
                        24/7 Life time Support
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5">
                    <button href="" className="pricing-button">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid section1">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-7 mx-auto text-center  ">
              <div className="section5 sectionHeading">
                <h3>FAQ</h3>
                <h2>Frequently Asked Questions</h2>
                <div>
                  Conveniently mesh cooperative services via magnetic
                  outsourcing. Dynamically grow value whereas accurate
                  e-commerce vectors.
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div>
                <div>
                  <div>
                    <div className="mb-4">
                      <div>
                        <h4 className="faq-list-title">
                          <span className="faq-list-number">1.</span>
                          How does back pricing work?
                        </h4>

                        <p className="faq-list-answer">
                          Progressively e-enable collaborative inexpensive
                          supply chains. Efficiently maintain economically
                          methods of empowerment for synergistic sound
                          scenarios.
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div>
                        <h4 className="faq-list-title">
                          <span className="faq-list-number">2.</span>
                          How do I calculate how much price?
                        </h4>

                        <p className="faq-list-answer">
                          Globally benchmark customized mindshare before
                          clicks-and-mortar partnerships. Efficiently maintain
                          economically sound scenarios and whereas client-based
                          progressively.
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="tt-faq-list-content">
                        <h4 className="faq-list-title">
                          <span className="faq-list-number">3.</span>
                          Can you show me an example?
                        </h4>
                        <p className="faq-list-answer">
                          Dynamically visualize whereas competitive
                          relationships. Progressively benchmark customized
                          partnerships generate interdependent benefits rather
                          sound scenarios and robust alignments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                width="100%"
                height="100%"
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/faq.svg"
              />
            </div>
          </div>
        </section>
      </section>

      <section className="container-fluid section3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-logo-list">
                <ul className="circle-logo-list-left">
                  <li>
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo13.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo10.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/3.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/4.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/5.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/6.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 my-auto">
              <div>
                <div className="mb-5 logos-center-part">
                  <h3>Integration</h3>
                  <h2>We Collaborate with Top Software Company</h2>
                  <div className=" text-center mt-4 ">
                    <button>
                      View all Integration
                      <span className="elementor-align-icon-right tt-btn-icon">
                        &nbsp;&nbsp;
                        <i
                          aria-hidden="true"
                          className="fas fa-arrow-right"
                        ></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-logo-list">
                <ul className="circle-logo-list-right">
                  <li data-bs-original-title="Brand Name">
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/7.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li data-bs-original-title="Brand Name">
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/8.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li data-bs-original-title="Brand Name">
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo11.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li data-bs-original-title="Brand Name">
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/10.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li data-bs-original-title="Brand Name">
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/11.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                  <li data-bs-original-title="Brand Name">
                    <div>
                      <img
                        src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/12.png"
                        alt="Brand Name"
                        width="40"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="section-6-card">
                <div>
                  <img
                    className="circle-shadow p-1"
                    src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/4.png"
                    alt="Google Drive"
                  />
                </div>
                <div>
                  <h3>Google Drive</h3>
                  <p>
                    Competently generate unique e-services and client-based
                    models. Globally engage tactical niche
                  </p>
                </div>
                <div className="section-6-badge-left">Connect </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="section-6-card">
                <div>
                  <img
                    className="circle-shadow p-1"
                    src="https://quiety-wp.themetags.com/wp-content/uploads/2021/10/9.png"
                    alt="Google Drive"
                  />
                </div>
                <div>
                  <h3>Google Drive</h3>
                  <p>
                    Competently generate unique e-services and client-based
                    models. Globally engage tactical niche
                  </p>
                </div>
                <div className="section-6-badge-right">Connected </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid section3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="s_last_section">
                <div className="main-center-container text-warning">
                  <div className="mb-3 text-center">
                    <h5 className="text-warning ">
                      Let's Try! Get Free Support
                    </h5>
                    <h1 className="text-white">Start Your 14-Day Free Trial</h1>
                    <p className=" mb-5 mt-3">
                      We can help you to create your dream website for better
                      business revenue.
                    </p>
                  </div>
                  <div className="btn_contact_us d-flex justify-content-center">
                    <div className="d-flex">
                      <button>Contact With Us </button>

                      <div className="playbutton">
                        <i className="fa fa-play"></i>
                        <a href="http://www.youtube.com/watch?v=hAP2QF--2Dg">
                          How It Works
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ul className="s_last_section_list row">
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
              </section>
            </div>
          </div>
        </div>
      </section>

      <footer className="container-fluid footer">
        <div className="container">
          <div className="row footer_inner">
            <div className="col-sm-6 col-md-5 mb-3 pr-5">
              <img
                src="https://quiety-wp.themetags.com/wp-content/uploads/2021/11/logo-white.svg"
                className="mb-3"
              />
              <p>
                Our latest news, articles, and resources, we will sent to your
                inbox weekly.
              </p>

              <form className="footer_form">
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control email_textbox   col-md-6 col-lg-9 "
                    placeholder="Email"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary ml-2   col-md-6 col-lg-3"
                  >
                    Subscribe <i className="fa fa-circle-o-notch fa-spin"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-sm-6 col-md-3">
              <h4 className="text-white mb-3">Primary Pages</h4>
              <div>
                <ul className="primary_list">
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
            <div className="col-sm-6 col-md-2">
              <h4 className="text-white mb-3">Pages</h4>
              <div>
                <ul className="primary_list">
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
            <div className="col-sm-6 col-md-2">
              <h4 className="text-white mb-3">Template</h4>
              <div>
                <ul className="primary_list">
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
        <div className="container">
          <div className="row copyright">
            <div className="col-md-6 ">
              <p>
                © 2022 Quiety - All Rights Reserved Made by
                <a href="https://www.themetags.com/">ThemeTags</a>
              </p>
            </div>
            <div className="col-md-6 ">
              <div className="footer_social">
                <ul>
                  <li>
                    <a>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
