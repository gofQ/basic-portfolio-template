import React from "react";
import Tabbar from "../components/Try/Tabbar";

const Try = () => {
  return (
    <div className="flex flex-row w-full h-screen font-mono">
      <Tabbar />
      <div className=" w-4/5 bg-slate-600 text-gray-200">
        <div className="w-5/6 m-auto mt-20" >
        <p className="text-[1.953rem] pb-2 text-gray-100">Name Surname</p>
        <p className="text-[1.25rem]  " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi iusto enim rerum, voluptate eaque fuga omnis dolore quisquam quis et veritatis voluptas! Quaerat minima delectus tenetur consequuntur iure? Sed!
        Tempore soluta sequi aspernatur. Sed, fugit porro eos dolore nemo doloribus velit non, tenetur accusantium dignissimos, voluptate ipsam cum beatae magni amet perspiciatis iusto consequuntur in. Odit labore tempora eos!</p>
        </div>
      </div>
    </div>
  );
};

export default Try;
