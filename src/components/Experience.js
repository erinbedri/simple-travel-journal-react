import React from "react";

export default function Experience(props) {
  return (
    <div className="container experience">
      <div className="experience--img">
        <img src={props.info.imageUrl} alt="experience-img" />
      </div>
      <div className="experience--text">
        <div className="experience--location-info">
          <img src={require("../img/gps.png")} alt="gps" />
          <p className="experience--country">{props.info.location}</p>
          <a className="experience--maps" href={props.info.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="experience--title">{props.info.title}</h1>
        <h4 className="experience--dates">
          {props.info.startDate} - {props.info.endDate}
        </h4>
        <p className="experience--description">{props.info.description}</p>
      </div>
    </div>
  );
}
