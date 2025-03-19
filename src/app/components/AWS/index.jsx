"use client";
import Hero from "./hero";
import AWSServices from "./services";
import AWSOfferings from "./AWSOfferings";
import AWSCloud from "./AWSCloud";
import AWSPartners from "./AWSPartners";
import { slideIn } from "../../Animations/common";
import UseCase from "@/app/components/AWS/usecase";
import { useEffect } from "react";

const AWS = () => {
  useEffect(() => {
    slideIn();
  }, []);
  return (
    <div className="sm:pt-[9rem] pt-[6rem] overflow-x-hidden w-[100vw]">
      <Hero />
      <AWSCloud />
      <AWSOfferings />
      <AWSPartners />
      <UseCase />
      <AWSServices />
    </div>
  );
};

export default AWS;
