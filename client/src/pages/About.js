import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <video
          src="/images/about.mp4"
          controls
          autoplay
          style={{  width: "90%", height: "66%", marginTop: "30px" }}
        >
        </video>


        </div>
        <div className="col-md-4">
          <h1>Our Philosophy</h1>
          <p className="text-justify mt-2">
            

We are committed to using only skin-friendly, research-backed ingredients that either directly benefit the health of the skin or support the integrity of our formulations. We never take into account whether something is synthetic or natural, instead choosing ingredients based on biocompatibility.
Skin Illustration

That’s why we focus on healthy pH levels, formulations the skin recognizes, small molecular structures that are easily absorbed, and effective active ingredients that also support and maintain the skin’s acid mantle. But what we leave out of our products is just as important as what we put into them, so you will never find what we call the Suspicious 6™ (essential oils, drying alcohols, silicones, chemical sunscreens, fragrances/dyes, SLS) in our line.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;