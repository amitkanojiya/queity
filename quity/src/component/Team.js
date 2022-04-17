import React from "react";
import "../component/style.css";

function Team(props) {
  return (
    <>
      <div className="col-md-3">
        <div className="team_area_container">
          <div className="team_area_container_image text-center">
            <img src={props.src} alt="" />
          </div>
          <div className="team_area_container_buttn">
            <div className="team_cards">
              <div className="f-flex align-items-end">
                <div className="d-flex justify-content-center ">
                  <div className="teamiconbox">
                    <a href="#" className="m-2">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="teamiconbox">
                    <a href="#" className="m-2">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>

                  <div className="teamiconbox">
                    <a href="#" className="m-2">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>

                  <div className="teamiconbox">
                    <a href="#" className="m-2">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h5 className="pt-3 list1">{props.name}</h5>
          <p className="minpara">{props.type}</p>
        </div>
        {/* <div className="hovereffect single-team text-center">
          <img src={props.src} alt="" />
          <h5 className="pt-3 list1">{props.name}</h5>
          <p className="minpara">{props.type}</p>
          <div>
            <div className="d-flex justify-content-center ">
              <div className="teamiconbox">
                <a href="#" className="m-2">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <div className="teamiconbox">
                <a href="#" className="m-2">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>

              <div className="teamiconbox">
                <a href="#" className="m-2">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>

              <div className="teamiconbox">
                <a href="#" className="m-2">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Team;
