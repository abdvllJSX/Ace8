'use client';
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import milestone, { slideIn } from "@/app/Animations/common";
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";
import MaxContainer from "@/app/components/common/maxContainer";
import ButtonLink from "../common/buttonLink";


const Index = () => {
    useEffect(() => {
        milestone()
        slideIn()
    }, [])
    const brands = ['/gojek.png', '/enbridge.png', '/ceaser.png', '/henry.png', '/square.png']

    const _brands = [
        {
            icon: '/square.png',
            style: 'sm:w-[6rem] w-[7rem] aspect-square hover:opacity-[.5]',
        },
        {
            icon: '/microsoft.png',
            style: 'sm:w-[18rem] hover:opacity-[.5]',
        },
        {
            icon: '/enbridge.png',
            hoveredIcon: '/enbridge_hov.png',
            style: 'sm:w-[18rem]',
        },
        {
            icon: '/gojek.png',
            hoveredIcon: '/gojek_hov.png',
            style: 'sm:w-[18rem]',
        },
        {
            icon: '/ceaser.png',
            hoveredIcon: '/ceaser_hov.png',
            style: 'sm:w-[18rem]',
        },
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: brands.length
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2
        }
    }
    return (
        <section className="px-[3rem] sm:px-[10rem] sm:pt-[5rem] mt-[5rem] sm:mt-[1.5rem] relative pb-[5.2rem] sm:pb-[8.5rem] flex flex-col gap-x-[4rem] w-[100%]">
            <MaxContainer>
                <div className="w-[100%] sm:border-[.5px] sm:rounded-[2rem] bg-[#11151A] border-[#FF6600] sm:px-[5rem] rounded-t-[2rem] border-[2px] py-[2rem] sm:py-[4rem]" data-animation-id="slideIn">
                    <h2 className="text-[2.9rem] sm:text-[3.2rem] text-center sm:text-left font-[700] mb-[3rem]">Trusted by <span className="text-[#FF6600]">global brands</span> including:</h2>
                    <div className="hidden sm:flex items-center justify-between w-[100%]">
                        {_brands.map((item, i) => <Brand item={item} key={i} />)}
                    </div>
                    <div className="sm:hidden">
                        <Carousel showDots={true} autoPlay={true} autoPlaySpeed={1000} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", 'desktop']} responsive={responsive}>
                            {_brands.map((item, i) => <Image src={item.icon} key={i} className={`${item.style}`} width={150} height={100} />)}
                        </Carousel>
                    </div>
                </div>
            </MaxContainer>
            <p className="sm:w-[90rem] mt-[3rem] sm:mt-[5rem] text-center mx-auto">In today's fast-paced digital landcape, a robust and efficient web server is crucial for business success. Whether you're leveraging Nginx for high-traffic websites, load balancing, or as a reverse proxy, our expert consulting services ensure your Nginx infrastructure delivers optimal performance while meeting your business objectives.</p>

            <ButtonLink
                text={"Connect with Our Nginx Experts"}
                className={"mx-auto border-[2px] rounded-[.6rem] border-[#8FD5CC]"}
                link={"#contact"}
            />
        </section>
    );
}

export default Index;

const Brand = ({ item }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <Image
            src={hovered && item.hoveredIcon ? item.hoveredIcon : item.icon}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${item.style} cursor-pointer`}
            width={150}
            height={100} />
    )
}