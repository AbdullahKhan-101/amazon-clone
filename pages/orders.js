import moment from "moment";
import { useSession } from "next-auth/react";
import React from "react";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import db from "../firebase";

const Orders = ({ orders }) => {
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <BottomNav />
      <main className="max-w-screen-lg p-2 mx-auto sm:p-10">
        <h1 className="pb-1 mb-2 text-2xl font-semibold border-b border-yellow-400 sm:text-3xl sm:pb-2">
          Your Orders
        </h1>
        {session ? (
          <h2>X Orders</h2>
        ) : (
          <h2>Please Sign in to see your orders</h2>
        )}
        <div className="mt-3 space-y-2 sm:mt-5 sm:space-y-4"></div>
      </main>
    </div>
  );
};

export default Orders;

// export async function getServerSideProps(context) {
//   const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//Get the user logged in credentials
// const session = await getSession(context)

// if (!session) {
//   return {
//     props: {},
//   };
// }

// Firebase db
// const stripeOrders = await db
//   .collection("users")
//   .doc(session.user.email)
//   .collection("orders")
//   .orderBy("timestamp", "desc")
//   .get();

// Stripe Orders
// const orders = await Promise.all(
//   stripeOrders.docs.map(async (order) => ({
//     id: order.id,
//     amount: order.data().amount,
//     amountShipping: order.data().amount_shipping,
//     images: order.data().images,
//     timestamp: moment(order.data().timestamp.toDate()).unix(),
//     items: (
//       await stripe.checkout.sessions.listLineItems(order.id, {
//         limit: 100,
//       })
//     ).data,
//   }))
// );
// return {
//   props: {
//     orders,
//   },
// };
//}
