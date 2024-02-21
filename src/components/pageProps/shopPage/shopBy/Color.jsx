import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { useLocation, useParams } from "react-router-dom";
import NavTitle from "./NavTitle";

const Color = ({ handleColor }) => {
  const [showColors, setShowColors] = useState(true);
  const [isClicked, setIsClicked] = useState(null);
  const location = useLocation();

  const decodedQueryString = decodeURIComponent(location.search);
  const param = useParams();
  const searchParams = new URLSearchParams(decodedQueryString);

  const colors = [
    {
      _id: 9001,
      title: "Green",
      base: "#22c55e",
    },
    {
      _id: 9002,
      title: "Gray",
      base: "#a3a3a3",
    },
    {
      _id: 9003,
      title: "Red",
      base: "#dc2626",
    },
    {
      _id: 9004,
      title: "Yellow",
      base: "#f59e0b",
    },
    {
      _id: 9005,
      title: "Blue",
      base: "#3b82f6",
    },
  ];
  useEffect(() => {
     setIsClicked(searchParams.get("color"));
  }, [searchParams]);
  return (
    <div>
      <div
        onClick={() => setShowColors(!showColors)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Color" icons={true} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.map((item, index) => (
              <li
                key={item._id}
                onClick={() => {
                  handleColor(item.title);
                  setIsClicked(index);
                 }}
                className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center   flex-row cursor-pointer gap-2  `}
              >
                <span
                  style={{ background: item.base }}
                  className={`w-3 h-3 bg-gray-500 rounded-full `}
                ></span>
                <p className="basis-3/4">{item.title}</p>
                <p
                  className={`basis-1/4 ${isClicked === item.title ? "" : "hidden"}`}
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

export default Color;
