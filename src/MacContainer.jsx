import { ScrollControls, useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MacContainer = () => {
  const model = useGLTF('./mac.glb');
  const tex = useTexture("./red.jpg");
  const meshes = useRef({});
  const data = useScroll(); // Call useScroll directly in the component body

  useEffect(() => {
    model.scene.traverse((e) => {
      meshes.current[e.name] = e; // Store the meshes in the useRef object
    });

    // Ensure that the mesh exists before trying to modify it
    if (meshes.current.screen) {
      meshes.current.screen.rotation.x = THREE.MathUtils.degToRad(180);
    }
    if (meshes.current.matte) {
      meshes.current.matte.material.map = tex; // Use `meshes.current.matte`
      meshes.current.matte.material.emissiveIntensity = 0; // Add emissiveIntensity property
      meshes.current.matte.material.metalness = 0;
      meshes.current.matte.material.roughness = 1;

    }
  }, [model, tex]);

  useFrame(() => {
    if (meshes.current.screen) {
      // Update the screen's rotation based on scroll
      meshes.current.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    }
  });

  return (
    <ScrollControls>
      <group position={[0, -10, 20]}>
        <primitive object={model.scene} />
      </group>
    </ScrollControls>
  );
};

export default MacContainer;
