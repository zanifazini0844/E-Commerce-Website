import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img
          src="/images/images.jpg"
          alt="contactus"
          style={{
            width: "100%",
            marginLeft: "21px",
            marginTop: "60px",
          }}
        />

        </div>
        <div className="col-md-4">
          
          <p className="text-justify mt-2">
          What is Personal Information and why do we collect it?
Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect includes names, addresses, email addresses, phone and facsimile numbers.
This Personal Information is obtained in many ways including [interviews, correspondence, by telephone and facsimile, by email, via our website www.yourbusinessname.com.au, from your website, from media and publications, from other publicly available sources, from cookies- delete all that aren’t applicable] and from third parties. We don’t guarantee website links or policy of authorised third parties.
We collect your Personal Information for the primary purpose of provid

          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Contact;