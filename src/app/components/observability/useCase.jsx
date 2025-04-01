const UseCase = () => {
    return (
        <section className="sm:px-[10rem] mt-[-.5rem] px-[2.5rem] sm:pt-[3rem] pt-[3rem] sm:pb-[12rem] bg-[#0D1117] pb-[6rem]">
            <div className="sm:px-[6rem] max-w-[1400px] mx-auto px-[2rem] relative rounded-[1.5rem] sm:pt-[12rem] pt-[3.5rem] pb-[5rem] sm:pb-[10rem] border border-[#9B86FE]">

                <img
                    src="/tomcat/apostle1.svg"
                    alt="apostle"
                    className="absolute w-[17rem] hidden sm:block left-[7rem] top-[-6rem]"
                />
                <img
                    src="/tomcat/apostle2.svg"
                    alt="apostle"
                    className="absolute w-[17rem] hidden sm:block right-[7rem] bottom-[-6.5rem]"
                />


                <h2 className="sm:text-[3.5rem] text-[2.5rem] font-[700] text-center mx-auto sm:max-w-[83rem]">
                <span className="font-[500]">Observability</span> Transformation <span className="font-[400]">for a</span> Leading <span className="text-[#FF88C3]">Global Retail Bank</span>
                </h2>


                <p className="mt-[3rem]  mx-auto text-center sm:text-start">
                Ace8 revolutionized the monitoring strategy for a major retail bank, implementing a comprehensive observability solution across their multi-cloud infrastructure. Our team integrated Prometheus, Grafana, and Datadog to provide full-stack visibility into distributed components, enhancing customer experience insights. We developed AI-powered anomaly detection for proactive issue resolution, reducing downtime by 40%. Custom dashboards unified data visualization, enabling real-time decision-making. Our cloud-native monitoring architecture ensured seamless scalability, while automated workflows decreased manual interventions by 30%. This transformation accelerated the bank's digital innovation, improved operational efficiency, and significantly enhanced customer satisfaction. The result was a robust, future-proof observability framework that supports the bank's growth while maintaining peak performance and reliability.
                </p>
            </div>
        </section>
    );
}

export default UseCase;