// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import trading from "../assets/trading.jpg";

const FAQTailCard = () => {
  return (
    <div
      className="h-[30rem] bg-no-repeat bg-bottom bg-cover flex flex-col justify-center items-center gap-[1rem]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.4)),url(${trading})`,
      }}
    >
      <div className="flex flex-col items-center">
        <p className="text-white font-['lilita_one'] text-[3rem] leading-[3rem] text-center">
          Growing Your <span className="text-[#F5A524]">Fortune</span>
        </p>
        <p className="text-white font-['lilita_one'] text-[3rem] leading-[3rem] text-center">
          While You Grow Your <span className="text-[#F5A524]">Dreams</span>
        </p>
      </div>
      <p className="text-default-300">Join InvestNow Today !</p>
      <Button
        variant="shadow"
        color="warning"
        radius="full"
        endContent={<FaArrowCircleRight className="mt-[0.1rem]" />}
      >
        Join Now
      </Button>
    </div>
  );
};

export default FAQTailCard;
