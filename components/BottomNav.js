import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

const BottomNav = () => {
  return (
    <div>
      {/* bottom nav */}
      <div className="flex items-center p-2 pl-1 space-x-2 text-sm text-white bg-amazon_blue-light sm:pl-6 sm:space-x-3">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Prime</p>
        <p className="hidden lg:inline-flex link">{`Today's Deals`}</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery </p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
      </div>
    </div>
  );
};

export default BottomNav;
