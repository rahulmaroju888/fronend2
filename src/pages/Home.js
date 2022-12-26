import React from "react";
import HeroSection from "../components/HeroSection";

function Home() {
  const data = {
    name: "Rahul store",
  };
  return (
    <div>
      <HeroSection myData={data} />
    </div>
  );
}

export default Home;
