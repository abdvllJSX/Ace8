import Img from "../common/image";
import ButtonLink from "../common/buttonLink";
import Brand from "../common/brand";
import MaxContainer from "../common/maxcontainer";


const Hero = () => {
    return (
        <section className="sm:pt-[5rem] pt-[4rem] px-[2.5rem] pb-[3rem] flex flex-col">
            <div className="flex flex-col sm:flex-row items-center sm:mb-[3rem] justify-center">
                <div className="text-center sm:text-start">
                    <h1 className="sm:text-[5rem] text-[2.8rem] sm:w-[79%]">Take Your <span className="font-[600]">Data</span> to the <span className="text-[#9B86FE] font-[700]">Next Level</span></h1>
                    <p className="mt-[.8rem] w-[90%] sm:w-[100%] mx-auto sm:mx-0 sm:mt-0">Unleash Massively Parallel Processing with Expert Greenplum Consulting.</p>
                </div>

                <Img
                    src={"/greenplum/greenplum-hero.png"}
                    className={"sm:w-[40rem] w-[20rem]"}
                />
            </div>

            <MaxContainer>
                <Brand />
            </MaxContainer>

            <p className="sm:w-[80rem] sm:text-[1.8rem] text-center mx-auto">Greenplum Database powers modern, analytics-driven architectures with petabyte-scale data processing and advanced machine learning capabilities. Whether you rely on open-source Greenplum or are considering premium offerings from VMware Tanzu (now Broadcom), our consulting services ensure that your Greenplum implementation runs at peak performance while meeting your business goals.</p>

            <ButtonLink
                text={"Connect with Our Greenplum Experts"}
                link={""}
                className={"border-[#5545A0] rounded-[1rem] mx-auto font-[700]"}
            />
        </section>
    );
}

export default Hero;