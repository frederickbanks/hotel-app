import React from "react";
import MainImage from "../components/MainImage";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <MainImage>
        <Banner title="Sorry, we cant find what you're looking for">
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </Banner>
      </MainImage>
    </div>
  );
};

export default Error;
