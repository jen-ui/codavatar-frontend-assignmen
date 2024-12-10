"use client";

/**
 * ValidationForm Component
 *
 * A reusable component that displays a form with list of labels, input fields and dropdowns .
 * @returns {JSX.Element} A styled form UI component.
 */

import { Span } from "next/dist/trace";
import { useRef, useState} from "react";

const ValidationForm = () => {


  //state component to store the form data
  //each item in the form data has  a value, required indication and options for dropdowns 
  const [formData, setFormData] = useState({
    legalName: { value: "", required: true },
    doingBusinessAs: { value: "", required: true },
    companyRegistrationNumber: { value: "", required: true },
    randomRegistrationNumber: { value: "", required: true },
    websiteUrl: { value: "", required: true },
    industryName: {
      value: "",
      required: true,
      options: ["None", "Middle School", "High School", "University"],
     
    },
    oneRandomDropdown: {
      value: "",
      required: true,
      options: ["None", "Middle School", "High School", "University"],
     
    },
    whichDropdownToSelect: {
      value: "",
      required: true,
      options: ["None", "Middle School", "High School", "University"],
    },
    anotherRandomDropdownAppears: {
      value: "",
      required: true,
      options: ["None", "Middle School", "High School", "University"],
    },
    accountUsageIntent: { value: "", required: true },
    randomCountPerMonth: { value: "", required: true },
    expectedTotalVisits: {
      value: "",
      required: true,
      options: ["None", "Middle School", "High School", "University"],
    },
    purposeOfUsingFakeForm: { value: "", required: true },
    description: { value: "", required: true },
    contactEmail: { value: "", required: true },
  });


  /**
   * A function to format the given camelcase word into proper title form.
   * @param camelCase The camelcase word to format
   * @returns formatted word
   */
  function toLabelFormat(camelCase) {
    return camelCase
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  }
  const {
    legalName,
    doingBusinessAs,
    companyRegistrationNumber,
    randomRegistrationNumber,
    websiteUrl,
    industryName,
    oneRandomDropdown,
    whichDropdownToSelect,
    anotherRandomDropdownAppears,
    accountUsageIntent,
    randomCountPerMonth,
    expectedTotalVisits,
    purposeOfUsingFakeForm,
    description,
    contactEmail,
  } = formData;

  //updates the form data whenever the input to the form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="grid grid-cols-2 w-[798px] h-full gap-x-5 gap-y-6 ">
      {Object.keys(formData).map((key) => (
        <div key={key} className="flex flex-col gap-2">
          <label
            htmlFor={key}
            className="text-[14px] leading-[14px] font-[400] text-black"
          >
            <div>
              {toLabelFormat(key)}
              {formData[key].required && (
                <span className="text-red-500 text-[18px]"> * </span>
              )}
            </div>
          </label>

          {/** if the formdata has options, it should have a dropdown or less plain input field */}
          {!formData[key].options && (
            <input
              className="border border-[#D7DADC] text-black py-3 px-4 rounded-lg"
              type="text"
              name={key}
              placeholder={toLabelFormat(key)}
              required
              value={formData[key].value}
              onChange={handleChange}
            />
          )}

          {formData[key].options && (
            <select
              className={`border border-[#D7DADC] py-3 px-4 rounded-lg ${
                formData[key].value === "None" ? "text-gray-400" : "text-black"
              }`}
              name={key}
              id={key}
              ref={formData[key].ref}
            >
              {formData[key].options.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </form>
  );
};

export default ValidationForm;
