import React from "react";
import BlackMenuItem from "./BlackMenuItem";

import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const BlackMenu = () => (
  <div className="black-menu flex flex-col gap-6">
    <BlackMenuItem
      content="Dashboard"
      icon_name={<AiOutlinePieChart />}
    />
    <BlackMenuItem
      content="Transactions"
      icon_name={<BsTags  />}
    />
    <BlackMenuItem
      content="Schedules"
      icon_name={<AiOutlinePieChart  />}
    />
    <BlackMenuItem
      content="Users"
      icon_name={<BiUserCircle />}
    />
    <BlackMenuItem
      content="Settings"
      icon_name={<AiOutlineSetting  />}
    />
  </div>
);

export default BlackMenu;
