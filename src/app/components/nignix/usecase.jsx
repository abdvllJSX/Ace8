import ButtonLink from "../common/buttonLink";
import Img from "../common/image";
import Link from "next/link";

const UseCase = () => {
    return (
        <section className="sm:px-[10rem] px-[2.5rem] mt-[6rem] sm:mt-[8rem]">
            <div className="flex flex-col sm:flex-row border max-w-[1900px]  mx-auto rounded-[2rem] border-[#8FD5CC] sm:px-[3.5rem] px-[1.5rem] py-[5rem] justify-between">
                <div className="flex flex-col">
                    <h2 className="sm:text-[3rem] text-center sm:text-start text-[2.5rem] sm:w-[90%] font-[700]">Nginx <span className="font-[400]"> Powers High-Performance</span> Web Infrastructure <span className="font-[400]">for</span> <span className="text-[#8FD5CC]">Global E-commerce Platform</span></h2>

                    <p className="mt-[2rem] text-center sm:text-start sm:text-[1.4rem] sm:w-[90%]">Ace8 partnered with a leading global e-commerce platform to revolutionize their web infrastructure using Nginx. Our team designed and implemented a highly optimized Nginx configuration that enabled the platform to handle over 100,000 concurrent connections during peak shopping periods. We fine-tuned load balancing algorithms and implemented advanced caching strategies, resulting in a 40% reduction in server response times. By leveraging Nginx's reverse proxy capabilities, we enhanced security and simplified microservices architecture management. Our custom module development allowed for seamless integration with the platform's proprietary systems. This transformation empowered the e-commerce giant to deliver lightning-fast page loads, improve user experience, and maintain 99.99% uptime during critical sales events, ultimately driving a 25% increase in conversion rates</p>

                    <Link href={"#contact"} className="mt-[3rem] mx-auto sm:mx-0">
                        <button className="px-[2rem] py-[.7rem]  border-[2px] font-[700] bg-[#232323] border-[#8FD5CC] rounded-[.5rem]">Learn More</button>
                    </Link>
                </div>

                <Img
                    src="/nignix/nignix-usecase.png"
                    alt="usecase Image"
                    className="sm:w-[50rem] hidden sm:block"
                />
            </div>
        </section>
    )
}

export default UseCase;