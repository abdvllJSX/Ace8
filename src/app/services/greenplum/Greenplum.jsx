"use client";
import { useEffect } from "react";
import Hero from "../../components/greenplumn/hero";
import Guildance from "../../components/greenplumn/guidance";
import Tanzu from "../../components/greenplumn/tanzu";
import Partner from "../../components/greenplumn/partner";
import UseCase from "../../components/greenplumn/useCase";
import Services from "../../components/greenplumn/services";
import Differentiators from "../../components/greenplumn/differentiators";
import CTA from "../../components/greenplumn/cta";
import Contact from "@/app/components/common/contact";
import Maxcontainer from "@/app/components/common/maxContainer";
import { slideIn } from "../../Animations/common";

const GreenPlumn = () => {
  useEffect(() => {
    slideIn();
  }, []);
  return (
    <div className="bg-[#0D1117] sm:pt-[9rem] pt-[6rem] overflow-x-hidden w-[100vw]">
      <Hero />
      <Guildance />
      <Tanzu />
      <Partner />
      <UseCase />
      <Services />
      <Differentiators />
      <CTA />
      <Maxcontainer>
        <Contact />
      </Maxcontainer>
    </div>
  );
};

export default GreenPlumn;
