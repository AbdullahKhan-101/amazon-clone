import Image from "next/image";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import BottomNav from "../components/BottomNav";
import { Footer } from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const stripePromise = loadStripe(process.env.stripe_public_key);

const ProductDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //Call the backend to create a checkout session...
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    //Redirect user/customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <BottomNav />
      <main className="mx-auto lg:flex max-w-screen-2xl ">
        {/* left */}
        <div className="flex-grow mt-2 shadow-sm sm:m-5">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div
            className="flex flex-col p-4 space-y-10 bg-white sm:ml-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <h1 className="pb-4 text-3xl font-semibold border-b">
              {items.length === 0
                ? "Your Amazon Basket is empty."
                : "Your Shopping Basket"}
            </h1>

            {items.map(
              (
                {
                  id,
                  title,
                  rating,
                  price,
                  description,
                  category,
                  image,
                  hasPrime,
                },
                i
              ) => (
                <CheckoutProduct
                  key={i}
                  id={id}
                  title={title}
                  rating={rating}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  hasPrime={hasPrime}
                />
              )
            )}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col p-10 bg-white shadow-md">
          {items.length > 0 && (
            <div className="">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
              <button
                onClick={createCheckoutSession}
                role="link"
                disabled={!session}
                className={`button mt-2 w-full ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 hover:from-gray-300 hover:to-gray-500 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
