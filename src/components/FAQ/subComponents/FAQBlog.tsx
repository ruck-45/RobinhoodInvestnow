// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

const FAQBlog = () => {
  return (
    <div className="bg-white py-[5rem] flex flex-col lg:flex-row justify-evenly items-center gap-[3rem] px-[2rem]">
      <div className="max-w-[40rem] flex flex-col gap-[1rem]">
        <h1 className="font-['Unna'] text-[3rem]">Blogs And Articles</h1>
        <p className="text-default-500 text-justify">
          Stay ahead in the financial world! Subscribe to our blog for exclusive insights on investments, cryptocurrency
          trends, IRA strategies, trading tips, and more. Become a part of our community to access expert analysis and
          updates, ensuring you make informed decisions on your journey to financial success. Subscribe now for a wealth
          of knowledge!
        </p>
      </div>
      <Button
        variant="shadow"
        color="warning"
        radius="full"
        endContent={<FaArrowCircleRight className="mt-[0.1rem]" />}
      >
        Subscribe Now
      </Button>
    </div>
  );
};

export default FAQBlog;
