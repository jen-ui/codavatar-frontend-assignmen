import Image from "next/image";
import Menu from "./menu";
import menuItems from "../data/menuItems";

const LayoutCardsSection = () => {
    return (
      <div className=" flex flex-col flex-wrap gap-16 relative h-full w-full bg-[#696969]  items-center p-10">
        <Image
          src="/mask.png"
          alt="mask in background"
          width={600}
          height={600}
          className="absolute left-0 z-2 bottom-0  rotate-[-14.9 deg]"
        />
        <Image
          src="/mask2.png"
          alt="mask in background"
          width={600}
          height={600}
          className="absolute left-0 z-2 bottom-0 drop-shadow-lg rotate-[-14.9 deg]"
        />
        <Image
          src="/ellipse.png"
          alt="mask in background"
          width={600}
          height={600}
          className="absolute left-0 z-2 bottom-0 -z-10 rotate-[-14.9 deg]"
        />

        <div className="flex top-[48px] left-[50px] items-start w-full ">
          <button>&larr; Back</button>
        </div>

        <div className="relative w-[300px] flex items-center justify-center  min-h-[40px] ">
          <span className="text-[32px] text-[#F9F9F9] font-[600] leading-10 text-center  mx-auto">
            Layout Cards
          </span>
        </div>

        <div className="flex flex-wrap-reverse max-w-[712px] gap-8 mb-20 ">
          {menuItems.map((item, index) => {
            return (
              <Menu
                key={index}
                flagImg={item.flagImg}
                country={item.country}
                name={item.name}
                officeType={item.officeType}
                location={item.location}
              />
            );
          })}
        </div>
      </div>
    );
}

export default LayoutCardsSection