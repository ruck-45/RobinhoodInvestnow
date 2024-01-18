// Dependencies
import { Input, Button } from "@nextui-org/react";

// Local Files
// import "./Contact.css";


const ContactUs = () => {
  return (
    <div className="ContactUs grid grid-cols-1 lg:grid-cols-2 py-[6rem] px-[2rem] items-center">
      <div className="flex flex-col items-center">
        <h1 className="py-[1rem] font-['rubik_doodle_shadow']  text-white font-bold text-5xl md:text-7xl">
          Contact Us
        </h1>
        <form className="w-full md:w-[30rem] py-[2rem] px-[1rem] flex flex-col gap-[1rem]">
          <Input type="email" label="Email" name="user_email" />
          <Input type="text" label="Full Name" name="user_name" />
          <Input type="text" label="Company Name" name="user_company_name" />
          <Input type="tel" label="Phone Number" name="user_number" />
          <Input
            type="number"
            label="Monthly Budget ( INR / USD )"
            name="user_budget"
            endContent={
              <div className="flex items-center translate-y-[-0.5rem]">
                <label className="sr-only" htmlFor="currency">
                  Currency
                </label>
                <select
                  className="outline-none border-0 bg-transparent text-default-400 text-small"
                  id="currency"
                  name="user_currency"
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            }
          />
          <Button size="lg" className="" variant="bordered" color="warning" radius="none">
            <span>Send Message</span>
          </Button>
        </form>
      </div>
      <div className="text-white max-w-[30rem] text-center flex-col gap-[2rem] hidden lg:flex">
        <h1 className="font-bold text-[3rem] leading-[3rem]">Invest Now</h1>
        <p>
          We're excited to hear from you! Whether you have questions about our investment services, are interested in
          exploring collaboration opportunities, or simply want to learn more about how InvestNow can elevate your
          financial journey, fill out the form below. Our dedicated team is prepared to engage with you and provide
          customized solutions to address your unique needs. Let's initiate a conversation and embark on a journey
          towards unparalleled success together. Your satisfaction is our priority, and we look forward to being your
          trusted partner in investment excellence.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
