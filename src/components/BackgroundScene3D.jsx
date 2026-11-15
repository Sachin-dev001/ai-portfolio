import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundScene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050608, 0.05);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // Dynamic 3D Particle Constellation / Wave Field
    const particleCount = 380;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 10;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      basePositions[i] = x;
      basePositions[i + 1] = y;
      basePositions[i + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Geometric connection lines between near neighbors
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x334155,
      transparent: true,
      opacity: 0.18,
    });

    const lineGeo = new THREE.BufferGeometry();
    const maxLinePoints = 600;
    const linePositions = new Float32Array(maxLinePoints * 3);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    scene.add(lines);

    // Mouse Tracking for dynamic fluid parallax
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let frameId;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      camera.position.x = mouse.x * 1.5;
      camera.position.y = mouse.y * 1.2;
      camera.lookAt(0, 0, 0);

      // Trigonometric wave displacement on particles
      const posArray = geometry.attributes.position.array;
      let lineIdx = 0;

      for (let i = 0; i < particleCount * 3; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];

        // Wave formula
        const wave = Math.sin(bx * 0.4 + elapsed * 0.8) * Math.cos(by * 0.4 + elapsed * 0.7) * 0.4;
        posArray[i + 1] = by + wave;

        // Subtle slow rotation
        posArray[i] = bx * Math.cos(delta * 0.05) - bz * Math.sin(delta * 0.05);
        posArray[i + 2] = bx * Math.sin(delta * 0.05) + bz * Math.cos(delta * 0.05);

        basePositions[i] = posArray[i];
        basePositions[i + 2] = posArray[i + 2];
      }
      geometry.attributes.position.needsUpdate = true;

      // Connect close points
      const linePosArray = lineGeo.attributes.position.array;
      for (let i = 0; i < 60; i++) {
        const idxA = i * 3;
        const ax = posArray[idxA];
        const ay = posArray[idxA + 1];
        const az = posArray[idxA + 2];

        for (let j = i + 1; j < 60; j++) {
          const idxB = j * 3;
          const bx = posArray[idxB];
          const by = posArray[idxB + 1];
          const bz = posArray[idxB + 2];

          const distSq = (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2;
          if (distSq < 12.0 && lineIdx < maxLinePoints * 3 - 6) {
            linePosArray[lineIdx++] = ax;
            linePosArray[lineIdx++] = ay;
            linePosArray[lineIdx++] = az;
            linePosArray[lineIdx++] = bx;
            linePosArray[lineIdx++] = by;
            linePosArray[lineIdx++] = bz;
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx / 3);
      lineGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      lineGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
}
