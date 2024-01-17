// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import InvestmentStrategies from "./subComponents/InvestmentStrategies";
import Support from "../../globalSubComponents/Support";
import investementImg from "./assets/RHinvestement.jpg"
const Investment = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro
        normalHead="Invest"
        redHead="ment"
        caption="Invest with confidence on our platform. Explore lucrative opportunities, experience seamless trading, and benefit from expert guidance. Grow your portfolio with us, paving the way for a prosperous financial future. Begin your journey today!"
        thumbnail={investementImg}
      />
      <InvestmentStrategies />
      <Support />
    </div>
  );
};

export default Investment;
