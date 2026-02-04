import React from "react";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { contactInfo } from "../data";

const InfoBar = () => {
  return (
    <div className="pt-8 pb-20 relative z-10 mt-auto md:-mt-[50px] lg:mt-0 lg:pt-8 lg:pb-20">
      <div className="container">
        <div className="bg-white rounded-[30px] p-[40px_20px] sm:p-[40px_30px] flex flex-col gap-[40px] sm:gap-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] lg:rounded-[32px] lg:p-[32px_64px] lg:flex-row lg:justify-between lg:items-stretch lg:gap-[112px]">
          {/* Item 1 */}
          <div className="flex items-start gap-4 sm:gap-6 w-full border-b border-solid border-[#EEF3F1] pb-[30px] sm:pb-[30px] lg:flex-1 lg:w-auto lg:border-b-0 lg:pb-0">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] text-primary rounded-xl flex items-center justify-center text-[24px] sm:text-[28px] shrink-0">
              <MdEmail />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-outfit text-[1rem] sm:text-[1.1rem] font-semibold mb-0.5 text-primary-dark">
                Contact Us
              </h3>
              <p className="font-inter text-[0.85rem] text-[#666] leading-[1.4] m-0">
                {contactInfo.phone}
              </p>
              <p className="font-inter text-[0.75rem] sm:text-[0.85rem] text-[#666] leading-[1.4] m-0 mt-2 break-all">
                {contactInfo.email}
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 sm:gap-6 w-full border-b border-solid border-[#EEF3F1] pb-[30px] sm:pb-[30px] lg:flex-1 lg:w-auto lg:border-b-0 lg:pb-0">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] text-primary rounded-xl flex items-center justify-center text-[24px] sm:text-[28px] shrink-0">
              <MdLocationOn />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-outfit text-[1rem] sm:text-[1.1rem] font-semibold mb-0.5 text-primary-dark">
                Location
              </h3>
              <p className="font-inter text-[0.75rem] sm:text-[0.85rem] text-[#666] leading-[1.4] m-0">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 sm:gap-6 w-full lg:flex-1 lg:w-auto">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] text-primary rounded-xl flex items-center justify-center text-[24px] sm:text-[28px] shrink-0">
              <MdAccessTime />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-outfit text-[1rem] sm:text-[1.1rem] font-semibold mb-0.5 text-primary-dark">
                Opening Hours
              </h3>
              <p className="font-inter text-[0.75rem] sm:text-[0.85rem] text-[#666] leading-[1.4] m-0">
                Mon to Sat 10:30 to 7:30
              </p>
              <p className="font-inter text-[0.75rem] sm:text-[0.85rem] text-[#666] leading-[1.4] m-0">
                Mon to Sat 10:30 to 1:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
