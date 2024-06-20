import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-3/12 text-center my-8">
      <p className="text-yellow-600 pb-2">-----{subHeading}----</p>
      <h3 className="text-4xl uppercase font-semibold  border-y-4 py-6">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
