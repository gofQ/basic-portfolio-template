import React from "react";

const ReferenceItem = ({ data }) => {
  return (
    <div className="flex flex-col space-y-2 items-center ">
      <img src={data.referenceImg} className="w-36 rounded " />
      <p id="companyName" className="text-[1.25rem]">
        {data.referenceCompanyName}
      </p>
    </div>
  );
};

export default ReferenceItem;
