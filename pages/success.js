import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import BottomNav from "../components/BottomNav";

const Success = () => {
  const router = useRouter();
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <BottomNav />
      <main className="max-w-[940px] mx-auto">
        <div className="flex flex-col p-2 px-4 pt-4 bg-white sm:p-10 ">
          <div className="flex items-center mb-5 space-x-2">
            <CheckCircleIcon className="h-10 text-green-500" />
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p className="max-w-[850px] ">{`Thank you for shopping with us. We'll send a confirmation once
                your item has shipped, if you would like to check the status of 
                your order's please press the link below `}</p>
          <button
            onClick={() => router.push("/")}
            className="button my-8 max-w-[850px]"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
