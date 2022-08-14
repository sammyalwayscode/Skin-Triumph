import React from "react";
import Desktop from "./Desktop";
import MobileSide from "./MobileSide";
import TabletSide from "./TabletSide";

const SideBar = () => {
  return (
    <>
      <Desktop />
      <TabletSide />
      <MobileSide />
    </>
  );
};

export default SideBar;
