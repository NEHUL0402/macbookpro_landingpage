import React from "react";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line absolute flex gap-10 py-10 top-0 left-1/2 -translate-x-1/2">
        {["iphone", "ipad", "mac", "services", "airpods","iphone", "ipad", "mac", "services", "airpods"].map((e) => (
          <a href="" className="text-white font-[400]  text-sm capitalize">{e}</a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-36 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-6xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>oh so pro.</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <Canvas camera={{ fov: 15, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />

        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
