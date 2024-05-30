import React from "react";
import Header from "../components/Header/Header";
import DatenTime from "../components/DateAndTime/DatenTime";
import CountryTag from "../components/CountryTag/CountryTag";
import DishWithImage from "../components/DishWithImage/DishWithImage";
import Recommended from "../components/Recommended/Recommended";
import Card from "../components/Cards/Card";

function Home() {
  return (
    <>
      <Header heading={"Select Dishesh"} />
      <DatenTime />
      <CountryTag />
      <DishWithImage />
      <Recommended text={"Recommended"} />
      <Card />
      <Card />
    </>
  );
}

export default Home;
