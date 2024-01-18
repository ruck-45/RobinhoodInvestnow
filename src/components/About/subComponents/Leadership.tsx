// Dependencies
import { Avatar } from "@nextui-org/react";

// Local Files
import Emilie from "../assets/RHceo.jpg";
import John from "../assets/RhCoFounder.jpg";

const Leaders = [
  {
    name: "Michael Anderson",
    designation: "Co-Founder & Managing Director",
    bio: "Michael Anderson, co-founder and MD of InvestNow, is a visionary leader with a rich background in financial innovation. With over a decade of experience in investment strategy, he has led transformative initiatives for investors worldwide. Michael's strategic foresight and dedication to financial excellence define InvestNow. His achievements include steering the company to industry recognition and a 25% growth in client portfolios within the first year.",
    thumbnail: John,
  },
  {
    name: "Sophia Williams",
    designation: "Co-Founder & CEO",
    bio: "Sophia Williams, Co-founder, and CEO of InvestNow, is a visionary leader with a strong background in financial technology. With a degree in Finance and successful ventures in the fintech sector, Sophia utilized her expertise to establish InvestNow. Under her leadership, the company has earned acclaim for innovative investment platforms, personalized financial strategies, and fostering financial growth for clients across diverse backgrounds.",
    thumbnail: Emilie,
  },
];


const Leadership = () => {
  return (
    <div className="flex justify-center items-center bg-[#e9ecef] lg:px-[6rem] gap-[4rem] lg:gap-[6rem] xl:px-[8rem] xl:gap-[8rem] flex-col lg:flex-row px-[3rem] py-[5rem] lg:p-0 ">
      <h1 className="lg:py-[5rem] font-['Salsa'] text-[3rem] lg:text-[4rem] lg:max-w-[25rem] leading-[4rem] text-center">
        Meet Our <span className="text-[#F5A524]">Leadership</span>
      </h1>
      <div className="grow flex lg:py-[5rem] xl:py-0 gap-[3rem] xl:gap-[5rem] flex-col xl:flex-row">
        {Leaders.map((data, index) => (
          <div key={index} className="xl:w-[50%] xl:py-[5rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col items-center text-center">
              <Avatar src={data.thumbnail} className="w-[10rem] h-[10rem]" />
              <h1 className="font-['DM_Serif_Display'] text-[2rem] font-semibold">{data.name}</h1>
              <p className="italic text-md text-default-800">{data.designation}</p>
            </div>
            <p className="text-justify text-default-500 text-[0.9rem] sm:text-md max-w-[35rem] lg:max-w-[100%]">
              {data.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
