import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineLabelImportant } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";

const ProductList = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <div className="w-full relative group flex justify-between   ">
      <div className="flex flex-row gap-5  ">
        <div className="relative">
          <Image className=" max-h-80  object-cover" imgSrc={props.img} />
          <div className="absolute top-2 left-2">
            {props.badge && <Badge text="New" />}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg text-primeColor font-bold">{props.productName}</h2>
          <div className="text-[#767676] text-[14px]">{props.color}</div>
          <p className="text-[#767676] text-[14px]">{props.price}</p>
          <div>{props.des}</div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between min-w-40">
        <ul className="flex flex-col   gap-2 font-titleFont px-2 ">
          <li className="text-[#767676] hover:text-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            Compare
            <span>
              <GiReturnArrow />
            </span>
          </li>
          <li className="text-[#767676] hover:text-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            Add to Cart
            <span>
              <FaShoppingCart />
            </span>
          </li>
          <li className="text-[#767676] hover:text-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            View Details
            <span className="text-lg">
              <MdOutlineLabelImportant />
            </span>
          </li>

          <li className="text-[#767676] hover:text-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
            Add to Wish List
            <span>
              <BsSuitHeartFill />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
