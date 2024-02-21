import { useLocation, useNavigate, useParams } from "react-router-dom";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";
const ShopSideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const decodedQueryString = decodeURIComponent(location.search);
  const param = useParams();
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const price = searchParams.get("price");
  const brand = searchParams.get("brand");

  const category = searchParams.get("category");
  // tạo hàm handleColor để xử lý khi người dùng click vào màu sắc thì sẽ thay đổi url nếu có màu sắc được chọn bị trùng với màu sắc hiện tại thì sẽ xóa màu sắc đó đi
  const handleColor = (e) => {
    if (colorValue === e) {
      searchParams.delete("color");
    } else {
      searchParams.set("color", e);
    }
    const queryString = searchParams.toString();
    navigate(`/shop?${queryString}`);
  };
  const handleBrand = (e) => {
    searchParams.set("brand", e);
    const queryString = searchParams.toString();
    navigate(`/shop?${queryString}`);
  };
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Color handleColor={handleColor} />
      <Brand handleBrand={handleBrand} />
      <Price />
    </div>
  );
};

export default ShopSideNav;
