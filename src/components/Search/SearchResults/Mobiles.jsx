import SideBar from "../Brands/SideBar";
import SearchPriceInput from "./SearchPriceInput";
const Mobiles = () => {
  return (
    <>
      <div className="flex flex-col">
        <SearchPriceInput price="0" minMaxText="MIN" def="0" />
        <SearchPriceInput minMaxText="MAX" def="5799" />
        <SideBar />
      </div>
    </>
  );
};

export default Mobiles;
