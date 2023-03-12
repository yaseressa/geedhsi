import React from "react";
import Header from "../Components/Header";
import HomeB from "../Components/HomeB";
import About from "../Components/About";
import Service from "../Components/Service";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Header type={"h"} />
      <HomeB />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default Home;
