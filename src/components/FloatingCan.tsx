"use client";

import { forwardRef } from "react";
import { Group } from "three";
import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "@/components/SodaCan";

type FloatingCanProps = {
  flavour?: SodaCanProps["flavour"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: React.ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavour = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, -0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          floatIntensity={floatIntensity}
          rotationIntensity={rotationIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavour={flavour} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
