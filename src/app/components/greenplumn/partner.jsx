import Img from "../common/image";

const data = [
    <span className=""><span className="font-[800]">Certified Greenplum Professionals:</span> Our team includes certified experts with extensive Greenplum and VMware Tanzu experience.</span>,
    <span className=""><span className="font-[800]">Tailored Solutions:</span> Customized strategies to match your unique workloads and business needs</span>,
    <span className=""><span className="font-[800]">Comprehensive Support:</span> From emergency fixes to proactive monitoring, we've got you covered.</span>,
    <span className=""><span className="font-[800]">Proven Success:</span> Trusted by enterprises across industries for analytics, machine learning, and AI applications</span>,
    <span className=""><span className="font-[800]">24/7 Availability:</span> Round-the-clock support options aligned with your SLAs.</span>,
]

const Partner = () => {
    return (
        <section className="sm:pt-[14rem] pt-[6rem] px-[2.5rem] pb-[6rem] sm:pb-[12rem] sm:px-[15rem] text-[#000000] bg-[#ffffff]">
            <div className="flex flex-col justify-center sm:flex-row mx-auto max-w-[1800px] items-center gap-[1.5rem]">
                <Img
                    src={"/greenplum/greenplum-partner.png"}
                    className={"sm:w-[40rem] w-[20rem]"}
                />
                <div className="">
                    <h2 className="sm:text-[3.2rem] text-center text-[2.5rem] sm:text-start sm:w-[48rem] font-[600]">
                        Why Choose Us as Your <span className="font-[700] text-[#FF88C3]">Greenplum Partner?</span>
                    </h2>

                    <div className="flex flex-col gap-[1.2rem] mt-[2rem]">
                        {
                            data.map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className="sm:text-[1.5rem] text-[1.4rem] font-[500] sm:w-[48rem]"
                                    >
                                        <span className="text-[#5545A0] font-[700]">✓ </span>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;