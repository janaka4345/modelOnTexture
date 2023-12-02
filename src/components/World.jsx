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
import { useThree } from "@react-three/fiber";
import { Car } from "./Car";
import { Scenes } from "./Scenes";

export default function World() {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <axesHelper args={[2]} />
      <color attach="background" args={["#000000"]} />

      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />

        <MeshPortalMaterial>
          <Scenes mainColor="#9ACD32">
            <Car scale={1} />
          </Scenes>
        </MeshPortalMaterial>
      </mesh>
    </>
  );
}
