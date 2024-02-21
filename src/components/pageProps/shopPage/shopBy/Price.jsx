import { motion } from "framer-motion";
import { useState } from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const [price, setPrice] = useState(true);
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];
  return (
    <div className="cursor-pointer">
      <div onClick={() => setPrice(!price)} className="cursor-pointer">
        <NavTitle title="Shop by Price" icons={true} />
      </div>
      {price && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {priceList.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Price;
