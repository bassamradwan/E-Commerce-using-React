import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

function Home() {

  return (
    <Layout> 
      <div>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track/>
        <Testimonial/>
      </div>
    </Layout>
  );
}

export default Home;
