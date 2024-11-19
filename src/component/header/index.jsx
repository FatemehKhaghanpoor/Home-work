import React from "react";
import image1 from "../../asset/image/10.jpg";

const Header = () => {
  return (
    <div className="w-full  flex flex-col ">
      <span className="">
        <h2 className=" justify-self-center ml-28 text-lg font-extrabold p-1 mt-1 text-amber-50">
          {" "}
          Fatemeh Khaghanpoor
        </h2>
        <h4 className="justify-self-center ml-28 text-base font-normal  text-amber-50">
          Soft ware Engineer
        </h4>
      </span>
      <span>
        <img
          src={image1}
          alt=""
          className=" justify-self-center ml-28 w-28 h-28 rounded-full md:justify-self-start lg:justify-self-start"
        />
      </span>
    </div>
  );
};
export default Header;
