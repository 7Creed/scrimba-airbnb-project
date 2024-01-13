import React from "react";
import star from "../assets/star.png";

const Card = ({ item }) => {
  console.log(item);
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}{" "}
      <img src={item.coverImg} className="card--image" alt="Main card image." />
      <div className="card--stats">
        <img src={star} className="card--star" alt="Star icon." />
        <span>{item.rating}</span>
        <span className="gray">({item.reviewCount}) • </span>
        <span className="gray">{item.location}</span>
      </div>
      <h2>{item.title}</h2>
      <p>
        <span className="bold">From ${item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
