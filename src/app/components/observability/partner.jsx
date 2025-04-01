import Img from "../common/image";

const data = [
    <span className=""><span className="font-[800]">Certified Experts:</span> Our team includes professionals certified in Prometheus, Grafana, Datadog, and ELK Stack.</span>,
    <span className=""><span className="font-[800]">Multi-Tool Proficiency:</span>  Leverage our deep knowledge across various monitoring ecosystems.</span>,
    <span className=""><span className="font-[800]"> Tailored Strategies:</span> Customized monitoring solutions aligned with your specific business needs</span>,
    <span className=""><span className="font-[800]"> Proven Track Record:</span> Trusted by enterprises across industries for monitoring implementations and optimizations.</span>,
    <span className=""><span className="font-[800]">24/7 Support:</span> Round-the-clock assistance for your mission-critical monitoring environments.</span>,
]

const Partner = () => {
    return (
        <section className="sm:pt-[0] mt-[-.5rem] pt-[6rem] px-[2.5rem] pb-[1rem] sm:pb-[12rem] bg-[#0D1117] sm:px-[15rem] text-white">
            <div className="flex flex-col justify-center sm:flex-row mx-auto max-w-[1800px] items-center gap-[1.5rem]">
                <div className="">
                    <h2 className="sm:text-[3.2rem] text-center text-[2.5rem] sm:text-start sm:w-[48rem] font-[600]">
                        Why Choose Us as Your <span className="font-[700] text-[#FF88C3]">Monitoring Partner?</span>
                    </h2>

                    <div className="flex flex-col gap-[1.2rem] mt-[2rem]">
                        {
                            data.map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className="sm:text-[1.5rem] text-[1.4rem] font-[500] sm:w-[48rem]"
                                    >
                                        <span className="text-[#5545A0] text-[1.2rem] font-[700]">✓ </span>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <Img
                    src={"/observability/partner.png"}
                    className={"sm:w-[50rem] w-[30rem]"}
                />
            </div>
        </section>
    );
}

export default Partner;