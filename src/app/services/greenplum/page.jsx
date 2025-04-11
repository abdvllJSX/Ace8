import React from "react";
import GreenPlumn from "./Greenplum";

export const metadata = {
  title: "Expert Greenplum Consulting & Data Analytics | Ace8.io",
  description:
    "Unleash petabyte-scale analytics with expert Greenplum consulting. Optimize performance, secure data, and build scalable architectures with 24/7 proactive support.",
  alternates: {
    canonical: "https://www.ace8.io/services/greenplum",
  },
  openGraph: {
    title: "Expert Greenplum Consulting & Data Analytics | Ace8.io",
    description:
      "Unleash petabyte-scale analytics with expert Greenplum consulting. Optimize performance, secure data, and build scalable architectures with 24/7 proactive support.",
    url: "https://www.ace8.io/services/greenplum",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const GreenplumPage = () => {
  return <GreenPlumn />;
};

export default GreenplumPage;
