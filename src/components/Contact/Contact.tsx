// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import ContactInfo from "./subComponents/ContactInfo";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Contactmap from "./subComponents/Contactmap";
import Intro from "../../globalSubComponents/Intro";
import contactImg from "./assets/RHcontactus.jpg"
import ContactUs from "./subComponents/ContactUs";
const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro
        normalHead="Contact "
        redHead="US"
        caption="For inquiries or assistance, connect with our team for personalized support. Committed to addressing your questions, we ensure a seamless experience with our services. Reach out through phone or email, and let us assist you on your investment journey."
        thumbnail={contactImg}
      />
      <ContactUs />
      <ContactInfo />
      <Contactmap />
      <FrequentQuestion />
    </div>
  );
};

export default Contact;
