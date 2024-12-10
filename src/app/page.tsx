

import Image from "next/image";
import { useState } from "react";
import OTPFields from "./components/otpField";
import LayoutCardsSection from "./components/layoutCardsSection";


const Home = ()=> {
  

  return (
    <main className="relative flex  bg-white min-h-screen " >
      <LayoutCardsSection/>
      <div className="flex flex-col min-w-[700px] gap-16 justify-between relative  p-20 ">
        <div className="w-[202px] h-[40px]">
          <Image
            src="/logo.png"
            alt="company logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <OTPFields />

        <div className=" w-[519px] font-[400] text-[14px] leading-[21px] text-center text-[#646464]">
          By continuing, you’re agreeing to Nobody’s
          <span className="text-blue-500">{ "\t"}Terms of Service,</span>
          <span className="text-blue-500">{ "\t"}Privacy Policy</span>
          { "\t"}and <span className="text-blue-500"> Cookie Policy.</span>
        </div>
      </div>
    </main>
  );
}


export default Home