'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import React from 'react';

const Differentiators = () => {
    
    const _data = [
        {
            title: "Accelerated Product Time to Market",
            items: [
                {
                    headline: "Best Practices Implementation",
                    paragraph: "We leverage industry-leading practices to optimize your Greenplum deployment."
                },
                {
                    headline: "Advanced Feature Utilization",
                    paragraph: "Expertise in User-Defined Functions (UDF), PXF (Platform Extension Framework), and GUC (Grand Unified Configuration) to enhance functionality."
                },
                {
                    headline: "Code Checker Integration",
                    paragraph: "Implement automated code quality checks to ensure robust and efficient queries."
                },
            ],
            active: true
        },
        {
            title: "Comprehensive Testing Strategies",
            items: [
                {
                    headline: "Automated Regression Testing",
                    paragraph: "Ensure accuracy and performance consistency across Greenplum updates."
                },
                {
                    headline: "Automated Functional Performance Testing",
                    paragraph: "Validate new features and optimizations without compromising system performance."
                }
            ],
            active: false
        },
        {
            title: "Proactive Performance Monitoring",
            items: [
                {
                    headline: "Consistency Assurance",
                    paragraph: "Maintain reliable query execution times and resource utilization."
                },
                {
                    headline: "Stability Enhancement",
                    paragraph: "Implement measures to prevent system crashes and unexpected downtime."
                },
                {
                    headline: "Load Management Optimization",
                    paragraph: "Balance workloads effectively to maximize throughput and minimize bottlenecks."
                }
            ],
            active: false
        },
        {
            title: "Environment Control and Analytics",
            items: [
                {
                    headline: "Environment Monitoring",
                    paragraph: "Provide comprehensive tools and methodologies for monitoring and analyzing your entire Greenplum environment."
                }
            ],
            active: false
        },
        {
            title: "Process Prioritization & Cost Management",
            items: [
                {
                    headline: "Resource Queue Optimization",
                    paragraph: "Configure and fine-tune resource queues for optimal workload management."
                },
                {
                    headline: "Process Prioritization Strategies",
                    paragraph: "Implement intelligent prioritization to ensure critical processes receive necessary resources."
                }
            ],
            active: false
        },
        {
            title: "Tailored Configuration for Specific Workloads",
            items: [
                {
                    headline: "Interactive Workloads",
                    paragraph: "Optimize for quick query responses and concurrent user access."
                },
                {
                    headline: "Transactional Processing",
                    paragraph: "Configure for high-throughput, low-latency operations."
                },
                {
                    headline: "Data Warehousing",
                    paragraph: "Tune for large-scale data storage and complex analytical queries."
                },
                {
                    headline: "Hardware Optimization",
                    paragraph: "Recommend and implement ideal hardware configurations for each workload type."
                }
            ],
            active: false
        },
        {
            title: "Process Run Profiles & Deviations",
            items: [
                {
                    headline: "Performance Deviation Analysis",
                    paragraph: "Develop and monitor process run profiles to quickly identify and address performance deviations."
                }
            ],
            active: false
        },
        {
            title: "Culprit vs. Victim Analysis",
            items: [
                {
                    headline: "Inefficiency Recognition",
                    paragraph: "Pinpoint processes that negatively impact overall system performance."
                },
                {
                    headline: "Root Cause Identification",
                    paragraph: "Conduct thorough investigations to uncover the underlying causes of inefficiencies."
                }
            ],
            active: false
        },
        {
            title: "Addressing Common Flaws",
            items: [
                {
                    headline: "Preventative Solutions",
                    paragraph: "Proactively identify and rectify the most frequent issues encountered in Greenplum deployments, based on our extensive experience."
                }
            ],
            active: false
        },
        {
            title: "Surveillance and Security",
            items: [
                {
                    headline: "Security Measures",
                    paragraph: "Implement robust surveillance measures to detect and prevent data breaches and unauthorized access attempts."
                }
            ],
            active: false
        }
    ]

    const [active, setActive] = useState(_data);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 
            _data.length
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
                        active.map((item, index) => {
                            if (index <= 2) {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                        setActive={setActive}
                                        idx={index}
                                        active={active}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="flex sm:flex-row sm:gap-[1rem] justify-center">
                    {
                        active.map((item, index) => {
                            if (index > 2 && index <= 5) {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                        setActive={setActive}
                                        idx={index}
                                        active={active}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="flex sm:flex-row sm:gap-[1rem] justify-center">
                    {
                        active.map((item, index) => {
                            if (index > 5) {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                        setActive={setActive}
                                        idx={index}
                                        active={active}
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
                        infinite={true}
                        arrows={false}
                        responsive={responsive}>
                        {
                            _data.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        item={item}
                                        setActive={setActive}
                                        idx={index}
                                        active={active}
                                    />
                                )
                            })
                        }
                    </Carousel>
                }
            </div>

            <div className="sm:mt-[6rem] mt-[5rem]">
                {
                    active.map((item, index) => item.active && (
                        <React.Fragment key={index}>
                            <h2 className="font-[700] text-[1.7rem] text-[#5545A0] sm:text-[2rem]">{item.title}</h2>
                            <div className="flex flex-col mt-[1rem] sm:h-[22rem] sm:mt-[3rem] gap-[2rem]">
                                {
                                    item.items.map((item, index) => (
                                        <p key={index} className="sm:w-[70rem] font-[500]"><span className="font-[700] text-[#5545A0]">✓</span><span className="font-[700]"> {item.headline}:</span> {item.paragraph}</p>
                                    ))
                                }
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
}

export default Differentiators;



const Card = ({ item, setActive, idx, active }) => {

    const toggleActive = (id) => {
        setActive(prev => prev.map((item, index) => id === index ? { ...item, active: true } : { ...item, active: false }))
    }

    return (
        <button
            onClick={() => toggleActive(idx)}
            className={`border ${active[idx].active ? "bg-[#5747A5] text-white" : "bg-white text-[#000000]"} border-[#5747A5] px-[1.2rem] py-[.7rem] rounded-[.7rem] hover:bg-[#5747A533] hover:text-[#000000] transition-all duration-300`}>
            <p className="text-[1.4rem] text-center">{item.title}</p>
        </button>
    )
}