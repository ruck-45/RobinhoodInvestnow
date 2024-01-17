// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import Support from "../../globalSubComponents/Support";
import RetirementStrategies from "./subComponents/RetirementStrategies";
import RetirementImg  from "./assets/RHretirement.jpg";


const Retirement = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  
  return (
    <div>
      <Intro
        normalHead="Retire"
        redHead="ment"
        caption="Secure your retirement with us. Explore tailored investment plans, maximize tax advantages, and build a resilient future. Trust our platform for expert guidance and financial peace of mind. Start planning today!"
        thumbnail={RetirementImg}
      />
      <RetirementStrategies />
      <Support />
    </div>
  );
};

export default Retirement;
