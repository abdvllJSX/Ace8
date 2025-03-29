import Img from "../common/image";
import ButtonLink from "../common/buttonLink";

const Tanzu = () => {
    const cards = [
        {
            icon: "01",
            title: <span className="">Enhanced <span className="font-[700]
            text-[#FF88C3]">Functionality</span></span>,
            description: "Leverage tools like federated data access, polymorphic storage, and integrated in-database analytics",
        },
        {
            icon: "02",
            title: <span className="">Enterprise-Grade <span className="font-[700]
            text-[#FF88C3]">Security</span></span>,
            description: "Benefit from features like authentication, high availability, and disaster recovery",
        },
        {
            icon: "03",
            title: <span className="">Cloud or Hybrid <span className="font-[700]
            text-[#FF88C3]"> Deployment</span></span>,
            description: "Transition smoothly to managed services or hybrid setups without downtime",
        },
        {
            icon: "04",
            title: <span className="">Expert <span className="font-[700]
            text-[#FF88C3]">Implementation</span></span>,
            description: "Maximize the value of your investment with tailored consulting and ongoing support.",
        },
    ]

    return (
        <section className="mt-[6rem] px-[2.5rem] sm:px-[15rem] flex flex-col pb-[6rem]">
            <h1 className="text-center text-[2.5rem] sm:w-[60rem] mx-auto sm:text-[4rem]">Thinking About <span className="font-[700]">Greenplum</span> Offerings Like <span className="font-[700] text-[#FF88C3]">VMware Tanzu?</span></h1>
            <p className="sm:w-[62rem] sm:mt-[.5rem] text-center mx-auto">If you're considering VMware Tanzu Greenplum or managed solutions, we'll help you unlock their advanced features</p>

            <div className="mx-auto max-w-[1800px] mt-[6rem] grid sm:grid-cols-4 sm:gap-[1.5rem] gap-[3rem]">
                {
                    cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                {...card}
                            />
                        )
                    })
                }
            </div>

            <p className="text-center mt-[5rem]">Discover the advantages of premium Greenplum offerings with expert guidance.</p>

            <ButtonLink
                text={"Learn About VMware Tanzu Support"}
                className={"border-[#5545A0] rounded-[1rem] font-[700] mx-auto"}
                link={""}
            />
        </section>
    );
}

const Card = ({ icon, title, description }) => {
    return (
        <div className="bg-[#11151A] flex flex-col rounded-[1rem] px-[2.5rem] py-[2.5rem] h-[35rem]">
            <Img
                src={`/greenplum/tanzu-${icon}.svg`}
                className={"size-[5rem]"}
            />
            <h2 className="text-[2.4rem] mt-auto w-[70%] sm:w-full sm:mt-0 sm:my-[3rem]">{title}</h2>
            <p className="sm:text-[1.4rem] mt-[2rem]">{description}</p>
        </div>
    )
}

export default Tanzu;