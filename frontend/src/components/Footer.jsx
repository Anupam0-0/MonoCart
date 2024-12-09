import React from "react";

const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-12 border-t mt-10 text-sm ">
      <div>
        <div>
          <h1 className="text-[2.5rem] font-mono w-36 ">
            MonoCart<span className="text-pink-500 -mx-1 text-6xl">.</span>{" "}
          </h1>
        </div>
        <p className="w-full py-5 md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a
          aliquid eos necessitatibus blanditiis dolorum cupiditate officiis
          exercitationem ipsum eaque!
        </p>
      </div>

        <div>
            <p className="text-xl font-medium my-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>

        <div>
            <p className="text-xl font-medium my-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 9876543321</li>
                <li>stombland@gmail.com</li>

            </ul>
        </div>

    </div>

        <hr />
        <p className="py-5 text-base text-center ">
        <span className="text-lg ">&#169; </span>
        Copyright 2024@ monocart.com - All Rights Reserved
        

        </p>

    </div>
  );
};

export default Footer;
