import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-amazon_blue-light">
      <div className="grid max-w-6xl grid-cols-1 p-6 mx-auto space-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:p-8">
        <div className="mt-[5px] mb-5 ml-4 lg:mt-0 lg:ml-0">
          <h4 className="my-2 font-bold text-md">Get to Know Us</h4>
          <div className="space-y-2">
            <p className="text-sm opacity-80 link">Careers</p>
            <p className="text-sm opacity-80 link">Blog</p>
            <p className="text-sm opacity-80 link">About Amazon</p>
            <p className="text-sm opacity-80 link">Investor Relations</p>
            <p className="text-sm opacity-80 link">Amazon Devices</p>
            <p className="text-sm opacity-80 link">Amazon Service</p>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="my-2 font-bold text-md">Make Money with Us</h4>
          <div className="space-y-2">
            <p className="text-sm opacity-80 link">Sell products on Amazon</p>
            <p className="text-sm opacity-80 link">Sell on Amazon Business</p>
            <p className="text-sm opacity-80 link">Sell apps on Amazon</p>
            <p className="text-sm opacity-80 link">Become an Affiliate</p>
            <p className="text-sm opacity-80 link">Advertise Your Products</p>
            <p className="text-sm opacity-80 link">Self-Publish with Us</p>
            <p className="text-sm opacity-80 link">Host an Amazon Hub</p>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="my-2 font-bold text-md">Amazon Payment Products</h4>
          <div className="space-y-2">
            <p className="text-sm opacity-80 link">Amazon Business Card</p>
            <p className="text-sm opacity-80 link">Shop with Points</p>
            <p className="text-sm opacity-80 link">Reload Your Balance</p>
            <p className="text-sm opacity-80 link">Amazon Currency Converter</p>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="my-2 font-bold text-md">Let Us Help You</h4>
          <div className="space-y-2">
            <p className="text-sm opacity-80 link">Amazon and COVID-19</p>
            <p className="text-sm opacity-80 link">Your Account</p>
            <p className="text-sm opacity-80 link">Your Orders</p>
            <p className="text-sm opacity-80 link">Shipping Rates & Policies</p>
            <p className="text-sm opacity-80 link">Returns & Replacements</p>
            <p className="text-sm opacity-80 link">
              Manage Your Content and Devices
            </p>
            <p className="text-sm opacity-80 link">Amazon Assistant</p>
            <p className="text-sm opacity-80 link">Help</p>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-amazon_blue">
        <div className="flex max-w-2xl py-5 mx-auto space-x-3 text-sm">
          <div className="flex mx-auto space-x-3 md:mx-0">
            <p>Condition of use</p>
            <p>© 1996-2022</p>
          </div>
          <p className="hidden md:inline-flex">Privacy Notice</p>
          <p className="hidden md:inline-flex">Interest-Based Ads</p>
          <p className="hidden md:inline-flex">
            Amazon.com, Inc. or its affiliate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
