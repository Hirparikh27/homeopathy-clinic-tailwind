import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import video1 from "../assets/videos/Review Video 1.mp4";
import video2 from "../assets/videos/Review Video 2 (2).mp4";
import video3 from "../assets/videos/Review Video 3.mp4";
import video4 from "../assets/videos/Review Video 4.mp4";
import video5 from "../assets/videos/Review Video 5.mp4";

const testimonialsData = [
  {
    videoSource: video1,
    patient: "Patient",
    condition: "Homeopathy Success Story",
  },
  {
    videoSource: video2,
    patient: "Patient",
    condition: "Homeopathy Success Story",
  },
  {
    videoSource: video3,
    patient: "Patient",
    condition: "Homeopathy Success Story",
  },
  {
    videoSource: video4,
    patient: "Patient",
    condition: "Homeopathy Success Story",
  },
  {
    videoSource: video5,
    patient: "Patient",
    condition: "Homeopathy Success Story",
  },
];

const VideoModal = ({ videoSource, onClose }) => {
  if (!videoSource) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-auto max-w-[95vw] max-h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <video
          src={videoSource}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
          controls
          autoPlay
          playsInline
        />
      </div>
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close modal"
      />
    </div>
  );
};

const Card = ({ item, index, onPlay }) => {
  return (
    <motion.div
      className="h-[300px] rounded-2xl overflow-hidden shrink-0 transition-all duration-300 w-[214.55px] bg-[#295C51] relative md:min-w-[260px] md:h-[350px]"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="w-full h-full relative group cursor-pointer"
        onClick={() => onPlay(item.videoSource)}
      >
        <video
          src={item.videoSource}
          className="w-full h-full object-cover pointer-events-none"
          playsInline
          muted
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            onPlay(item.videoSource);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5V19L19 12L8 5Z" fill="white" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = React.useState(null);

  return (
    <section
      id="testimonials"
      className="pt-10 pb-[100px] bg-[#FAF5F0] relative overflow-hidden md:pb-[60px]"
    >
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 mb-10 lg:flex-row lg:justify-between lg:items-start lg:text-left lg:mb-[88px] lg:gap-0">
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <h2 className="font-cooper text-[32px] font-normal leading-[1.2] text-[#1A1A1A] max-w-[485px] lg:text-[44px]">
              Why Patients Trust Enaaya Homeopathy
            </h2>
          </div>
          <div className="flex flex-col gap-6 max-w-[470px] items-center lg:items-start lg:text-left lg:gap-[19px]">
            <p className="font-josefin text-[18px] font-normal leading-[1.3] text-[#1A1A1A99] lg:text-[24px] lg:text-[#666666] lg:leading-[1.3]">
              Honest guidance. Individualized treatment. Results you can truly
              feel.
            </p>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-[#295C51] text-white h-[48px] w-[143px] flex items-center justify-center gap-2 rounded-[72px] font-bold font-josefin text-[18px] leading-none hover:bg-[#204a41] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Gradients */}
        <div className="hidden lg:block absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-[#FAF5F0] via-[#FAF5F0]/60 to-transparent z-[10] pointer-events-none"></div>
        <div className="hidden lg:block absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-[#FAF5F0] via-[#FAF5F0]/60 to-transparent z-[10] pointer-events-none"></div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto py-10 scrollbar-none relative w-full">
          <div className="flex gap-4 md:gap-6 px-4 lg:px-0 lg:pl-[calc((100%-1190px)/2)] min-w-full">
            {testimonialsData.map((item, index) => (
              <Card
                key={`testimonial-${index}`}
                item={item}
                index={index}
                onPlay={setActiveVideo}
              />
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <VideoModal
          videoSource={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
};

export default Testimonials;
