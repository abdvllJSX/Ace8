import ButtonLink from "../common/buttonLink";

const Guildance = () => {
    const data = [
        {
            title: <span className="">Perfomance <span className="text-[#9B86FE] font-[700]">Optimization</span></span>,
            description: "Fine-tune Greenplum clusters for efficient and reliable data processing"
        },
        {
            title: <span className="">Scalable<br></br> Architecture <span className="text-[#9B86FE] font-[700]">Design</span></span>,
            description: "Build resilient Greenplum infrastructures tailored to your specific needs",
        },
        {
            title: <span className="">Advanced
                <span className="text-[#9B86FE] font-[700]"><br></br>Analytics</span></span>,
            description: "Implement machine learning and AI solutions using integrated tools like Apache MADlib",
        },
        {
            title: <span className="">Security
                <span className="text-[#9B86FE] font-[700]"> Enhancement</span></span>,
            description: "Protect your Greenplum data warehouse with industry best practices",
        },

    ]

    return (
        <section className="mt-[5rem] flex flex-col sm:px-[15rem] px-[2.5rem]">
            <h1 className="text-center sm:text-[3.5rem] text-[2.5rem] sm:w-[85rem] mx-auto">
                Expert Guidance for <span className="text-[#5545A0] font-[600]">Open-Source Greenplum</span> Users
            </h1>
            <p className="text-center mx-auto sm:text-[1.85rem] mt-[1.5rem] sm:w-[70rem]">
                Using Greenplum Database? Get the support you need to manage the complexity of high-performance analytics
            </p>

            <div className="grid max-w-[1800px] mx-auto sm:grid-cols-4 gap-[2.8rem] sm:gap-[2rem] sm:mt-[6rem] mt-[4rem]">
                {
                    data.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                {...item}
                            />
                        )
                    })
                }
            </div>

            <p className="text-center mt-[4rem]">Stay ahead with tailored solutions for open-source Greenplum Database.</p>
            <ButtonLink 
                text={"Explore Our Open-Source Services"}
                className={"mx-auto border-[#5545A0] font-[700] rounded-[1rem]"}
                link={""}
            />
        </section>
    );
}

const Card = ({ title, description }) => {
    return (
        <div className="">
            <h2 className="text-[2rem] sm:w-[20rem]">{title}</h2>
            <div className="sm:h-[1px] h-[3.5px] mt-[.5rem] sm:mt-[0] w-[20rem] sm:w-[22rem] bg-[#5545A0]"></div>
            <p className="sm:w-[22rem] mt-[1.5rem]">{description}</p>
        </div>
    )
}

export default Guildance;