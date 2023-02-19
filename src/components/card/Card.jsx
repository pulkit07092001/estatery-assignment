import React from "react";
import "./card.css";
const Card = ({ card }) => {
  const { price, name, address, beds, bathrooms, tag, squareArea, image } =
    card;
  return (
    <div className="card">
      <div className="cardImg">
        <img src={`./images${image}`} alt="" />
      </div>
      <div className="details">
        {tag ? (
          <div className="card-tag">
            <div className="card-tag-left">{tag.toUpperCase()}</div>
            <div className="card-tag-right"></div>
          </div>
        ) : (
          ""
        )}

        <div className="basic">
          <div className="price">
            <span className="amount">${price}</span>
            <span className="month"> /month</span>
          </div>

          <div className="favourite">
            <i class="fa-regular fa-heart"></i>
          </div>
          <h1 className="name">{name}</h1>
          <p className="address">
            <span>
              {address.street}, {address.city}
            </span>
            , <span>{address.countryCode}</span>
          </p>
        </div>
        <ul className="additional">
          <li className="additional-detail beds">
            <i class="fa-solid fa-bed"></i> {beds} beds
          </li>
          <li className="additional-detail bathrooms">
            <i class="fa-solid fa-bath"></i> {bathrooms} bathrooms
          </li>
          <li className="additional-detail area">
            <i class="fa-solid fa-clone"></i> {squareArea}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
