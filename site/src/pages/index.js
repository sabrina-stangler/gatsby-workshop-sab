import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import sketchnoting from "../images/taking-notes.svg";

const Hero = () => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      Sabrina's Super Rad
      <br />
      Website All About Sabrina
    </h1>
    <br />
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4...">
        <img src={sketchnoting} alt="illustrated woman doodling" />
      </div>
      <div className="text-lg text-gray-700 col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2...">
        <h2 className="text-3xl font-bold text-gray-800 leading-8 tracking-tight">
          Join Me
        </h2>{" "}
        Welcome to this landing page that serves as a little snapshot of what
        I'm up to including content I make, work history, and things I find
        interesting.
      </div>
    </div>
    <br />
    <h2 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      Table of Contents
    </h2>
    // TODO
  </div>
);

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Hero />
    </Layout>
  );
}

export default IndexPage;
