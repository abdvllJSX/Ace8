import ButtonLink from "../common/buttonLink";
const solution = () => {
    const _data = [
        {
            title: "Full-Stack Observability",
            description: "Implement end-to-end visibility across applications, infrastructure, and user experience."
        },
        {
            title: "AI-Powered Anomaly Detection",
            description: "Leverage machine learning for predictive alerting and proactive issue resolution."
        },
        {
            title: "Cloud-Native Monitoring",
            description: "Design scalable monitoring architectures for containerized and serverless environments."
        },
        {
            title: "Custom Integration Development",
            description: "Connect your unique systems and data sources for comprehensive monitoring coverage."
        },
    ]
    return (
            <section className="sm:px-[15rem] sm:pt-[8rem] pt-[6rem] pb-[3rem] sm:pb-[8rem] bg-[#0D1117] px-[2.5rem] mt-[6rem] flex flex-col sm:mt-[5rem]">
                <h2 className="text-center mx-auto sm:w-[60rem] text-[2.8rem] sm:text-[4rem] font-[400]">Advanced <span className="text-[#9B86FE] font-[700]">Monitoring</span> and <span className="text-[#9B86FE] font-[700]">Observability</span> Solutions.</h2>
                <p className="text-center  mt-[1.5rem]">Take your monitoring strategy to the next level with our advanced offerings</p>

                <div className="grid mx-auto max-w-[1120px] sm:gap-y-[1.5rem] sm:gap-x-[1.5rem] gap-y-[2rem] mt-[4rem] sm:grid-cols-2">
                    {
                        _data.map((item, i) => <Solution
                            key={i}
                            {...item}
                        />)
                    }
                </div>

                <p className="text-center mt-[4.5rem] sm:mt-[6rem] sm:w-[60rem] mx-auto">Discover the advantages of advanced monitoring and observability with expert guidance.</p>
                <ButtonLink
                    text={"Learn About Our Advanced Solutions"}
                    link={"#contact"}
                    className={"border-[2px] hover:bg-[#5545A0] mx-auto border-[#5545A0] font-[700] rounded-[.5rem]"}
                />
            </section>
    );
}


const Solution = ({ title, description }) => {
    return (
        <div className="sm:w-[50rem] px-[3rem] bg-[#11151A] rounded-l-[1rem] border-l-[4px] border-l-[#FF88C3] py-[4rem]">
            <h2 className="text-[2.2rem] text-[#FF88C3] font-[700]">{title}</h2>
            <p className="mt-[1rem] font-[500] sm:w-[38rem]">{description}</p>
        </div>
    )
}

export default solution;