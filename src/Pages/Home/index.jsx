import React from "react";
import HomePart from "../../Components/Home-part";
import WoltOrder from "../../Components/WoltOrder";
import MobileAppPart from "../../Components/MobileApp";
import HomeBoxes from "../../Components/homeBoxes";

function Home() {
  return (
    <>
      <HomePart />
      <WoltOrder />
      <MobileAppPart />
      <HomeBoxes/>
    </>
  );
}

export default Home;
