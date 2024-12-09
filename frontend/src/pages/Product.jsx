import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";


const Product = () => {
  const { productId } = useParams(); //productId is the name of the parameter in the route
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(false);
  const [isDesc, setIsDesc] = useState(true);

  const fetchProductData = async () => {
    await products.map((product) => {
      if (product._id === productId) {
        setProductData(product);

        setImage(product.image[0]);

        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);    
  
  return productData ? (
    <div>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-100 ">
        {/* PRODUCT DATA */}

        <div className="flex gap-12 flex-col sm:flex-row">
          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full ">
              {productData.image.map((img, index) => (
                <img
                  onClick={() => setImage(img)}
                  key={index}
                  src={img}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} className="w-full h-auto" alt="" />
            </div>
          </div>

          {/* product info */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className=" flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">{122}</p>
            </div>
            <p className="mt-5 text-3xl sm:text-2xl lg:text-3xl font-medium ">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8 ">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`px-4 py-2 bg-gray-100 ${
                      item === size ? `border-2 border-orange-600` : `border-0`
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 transition-all duration-50">
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5 " />
            <div className="text-[0.9rem] text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash On delivery available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* DESCRIPPTION AND REVIEW SECTION */}
        <div className="mt-20">
          <div className="flex">
            <button
              className="border px-5 py-3 text-sm"
              onClick={() => setIsDesc(true)}
            >
              Description
            </button>
            <button
              className="border px-5 py-3 text-sm"
              onClick={() => setIsDesc(false)}
            >
              Review (122)
            </button>
          </div>

          {isDesc ? (
            <div className="flex flex-col gap-4 border px-4 py-6 text-sm text-gray-500 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                optio delectus sit accusamus repudiandae, nesciunt accusantium
                nulla fuga nemo consequuntur illo pariatur quod laboriosam ex
                doloremque? Earum quas quidem dolore nostrum optio obcaecati
                odit perspiciatis, repellat quia! Aliquid assumenda nostrum
                tempora temporibus! Veritatis, culpa et. Ipsam molestiae nobis
                libero magnam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                consequatur enim veritatis labore ad libero! Neque quam rem
                inventore dolor non voluptate animi corrupti, doloremque nihil
                blanditiis perferendis provident eaque?
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 border px-4 py-6 text-sm text-gray-500 ">
              <div className="h-32 p-2 text-base">
                No Review found of this product...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Display related products */}
          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />






    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
