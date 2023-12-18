import { useState } from "react";
import DisplayData from "./DisplayData";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    color: "",
    category: "",
    price: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("productData", JSON.stringify(formData));
  };
  const handelOnclick = () => {
    setShowBanner(!showBanner);
  };
  return (
    <>
      <div className="w-[calc(100%-16rem)] h-[calc(100%-80px)] absolute top-[80px]   ml-[255px] ">
        <h1 className="ml-4 text-2xl font-semibold text-black pt-4 mt-4">
          Add Banner For Add-on Offers and other benefits
        </h1>
        <div className="w-full h-full border-[4px]  rounded-[25px] pt-4 mt-4">
          <button
            onClick={handelOnclick}
            type="button"
            className="text-black border-2 bg-white hover:bg-[#007bff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg hover:text-white text-sm px-5 py-2.5 me-2 mb-2  ml-4"
          >
            ADD BANNER
          </button>
        </div>
      </div>

      <div className=" w-[calc(100%-16rem)] h-[auto] absolute top-[250px] bg-trabsarent ml-[255px] gap-4 flex flex-col">
        <DisplayData />
      </div>

      {showBanner && (
        <div className="w-[80%] h-[400px] absolute top-[350px] bg-white m-[80px] flex flex-col justify-center items-center text-black">
          <div className="flex flex-row ">
            <label className="m-10  items-center text-center">
              PRODUCT NAME
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="PRODUCT NAME"
              className="w-[350px] h-[35px] my-10 rounded-md text-black"
            />
          </div>
          <div className="flex flex-row  ">
            <label className="mx-10  items-center text-center">COLOR</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="COLOR"
              className="w-[350px] h-[35px]  rounded-md text-black"
            />
          </div>
          <div className="flex flex-row  ">
            <label className="m-10  items-center text-center">CATEGORY</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="CATEGORY"
              className="w-[350px] h-[35px]  my-10 rounded-md text-black"
            />
          </div>
          <div className="flex flex-row  ">
            <label className="mx-10  items-center text-center">PRICE</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="PRICE"
              className="w-[350px] h-[35px] rounded-md text-black"
            />
          </div>
          <button
            className=" bg-[#007bff] my-4 w-[75px] h-[35px]  rounded-md hover:bg-[green]"
            type="submit"
            onClick={handelSubmitForm}
          >
            submit
          </button>
        </div>
      )}
    </>
  );
};

export default Banner;
