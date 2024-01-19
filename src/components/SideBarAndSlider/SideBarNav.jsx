import Nav from "./Nav";
import { PiDeviceMobileSpeakerThin } from "react-icons/pi";
import { FiTablet } from "react-icons/fi";
import { LiaLaptopMedicalSolid } from "react-icons/lia";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { SiPcgamingwiki } from "react-icons/si";
import { IoIosDesktop } from "react-icons/io";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";

const SideBarNav = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[246px] h-[340px]   shadow-2xl mr-3 select-none">
        <Nav
          link="/mobiles"
          category="მობილურები"
          icon={<PiDeviceMobileSpeakerThin size={20} />}
        />
        <Nav category="ტაბები" icon={<FiTablet size={20} />} />
        <Nav
          category="ლეპტოპები | IT"
          icon={<LiaLaptopMedicalSolid size={20} />}
        />
        <Nav
          category="აუდიო სისტემა"
          icon={<BsFillMusicPlayerFill size={20} />}
        />
        <Nav category="Gaming" icon={<SiPcgamingwiki size={20} />} />
        <Nav category="TV | მონიტორები" icon={<IoIosDesktop size={20} />} />
        <Nav category="ფოტო | ვიდეო" icon={<FaCameraRetro size={20} />} />
        <Nav category="სმარტ გაჯეტები" icon={<MdOutlineSmartToy size={20} />} />
      </div>
    </>
  );
};

export default SideBarNav;
