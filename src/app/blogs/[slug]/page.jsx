'use client'
import { useParams } from "next/navigation";
import { slugify } from "@/app/utili/slugify";
const page = () => {
    const { slug } = useParams();

    const blogs = [
        {
            slug: slugify("Mastering Incident Management: How Ace8 Delivers Resilience and Rapid Recovery"),
            sections: [
                {
                    title: "Mastering Incident Management: How Ace8 Delivers Resilience and Rapid Recovery",
                    paragraph: [
                        <>In the era of always-on digital business, incident management is no longer a back-office function—it's a strategic imperative. Every minute of downtime can cost organizations thousands, erode customer trust, and disrupt critical operations. That’s why Ace8.io’s Incident Management services stand out, blending advanced technology, deep expertise, and a relentless focus on business continuity.</>
                    ]
                }, 
                {
                    title: "What Is Incident Management?",
                    paragraph: [
                        "Incident management refers to the structured process of identifying, categorizing, and resolving events that disrupt normal IT operations. The goal is to restore service as quickly as possible while minimizing impact on users and business functions. This process encompasses everything from initial detection and logging, through diagnosis and escalation, to resolution, documentation, and post-incident analysis."
                    ]
                }, 
                {
                    title: "The Ace8 Approach: Beyond Traditional Incident Management Intense Documentation & Chaos Engineering",
                    paragraph: [
                        "Ace8’s unique approach starts with rigorous documentation and the proactive use of chaos engineering. By simulating real-world failure scenarios, hidden vulnerabilities are uncovered and both systems and teams are prepared for any emergency. This preparation is a game-changer, reducing both the frequency and severity of incidents."
                    ]
                },
                {
                    title: "AI-Driven Response with Netflix Dispatch",
                    paragraph: [
                        "Ace8’s incident management services are powered by Netflix Dispatch, an open-source incident management platform. Leveraging AI, machine learning, and predictive analytics, Dispatch automates triage, assigns tasks, and recommends rapid resolutions. It continuously analyzes incident data to identify vulnerabilities and suggest preventive measures, helping you stay ahead of emerging threats."
                    ],
                },
                {
                    title: "Full Stack, 24/7 Support",
                    paragraph: [
                        "Ace8 offers true full stack incident management, with 24/7 support and a less than 10-minute SLA for Severity 1 incidents. This means your mission-critical systems are protected around the clock, and urgent issues are addressed with speed and precision."
                    ]
                },
                {
                    title: "The Modern Incident Management Process",
                    paragraph: [
                        "A mature incident management process includes:"
                    ],
                    subsection: {
                        items: [
                            <span><span className="font-medium">Event Detection & Monitoring:</span> Centralized alerts and real-time monitoring powered by AI and automation for early detection.</span>,   
                            <span><span className="font-medium">Incident Logging & Categorization:</span> Consistent taxonomy and prioritization to ensure the right response for every incident.</span>,   
                            <span><span className="font-medium">Triage & Assignment:</span> Rapid assessment and routing to the appropriate teams, minimizing delays.</span>,   
                            <span><span className="font-medium">Diagnosis & Investigation:</span> Root cause analysis using advanced observability tools and robust knowledge bases.</span>,   
                            <span><span className="font-medium">Resolution & Recovery:</span> Automated remediation and coordinated action plans to restore service fast.</span>,   
                            <span><span className="font-medium">Closure & Documentation:</span> Comprehensive post-incident documentation to drive continuous improvement.</span>,   
                            <span><span className="font-medium">Reporting & Analysis:</span> KPI tracking and trend analysis to identify systemic issues and optimize processes.</span>,   
                        ]
                    }
                },
                {
                    subsection: {
                        title: "Why Choose Ace8 for Incident Management Services?",
                        items: [
                            <span><span className="font-medium">Opensource & Flexible:</span> Ace8 harnesses the power of open-source incident management tools like Netflix Dispatch and SigNoz, ensuring transparency, customization, and cost-effectiveness.</span>,
                            <span><span className="font-medium">Incident Management Consulting:</span> Experts guide you through process optimization, tool selection, and integration with your broader ITSM and DevSecOps strategies.</span>,
                            <span><span className="font-medium">Incident Management Consulting:</span> Experts guide you through process optimization, tool selection, and integration with your broader ITSM and DevSecOps strategies.</span>,
                            <span><span className="font-medium">Full Stack Coverage:</span> Incidents are managed across your entire technology stack, from infrastructure to applications, ensuring no blind spots.</span>,
                        ]
                    }
                },
                {
                    subsection: {
                        title: "Best Practices for 2025 and Beyond",
                        items: [
                            <span><span className="font-medium">Early Detection:</span> Invest in AI-powered monitoring for real-time threat identification.</span>,
                            <span><span className="font-medium">Clear Roles & Communication:</span> Define responsibilities and establish robust communication channels for seamless coordination.</span>,
                            <span><span className="font-medium">Automation:</span> Use self-healing automation and intelligent triage to accelerate recovery and reduce manual effort.</span>,
                            <span><span className="font-medium">Post-Incident Review:</span> Analyze every incident for lessons learned and drive ongoing improvements.</span>,

                        ]
                    }
                }, 
                {
                    title: "Ready to Take Control of Your Incident Management?",
                    paragraph: [
                        "Don’t let critical incidents disrupt your business. Trust Ace8’s unique blend of advanced technology, proactive strategy, and 24/7 support to keep your operations resilient and reliable. Contact Ace8 today to unlock the power of comprehensive incident management."
                    ]
                }
            ]
        }
    ]
    return (
        <div className="min-h-screen w-full sm:pt-[12rem] pt-[4rem] sm:pb-[10rem] pb-[5rem]">
            <article>
                {
                    blogs.find(blog => blog.slug === slug)?.sections.map((section, index) => {
                        return (
                            <section key={index} className="mt-[5rem] sm:w-[80%] w-[85%] max-w-[1400px] mx-auto">
                                <h2 className="sm:text-[2.2rem] text-[1.8rem] sm:w-[80%] w-full font-medium">{section.title}</h2>
                                {
                                    !!section.paragraph?.length && section.paragraph.map((paragraph, index) => {
                                        return (
                                            <p key={index} className="mt-[1.5rem]  sm:text-[1.6rem] sm:w-[80%] w-full">{paragraph}</p>
                                        )
                                    })
                                }
                                {
                                    !!section.img && <img
                                        src={section.img}
                                        alt=""
                                        className="mt-[2rem] max-w-[70rem] w-full"
                                    />
                                }
                                {
                                    section.list && <>
                                        {
                                            section.list.map((list, index) => {
                                                return (
                                                    <div key={index} className="mt-[2rem] ml-[2rem] sm:w-[80%] w-full">
                                                        <h3 className="sm:text-[1.6rem] text-[1.4rem] font-medium sm:w-[80%]">{list.header}</h3>
                                                        <p className="mt-[1rem] sm:text-[1.6rem] sm:w-[80%] w-full">{list.paragraph}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                }
                                {
                                    section.subsection && <div className="mt-12">
                                        <h3 className="sm:text-[1.6rem] text-[1.4rem] font-medium sm:w-[80%]">{section.subsection.title}</h3>
                                        <ul className="list-disc ml-[2rem] mt-[1rem] sm:w-[80%] w-[90%]">
                                            {
                                                section.subsection.items.map((item, index) => {
                                                    return (
                                                        <li key={index} className="mt-[1rem] text-[1.6rem] sm:w-[80%]">{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        {
                                            section.subsection.paragraph && section.subsection.paragraph.map((paragraph, index) => {
                                                return (
                                                    <p key={index} className="mt-[1.5rem]  sm:text-[1.6rem] sm:w-[80%] w-full">{paragraph}</p>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </section>
                        )
                    })
                }
            </article>
        </div>
    );
}

export default page;