import React from "react";
import Header from "../Components/header";
import SideBarNav from "../Components/SideBarNav";
import Users from "../Components/Users";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-pink-700 to-secondary w-screen h-screen">
      <Header type={"d"} />
      <SideBarNav type={"d"} />
      <Users />
    </div>
  );
}
