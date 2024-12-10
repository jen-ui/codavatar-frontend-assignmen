import Image from "next/image";

/**
 * FileUpload Component
 *
 * A reusable component for uploading files with drag-and-drop or click-to-upload functionality.
 * Displays a title, an instruction, and supports adding visual guidance with an icon.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the file upload field.
 * @param {string} props.instruction - Additional instructions for the file upload process.
 * @returns {JSX.Element} A styled file upload UI component.
 */
const FileUpload = ({ title, instruction }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Title and instruction section */}
      <div className="flex flex-col gap-[6px]">
        {/* Title with optional asterisk for required fields */}
        <div className="font-[550] text-[16px] text-black leading-6">
          {title}{" "}
          <span className="font-[500] text-red-400 text-[16px] leading-6">
            *
          </span>
        </div>

        {/* Instruction text */}
        <div className="font-[450] text-[13px] text-[#636567] leading-5">
          {instruction}
        </div>
      </div>

      {/* Upload area */}
      <div className="px-8 py-9 border-[1px] border-dashed rounded-[11px] flex gap-5 flex-col border-[#E5E7EA] items-center justify-center">
        {/* Icon area */}
        <div className="p-[10px] w-[52px] h-[52px] bg-gray-200 rounded-full">
          <Image
            src="/copy_icon.png"
            alt="copy icon"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Upload instruction text */}
        <div className="flex flex-col gap-2 items-center justify-center">
          
          <div className="font-[400] text-[14px] leading-[18px] text-center text-[#636567]">
            <button className="underline decoration-solid decoration-skip-ink-none text-black">
              Click to upload
            </button>{" "}
            or drag and drop
          </div>

          {/* File size limitation */}
          <div className="font-[400] text-[14px] leading-[18px] text-center text-[#636567]">
            Maximum file size 50 MB
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
