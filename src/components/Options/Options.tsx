// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import Support from "../../globalSubComponents/Support";
import OptionsStrategies from "./subComponents/OptionsStrategies";
import optionsImg from "./assets/RHoption.jpg"

const Options = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro
        normalHead="Option "
        redHead="Trading"
        caption="Empower your financial strategy with our options trading platform. Seamlessly navigate markets, execute diverse strategies, and optimize risk. Elevate your trading experience with expert insights. Begin trading options today!"
        thumbnail={optionsImg}
      />
      <OptionsStrategies />
      <Support />
    </div>
  );
};

export default Options;
