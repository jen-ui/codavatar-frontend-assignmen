"use client";

/**
 * @component OTPFields
 * @description This component allows users to verify their email by entering a 6-digit OTP code.
 * It includes functionalities for OTP input, validation, a timer, and resend logic.
 */

import { log } from "console";
import { sendResponse } from "next/dist/server/image-optimizer";
import { Span } from "next/dist/trace";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Heebo } from "next/font/google";


const heebo = Heebo({ subsets: ["latin"] });



const OTPFields = () => {
  const notify = () => toast("Incorrect OTP. Try Again!");

  const router = useRouter();

  // Dummy email address for masking and display
  const userEmail = "saroj@xyz.com";
  
  // Generate the user email in the format s****@xyz.com
  function hideEmail(email) {
    return (
      email.split("@")[0][0] +
      "*".repeat(email.split("@")[0].length) +
      email.split("@")[1]
    );
  }

  // OTP sent to the user (simulated for this example)
  const sentOtp = "123456";
  const [resendFlag, setResendFlag] = useState(false);
  const [clickVerify, setClickVerify] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const otpInputs = useRef<Array<HTMLInputElement | null>>([]);

  const [buttonText, setButtonText] = useState<String>("Verify");

  useEffect(() => {
    otpInputs.current[0]?.focus();
    startTimer();
  }, []);

  /**
   * handles otp submit
   * @param otp- otp submitted
   */
  const onSubmit = (otp: String) => {
    setClickVerify(true);
    let verification = sentOtp === otp ? true : false;

    if (verification) {
      console.log("verified");
      router.push("/verification");
    } else {
      notify();
      setOtp(["", "", "", "", "", ""]);
      setResendFlag(true);
      setTimer(0);
    }
  };

  /**
   * handles otp change
   * @param index - index of otp changed
   * @param value - value of otp that is changed
   */

  const handleOtpChange = (index: number, value: string) => {
    if (value.match(/^\d+$/) && index < 6) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        otpInputs.current[index + 1]?.focus();
      }
    }
  };

  /**
   * starts the timer
   */
  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer > 0 ? prevTimer - 1 : 0;

        if (newTimer === 0 || clickVerify) {
          clearInterval(interval); // Clear the interval when the timer reaches 0
          setResendFlag(true); // Enable the resend flag
        }

        return newTimer;
      });

      // This will log the updated timer value inside the interval
      console.log(timer); // Make sure `timer` is correctly updated
    }, 1000);
  };

  /** 
   * hanldes backspace in otp field
   */
  const handleBackspace = (index: number) => {
    if (index >= 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      otpInputs.current[index - 1]?.focus();
    }
  };

  /**
   * handles submit when submit button is clicked
   * passes otp to on submit function
   * @param e - formevent
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOTP = otp.join("");
    console.log("Entered OTP:", enteredOTP);
    onSubmit(enteredOTP);
  };

  /**
   * handles resend
   */
  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(60);
    startTimer();
    otpInputs.current[0]?.focus();
    setResendFlag(false);
    setClickVerify(false);
  };

  return (
    <div className=" gap-12 flex flex-grow flex-col max-w-[519px]  ">
      {/**Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="font-[700] text-[#202020] text-[32px] leading-10">
          Verify Your Email
        </h1>
        <span className="font-[400] text-[#646464] text-[16px] leading-6">
          Please enter the 6 digit code we just sent to {hideEmail(userEmail)}
        </span>
      </div>

      <div className="flex flex-col gap-6 flex-grow ">
        {/**Otp field
         * if index of otp field is 3, a dash is displayed instead of input field
         */}
        <div className="flex flex-row flex-wrap gap-2  max-w-full justify-between items-center">
          {otp.map((digit, index) => (
            <>
              {index == 3 && (
                <div key={digit} className="text-black">
                  {" "}
                  -{" "}
                </div>
              )}

              <input
                key={index}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    handleBackspace(index);
                  }
                }}
                className="flex items-center text-center mx-auto h-[52px] gap-2 w-[52px] text-black border border-[#E0E0E0] bg-[#FFFFFF] rounded-[6px]  outline-none appearance-none p-2"
                ref={(ref) => {
                  otpInputs.current[index] = ref;
                }}
              />
            </>
          ))}
        </div>
        {/**Footer Section */}
        <div className="flex flex-col gap-4 w-full">
          <button
            className="bg-[#E50000] opacity-80 flex items-center justify-center rounded-[10px] p-[14px] gap-[10px] hover:bg-red-700 h-[48px] "
            onClick={handleSubmit}
          >
            <span className="text-white font-[500] text-[16px] leading-5 text-center h-5">
              {buttonText}
            </span>
          </button>
          {/**
           * if resend flag is off timer is displayed
           * if resend flag is on "resend code" button  is displayed
           */}
          {resendFlag && (
            <div
              className={`${heebo.className} font-[400] text-[#646464] text-[16px] leading-6 h-6`}
            >
              Didn't receive a code{" "}
              <button
                className="outline-none text-blue-500"
                onClick={handleResend}
              >
                Resend Code{" "}
              </button>
            </div>
          )}
          {!resendFlag && (
            <div
              className={`${heebo.className} font-[400] text-[#646464] text-[16px] leading-6 h-6`}
            >
              {" "}
              Wait {timer} seconds before requesting a new code
            </div>
          )}
          {/**Toast container to notify user of incorrect otp */}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};


export default OTPFields