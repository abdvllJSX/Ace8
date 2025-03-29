import Img from "../common/image";

const Hero = () => {
    return (
        <section className="sm:px-[10rem] px-[2.5rem] bg-[#0A0C10] py-[5rem]">
            <div className=" mx-auto w-fit bg-nignix-hero-border-sm sm:bg-nignix-hero-border
            bg-no-repeat  bg-[length:100%_100%] py-[2.5rem] sm:py-[7rem] sm:px-[5rem]">
                <h1 className="font-[700] sm:mx-auto sm:w-[84rem] text-[2.2rem] sm:text-[5.5rem] text-center">Elevate <span className="font-[400]">your Web</span> <span className="text-[#8FD5CC]">Infrastructure</span> <span className="font-[400]">with</span> Expert <span className="text-[#8FD5CC] font-[500]">Ngnix</span> Consulting </h1>
            </div>
            <Img
                src={"/nignix/nignix-logo.png"}
                className={"sm:w-[100rem] mx-auto sm:mt-[5rem] mt-[2rem] w-full"}
                alt={"logo"}
             />
        </section>
    );
}
 
export default Hero;