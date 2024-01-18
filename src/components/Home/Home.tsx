// Dependencies
import { useDispatch } from "react-redux";
import { Divider } from "@nextui-org/react";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import Benefit from "./subComponents/Benefit";
import Mission from "../../globalSubComponents/Mission";
import Achievement from "./subComponents/Achievement";
import Help from "./subComponents/Help";
import Services from "./subComponents/Services";
import Popover from "./subComponents/Popover";
import Youtube from "./subComponents/Youtube";
import Testimonials from "./subComponents/Testimonials";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Popover />
      <HeroSection />
      <Mission />
      <Benefit />
      <Services />
      <Help />
      <Achievement />
      <Testimonials />
      <Youtube />
    </div>
  );
};

export default Home;
