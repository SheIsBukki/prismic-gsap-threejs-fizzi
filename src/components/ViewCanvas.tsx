"use client";

// import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";
// import { Perf } from "r3f-perf";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);

type Props = {};

export default function ViewCanvas({}: Props) {
  // const [isClient, setClient] = useState<boolean>(false);
  // useEffect(() => {
  //   setClient(true);
  // }, []);

  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ fov: 30 }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
        {/*<Perf />*/}
      </Canvas>
      <Loader />
    </>
  );
}

/*
For gradient, this rotation would be Math.PI *2 2Pi ∏
A mesh is a 3D object that needs two things: geometry and material. Geometry is like the html of a mesh, it determines the structure, while the material determines the look
*/
/*
<mesh rotation={[0.5, 0.5, 0]} position={[1, 0, 0]}>
  <boxGeometry />
  <meshStandardMaterial color={"hotpink"} />
</mesh>
*/

/*
<Float
  speed={1}
  floatIntensity={1}
  rotationIntensity={2}
  floatingRange={[-0.1, 0.1]}
>
  <SodaCan />
</Float>;
*/

/*
<ambientLight intensity={2} />
<spotLight intensity={3} position={[1, 1, 1]} />
*/
