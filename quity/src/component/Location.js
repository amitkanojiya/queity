import React from "react";

function Location(props) {
  return (
    <>
      <div className="col-md-3">
        <div className="card_container mb-2">
          <div className="card_container_img">
            <img src={props.src}></img>
          </div>
          <div className="card_container_content">
            <h3>{props.name}</h3>

            <p>{props.type}</p>
          </div>
        </div>
        {/* <div className="offimg">
          <img src={props.src}></img>
          <div className="content text-center">
            <h5>{props.name}</h5>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Location;
