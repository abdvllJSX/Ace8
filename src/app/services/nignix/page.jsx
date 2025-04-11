import Hero from "@/app/components/nignix/hero";
import Brand from "../../components/nignix/brand";
import Solution from "../../components/nignix/solution";
import UseCase from "../../components/nignix/usecase";
import Partner from "../../components/nignix/partner";
import Services from "../../components/nignix/service";
import CTA from "../../components/nignix/CTA";
import MaxContainer from "../../components/common/maxContainer";
import Contact from "../../components/common/contact";

export const metadata = {
  title: "Expert Nginx Consulting & Optimization | Ace8.io",
  description:
    "Optimize performance, load balance and secure your web infrastructure with expert Nginx consulting. Get custom configuration, troubleshooting, and 24/7 support.",
  alternates: {
    canonical: "https://www.ace8.io/services/nginx",
  },
  openGraph: {
    title: "Expert Nginx Consulting & Optimization | Ace8.io",
    description:
      "Optimize performance, load balance and secure your web infrastructure with expert Nginx consulting. Get custom configuration, troubleshooting, and 24/7 support.",
    url: "https://www.ace8.io/services/nginx",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const Nignix = () => {
  return (
    <div className="bg-[#0D1117] sm:pt-[9rem] pt-[6rem] overflow-x-hidden w-[100vw]">
      <Hero />
      <Brand />
      <Solution />
      <UseCase />
      <Partner />
      <Services />
      <CTA />
      <MaxContainer>
        <Contact />
      </MaxContainer>
    </div>
  );
};

export default Nignix;
