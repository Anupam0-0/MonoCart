import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";


const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let tempProducts = products.slice();

    if(showSearch && search.length > 0) {
      tempProducts = tempProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      tempProducts = tempProducts.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      tempProducts = tempProducts.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(tempProducts);

  }

  const sortProducts = () => {

    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      default:
        applyFilter();
        break;
    }

  }

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);



  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10  border-t py-6 ">
      {/* products options */}
      <div className="min-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          {" "}
          FILTER
          <img
            className={`h-4 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Categories */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }  sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-900">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          }  sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-900">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/>{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/>{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/>{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

          {/* Right SIDE 💀*/}
          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <Title text1={'ALL'} text2={'COLLECTION'} />


              {/* Product sort */}
              <select onChange={(e) => setSortType(e.target.value)} className="border-[1px] rounded border-slate-300 text-xs md:text-sm px-1 py-2 my-3 md:px-2 lg:px-3 sm:scale-90 lg:scale-100" id="">
                <option value="relavant">Sort by: relavant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
                {/* <option value="rating">Rating</option> */}
              </select>

            </div>

            <div className="grid grid-cols-2 md:[grid-cols=3] lg:grid-cols-4 gap-4 gap-y-6">
              {
              filterProducts.map((item, index) =>(
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ) )
              }
            </div>



          </div>
    </div>
  );
};

export default Collection;