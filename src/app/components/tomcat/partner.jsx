import Img from "../common/image";

const Partner = () => {
    const Partners = [
        {
            title: <h3 className="text-[2.2rem]">Expert Team</h3>,
            description: "Work with certified professionals, including Apache Tomcat contributors.",
            icon: "/team.svg"
        },
        {
            title: <h3 className="text-[2.2rem]">Tailored Approach</h3>,
            description: "Solutions customized to your unique environment and goals.",
            icon: "/approach.svg"
        },
        {
            icon: "/tomcat-partner.png",
        },
        {
            title: <h3 className="text-[2.2rem]">End-to-End Support</h3>,
            description: "From initial setup to emergency troubleshooting, we cover it all.",
            icon: "/partner-support.svg"
        },
        {
            title: <h3 className="text-[2.2rem]">Proven Results</h3>,
            description: "Trusted by enterprises across industries for reliable support.",
            icon: "/results.svg"
        },
        {
            title: <h3 className="text-[2.2rem]">Flexible Plans</h3>,
            description: "Choose support options that match your SLA and business needs.",
            icon: "/plans.svg"
        },
    ]



    return (
        <section className="bg-[#ffffff] sm:px-[10rem] py-[7rem]">
            <h2 className="text-[3.8rem] text-[#000000] text-center font-[700]"><span className="font-[300]">Why</span> <span className="text-[#FF88C3]">Partner</span> With Us?</h2>

            <div className="grid gap-x-[1.2rem] items-center grid-cols-8 mt-[3rem] mx-auto max-w-[1400px] grid-rows-auto gap-y-[1rem]">
                {
                    Partners.map((partner, index) => {
                        if (!partner.title) return (
                            <div className="col-start-5  justify-items-center col-span-2 col-end-9">
                                <Img
                                    src={`/tomcat/tomcat-partner.png`}
                                    className="w-[55rem] mb-[2rem] h-[auto]"
                                    alt="icon"
                                />
                            </div>
                        )
                        return (
                            <Card
                                key={index}
                                {...partner}
                                id={index}
                            />
                        )
                    })
                }

            </div>
            <p className="font-[500] text-[#000000] mt-[7rem] text-center">With our guidance, your Tomcat environment is primed for success.</p>

        </section>
    );
}

const Card = ({ title, description, icon, id }) =>
    <div className={`px-[2rem] pr-[3rem] h-[40rem] col-span-2 ${id == 3 ? "col-start-3" : ""} rounded-[1.5rem] shadow pt-[4rem] pb-[5rem] bg-[#11151A]`}>
        <Img
            src={`/tomcat/${icon}`}
            className={` ${title ? "w-[6rem] h-[6rem]" : "w-[30rem] h-[auto]"}  mb-[12rem]`}
            alt="icon"
        />
        {title && title}
        {description && <p className="mt-[2rem] max-w-[25rem]">{description}</p>}
    </div>

export default Partner;