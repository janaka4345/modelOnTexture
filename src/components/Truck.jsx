/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Truck(props) {
  const { nodes, materials } = useGLTF("./cybertruck_scene.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cactus.geometry}
        material={materials["White.002"]}
        position={[-1.905, 0.873, 4.162]}
        rotation={[0, 0.73, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cactus001.geometry}
        material={materials["White.002"]}
        position={[-3.119, 0.68, -1.735]}
        rotation={[0, -0.133, 0]}
        scale={0.75}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cactus002.geometry}
        material={materials["White.002"]}
        position={[2.529, 0.68, -4.117]}
        rotation={[0, -0.133, 0]}
        scale={0.75}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cactus005.geometry}
        material={materials["White.002"]}
        position={[5.716, 1.781, -1.894]}
        rotation={[0, 0.73, 0]}
        scale={1.975}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PUSHILIN_Kayak_Circle003.geometry}
        material={materials["White.002"]}
        position={[-4.656, 0.339, 1.834]}
        rotation={[0, 0.928, 0]}
      />
      <group position={[4.348, 0, 1.48]} rotation={[0, 0.289, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench.geometry}
          material={materials["White.002"]}
          position={[0, 0.961, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={48}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cover.geometry}
          material={materials["White.002"]}
          position={[0.064, 1.008, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
      <group scale={0.877}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.steer.geometry}
          material={materials["gray.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tires.geometry}
          material={materials["rubber.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003.geometry}
          material={materials["gray.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_1.geometry}
          material={materials["light_f.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_2.geometry}
          material={materials["body.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_3.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_4.geometry}
          material={materials["glassgray.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior003_5.geometry}
          material={materials.Light}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./cybertruck_scene.glb");
