import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useEffect } from "react";
import ReactCurrencyFormatter from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const CheckoutProduct = ({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
    };

    //Push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //Remove item from redux
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="my-2 text-xs sm:text-sm line-clamp-3">{description}</p>
        <ReactCurrencyFormatter quantity={price} currency="USD" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              loading="lazy"
              className="w-12"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
