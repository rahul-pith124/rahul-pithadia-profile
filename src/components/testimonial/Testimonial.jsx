import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "I had the pleasure of working with Rahul Pithadia on a startup project, and he was an outstanding teammate. Rahul has deep expertise in backend development and blockchain smart contracts, his technical skills are solid, and his problem-solving approach is both structured and practical.",
    // quote: `From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!`,
    name: "Michael Chi-Sheng Chen",
    designation:
      "AI Research @Harvard & BIDMC | AI Trainer @OpenAI | AI Research (Biomedical AI, EEG, CV, QML)  | ex-MediaTek, ex-Max Planck Institute",
  },
  {
    message:
      "I’ve had the chance to work with Rahul and can confidently say he is reliable, proactive, and always willing to help. He brings solid expertise in blockchain development, and consistently delivers high-quality work. His commitment and solid technical foundation make him a valuable asset to any team. Really looking forward to working with him again in the future.",
    // quote: `The team demonstrated a deep understanding of our requirements and delivered a solution that was both visually appealing and highly functional. Communication was clear throughout the project.`,
    name: "Aidan Tsai",
    designation:
      "AI Founder | Building in AI Agents | VC Scout @ Outlander VC | Ex-Microsoft",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25 mt-20">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          autoplay={{
            delay: 2000, // time between slides in ms
            disableOnInteraction: false, // keeps autoplay running after user interaction
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
