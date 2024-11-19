import React from "react";
import PhoneCallbackTwoToneIcon from "@mui/icons-material/PhoneCallbackTwoTone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const SideBar = () => {
  return (
    <div className="p-4">
      <div>
        <h3 className="text-lg font-semibold text-red-950 border-b-4 border-orange-900 ">
          {" "}
          My Contact
        </h3>
        <div className="p-6">
          <div className="flex flex-row gap-4">
            <PhoneCallbackTwoToneIcon />
            <h3 className="text-lg">call me</h3>
          </div>
          <div className="flex flex-row gap-4">
            <AssignmentIcon />
            <h3 className="text-lg">Assignment</h3>
          </div>
          <div className="flex flex-row gap-4">
            <AttachEmailIcon />
            <h3 className="text-lg">AttachEmail</h3>
          </div>
          <div className="flex flex-row gap-4">
            <LaptopChromebookIcon />
            <h3 className="text-lg">LaptopChrome</h3>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-red-950 border-b-4 border-orange-900 ">
          {" "}
          Skills
        </h3>
        <div className="p-6">
          <div className="flex flex-row gap-4">
            <AccountBoxIcon />
            <h3 className="text-lg">call me</h3>
          </div>
          <div className="flex flex-row gap-4">
            <LaptopChromebookIcon />
            <h3 className="text-lg">laptop</h3>
          </div>
          <div className="flex flex-row gap-4">
            <AssignmentIcon />
            <h3 className="text-lg">Assignment</h3>
          </div>
          <div className="flex flex-row gap-4">
            <PhoneCallbackTwoToneIcon />
            <h3 className="text-lg">PhoneCallback</h3>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-red-950 border-b-4 border-orange-900 ">
            {" "}
            Education Back ground
          </h3>
          <div className="p-6">
            <p>2021</p>
            <p>
              {" "}
              <a href="www.google.com" className="text-sky-700">
                M.n(Information)Lorem ipsum dolor sit .
              </a>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <p>2021</p>
            <p>
              {" "}
              <a href="www.google.com" className="text-sky-700">
                M.n(Information)Lorem ipsum dolor sit .
              </a>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p>2021</p>
            <p>
              {" "}
              <a href="www.google.com" className="text-sky-700">
                M.n(Information)Lorem ipsum dolor sit .
              </a>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
