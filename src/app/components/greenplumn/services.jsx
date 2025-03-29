const Services = () => {

    const cols = [
        {
            title: "Emergency Support and Remediation",
            items: [
                "Rapid Response: Immediate fixes for critical issues to restore functionality fast.",
                "Root Cause Analysis: Address recurring problems with thorough investigations.",
                "Crisis Management: Expert assistance during outages or unexpected downtime."
            ]
        },
        {
            title: "Greenplum Implementation and Optimization",
            items: [
                "Architecture Design: Build scalable, fault-tolerant Greenplum infrastructures",
                "Performance Tuning: Optimize query execution and workload management for maximum throughput.",
                "Cluster Configuration: Ensure reliability with disaster recovery and replication strategies.",
            ]
        },
        {
            title: "Advanced Analytics Solutions",
            items: [
                "Machine Learning Integration: Harness Apache MADlib for in-database machine learning.",
                "Data Science Workflows: Build robust data pipelines for experimentation and deployment.",
                "Real-Time Analytics: Enable responsive, scalable architectures powered by Greenplum.",
            ]
        },
        {
            title: "Cloud and Managed Services",
            items: [
                "Cloud Migration: Seamless transitions to cloud platforms of your choice.",
                "Multi-Region Deployments: Achieve high availability with advanced configurations.",
                "Managed Greenplum Guidance: Expert advice for optimizing managed service offerings.",
            ]
        },
        {
            title: "Proactive Support and Maintenance",
            items: [
                "24/7 Monitoring: Ensure Greenplum uptime with proactive issue detection.",
                "Custom SLAs: Support plans designed to align with your operational needs.",
                "Upgrades and Patching: Stay current with the latest Greenplum features and security updates.",
            ]
        },
    ]

    return (
        <section className="sm:px-[10rem] px-[2.5rem] pb-[6rem] sm:pb-[7.5rem] sm:mt-[6rem]">
            <h2 className="text-center text-[2.5rem] sm:text-[3.8rem] font-[400]">Our <span className="font-[700] text-[#5545A0]">Greenplum</span> Consulting Services</h2>

            <div className="max-w-[1900px] mx-auto grid sm:grid-cols-3 sm:gap-x-[2.5rem] gap-[2rem] sm:gap-y-[4rem] sm:mt-[5.5rem] mt-[3rem]">
                {
                    cols.map((item, i) =>
                        <Col
                            key={i}
                            {...item}
                        />
                    )
                }
            </div>
        </section>
    );
}

const Col = ({ title, items }) => {
    return (
        <div className="">
            <h2 className="font-[500] text-[2rem] sm:w-[80%] text-[#9B86FE]">{title}</h2>

            <ul className="mt-[1rem] ml-[1rem] flex flex-col gap-[1rem]">
                {
                    items.map((item, i) =>
                        <li className="before:absolute sm:w-[35rem] sm:font-[500] text-[1.5rem] relative before:content-['•'] before:left-[-1rem] sm:before:top-[.5rem]" key={i}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Services;