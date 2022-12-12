import React from "react";
import Footer from "../components/Footer/Footer";
import GamesModule from "../sections/Games_module/GamesModule";
import OptionsModule from "../sections/Options_module/OptionsModule";
import BlogModule from "../sections/Blog_module/BlogModule";
import Logo5Banner from "../sections/Logo5_banner/Logo5Banner";
import ScreensBanner from "../sections/Screens_banner/ScreensBanner";
import FeaturesModule from "../sections/Features_module/FeaturesModule";
import Hero from "../sections/Hero_module/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturesModule />
      <ScreensBanner />
      <GamesModule />
      <OptionsModule />
      <BlogModule />
      <Logo5Banner />
      <Footer />
    </div>
  );
}

export default Home;
