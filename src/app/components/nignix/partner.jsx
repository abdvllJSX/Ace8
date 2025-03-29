import Img from "../common/image";

const Partner = () => {
    const data = [
        {
            icon: "/nignix-partner"
        },
        {
            icon: "/partner-1",
            text: <span className="">Certified  <span className="font-[700] text-[#FF6600]">Experts</span></span>,
            description: "Our team includes Nginx-certified professionals with years of experience."
        },
        {
            icon: "/partner-2",
            text: <span className="">Performance <span className="font-[700] text-[#FF6600]">Obsessed</span></span>,
            description: "We're committed to squeezing every ounce of performance from your Nginx deployment."
        },
        {
            icon: "/partner-3",
            text: <span className="">Security <span className="font-[700] text-[#FF6600]">Focused</span></span>,
            description: "Implement best practices to keep your web infrastructure secure and compliant."
        },
        {
            icon: "/partner-4",
            text: <span className="">Scalability <span className="font-[700] text-[#FF6600]">Specialist</span></span>,
            description: "Design Nginx setups that grow with your business needs."
        },
        {
            icon: "/partner-5",
            text: <span className="">24/7 <span className="font-[700] text-[#FF6600]">Support</span></span>,
            description: "Design Nginx setups that grow with your business needs."
        },

    ]

    return (
        <section className="sm:px-[15rem] px-[2.5rem] mt-[7rem] sm:mt-[8rem]">
            <h1 className="text-center sm:text-[2.8rem] text-[2.4rem] font-[700]">Why Choose Us as your <span className="text-[#8FD5CC]">Ngnix Partner</span></h1>

            <div className="grid mx-auto max-w-[1800px] sm:grid-cols-3 sm:mt-[6rem] justify-items-center mt-[3rem] sm:gap-[2rem] gap-y-[2rem] items-center">
                
            {
                data.map((item, index) => {
                    if (index === 0) {
                        return (
                            <Img

                                className={"sm:w-[35rem]"}
                                src={`/nignix${item.icon}.png`}
                                alt="icon"
                            />
                        )
                    } else {
                        return (
                            <Card key={index} {...item} />
                        )
                    }

                })
            }
            </div>

        </section>
    );
}

const Card = ({ icon, text, description }) => {
    return (
        <div className="sm:h-[32rem] h-[28rem] sm:px-[4rem] px-[2.5rem] sm:pt-[4rem] py-[3rem] bg-[#11151A] rounded-[2rem]">
            <Img
                src={`/nignix/${icon}.svg`}
                alt="icon"
                className={"size-[5rem]"}
            />
            <h2 className="text-[2.2rem] mt-[2.5rem] sm:mt-[3rem] sm:mb-[2rem]">{text}</h2>
            <p className="w-[90%] mt-[2rem] sm:mt-[0]">{description}</p>
        </div>
    )
}

export default Partner