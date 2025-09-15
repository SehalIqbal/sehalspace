import React from "react";
import LatestProjectsSwiper from "../components/swipers/latest-project";
import {
  IntroSection,
  Testimonial,
  Footer,
} from "../components";
import { BasicLayout } from "../layouts/basicLayout";

const Home = () => {
  return (
    <BasicLayout footer>
      <IntroSection />
      <LatestProjectsSwiper />
      <Testimonial />
    </BasicLayout>
  );
};

export default Home;
