import React from "react";

export const Tab = ({ children, icon_name, tab_name }) => {
  if (tab_name === 'revenue') {
    return (
      <div className={"w-1/4 bg-white h-max p-[0.8rem] rounded-[15px]"}>
        <div className="w-[100%]">{icon_name}</div>
        {children}
      </div>
    );
  } else if (tab_name === 'transactions') {
    return (
      <div className={"w-1/4 bg-white h-max p-[0.8rem] rounded-[15px]"}>
        <div className="w-[100%]">{icon_name}</div>
        {children}
      </div>
    );
  } else if (tab_name === 'likes') {
    return (
      <div className={"w-1/4 bg-white  h-max p-[0.8rem] rounded-[15px]"}>
        <div className="w-[100%]">{icon_name}</div>
        {children}
      </div>
    );
  } else if (tab_name === 'users') {
    return (
      <div className={"w-1/4 bg-white h-max p-[0.8rem] rounded-[15px]"}>
        <div className="w-[100%]">{icon_name}</div>
        {children}
      </div>
    );
  } else {
    return null; // Add a default case or handle the case when tab_name doesn't match any conditions
  }
};

export default Tab;
