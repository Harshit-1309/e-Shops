import React from "react";
import Layout from "../component/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - eShops"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify bold-italic-text mt-2">
            "Welcome to <span className="eshops">e-Shops</span>, where passion
            meets innovation. We're dedicated to crafting different product
            category that redefine quality and style. Founded by{" "}
            <span className="fname">
              {" "}
              <a href="https://harshitranjansingh.netlify.app/" target="blank">
                Harshit Ranjan Singh
              </a>{" "}
            </span>{" "}
            , our journey began with a vision. Our products reflect this
            commitment, meticulously sourced and produced to exceed
            expectations. Each creation showcases our dedication to sustainable
            practices. With 1 years of industry excellence, we've earned
            costumers belief. Join our community of satisfied customers.
            Discover e-Shops's world of endless products and experience online
            shopping."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
