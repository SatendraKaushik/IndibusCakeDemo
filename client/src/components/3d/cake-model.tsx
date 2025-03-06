import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function CakeModel() {
  const meshBottom = useRef<THREE.Mesh>(null!);
  const meshTop = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshBottom.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    meshTop.current.rotation.y = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      {/* Bottom layer */}
      <mesh ref={meshBottom} position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2, 2, 1, 32]} />
        <meshStandardMaterial 
          color="#FFB6C1"
          metalness={0.2}
          roughness={0.3}
        />
      </mesh>

      {/* Top layer */}
      <mesh ref={meshTop} position={[0, 0.8, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 1, 32]} />
        <meshStandardMaterial 
          color="#DAA520"
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}