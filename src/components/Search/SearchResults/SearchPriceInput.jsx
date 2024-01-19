import { useState } from "react";
import { blockInvalidChar } from "./blockInvalidChar";

const SearchPriceInput = (props) => {
  const [priceTag, getPriceTag] = useState(props.def);

  const priceChangeHandler = (e) => {
    e.target.value >= 0 ? getPriceTag(e.target.value) : getPriceTag(0);
  };

  return (
    <>
      <div className="flex">
        <p className="text-[14px] absolute ml-[20px] mt-[25px] text-[#a9a9a9]">
          {props.minMaxText}
        </p>
        <input
          value={priceTag}
          onKeyDown={blockInvalidChar}
          type="number"
          className={`flex flex-row bg-white h-[40px] w-[162.5px]  border-[1.8px] border-orange-500 ml-[15px] mt-[15px]  placeholder:pr-[7px] outline-none text-[18px] placeholder:text-black font-semibold text-right pr-[20px] remove-arrow`}
          onChange={priceChangeHandler}
        />
        <p className="absolute mt-[22px] text-[18px] font-semibold ml-[160px]">
          &#8382;
        </p>
      </div>
    </>
  );
};
export default SearchPriceInput;
