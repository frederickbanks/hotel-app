import React from "react";
import MainImage from "../components/MainImage";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from '../components/FeaturedRooms'
const Home = () => {
  return (
    <div>
      <MainImage main="defaultMain">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
        </MainImage>
      <Services />
      < FeaturedRooms />
    </div>
  );
};

export default Home;
