import Brands from "@/app/components/common/brand";
import MaxContainer from "@/app/components/common/maxContainer";

import ButtonLink from "../common/buttonLink";
import Img from "../common/image";

const Brand = () => {
    return (
        <section className="text-[#000000] sm:mt-[3rem] flex flex-col">
            <MaxContainer>
                <Brands />
            </MaxContainer>
            <p className="text-center w-[90%] font-[500] sm:w-[105rem]
            mx-auto">
                In today's dynamic IT landscape, robust monitoring is crucial for maintaining peak performance and reliability. Whether you're leveraging Prometheus, Grafana, Datadog, or Kibana, our expert consulting services ensure your monitoring infrastructure delivers actionable insights while meeting your business objectives.
            </p>

            <ButtonLink
                className={"mx-auto hover:bg-[#5545A0] transition-all duration-300 ease-in-out rounded-[.5rem] border-[#5545A0] font-[800]"}
                link={"#contact"}
                text={"Connect with Our Monitoring Experts"}
            />
            <div className="sm:px-[10rem] mt-[3rem] sm:mt-[5rem] flex justify-center w-[100%]">
                <Img
                    src={"/observability/real-change.png"}
                    className={"w-[100%] max-w-[120rem]"}
                    alt="real-change"
                />
            </div>
        </section>
    );
}

export default Brand;