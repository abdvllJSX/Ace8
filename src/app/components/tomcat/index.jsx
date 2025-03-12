"use client";
import React, { useEffect } from "react";
import Hero from "./hero";
import SupportServices from "./supportServices";
import SupportCloudBased from "./supportCloudBased";
import SupportOnPremises from "./supportOnPremises";
import Partner from "./partner";
import CTA from "./CTA";
import Contact from "../../components/common/contact";
import { slideIn } from "../../Animations/common";
// import { useEffect } from "react";
import MaxContainer from "../../components/common/maxContainer";

const index = () => {
  useEffect(() => {
    slideIn();
  }, []);
  return (
    <>
      <Hero />
      <SupportServices />
      <SupportCloudBased />
      <SupportOnPremises />
      <Partner />
      <CTA />
      <MaxContainer>
        <Contact />
      </MaxContainer>
    </>
  );
};

export default index;
