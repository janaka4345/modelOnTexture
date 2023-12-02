import {
  Environment,
  Float,
  Lightformer,
  MeshPortalMaterial,
  OrbitControls,
  // RenderCubeTexture,
  RenderTexture,
  Sphere,
} from "@react-three/drei";
import Lights from "./Lights";
import { useThree } from "@react-three/fiber";
import { Car } from "./Car";
import { Scenes } from "./Scenes";
import { sceness } from "./data";

export default function World() {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#000000"]} />

      {sceness.map((scene, index) => (
        <mesh
          key={scene.name}
          position={[index * viewport.width + index * 2, 0, 0]}
        >
          <mesh>
            <planeGeometry args={[viewport.width, viewport.height]} />

            <meshBasicMaterial toneMapped={false}>
              <RenderTexture attach="map">
                <Scenes mainColor={scene.mainColor}>
                  <Car scale={1} />
                </Scenes>
              </RenderTexture>
            </meshBasicMaterial>
          </mesh>
        </mesh>
      ))}
    </>
  );
}
