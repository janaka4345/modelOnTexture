export default function Sceness(params) {
  return (
    <>
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color={"yellowgreen"} />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh position={[2, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </>
  );
}
