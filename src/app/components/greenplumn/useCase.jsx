const UseCase = () => {
    return (
        <section className="sm:px-[10rem] px-[2.5rem] sm:pt-[15rem] pt-[7rem] sm:pb-[12rem] pb-[6rem]">
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
                    Greenplum <span className="text-[#FF88C3]">Powers Petabyte-Scale</span> <span className="font-[400]">Analytics for</span><span className="font-[500]"> Global Retailer</span>
                </h2>


                <p className="mt-[3rem] sm:w-[83rem] mx-auto text-center">
                    Ace8 partnered with a leading global retailer to revolutionize their data analytics capabilities using Greenplum Database. Our team designed and implemented a massively parallel processing architecture that enabled the analysis of petabytes of customer and inventory data. We optimized query performance, resulting in a 60% reduction in processing times for complex analytics workloads. By leveraging Greenplum's advanced machine learning capabilities, we helped the retailer implement predictive models for demand forecasting, improving inventory management efficiency by 25%. Our tailored solution included custom-built dashboards for real-time insights, enhancing decision-making across the organization. This transformation empowered the retailer to gain deeper customer insights, optimize supply chain operations, and drive data-driven strategies, ultimately leading to a 15% increase in overall operational efficiency.
                </p>
            </div>
        </section>
    );
}

export default UseCase;