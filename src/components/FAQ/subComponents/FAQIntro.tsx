import faqImg from "../assets/RHfaq.jpg";

const FAQIntro = () => {
  return (
    <div
      className="h-[40rem] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.2)), url(${faqImg})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-[100%] px-[3rem] py-[2rem] bg-[rgba(0,0,0,0.5)] mt-[3rem] text-center text-[3rem] lg:text-[3.5rem]">
        <span className="font-['kalnia'] font-bold leading-[4rem] text-[white]">
          Your <span className="text-[#F5A524]">Questions.</span>
        </span>

        <span className="font-['kalnia'] font-bold leading-[4rem] text-[#F5A524]">
          Our <span className="text-[white]">Answers.</span>
        </span>
      </div>
    </div>
  );
};

export default FAQIntro;
