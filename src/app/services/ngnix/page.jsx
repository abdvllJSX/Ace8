import Hero from "../../components/nignix/hero";
import Brand from "../../components/nignix/brand";
import Solution from "../../components/nignix/solution";
import UseCase from "../../components/nignix/usecase";
import Partner from "../../components/nignix/partner";
import Services from "../../components/nignix/service";
import CTA from "../../components/nignix/CTA";
import MaxContainer from "../../components/common/maxContainer";
import Contact from "../../components/common/contact";

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
}
 
export default Nignix;