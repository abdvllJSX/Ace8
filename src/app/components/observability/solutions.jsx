import ButtonLink from "../common/buttonLink";

const Solutions = () => {
    const data  = [
        {
            header: <span className=""><span className="text-[#5747A5]">Prometheus</span> Consulting</span>,
            description: "Optimize your metrics collection and alerting with expert-led Prometheus implementations and tuning."
        },
        {
            header: <span className=""><span className="text-[#5747A5]">Grafana</span> Configuration</span>,
            description: "Create powerful, customized dashboards that bring your data to life."
        },
        {
            header: <span className=""><span className="text-[#5747A5]">Datadog</span> Integration</span>,
            description: "Leverage the full power of Datadog's comprehensive monitoring platform with our deployment and optimization expertise."
        },
        {
            header: <span className=""><span className="text-[#5747A5]">Kibana</span> Configuration</span>,
            description: "Unlock advanced log analysis and visualization capabilities in your Elastic Stack."
        },
    ]

    return ( 
        <section className="text-[#0D1117] sm:mt-[7rem] mt-[4rem] sm:px-[10rem] px-[2.5rem] sm:pb-[5rem] flex flex-col">
            <h2 className="header_ii sm:w-[50rem] text-center mx-auto">Tailored Solutions <span className="font-[400]">for Every</span> <span className="text-[#FF88C3]">Monitoring Need</span></h2>
            <p className="text-center sm:mt-[2rem] mt-[1rem]">Maximize the potential of your monitoring stack with our specialized services:</p>

            <div className="grid sm:gap-y-[3rem]
            mx-auto gap-y-[2rem] max-w-[1800px] sm:mt-[5rem] mt-[3rem] sm:grid-cols-2">
                {
                    data.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                {...item}
                                idx={index}
                            />
                        )
                    })
                }
            </div>

            <p className="text-center sm:mt-[7rem] mt-[3rem]">Stay ahead with solutions tailored to your unique monitoring requirements.</p>
            <ButtonLink
                className={"mx-auto hover:bg-[#5545A0] transition-all duration-300 ease-in-out rounded-[.5rem] border-[#5545A0] font-[800]"}
                link={"#contact"}
                text={"Explore Our Monitoring Services"}
            />
        </section>
     );
}

const Card = ({ header, description,idx }) => {
    return (
        <div className="flex sm:gap-[3rem] gap-[1.8rem] items-center">
            <h2 className="text-[#5747A5] sm:text-[4rem] text-[2.9rem] font-[700]">{`0${idx + 1}`}</h2>

            <div className="">
                <h2 className="sm:text-[2.5rem] text-[2.2rem] font-[700]">{header}</h2>
                <p className="font-[500] sm:mt-[.7rem] text-[#0D1117]">{description}</p>
            </div>
        </div>
    )
}
 
export default Solutions;