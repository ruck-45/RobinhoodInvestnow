// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Mission from "../../globalSubComponents/Mission";
import Specialization from "./subComponents/Specialization";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Intro from "../../globalSubComponents/Intro";
import aboutImg from "./assets/RHAboutUs.jpg" 
import Leadership from "./subComponents/Leadership";
import AboutUs from "./subComponents/AboutUs";
const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro
        normalHead="About "
        redHead="US"
        thumbnail={aboutImg}
        caption="Your trusted partner in trading and investment. We streamline the complexities of financial markets with personalized solutions and expert guidance. Whether you're a newcomer or an experienced investor, we're dedicated to supporting and enhancing your financial journey."
      />
      <AboutUs />
      <Specialization />
      <Leadership />
      <Mission />
      <FrequentQuestion />
    </div>
  );
};

export default About;
