import {
  Environment,
  Float,
  Lightformer,
  MeshPortalMaterial,
  OrbitControls,
  RenderTexture,
  Sphere,
} from "@react-three/drei";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import { Car } from "./Car";
import { BackSide } from "three";

export default function World() {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#000000"]} />
      <Physics>
        {/* <Lights /> */}
        <Environment blur={0.8} background>
          <Sphere scale={15}>
            <meshBasicMaterial color={"greenyellow"} side={BackSide} />
          </Sphere>
          <Lightformer
            position={[5, 0, -5]}
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="red" // (optional = white)
            scale={[3, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <Lightformer
            position={[-5, 0, 1]}
            form="circle" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="green" // (optional = white)
            scale={[2, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <Lightformer
            position={[0, 5, -2]}
            form="ring" // circle | ring | rect (optional, default = rect)
            intensity={0.5} // power level (optional = 1)
            color="orange" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[0, 0, 5]}
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="purple" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
        </Environment>
        {/* <mesh position={[0, 0, 2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
        </mesh> */}
        <Car scale={0.5} />
        {/* <mesh>
          <planeGeometry args={[viewport.width, viewport.height]} />

          <MeshPortalMaterial>
            <ambientLight intensity={0.5} />
            <OrbitControls />
            {/* <Float>
              <mesh position={[0, 0, 2]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="green" />
              </mesh>
            </Float> 
          </MeshPortalMaterial>
          {/* <meshBasicMaterial color="red" /> 
        </mesh> */}
      </Physics>
    </>
  );
}
