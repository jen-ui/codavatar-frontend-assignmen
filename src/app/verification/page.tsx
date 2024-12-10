import Image from "next/image";
import Verfication from "../components/verificationSection";

const progressBarTitles = [
  "Business Type",
  "Business Details",
  "Authorized Representative",
  "Business Owners",
  "Company Directors",
  "Support Infomation",
  "Add Details",
  "Complete Registration    ",
];

/**
 * Verification Page Component
 *
 * Verification Page in which verification section and headers are incorporated
 
 * @returns {JSX.Element} A styled Verifcation page UI component.
 */

const VerificaionPage = () => {
  return (
    <div className="bg-[#FAFAFA] p-10 flex flex-col gap-14  ">
      {/**Progress bar */}
      <div className=" relative w-[1120px] items-center justify-center gap-3 mx-auto flex flex-col ">
        <div className="w-[95.05%] relative mx-auto h-[14px] flex justify-between items-center">
          {/**seires of ellise used in the progress bar */}
          <div className=" relative z-20 rounded-full h-[14px] w-[14px]">
            <Image
              src="/checked_circle.png"
              alt="ellipse in progress bar"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="relative border-[3px] z-20 border-green-500 bg-white rounded-full h-[14px] w-[14px]"></div>
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative border-[3px] z-20 border-[#D7DADC] bg-white rounded-full h-[14px] w-[14px]"
            ></div>
          ))}

          {/**Rectangles placed on top of ellipse for progress bar */}
          <div className="absolute z-0 w-full h-1 bg-[#D7DADC] rounded-2xl opacity-80"></div>
          <div className="absolute z-10 w-[14.4%] h-1 bg-[#34C759] rounded-2xl opacity-80"></div>
        </div>
        {/**Progress Bar titles displayed just below each ellipse */}
        <div className="w-full relative h-[40px] flex justify-between ">
          {progressBarTitles.map((item, index) => {
            return (
              <div key={index} className="flex flex-wrap w-[59px] h-full text-center font-[400] text-[14px]   text-[#636567] justify-center items-center">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <Verfication />
    </div>
  );
};

export default VerificaionPage;
