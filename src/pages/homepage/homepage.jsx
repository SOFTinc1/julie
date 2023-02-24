import React from "react";
import { HomepageContainer } from "./homepage.styles";
import Banner from "../../components/banner/banner";
import GalleryOverview from "../../components/gallery-overview/gallery-overview";
import Other from "../../components/other/other";
import Other2 from "../../components/other2/other2";
import FAQ from "../../components/faq/faq";

function Homepage() {
  return (
    <HomepageContainer>
      <Banner />
      <Other />
      <GalleryOverview />
      <Other2 />
      <FAQ />
    </HomepageContainer>
  );
}

export default Homepage;
