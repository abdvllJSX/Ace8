import Link from "next/link";
import { slugify } from "@/app/utili/slugify";

const Index = () => {
    const posts = [
        {
            image: '/blogs/observablity.jpg',
            header: 'Observability Consulting: The Key to Modern System Reliability and Performance',
            text: 'In today’s fast-evolving digital landscape, organizations face unprecedented challenges in maintaining the reliability, performance, and security of their complex IT systems',
            link: ''
        },
        {
            image: '/blogs/gemfire.jpg',
            header: 'GemFire Consulting: Unlocking High-Performance Data Solutions for Modern Enterprises',
            text: 'In a landscape where digital transformation and real-time analytics are vital to business success, organizations must adopt robust and scalable data management systems that can handle vast and ever-changing workloads',
            link: ''
        },
        {
            image: "/blogs/nginx.jpg",
            header: "Nginx Consulting: Building Resilient, High-Performance Web Infrastructure",
            text: "In the age of digital transformation, organizations face escalating pressure to deliver lightning-fast"
        },
    ]
    return (
        <section className="bg-white px-[3rem] sm:px-[10rem] py-[5rem] text-[#232323]">
            <div className="flex flex-col">
                <div className="sm:flex sm:flex-row-reverse sm:gap-[7rem] sm:items-center sm:mb-[7rem]">
                    <div className="sm:flex-1">
                        <div className="flex items-center justify-between text-[#5747A5] mb-[1.5rem] sm:w-[80%]">
                            <p className="font-[600]">Featured</p>
                            <Date />
                        </div>
                        <h2 className="text-[2.5rem] font-[700] text-black mb-[1rem]">Mastering Incident Management: How Ace8 Delivers Resilience and Rapid Recovery</h2>
                        <p className="mb-[1.5rem] hidden sm:block sm:w-[80%]">In the era of always-on digital business, incident management is no longer a back-office function—it's a strategic imperative</p>

                        <Link href={`/blogs/${slugify("Mastering Incident Management: How Ace8 Delivers Resilience and Rapid Recovery")}/`} className="font-[700] w-[8rem] text-[1.4rem] pr-[1rem] sm:block hidden mb-[3rem] border-b-[2px] border-[#5747A5]">Read Post</Link>
                    </div>

                    <img src="/blogs/mastering_incident_management.jpg" alt="" className="mb-[1.5rem] sm:w-[45rem] sm:flex-1" />
                    <p className="mb-[1.5rem] sm:hidden">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                    <Link href={''} className="font-[700] text-[1.4rem] pr-[1rem] sm:hidden mb-[3rem] border-b-[2px] border-[#5747A5]">Read Post</Link>
                </div>
                <div className="grid sm:grid-cols-3 mt-[3rem] sm:mt-[0]">
                    {posts.map((post, index) => <Post post={post} key={index} style={''} />)}
                </div>
                {/* <button className="btn border-[#8167FF] border-[2px] text-[#8167FF] self-center sm:mt-[4.5rem]">View More</button> */}
            </div>
        </section>
    );
}

export default Index;


const Date = ({ style }) => (<p className={`flex gap-[.5rem] ${style} items-center`}><img src="/calender.svg" className="border" alt="" />  9 Jan 2024</p>)

const Post = ({ style, post }) => {
    return (
        <div className={`${style} flex flex-col w-[25rem] mx-auto sm:w-[35rem] self-center`}>
            <Date style={'self-end  mb-[1rem] sm:hidden'} />
            <img src={post.image} alt="blog_post" className="" />
            {/* <p className="text-[#8167FF] mb-[.5rem]">{post.header}</p> */}
            <h2 className="text-[1.5rem] line-clamp-2 mt-[1.5rem] w-[90%] font-[700] sm:text-[1.8rem]">{post.header}</h2>
            <p className="mt-[2rem] line-clamp-3">{post.text}.</p>
            <Link href={`/blogs/${slugify(post.header)}/`} className="font-[700] w-[8rem] text-[1.4rem] pr-[1rem] sm:block hidden mb-[3rem] border-b-[2px] border-[#5747A5]">Read Post</Link>
        </div>
    )
}