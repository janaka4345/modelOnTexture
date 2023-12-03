import {
  Environment,
  Float,
  Html,
  Lightformer,
  MeshPortalMaterial,
  OrbitControls,
  // RenderCubeTexture,
  RenderTexture,
  Sphere,
} from "@react-three/drei";
import Lights from "./Lights";
import { useFrame, useThree } from "@react-three/fiber";
import Sceness from "./Sceness";
import { CameraControls } from "@react-three/drei";
import { useRef } from "react";

const DEG45 = Math.PI / 4;

export default function World2() {
  const cameraControlRef = useRef();
  const handleClick = () => {
    console.log("hu");
  };

  useFrame((state, delta) => {
    // console.log("ji");
    // Math.floor(state.clock.getElapsedTime()) % 5 === 0
    //   ? cameraControlRef.current?.setLookAt(
    //       (Math.random() - 0.5) * 10,
    //       (Math.random() - 0.5) * 10,
    //       (Math.random() - 0.5) * 10,
    //       (Math.random() - 0.5) * 10,
    //       (Math.random() - 0.5) * 10,
    //       (Math.random() - 0.5) * 10,
    //       true,
    //     )
    //   : null;
  });
  //   const viewport = useThree((state) => state.viewport);
  return (
    <>
      <OrbitControls makeDefault />
      <CameraControls ref={cameraControlRef} />
      <axesHelper args={[2]} />
      <color attach="background" args={["#ffffff"]} />
      <Lights />
      <Sceness />
      <Html onClick={handleClick}>
        <button onClick={handleClick}>hiiiiiiiiii</button>
      </Html>
    </>
  );
}
