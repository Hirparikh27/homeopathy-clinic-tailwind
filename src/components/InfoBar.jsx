import React from "react";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
const contactInfo = {
  phone: "+91 92747 33288",
  email: "enaayahomeopathy@gmail.com",
  address:
    "First Floor FF21, Maple Tree, near Surdhara Circle, Thaltej, Ahmedabad, GJ",
  openingHours: {
    weekdays: "Mon to Sat 10:30 to 7:30",
    special: "Sun 10:30 to 1:30",
  },
};

const InfoBar = () => {
  return (
    <div className="pt-4 pb-20 relative z-10 mt-auto md:mt-0 lg:mt-0 lg:pt-8 lg:pb-20">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="bg-white rounded-[24px] p-[32px_24px] sm:p-[32px_32px] flex flex-col gap-[32px] sm:gap-[32px] md:rounded-[24px] md:p-[32px_40px] md:flex-row md:justify-between md:items-stretch md:gap-[40px] lg:p-[32px_40px] lg:gap-[40px] xl:p-[32px_64px] xl:gap-[80px]">
          {/* Item 1 */}
          <div className="flex items-start gap-4 sm:gap-6 w-full border-b border-solid border-[#EEF3F1] pb-[32px] sm:pb-[32px] md:flex-1 md:w-auto md:border-b-0 md:pb-0">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] text-[#295C51] rounded-2xl flex items-center justify-center text-[24px] sm:text-[28px] shrink-0">
              <MdEmail />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full pt-1">
              <h3 className="font-josefin text-[20px] font-semibold mb-1 text-[#295C51] leading-none">
                Contact Us
              </h3>
              <p className="font-josefin text-[16px] text-[#666666] leading-[1.3] m-0 font-normal">
                {contactInfo.phone}
              </p>
              <p className="font-josefin text-[13px] md:text-[16px] text-[#666666] leading-[1.3] m-0 font-normal whitespace-nowrap">
                {contactInfo.email}
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 sm:gap-6 w-full border-b border-solid border-[#EEF3F1] pb-[32px] sm:pb-[32px] md:flex-1 md:w-auto md:border-b-0 md:pb-0">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] text-[#295C51] rounded-2xl flex items-center justify-center text-[24px] sm:text-[28px] shrink-0">
              <MdLocationOn />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full pt-1">
              <h3 className="font-josefin text-[20px] font-semibold mb-1 text-[#295C51] leading-none">
                Location
              </h3>
              <p className="font-josefin text-[16px] text-[#666666] leading-[1.3] m-0 font-normal max-w-[230px]">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 sm:gap-6 w-full md:flex-1 md:w-auto">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] text-[#295C51] rounded-2xl flex items-center justify-center text-[24px] sm:text-[28px] shrink-0">
              <MdAccessTime />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full pt-1">
              <h3 className="font-josefin text-[20px] font-semibold mb-1 text-[#295C51] leading-none">
                Opening Hours
              </h3>
              <p className="font-josefin text-[16px] text-[#666666] leading-[1.3] m-0 font-normal whitespace-nowrap">
                {contactInfo.openingHours.weekdays}
              </p>
              <p className="font-josefin text-[16px] text-[#666666] leading-[1.3] m-0 font-normal whitespace-nowrap">
                {contactInfo.openingHours.special}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
