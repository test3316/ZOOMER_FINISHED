import axios from "axios";
import SideBarNav from "./SideBarNav";
import Slider from "./Slider";
axios;

const SideBarSlider = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-6 ml-6 mr-6">
        <SideBarNav />
        <Slider />
      </div>
    </>
  );
};

export default SideBarSlider;
