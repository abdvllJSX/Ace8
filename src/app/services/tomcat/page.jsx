import TomCat from "../../components/tomcat";

export const metadata = {
  title: "Expert Apache Tomcat Consulting & Support Services | Ace8.io",
  description:
    "Boost your Java web application's performance with our expert Apache Tomcat consulting and support services. We provide tailored solutions for both cloud-based and on-premises deployments.",
  alternates: {
    canonical: "https://www.ace8.io/services/tomcat",
  },
  openGraph: {
    title: "Expert Apache Tomcat Consulting & Support Services | Ace8.io",
    description:
      "Boost your Java web application's performance with our expert Apache Tomcat consulting and support services. We provide tailored solutions for both cloud-based and on-premises deployments.",
    url: "https://www.ace8.io/services/tomcat",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const TomCatPage = () => {
  return (
    <div className="sm:pt-[9rem] pt-[6rem] pb-[7rem] overflow-x-hidden w-[100vw]">
      <TomCat />
    </div>
  );
};

export default TomCatPage;
