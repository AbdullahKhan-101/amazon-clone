import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductFeed = ({ products }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid grid-flow-row-dense mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 lg:-mt-52">
      {products
        .slice(0, 4)
        .map(({ title, id, price, description, category, image }) => (
          <Product
            key={id}
            price={price}
            title={title}
            id={id}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <img
        className="mx-auto sm:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="sm:col-span-2">
        {products
          .slice(4, 5)
          .map(({ title, id, price, description, category, image }) => (
            <Product
              key={id}
              price={price}
              title={title}
              id={id}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ title, id, price, description, category, image }) => (
          <Product
            key={id}
            price={price}
            title={title}
            id={id}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
