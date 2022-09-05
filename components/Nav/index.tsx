import React from "react";
import { Text } from "@nextui-org/react";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <Text size={60}>漫画</Text>
        <Text size={35}>Dokumanga</Text>
      </div>
      <div className="options"></div>
      <div className="profile"></div>
    </div>
  );
}
