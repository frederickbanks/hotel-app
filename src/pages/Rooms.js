import React from "react";
import MainImage from "../components/MainImage";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div>
      <MainImage main="roomsMain">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </MainImage>
    </div>
  );
};

export default Rooms;
