import ButtonLink from "../common/buttonLink";


const CTA = () => {
    return (
        <section className=" px-[2rem] sm:px-[15rem] sm:mt-[6rem] sm:py-[0] py-[6rem] text-[#000000]">
                <div className="flex text-white bg-[black] max-w-[1200px] sm:mx-auto flex-col border relative border-[#8FD5CC] sm:border-[#929292] py-[6rem] rounded-[1.5rem] w-full">
                    <img src="/orange_mq.svg" alt="logo" className="self-center absolute top-[-2rem] w-[15rem]" />

                    <h3 className="text-[2.3rem] sm:text-[4rem] sm:w-[50rem] text-center w-[80%] mx-auto font-[700]"><span className="font-[400]">Ready to</span> Optimize your <span className="text-[#FF6600]">Ngnix Deployment?</span></h3>
                    <p className="text-center sm:w-[60rem] w-[90%] mx-auto sm:mx-auto mt-[2rem]">Don't let web server inefficiencies hold your business back. Whether you're fine-tuning Nginx configurations, troubleshooting performance issues, or scaling for high traffic, we provide the expertise you need to succeed in today's competitive digital landscape.</p>

                    <ButtonLink
                        link={"#contact"}
                        text={"Schedule a Free Consultation"}
                        className={"border-white border-[2px] rounded-[.5rem] font-[700]"}
                    />
                </div>
        </section>
    );
}

export default CTA;