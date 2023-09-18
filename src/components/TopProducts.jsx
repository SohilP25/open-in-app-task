import React from "react";
import { PieChart } from "./Charts";

const TopProducts = () => (
  <div className="w-[49%] h-[100%] rounded-[15px] bg-white">
    <h3 className="ml-[3rem] mr-[2rem] mt-3 mb-[2rem] text-xl">Top Products</h3>
    <div className="flex flex-row p-[15px]">
      <div className="h-[6rem] w-[40%] ml-[35px]">
        <PieChart />
      </div>

      <div className="w-[50%] flex h-auto flex-col justify-around">
        <div className="pr-[3rem]">Basic tees</div>
        <div className="pr-[3rem]">Custom Short Pants</div>
        <div className="pr-[3rem]">Super Hoodies</div>
      </div>
    </div>
  </div>
);

export default TopProducts;
