import Hero from "@/app/components/observability/hero";
import Brand from "../../components/observability/brand";
import Solutions from "../../components/observability/solutions";
import Monitoring from "../../components/observability/monitoring";
import Partner from "../../components/observability/partner";
import UseCase from "../../components/observability/useCase";
import Techniques from "../../components/observability/techniques";
import CTA from "../../components/observability/cta";
import Contact from "../../components/common/contact";
import MaxConatiner from "../../components/common/maxContainer";

export const metadata = {
  title:
    "Observability Consulting: Prometheus, Grafana, Datadog & Kibana | Ace8.io",
  description:
    "Unlock full-stack observability with expert consulting in Prometheus, Grafana, Datadog & Kibana. Optimize cloud-native and Kubernetes monitoring today!",
  alternates: {
    canonical: "https://www.ace8.io/services/observability",
  },
  openGraph: {
    title:
      "Observability Consulting: Prometheus, Grafana, Datadog & Kibana | Ace8.io",
    description:
      "Unlock full-stack observability with expert consulting in Prometheus, Grafana, Datadog & Kibana. Optimize cloud-native and Kubernetes monitoring today!",
    url: "https://www.ace8.io/services/observability",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const Observablity = () => {
  return (
    <div className="sm:mt-[9rem] mt-[6rem] overflow-x-hidden bg-white w-[100vw]">
      <Hero />
      <Brand />
      <Solutions />
      <Monitoring />
      <Partner />
      <UseCase />
      <Techniques />
      <div className="bg-[#0D1117] sm:pt-[9rem] sm:pb-[5rem]">
        <CTA />
        <MaxConatiner>
          <Contact />
        </MaxConatiner>
      </div>
    </div>
  );
};

export default Observablity;
