import MaxContainer from '../../../components/common/maxContainer'
import Image from 'next/image';

const Index = () => {
    return (
        <>
            <Intro />
            <SubIntro />
        </>
    );
}

export default Index;


const Intro = () => {
    return (
        <section className="">
            <MaxContainer>
                <div className="px-[3rem] sm:px-[10rem]">
                    <div className="sm:flex sm:justify-between sm:flex-row-reverse">
                        <Image src='/system.png' width={1000} className='sm:w-[60rem] w-[30rem] sm:h-auto' height={200} alt='laptop' />
                        <div className="sm:w-[55rem]">
                            <h2 className="sub-header w-[25rem] sm:w-[80%] sm:mb-[2rem] mt-[3.5rem]"><span className="text-[#9B86FE]">Experience</span> <span className="font-[400]">Proactive</span> Incident <span className="font-[400]">Management</span></h2>
                            <p className="text-white mt-[1.2rem] sm:w-[80%] sm:mb-[2rem] bg-[#9B86FE] px-[.7rem] py-[.5rem] rounded-[.5rem]">Are you tired of experiencing critical incidents and not having a comprehensive solution in place?</p>
                            <p className="mt-[.8rem]">Our approach focuses on two critical components often overlooked in traditional incident management strategies: intense documentation efforts and the design and execution of chaos engineering experiments. By thoroughly documenting your system and running simulated chaos scenarios, we ensure that we are fully prepared to handle any incident that comes our way.</p>
                        </div>
                    </div>
                    <Leveraging />
                    <Response />
                </div>
            </MaxContainer>
        </section>
    )
}

const Leveraging = () => {
    return (
        <div className="flex flex-col mt-[5rem] sm:mt-[10rem]">
            <h2 className="sub-header text-center mb-[2rem] self-center w-[23rem] sm:w-[50rem]">Leveraging <span className="font-[400]">the Power of </span><span className="text-[#8AD1EA]">Netflix Dispatch</span></h2>
            <p className="text-center mb-[1rem] sm:w-[90rem] sm:self-center">Ace8’s Incident Management offering takes full advantage of Netflix Dispatch, the revolutionary incident management tool that leverages AI, ML, and predictive analytics. It automates incident triage, assigns tasks, and suggests resolutions for rapid response.</p>
            <p className="p-[1rem] sm:p-[2rem] text-center sm:self-center bg-[#8AD1EA] text-[#0D1117] rounded-[.8rem]">By analyzing data, it identifies vulnerabilities, recommends preventive measures, and predicts incident impact.</p>
            <Image src='/netflix_dispatch.png' width={1000} className='mt-[2rem] w-[30rem] sm:self-center sm:w-[80rem] h-auto sm:mt-[5rem]' height={195} alt='netflix dispatch' />
        </div>
    )
}


const Response = () => {
    return (
        <div className="mt-[5rem] mb-[3rem] sm:mb-[5rem]">
            <div className="sm:flex sm:flex-row-reverse justify-between items-center">
                <div className="sm:w-[50rem]">
                    <h2 className="sub-header mb-[1rem] sm:w-[35rem]"><span className="text-[#FA9531]">Rapid Response</span> <span className="">and 24/7 Support</span></h2>
                    <p className="mb-[2rem]">In addition, our full 24/7 support with a less than 10-minute Service Level Agreement (SLA) for Sev 1 incidents means that you can trust us to handle even the most critical incidents with urgency and efficiency.</p>
                </div>
                <Image src='/customer_portal.png' width={1000} className='mt-[2rem] sm:w-[70rem] w-[30rem]' height={195} alt='netflix dispatch' />
            </div>
        </div>
    )
}


