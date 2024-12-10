/**
 * Menu Component
 *
 * A reusable component for menu or layout cards

 *
 * @param {Object} props - Component properties.
 * @param {string} props.flagImg - Path to the flag image .
 * @param {string} props.country - Country name of the office
 * @param {string} props.officeType - Type of office : head office or branch
 * @param {string} props.name - Name of the company
 * @param {string} props.location - Location of the compnay
 * 
 * @returns {JSX.Element} A styled Menu UI component.
 */

import Image from "next/image";



interface MenuProps {
  flagImg: string;
  country: string;
  officeType: string;
  name: string;
  location: string;
}

const Menu: React.FC<MenuProps> = ({
  flagImg,
  country,
  officeType,
  name,
  location,
}) => {
  return (
    <div className="relative mx-auto hover:translate-y-2 max-h-[240px] max-w-[340px] rounded-[12px]  bg-gradient-to-tr  from-border_gray to-border_white ">
      <div className="  z-3 rounded-md  h-full w-full bg-backgroundColor  ">
        <div className="flex flex-col text-textColor gap-6 px-8 py-8">
          <div className="flex flex-col gap-3">
            <div className="h-[40px] w-[55px]">
              <Image
                src={flagImg}
                alt="Country's flag"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[18px] font-[600] leading-6">{country}</div>
              <div className="text-[14px] text-textColor font-[400] leading-5 ">
                {officeType}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-[14px] w-[284px] text-textColor font-[400] leading-4">
            <div>{name}</div>
            <div>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
