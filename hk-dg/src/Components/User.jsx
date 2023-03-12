import React from "react";

export default function User({ name, src, email }) {
  return (
    <div className="w-[200px] py-5 flex flex-col justify-center items-center gap-3 m-4 bg-primary rounded-3xl">
      <div>
        <img src={src} alt="" width={70} />
      </div>
      <div>
        <h3 className="text-white font-nunito text-lg">{name}</h3>
      </div>
    </div>
  );
}
