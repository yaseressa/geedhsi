import React from "react";

export default function SideBarNav({ type }) {
  return (
    <div className="z-10 h-[87vh] w-[15%] fixed bottom-0 left-0 bg-secondary shadow-xl shadow-secondary rounded-tr-3xl">
      {type == "d" && (
        <div>
          <ul className="text-white font-nunito flex flex-col justify-center translate-x-2 items-start uppercase pt-20">
            <li className="p-2 my-4 font-nunito bg-gradient-to-br from-pink-700 to-secondary translate-x-8 rounded-tl-xl rounded-bl-xl w-[80%]">
              {" "}
              <a href="">users</a>
            </li>
            <li className="p-4 m-4">
              {" "}
              <a href="">campaigns</a>
            </li>
            <li className="p-4 m-4">
              <a href="">p. campaigns</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
