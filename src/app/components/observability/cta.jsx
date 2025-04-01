import ButtonLink from "../common/buttonLink";
const CTA = () => {
    return (
        <div className="flex sm:bg-AWS-banner px-[2rem] sm:px-[0] bg-[length:100%_100%] bg-[#0B0E21] sm:bg-[#0B0E21] sm:bg-blend-multiply rounded-[1.8rem] max-w-[1400px] sm:py-[10rem] py-[7rem] sm:w-[85%] mx-auto mt-[0rem] flex-col justify-center relative items-center">
            <div className="absolute hidden sm:block bg-[length:100%_100%] width-[100%] height-[100%] z-[-1] w-[100%] bg-banner-outline bottom-[1.5rem] top-[-1.5rem] right-[-2rem]"></div>

            <h3 className="sm:text-[3rem] text-[2.2rem] text-center sm:text-start sm:mb-[1rem]">Ready to Transform Your <span className="font-[800] text-[#9B86FE] mb-[2rem]">Analysis Ecosystem</span></h3>


            <p className="text-center sm:text-[2rem] text-[1.6rem] sm:w-[80%]">
            Don't let data complexities slow you down. Whether you're an open-source advocate or exploring VMware Tanzu's enterprise capabilities, we'll provide the guidance, optimization, and support you need.
            </p>

            <ButtonLink
                link="#contact"
                text="Contact Us for a Free Consultation"
                className="sm:mt-[2rem] mt-[2rem] font-[800] border border-[#ffffff] sm:px-[5rem] px-[2rem] rounded-[.7rem] mx-auto hover:text-[#0D1117] hover:bg-[#ffffff]
                    transition-all duration-300 ease-in-out"
            />
        </div>
    )
}

export default CTA;