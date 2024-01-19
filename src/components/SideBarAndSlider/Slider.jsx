import axios from "axios";
import { useEffect, useState } from "react";

axios;

const Slider = () => {
  const [image, getImage] = useState({});

  const zoomerBannerData = async () => {
    await axios
      .get("https://api.zoommer.ge/v1/Content/get-content-v2")
      .then((res) => {
        getImage(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    zoomerBannerData();
  }, [getImage]);

  return (
    <>
      <div className="flex bg-black w-[895px] h-[340px] justify-center content-center ml-3 rounded-xl"></div>
    </>
  );
};
export default Slider;
