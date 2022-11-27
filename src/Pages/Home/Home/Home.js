import React from "react";
import Categories from "../../Categories/Categories/Categories";
import Banner from "../Banner/Banner";
import OurSevicesInfo from "../OurServicesInfo/OurSevicesInfo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <OurSevicesInfo></OurSevicesInfo>
    </div>
  );
};

export default Home;
