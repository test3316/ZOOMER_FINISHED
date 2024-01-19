import { Link } from "react-router-dom";

Link;
const Nav = (props) => {
  return (
    <>
      <div className="flex items-center	 justify-start bg-white p-5  w-[246px] h-[43px] border-b-2 cursor-pointer">
        <div className="flex justify-center items-center mr-3">
          {props.icon}
        </div>
        <Link to={props.link} className="flex text-[12px] ">
          {props.category}
        </Link>
      </div>
    </>
  );
};

export default Nav;
