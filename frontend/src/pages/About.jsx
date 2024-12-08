import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />

        <div className="flex flex-col -mt-4 justify-center gap-6 md:w-2/4 text-slate-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fuga
            consequatur dicta consequuntur asperiores, ipsa, iusto aliquam, quas
            recusandae hic cumque impedit. Optio cupiditate porro temporibus qui
            asperiores molestias, repellat repudiandae itaque perferendis
            placeat nostrum voluptatum. Architecto doloremque itaque
            exercitationem quidem facilis iure ad nemo vero explicabo eos
            blanditiis error doloribus deleniti, beatae eum? Rerum.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            blanditiis minima tempore. Deleniti nemo, unde nihil accusantium
            exercitationem error optio vero esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium, alias. Sunt.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio est
            adipisci in, quo dolorem aperiam eligendi possimus, aliquid vero
            laboriosam nisi accusantium veritatis officia vitae?
          </p>
        </div>
      </div>

      {/* ------------- WHY CHOOSE ------------- */}

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure they meet the
            highest standards of reliability and excellence.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free services, we make
            your shopping experience smooth and enjoyable.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to help with any queries
            or issues, ensuring your satisfaction every step of the way.
          </p>
        </div>
      </div>

      <NewsLetter />

    </div>
  );
};

export default About;
