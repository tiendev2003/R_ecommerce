import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import NavTitle from "./NavTitle";

const Brand = ({ handleBrand }) => {
  const [showBrands, setShowBrands] = useState(true);
  const [isClicked, setIsClicked] = useState(null);
  const brands = [
    {
      _id: 9006,
      title: "Apple",
    },
    {
      _id: 9007,
      title: "Ultron",
    },
    {
      _id: 9008,
      title: "Unknown",
    },
    {
      _id: 9009,
      title: "Shoppers Home",
    },
    {
      _id: 9010,
      title: "Hoichoi",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item,index) => (
              <li
                key={item._id ||index}
                onClick={() => {
                  handleBrand(item.title);
                  setIsClicked(item.title);
                }}
                className="border-b-[1px] cursor-pointer justify-between border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                {item.title}
                <p
                  className={`basis-1/4 float-right ${isClicked ===item.title ? "" : "hidden"}`}
                >
                  <HiOutlineCheckCircle color="blue" />
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
