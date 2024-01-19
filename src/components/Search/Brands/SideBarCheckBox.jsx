import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FilterReducer } from "../../store/filterReducer";

const SideBarCheckBox = (props) => {
  const [brands, setBrands] = useState([]);
  const [checked, setChecked] = useState(Array(brands.length).fill(false));

  const { filterArray, setFilterArray } = useContext(FilterReducer);

  const fetchCategories = () => {
    axios
      .get("https://api.zoommer.ge/v1/Content/filter?catId=855")
      .then((res) => {
        const initialCheckedState = Array(
          res.data.specifications[0].values.length
        ).fill(false);
        setBrands(res.data.specifications[0].values);
        setChecked(initialCheckedState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const checkedBox = (index) => {
    const newCheckedStates = [...checked];
    newCheckedStates[index] = !newCheckedStates[index];
    setChecked(newCheckedStates);
  };

  return (
    <>
      <div className="flex flex-col mt-5 select-none">
        <div className="flex mt-2 select-none">
          <div className="mr-100">
            <p className="font-semibold ml-4 text-[13px]">{props.category}</p>
            {brands.map((e, index) => (
              <div key={index} className="flex mt-2 mr-5">
                <input
                  onChange={() => {
                    checkedBox(index);
                    checked[index] === false
                      ? console.log("checked")
                      : console.log("unchecked");
                    console.log(checked[index]) ? "checked" : "unchecked";
                  }}
                  type="checkbox"
                  checked={checked[index]}
                  className="ml-4 w-[24px] h-[24px] cursor-pointer"
                />
                <label
                  className="ml-2 cursor-pointer text-[14px]"
                  onClick={() => {
                    checkedBox(index);

                    checked[index] === false
                      ? setFilterArray([...filterArray, e.value])
                      : setFilterArray(
                          filterArray.filter((a) => a !== e.value)
                        );
                  }}
                >
                  {e.value}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarCheckBox;
