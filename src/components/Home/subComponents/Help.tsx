// Dependencies
import { Image, Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

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
            color="danger"
            radius="full"
            endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
          >
            Learn More
          </Button>
        </div>
      </div>
      <Image
        isBlurred
        src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Help"
        width={500}
        radius="none"
        className="border border-[1rem] hidden lg:block"
      />
    </div>
  );
};

export default Help;
