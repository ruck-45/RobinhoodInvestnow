// Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";

const reviews = [
  {
    name: "Emma Taylor",
    designation: "Small Business Owner",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ OpenAI transformed my business! Their team’s dedication and creative finesse revolutionized my online presence. They didn't just meet expectations; they exceeded them. OpenAI is not just a service; it's a transformative partner for small businesses like mine. ❞",
  },
  {
    name: "Noah Wilson",
    designation: "Marketing Manage",
    rating: "⭐⭐⭐⭐⭐⭐",
    comment:
      "❝ Working with OpenAI was a game-changer for our marketing strategy. Their digital marketing solutions and attention to detail sets them apart. It's rare to find a team so committed to the success of their clients. OpenAI is our go-to for all things digital. ❞",
  },
  {
    name: "Ava Collins",
    designation: "E-commerce Entrepreneur",
    rating: "⭐⭐⭐⭐",
    comment:
      "❝ OpenAI took our e-commerce game to the next level. Their personalized approach and understanding of our niche were refreshing. From creative content to strategic SEO, they've been instrumental in our success. OpenAI is more than an agency; it's a partner. ❞",
  },
  {
    name: "Liam Anderson",
    designation: "Tech Startup Founder",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ The OpenAI team delivered beyond our expectations. Their strategic approach and ability to adapt to our evolving needs were impressive. They don't just provide solutions; they become an extension of your team. OpenAI is our secret weapon for digital marketing. ❞",
  },
  {
    name: "Olivia Parker",
    designation: "Non-Profit Director",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ OpenAI understood our mission and translated it into a compelling digital narrative. Their commitment to client satisfaction sets them apart. The team's passion for our business is evident in every project. With OpenAI, it’s not just about marketing; it's about making a difference ❞",
  },
  {
    name: "Henry Turner",
    designation: "Restaurant Owner",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ In a competitive market, OpenAI gave our restaurant a distinctive online identity. Their ability to capture the essence of our brand in every campaign is commendable. OpenAI is more than a marketing agency; it's a partner that understands your business’ needs.   ❞",
  },
];



const Testimonials = () => {
  let arrows = true;

  if (window.innerWidth <= 645) {
    arrows = false;
  }

  var settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    arrows: arrows,
  };

  return (
    <div className="px-[1rem] sm:px-[3rem] py-[5rem] bg-[#191f22]">
      <h1 className="font-['lilita_one'] text-[3rem] text-center mx-auto mb-[2rem] text-white">Testimonials</h1>

      <Slider {...settings}>
        {reviews.map((data, index) => (
          <div className="px-[1rem]">
            <div className="bg-white rounded-3xl p-[2rem] flex gap-[2rem]">
              <div className="w-[0.4rem] bg-[#191f22] rounded shrink-0"></div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-default-500 text-sm">{data.designation}</p>
                </div>
                <p>{data.rating}</p>
                <p className="italic">{data.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
