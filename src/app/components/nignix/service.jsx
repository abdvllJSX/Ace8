import ButtonLink from "../common/buttonLink";
const Services = () => {
    const cols = [
        {
            title: "Nginx Configuration and Optimization",
            items: [
                "Custom Nginx configuration for optimal performance",
                "Load balancing and reverse proxy setup",
                "SSL/TLS implementation and optimization",
                "Caching strategies for improved response times",
            ]
        },
        {
            title: "Nginx Troubleshooting and Performance Tuning",
            items: [
                "Rapid issue diagnosis and resolution",
                "Performance bottleneck identification",
                "Resource utilization optimization",
                "Concurrency and connection handling improvements",
            ]
        },
        {
            title: "Nginx Security Hardening",
            items: [
                "Implementation of security best practices",
                "DDoS protection strategies",
                "Access control and authentication setup",
                "Regular security audits and updates",
            ]
        },
        {
            title: "Nginx Monitoring and Maintenance",
            items: [
                "Proactive monitoring setup",
                "Log analysis and alerting configuration",
                "Automated backup and disaster recovery planning",
                "Regular performance reports and optimization recommendations",
            ]
        },
        {
            title: "Nginx for Microservices and Containers",
            items: [
                "Nginx configuration for containerized environments",
                "Service discovery and dynamic routing setup",
                "Kubernetes ingress controller implementation",
                "Microservices API gateway configuration",
            ]
        },
        {
            title: "Training and Knowledge Transfer",
            items: [
                "Customized Nginx administration workshops",
                "Best practices for Nginx configuration and management",
                "Performance tuning and troubleshooting techniques",
                "Security-focused Nginx training for your team",
            ]
        },
    ]

    return (
        <section className="sm:px-[10rem] flex flex-col px-[2.5rem] pb-[6rem] sm:pb-[7.5rem] sm:mt-[8rem]">
            <h2 className="text-center text-[2.5rem] sm:text-[3.8rem] font-[400]">Our  Specialized <span className="font-[800] text-[#FF6600]">Nginx</span> Services</h2>

            <div className="max-w-[1900px] mx-auto grid sm:grid-cols-3 sm:gap-x-[2.5rem] gap-[2rem] sm:gap-y-[4rem] sm:mt-[4rem] mt-[3rem]">
                {
                    cols.map((item, i) =>
                        <Col
                            key={i}
                            {...item}
                        />
                    )
                }
            </div>

            <ButtonLink
                text={"Contact Us for a Free Consultation"}
                className={"font-[700] mx-auto border-[2px] rounded-[.5rem] border-[#8FD5CC]"}
                link={"#contact"} 
            />
        </section>
    );
}

const Col = ({ title, items }) => {
    return (
        <div className="">
            <h2 className="font-[500] text-[2rem] sm:w-[80%] text-[#8FD5CC]">{title}</h2>

            <ul className="mt-[1rem] ml-[1rem] flex flex-col gap-[1rem]">
                {
                    items.map((item, i) =>
                        <li className="before:absolute sm:w-[35rem] sm:font-[500] text-[1.7rem] relative before:content-['•'] before:left-[-1rem] " key={i}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Services;