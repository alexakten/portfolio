import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Cube() {
  // Ref for mounting the Three.js scene
  const mountRef = useRef(null);

  useEffect(() => {
    // Get current ref
    const currentRef = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer to the current ref
    currentRef.appendChild(renderer.domElement);

    // Cube setup
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhysicalMaterial({
      roughness: 1,
      transmission: 0,
      thickness: 0.5, // Add refraction!
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 10);
    scene.add(light);

    camera.position.z = 3;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
}
