import ButtonLink from "../common/buttonLink";

const Techniques = () => {
    const data = [
        {
            title: <span className="">Monitoring <span className="text-[#9B86FE] font-[700]">Platform</span></span>,
            items: [
                "Prometheus",
                "Grafana",
                "Datadog",
                "Elastic Stack (ELK)",
                "New Relic",
                "AppDynamics",
                "Splunk",
                "SolarWinds",
            ]
        },
        {
            title: <span className="">Cloud Monitoring <span className="text-[#9B86FE] font-[700]">Solutions</span></span>,
            items: [
                "Amazon CloudWatch",
                "Google Cloud Monitoring",
                "Azure Monitor",
                "Dynatrace",
                "SignalFX",
                "Sumo Logic"
            ]
        },
        {
            title: <span className="">Open-Source <span className="text-[#9B86FE] font-[700]">Tools</span></span>,
            items: [
                "Nagios",
                "Zabbix",
                "Graphite",
                "InfluxDB",
                "Telegraf",
                "cAdvisor",
                "Jaeger",
                "OpenTelemetry"
            ]
        },
        {
            title: <span className="">Log <span className="text-[#9B86FE] font-[700]">Management</span></span>,
            items: [
                "ELK Stack",
                "Graylog",
                "Logstash",
                "Fluentd",
                "Splunk Enterprise",
                "Papertrail"
            ]
        },
        {
            title: <span className="">Container & kubernetes <span className="text-[#9B86FE] font-[700]">Monitoring</span></span>,
            items: [
                "Prometheus Operator",
                "Kubernetes Dashboard",
                "Weave Scope",
                "Sysdig",
                "Kiali",
                "Lens",
                "OpenShift Monitoring"
            ]
        },
        {
            title: <span className="">Network &
                Infrastructure <span className="text-[#9B86FE] font-[700]">Monitoring</span></span>,
            items: [
                "PRTG",
                "SolarWinds Network Performance Monitor",
                "Cisco Prime Infrastructure",
                "ManageEngine OpManager",
                "Netdata",
                "Zabbix"
            ]
        },
        {
            title: <span className="">Performance <span className="text-[#9B86FE] font-[700]">& APM</span></span>,
            items: [
                "New Relic APM",
                "AppDynamics",
                "Datadog APM",
                "Elastic APM",
                "Dynatrace",
                "Instana"
            ]
        },

    ]

    return (
        <section className="bg-white sm:py-[10rem] py-[7rem] px-[2.5rem] sm:px-[10rem] text-[#000000] flex flex-col">
            <h2 className="header_ii text-center text-[#FF88C3]"><span className="font-[400] text-[#000000]">Our Core</span> Monitoring Technologies </h2>
            <p className="text-center">Comprehensive solutions tailored to your unique monitoring requirements</p>

            <div className="grid sm:grid-cols-4 sm:gap-y-[5rem] gap-y-[4rem] max-w-[1400px] mx-auto sm:gap-x-[2rem] sm:mt-[7rem] mt-[5rem]">
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

            <ButtonLink
                className={"mx-auto hover:bg-[#5545A0] mt-[3rem] sm:mt-0 transition-all duration-300 ease-in-out rounded-[.5rem] border-[#5545A0] font-[800]"}
                link={"#contact"}
                text={"Explore Our Technology Ecosystem"}
            />
        </section>
    );
}

const Card = ({ title, items }) => {
    return (
        <div className="">
            <h2 className="text-[2.2rem] font-[400]">{title}</h2>
            <div className="w-[20rem] mb-[2rem] mt-[1rem] h-[1px] bg-[#9B86FE]"></div>
            <ul className="list-disc ml-[2rem]">
                {
                    items.map((item, index) => {
                        return (
                           <li key={index} className="text-[1.4rem] font-[500]">{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Techniques;