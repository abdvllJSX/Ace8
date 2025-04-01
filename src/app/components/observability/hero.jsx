import Img from "../common/image";

const Hero = () => {
    return (
        <section className="text-[#0D1117] sm:px-[10rem] sm:pt-[9rem] pt-[4rem] px-[2.5rem]">
            <div className="flex flex-col gap-[2rem] sm:gap-[4rem] sm:flex-row items-center justify-center">
                <div className="sm:w-[70rem]">
                    <h1 className="header text-center sm:text-start">
                        <span className="font-[500]">Elevate<span className="font-[300]"> Your</span> <span className="text-[#9B86FE]">Monitoring Strategy</span> <span className="font-[400]">with</span> Expert Consulting</span> 
                    </h1>

                    <p className="sm:w-[80%] w-[90%] text-center mx-auto sm:mx-0 sm:text-start font-[400] sm:mt-[3rem] mt-[2rem]">Optimize, Visualize, and Secure Your Infrastructure with Cutting-Edge Monitoring Solutions</p>
                </div>

                <Img
                    src={"/observability/hero.png"}
                    className={"sm:w-[50rem] w-[20rem]"}
                    alt="hero"
                />
            </div>
        </section>
    );
}

export default Hero;