const SubIntro = () => {
    return (
        <section className="bg-white text-black">
            <MaxContainer>
                <div className="px-[3rem] sm:px-[10rem] py-[5rem]">
                    <div className="mb-[3rem] sm:flex flex-row-reverse justify-between">
                        <div className="sm:w-[50rem]">
                            <h2 className="sub-header text-center sm:text-start"><span className="font-[400]">Streamline </span>Your <span className="text-[#E485FD]"> Incident </span><span className="font-[400] text-[#E485FD]">Management</span> with Ace8</h2>
                            <p className="sm:mt-[1rem] hidden sm:block">Streamline Your Incident Management with Ace8</p>
                        </div>
                        <Image src='/stream_line.png' width={365} className='mt-[2rem] sm:hidden' height={195} alt='customer_portal' />
                        <Image src='/dashbaord.png' width={1000} className='w-[65rem] sm:block hidden' height={195} alt='customer_portal' />
                    </div>

                    <div className="sm:flex flex-row-reverse justify-between hidden my-[10rem] w-[100%]">
                        <Image src='/workflow.png' width={1000} className='w-[50rem] border' height={500} alt='netflix dispatch' />
                        <div className="mt-[1.5rem] sm:w-[65rem] flex flex-col gap-[2rem]">
                            <div className="sm:block  hidden">
                                <h2 className="sub-header w-[25rem] sm:w-[45rem] mb-[1rem]"><span className="font-[400]">Understanding</span> Workflows in <span className="text-[#FF88C3]">Incident Management</span></h2>
                                <p className=""> IWorkflows can be defined as a sequence of steps and tasks followed to achieve a specific goal. In incident management, workflows are essential for processing data and ensuring smooth progression from one step/task to another. Without the movement of data, a workflow does not exist.</p>

                                <p className="font-[500] mt-[1.5rem]">There are three main types of workflows commonly used:</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <div className="flex flex-col items-center w-[5rem]">
                                    <img src="/ellipse.png" alt="circle icon" />
                                    <div className="w-[1.5px] h-[100%] mt-[.6rem] bg-[#9B86FE]"></div>
                                </div>
                                <p className=""><span className="font-[700]">Project Workflow:</span> Project workflows are structured and consist of a predefined set of steps necessary to complete a project. For example, releasing a new feature in your system application follows a project workflow.</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <div className="flex flex-col items-center w-[5rem]">
                                    <img src="/ellipse.png" alt="circle icon" />
                                    <div className="w-[1.5px] h-[100%] mt-[.6rem] bg-[#9B86FE]"></div>
                                </div>
                                <p className=""><span className="font-[700]">Case Workflow:</span> Case workflows do not have a known set of steps required to complete a task. The path reveals itself as you progress through the task. A support ticket is a good example of a case workflow where the steps to solve the issue are not known initially.</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <div className="flex flex-col items-center w-[5rem]">
                                    <img src="/ellipse.png" alt="circle icon" />
                                    <div className="w-[1.5px] h-[100%] mt-[.6rem] bg-[#9B86FE]"></div>
                                </div>
                                <p className=""><span className="font-[700]">Process Workflow:</span> Process workflows involve a predictable and repetitive set of steps required to complete a task. The path is known before the workflow begins. DevOps and incident management workflows are examples of process workflows.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:flex">
                        <div className="sm:hidden">
                            <h2 className="sub-header w-[25rem] mb-[1rem]">Ace8 <span className="text-[#7E63FF]">Incident Management</span> <span className="font-[400]">Workflow</span></h2>
                            <p className=""> Incident management refers to the processes and steps taken to respond to anything that disrupts normal system operations. It involves detecting incidents, communicating them to stakeholders, and utilizing appropriate tools to resolve them.</p>
                        </div>
                        <div className="w-[100%] mt-[2rem]">
                            <Image src='/incident_review.png' className='w-[80%] mx-auto h-auto border sm:hidden' width={1000} height={135} alt='netflix dispatch' />
                            <Image src='/incident_review_sm.png' className='w-[65rem] h-auto border sm:block hidden' width={1000} height={135} alt='netflix dispatch' />
                            <Image src='/ledger.png' width={1000} className='mt-[-1rem] w-[30rem] sm:hidden' height={500} alt='netflix dispatch' />
                        </div>
                        <div className="mt-[1.5rem] sm:w-[95rem] flex flex-col gap-[2rem]">
                            <div className="sm:block  hidden">
                                <h2 className="sub-header w-[25rem] sm:w-[40rem] mb-[1rem]">Ace8 <span className="text-[#7E63FF]">Incident Management</span> <span className="font-[400]">Workflow</span></h2>
                                <p className=""> Incident management refers to the processes and steps taken to respond to anything that disrupts normal system operations. It involves detecting incidents, communicating them to stakeholders, and utilizing appropriate tools to resolve them.</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <div className="flex flex-col items-center w-[5rem]">
                                    <img src="/ellipse.png" alt="circle icon" />
                                    <div className="w-[1.5px] h-[100%] mt-[.6rem] bg-[#9B86FE]"></div>
                                </div>
                                <p className=""><span className="font-[700]">Identification & Logging:</span> Incidents are identified either manually by a user or automatically through monitoring tools. James Wilhoite is responsible for entering the incident details as a ticket in Jira.</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <div className="flex flex-col items-center w-[5rem]">
                                    <img src="/ellipse.png" alt="circle icon" />
                                    <div className="w-[1.5px] h-[100%] mt-[.6rem] bg-[#9B86FE]"></div>
                                </div>
                                <p className=""><span className="font-[700]">Categorization:</span> Once an incident is identified, it is categorized to determine how it will be handled and prioritized. An incident manager is assigned to the ticket, initiating the next stage in the workflow.</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <div className="flex flex-col items-center w-[5rem]">
                                    <img src="/ellipse.png" alt="circle icon" />
                                    <div className="w-[1.5px] h-[100%] mt-[.6rem] bg-[#9B86FE]"></div>
                                </div>
                                <p className=""><span className="font-[700]">Diagnosis & Investigation:</span> Incident managers investigate the incident, troubleshooting and defining the problem to develop an initial hypothesis.</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <div className="flex flex-col items-center w-[5rem]">
                                    <img src="/ellipse.png" alt="circle icon" />
                                </div>
                                <p className=""><span className="font-[700]">Escalation:</span> Incidents may be minor, and their details can be logged or notifications sent without escalation. Escalation occurs based on the assigned categorization and the responsible individuals for response procedures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    )
}