// "use client";
// import { useParams } from "next/navigation";
import MaxContainer from "../../components/common/maxContainer";
import Hero from "../../components/stories/hero";
import Image from "next/image";
import { data } from "./data";

export async function generateMetadata({ params }) {
  const id = params.storyId;
  return {
    title: data[id]?.header,
    description: data[id]?.text[0].paragraph,
    alternates: {
      canonical: `https://www.ace8.io/stories/${id}`,
    },
    openGraph: {
      title: data[id]?.header,
      description: data[id]?.text[0].paragraph,
      url: `https://www.ace8.io/stories/${id}`,
      siteName: "Ace8",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}

const Index = ({ params }) => {
  //   const params = useParams();

  const dataId = params.storyId;
  return (
    <MaxContainer>
      <Hero />
      <section className="sm:px-[10rem] px-[3rem] py-[5rem] pb-[10rem] text-black bg-white">
        <Image
          width={450}
          className="w-[50rem] mx-auto"
          height={350}
          src={data[dataId]?.image}
          alt="image"
        />
        <h3 className="text-[2rem] font-[700] mt-[4rem] mb-[3rem]">
          {data[dataId]?.header}
        </h3>

        <div className="">
          {data[dataId]?.text?.map((item, Index) => (
            <div className="mt-[2rem]" key={Index}>
              {item.subheader && (
                <p className="mb-[1rem] font-[500]">{item.subheader}</p>
              )}
              <p className="">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </MaxContainer>
  );
};

export default Index;
