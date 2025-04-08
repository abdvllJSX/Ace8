import ButtonLink from "../common/buttonLink";
const solution = () => {
    const data = [
        {
            title: <span className="">Nginx <br></br><span className="font-[700] text-[#8FD5CC]">Configuration</span></span>,
            description: "Optimize your server settings for peak performance and security."
        },
        {
            title: <span className="">Nginx <br></br><span className="font-[700] text-[#8FD5CC]">Troubleshooting</span></span>,
            description: "Quickly identify and resolve issues to minimize downtime."
        },
        {
            title: <span className="">Nginx <br></br><span className="font-[700] text-[#8FD5CC]">Performance Tuning</span></span>,
            description: "Enhance your server's speed and efficiency for handling high loads."
        },
        {
            title: <span className="">Nginx <br></br><span className="font-[700] text-[#8FD5CC]">Troubleshooting</span></span>,
            description: "Receive ongoing assistance to keep your infrastructure running smoothly."
        },
    ]

    const _data = [
        {
            title: "Microservices Architecture",
            description: "Design scalable Nginx-based architectures for modern applications."
        },
        {
            title: "Web Application Firewall (WAF) Integration",
            description: "Web Application Firewall (WAF) Integration"
        },
        {
            title: "Nginx Plus Implementation",
            description: "Leverage advanced features for enterprise-grade performance and management."
        },
        {
            title: "Custom Module Development",
            description: "Create bespoke Nginx modules tailored to your specific needs."
        },
    ]
    return (
        <>
            <section className="sm:px-[15rem] mt-[2rem] sm:mt-0 px-[2.5rem] flex flex-col">
                <h2 className="text-center text-[2.3rem] sm:text-[3.3rem] font-[700]">Tailored <span className="text-[#8FD5CC]">Solutions</span> for Every <span className="text-[#8FD5CC]">Nginx Need</span></h2>
                <p className="text-center mt-[1rem]">Maximize the potential of your Nginx deployment with our specialized services</p>
                <div className="grid max-w-[1800px] mt-[4rem] sm:mt-[7rem] mx-auto sm:grid-cols-4 gap-y-[2rem] sm:gap-[2rem]">
                    {
                        data.map((item, i) => <Card
                            key={i}
                            {...item}
                        />)
                    }
                </div>
                <p className="text-center mt-[3rem] sm:mt-[6rem]">Stay ahead with solutions tailored to your unique Nginx requirements.</p>
                <ButtonLink
                    text={"Explore Our Nginx Services"}
                    link={"#contact"}
                    className={"border-[2px] mx-auto border-[#8FD5CC] font-[700] rounded-[.5rem]"}
                />
            </section>
            <section className="sm:px-[15rem] px-[2.5rem] mt-[6rem] flex flex-col sm:mt-[5rem]">
                <h2 className="text-center text-[2.8rem] sm:text-[3.3rem] font-[700]">Advanced <span className="text-[#FF6600]">Ngnix Solutions</span></h2>
                <p className="text-center  mt-[1.5rem]">Take your web infrastructure to the next level with our advanced offerings</p>

                <div className="grid mx-auto max-w-[1120px] sm:gap-y-[1.5rem] sm:gap-x-[1.5rem] gap-y-[2rem] mt-[4rem] sm:grid-cols-2">
                    {
                        _data.map((item, i) => <Solution
                            key={i}
                            {...item}
                        />)
                    }
                </div>
                <p className="text-center mt-[3rem] sm:mt-[6rem]">Discover the advantages of advanced Nginx implementations with expert guidance.</p>
                <ButtonLink
                    text={"Learn About Our Advanced Solutions"}
                    link={"#contact"}
                    className={"border-[2px] mx-auto border-[#8FD5CC] font-[700] rounded-[.5rem]"}
                />
            </section>
        </>
    );
}

const Card = ({ title, description }) => {
    return (
        <div className="px-[2.5rem] sm:py-[3rem] sm:w-[28rem] flex flex-col justify-center sm:h-[30rem] h-[26rem] border border-[#8FD5CC] rounded-[.7rem] bg-[#232323]">
            <h2 className="sm:text-[2.2rem] text-[2.5rem]">{title}</h2>
            <p className="w-[95%] sm:mt-[2rem] mt-[1.5rem]">{description}</p>
        </div>
    )
}

const Solution = ({ title, description }) => {
    return (
        <div className="sm:w-[50rem] px-[3rem] bg-[#11151A] rounded-l-[1rem] border-l-[4px] border-l-[#8FD5CC] py-[4rem]">
            <h2 className="text-[2.2rem] text-[#8FD5CC] font-[700]">{title}</h2>
            <p className="mt-[1rem] font-[500] sm:w-[38rem]">{description}</p>
        </div>
    )
}

export default solution;