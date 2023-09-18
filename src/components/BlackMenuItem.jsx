import React from "react";
const BlackMenuItem = ({ content, icon_name }) => (
  <div className="flex items-center hover:font-[700] cursor-pointer text-lg gap-3">
    {icon_name}
    <div>{content}</div>
  </div>
);

export default BlackMenuItem;
