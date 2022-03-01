import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-50 bg-amazon_blue">
      {/* top nav */}
      <div className="flex items-center flex-grow py-[4px] sm:p-1 sm:py-2 ">
        <div
          onClick={() => router.push("/")}
          className=" flex items-center flex-grow mt-2 -ml-[11px] sm:flex-grow-0"
        >
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 sm:flex">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="flex items-center mr-1 space-x-4 text-sm text-white sm:space-x-6 sm:mx-6 whitespace-nowrap ">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-semibold sm:font-bold">Account and Lists</p>
          </div>
          <div onClick={() => router.push("/orders")} className="link">
            <p>Returns</p>
            <p className="font-semibold sm:font-bold">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/productDetails")}
            className="relative flex items-center link"
          >
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 font-bold text-black bg-yellow-400 rounded-full md:right-10 ">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-8 md:h-10" />
            <p className="hidden mt-2 font-semibold sm:font-bold md:inline">
              Basket
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
