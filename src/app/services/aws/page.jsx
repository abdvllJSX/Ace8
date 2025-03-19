import AWS from "@/app/components/AWS";
import React from "react";

export const metadata = {
  title: "Expert AWS Consulting & Cloud Solutions | Ace8.io",
  description:
    "Our expert AWS services to optimize, secure, and scale with tailored solutions for cost optimization, security enhancement, disaster recovery, and advanced AWS offerings.",
  alternates: {
    canonical: "https://www.ace8.io/services/aws",
  },
  openGraph: {
    title: "Expert AWS Consulting & Cloud Solutions | Ace8.io",
    description:
      "Our expert AWS services to optimize, secure, and scale with tailored solutions for cost optimization, security enhancement, disaster recovery, and advanced AWS offerings.",
    url: "https://www.ace8.io/services/aws",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const AWSPage = () => {
  return <AWS />;
};

export default AWSPage;
