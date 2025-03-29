'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Differentiators = () => {
    const data = [
        "Accelerated Product Time to Market",
        "Comprehensive Testing Strategies",
        "Proactive Performance Monitoring",
        "Environment Control and Analytics",
        "Process Prioritization & Cost Management",
        "Tailored Configuration for Specific Workloads",
        "Process Run Profiles & Deviations",
        "Culprit vs.Victim Analysis",
        "Addressing Common Flaws",
        "Surveillance and Security",
    ]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: data.length
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    }

    return (
        <section className="bg-white text-[#000000] pt-[6rem] px-[2.5rem] sm:px-[15rem] sm:pt-[7rem] sm:pb-[10rem] pb-[7rem]">
            <h2 className="text-center text-[2.5rem] sm:text-[3.8rem] sm:w-[70rem] mx-auto">Our Customer <span className="text-[#FF88C3] font-[600]">Focus Areas</span> and <span className="font-[700]">Differentiators</span></h2>
            <p className="text-center mt-[1.5rem] sm:w-[70rem] mx-auto">At Ace8, we go beyond standard Greenplum consulting to provide comprehensive solutions that address the most critical aspects of your data analytics environment. Here's how we stand out.</p>

            <div className="mt-[5.5rem] hidden sm:flex mx-auto max-w-[1800px] flex-col sm:gap-[2rem]">
                <div className="flex sm:flex-row sm:gap-[1rem] justify-center">
                    {
                        data.map((item, index) => {
                            if (index <= 2) {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="flex sm:flex-row sm:gap-[1rem] justify-center">
                    {
                        data.map((item, index) => {
                            if (index > 2 && index <= 5) {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="flex sm:flex-row sm:gap-[1rem] justify-center">
                    {
                        data.map((item, index) => {
                            if (index > 5) {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="sm:hidden mt-[4rem]">
                {
                    <Carousel
                        showDots={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        infinite={true}
                        arrows={false}
                        responsive={responsive}>
                        {
                            data.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                    />
                                )
                            })
                        }
                    </Carousel>
                }
            </div>

            <div className="sm:mt-[6rem] mt-[5rem]">
                <h2 className="font-[700] text-[1.7rem] text-[#5545A0] sm:text-[2rem]">Accelerated Product Time to Market</h2>

                <div className="flex flex-col mt-[1rem] sm:mt-[3rem] gap-[2rem]">
                    <p className="sm:w-[70rem] font-[500]"><span className="font-[700]">✓</span><span className="font-[700]"> Best Practices Implementation:</span> We leverage industry-leading practices to optimize your Greenplum deployment.</p>

                    <p className="sm:w-[70rem] font-[500]"><span className="font-[700]">✓</span><span className="font-[700]"> Advanced Feature Utilization:</span> Expertise in User-Defined Functions (UDF), PXF (Platform Extension Framework), and GUC (Grand Unified Configuration) to enhance functionality.</p>
                    
<p className="sm:w-[70rem] font-[500]"><span className="font-[700]">✓</span> <span className="font-[700]"> Code Checker Integration:</span> Implement automated code quality checks to ensure robust and efficient queries.</p>
                </div>
            </div>
        </section>
    );
}

export default Differentiators;



const Card = ({ item }) => {
    return (
        <div className="border border-[#5747A5] px-[1.2rem] py-[.7rem] rounded-[.7rem]">
           <p className="text-[1.4rem] text-[#000000] text-center">{item}</p>
        </div>
    )      
        
}