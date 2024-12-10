
/**
 * Verification Section Component
 *
 * A reusable component incorporating the validation form, file upload section, headers and footers
 * @returns {JSX.Element} A styled verification section UI component.
 */
import FileUpload from "./fileUpload"
import ValidationForm from "./validationForm"

//Data to add to the two different file upload section
const uploadData = [
  {
    title: "Certification of Incorporation",
    instruction: "Upload the incorporation certificate",
  },
  {
    title: "Company Logo",
    instruction: "Upload the company logo",
  },
];

const Verfication = () => {
    return (
      <div className="bg-white flex flex-col gap-10 py-[56px] px-[48px] w-[894px] h-full min-h-screen mx-auto  ">
        {/**Header section */}
        <div className="flex flex-col gap-2">
          <div className="text-[#1D1D22] font-[550] text-[20px] leading-6">
            Tell us more about your business
          </div>
          <div className="text-[#636567] font-[450] text-[13px] leading-5">
            Your info is like the Wi-Fi password—totally crucial for keeping
            things running, impressing the money folks, and making sure you get
            top-notch service without any buffering!
          </div>
        </div>

        <ValidationForm />
        {/**File upload section implemented using loop */}
        {uploadData.map((data, index) => (
          <FileUpload
            key={index}
            title={data.title}
            instruction={data.instruction}
          />
        ))}

        { /**Footer section with preious and next buttons */}
        <div className="flex justify-between items-center">
          <button className="p-[14px] outline-none flex text-center rounded-[10px] max-h-[48px] max-w-[95px] border border-[#1D1D22]">
            <span className="text-[#1D1D22] font-[550] text-[16px] leading-5">
              Previous
            </span>
          </button>
          <button className="p-[14px] flex text-center items-center bg-[#E50101]  justify-center rounded-[10px] max-h-[48px] w-[95px]">
            <span className="text-white font-[550] text-[16px] leading-5">
              Next
            </span>
          </button>
        </div>
      </div>
    );
}

export default Verfication