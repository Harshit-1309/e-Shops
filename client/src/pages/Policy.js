import React from "react";
import Layout from "../component/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.svg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <ul>
            <li>
              Personal Information Collection:{" "}
              <ul className="custom-bullet-style">
                {" "}
                <li>
                  We collect personal information like name, email, shipping
                  address, and payment details during the checkout process.
                </li>
              </ul>
            </li>
            <li>
              Security Measures:{" "}
              <ul className="custom-bullet-style">
                {" "}
                <li>
                  Secure Socket Layer (SSL) encryption is used to secure data
                  transmission during checkout.
                </li>
              </ul>
            </li>
            <li>
              Third-Party Partners:{" "}
              <ul className="custom-bullet-style">
                {" "}
                <li>
                  We share necessary customer information with trusted third
                  parties, such as payment processors and shipping carriers, to
                  facilitate order processing and delivery.
                </li>
              </ul>
            </li>
            <li>
              Cookies and Tracking:{" "}
              <ul className="custom-bullet-style">
                <li>
                  Our website uses cookies and similar technologies to enhance
                  user experience, analyze traffic, and personalize content.
                </li>
                <li>
                  You can manage cookie preferences through your browser
                  settings.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
