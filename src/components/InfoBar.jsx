import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineAccessTime,
} from "react-icons/md";
const contactInfo = {
  phone: "+91 92747 33288",
  email: "enaayahomeopathy@gmail.com",
  address:
    "First Floor FF21, Maple Tree, near Surdhara Circle, Thaltej, Ahmedabad, GJ",
  openingHours: {
    weekdays: "Mon to Sat 10:30 to 7:30",
    special: "Sun Appointment based only",
  },
};

const InfoBar = () => {
  return (
    <div className="pt-4 pb-20 md:pb-10 lg:pb-20 relative z-10 mt-auto md:mt-0 lg:mt-0 lg:pt-8 lg:mx-6 xl:mx-auto">
      <div className="max-w-[1190px] mx-auto px-4 lg:px-0">
        <div className="bg-white rounded-[24px] p-[32px_24px] sm:p-[32px_40px] flex flex-col gap-[32px] md:gap-[24px] lg:p-[40px] lg:flex-row lg:justify-between lg:items-stretch lg:gap-[32px] xl:p-[32px_64px] xl:gap-[64px]">
          {/* Item 1 */}
          <div className="flex items-center gap-3 sm:gap-6 w-full border-b border-solid border-[#EEF3F1] pb-[32px] sm:pb-[32px] md:flex-[0.9] md:w-auto md:border-b-0 md:pb-0 lg:flex-1">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] bg-opacity-60 text-[#295C51] rounded-[16px] flex items-center justify-center text-[24px] sm:text-[28px] shrink-0 border border-[#E0E7E4]">
              <MdOutlineEmail />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 className="font-josefin text-[18px] sm:text-[20px] font-semibold mb-1 text-[#295C51] leading-tight">
                Contact Us
              </h3>
              <a
                href="tel:+919274733288"
                className="font-josefin text-[14px] sm:text-[16px] text-[#666666] leading-[1.4] m-0 font-normal no-underline hover:text-[#295C51] transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
              <a
                href="mailto:enaayahomeopathy@gmail.com"
                className="font-josefin text-[14px] md:text-[16px] text-[#666666] leading-[1.4] m-0 font-normal break-words no-underline hover:text-[#295C51] transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3 sm:gap-6 w-full border-b border-solid border-[#EEF3F1] pb-[32px] sm:pb-[32px] md:flex-[1.3] md:w-auto md:border-b-0 md:pb-0 lg:flex-1">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] bg-opacity-60 text-[#295C51] rounded-[16px] flex items-center justify-center text-[24px] sm:text-[28px] shrink-0 border border-[#E0E7E4]">
              <MdOutlineLocationOn />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 className="font-josefin text-[18px] sm:text-[20px] font-semibold mb-1 text-[#295C51] leading-tight">
                Location
              </h3>
              <p className="font-josefin text-[14px] sm:text-[16px] text-[#666666] leading-[1.4] m-0 font-normal md:max-w-[280px] lg:max-w-[340px]">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3 sm:gap-6 w-full md:flex-[1.2] md:w-auto lg:flex-1">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#EEF3F1] bg-opacity-60 text-[#295C51] rounded-[16px] flex items-center justify-center text-[24px] sm:text-[28px] shrink-0 border border-[#E0E7E4]">
              <MdOutlineAccessTime />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 className="font-josefin text-[18px] sm:text-[20px] font-semibold mb-1 text-[#295C51] leading-tight">
                Opening Hours
              </h3>
              <p className="font-josefin text-[14px] sm:text-[16px] text-[#666666] leading-[1.4] m-0 font-normal md:whitespace-nowrap">
                {contactInfo.openingHours.weekdays}
              </p>
              <p className="font-josefin text-[14px] sm:text-[16px] text-[#666666] leading-[1.4] m-0 font-normal md:whitespace-nowrap">
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
