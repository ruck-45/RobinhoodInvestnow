// Dependencies
import { Image, Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import supportImg from "../assets/support.jpg";

const Help = () => {
  return (
    <div className="bg-[white] flex">
      <div className="flex justify-center items-center grow px-[2rem] sm:px-[3rem] md:px-[5rem] py-[5rem]">
        <div className="max-w-[50rem] flex flex-col items-start gap-[3rem]">
          <div>
            <h1 className="font-['Kalnia'] font-bold text-[3rem] text-[#191f22] leading-[3.7rem]">You deserve more.</h1>
            <h1 className="font-['Kalnia'] font-bold text-[3rem] text-[#191f22] leading-[3.7rem]">We can help.</h1>
          </div>
          <p>
            The offerings encompass a diverse range of products or services designed to enhance people's lives. From
            personal development programs and therapeutic solutions to financial assistance, our array of options aims
            to contribute positively to your well-being.
          </p>

          <Button
            variant="light"
            color="warning"
            radius="full"
            endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
          >
            Learn More
          </Button>
        </div>
      </div>
      <Image
        isBlurred
        src={supportImg}
        alt="Help"
        width={500}
        radius="none"
        className="border-[1rem] hidden lg:block"
      />
    </div>
  );
};

export default Help;
