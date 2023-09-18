import React from "react";

import { BiBell } from "react-icons/bi";

const Navigation = () => (
  <nav className="flex flex-row items-center text-black">
    <h1 className="font-[700] text-2xl">Dashboard</h1>
    <div className="ml-auto flex flex-row justify-between items-center gap-4">
      <div>
        <BiBell className="h-5 w-5"/>
      </div>
      <div>
        <img src="/profile.png" className="rounded-full h-7 w-7" alt="pic" />
      </div>
    </div>
  </nav>
);

export default Navigation;
