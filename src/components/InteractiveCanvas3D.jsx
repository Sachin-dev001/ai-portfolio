import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCcw, Sparkles, Activity, Layers, Compass, Sliders, Play, Pause } from 'lucide-react';

export default function InteractiveCanvas3D() {
  const mountRef = useRef(null);
  const [activeMode, setActiveMode] = useState('core'); // 'core' | 'nebula' | 'topology'
  const [fps, setFps] = useState(60);
  const [isRotating, setIsRotating] = useState(true);
  const isRotatingRef = useRef(true);
  const modeRef = useRef('core');

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    modeRef.current = activeMode;
  }, [activeMode]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060709, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Subtle Monochromatic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xe4e4e7, 2.2);
    topLight.position.set(5, 10, 7);
    scene.add(topLight);

    const rimLight = new THREE.PointLight(0xd4d4d8, 1.8, 20);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    // Master Container Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ==========================================
    // 1. NEURAL CORE (Kinetic Icosahedron & Rings)
    // ==========================================
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // Outer Geodesic Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.9,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Inner Solid Faceted Core
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x181920,
      roughness: 0.3,
      metalness: 0.8,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(3.0, 0.015, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xa1a1aa, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // Orbital Ring 2
    const ring2Geo = new THREE.TorusGeometry(3.4, 0.012, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x71717a, transparent: true, opacity: 0.25 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    coreGroup.add(ring2);

    // ==========================================
    // 2. LATENT NEBULA (500 Dynamic Particles)
    // ==========================================
    const particleCount = 550;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const originalPos = new Float32Array(particleCount * 3);
    const particleVel = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2.4 + Math.random() * 3.2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePos[i * 3] = x;
      particlePos[i * 3 + 1] = y;
      particlePos[i * 3 + 2] = z;

      originalPos[i * 3] = x;
      originalPos[i * 3 + 1] = y;
      originalPos[i * 3 + 2] = z;

      particleVel[i * 3] = (Math.random() - 0.5) * 0.005;
      particleVel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      particleVel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe4e4e7,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleSystem);

    // ==========================================
    // 3. SYNAPTIC TOPOLOGY NODES (Connected Graph)
    // ==========================================
    const topologyGroup = new THREE.Group();
    rootGroup.add(topologyGroup);

    const nodeCount = 18;
    const nodeCoords = [];
    const nodeSpheres = [];
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xe4e4e7 });
    const nodeGeo = new THREE.SphereGeometry(0.06, 12, 12);

    for (let i = 0; i < nodeCount; i++) {
      const vec = new THREE.Vector3(
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.5
      );
      nodeCoords.push(vec);
      const sphere = new THREE.Mesh(nodeGeo, nodeMat);
      sphere.position.copy(vec);
      topologyGroup.add(sphere);
      nodeSpheres.push(sphere);
    }

    // Connect close nodes with fine hairline lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x52525b, transparent: true, opacity: 0.35 });
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodeCoords[i].distanceTo(nodeCoords[j]) < 2.5) {
          const lGeo = new THREE.BufferGeometry().setFromPoints([nodeCoords[i], nodeCoords[j]]);
          const line = new THREE.Line(lGeo, lineMat);
          topologyGroup.add(line);
        }
      }
    }

    // ==========================================
    // Mouse Interaction & Physics
    // ==========================================
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isMouseDown = false;
    let prevMousePos = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      mouse.targetX = normX * 0.8;
      mouse.targetY = normY * 0.8;

      if (isMouseDown) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        rootGroup.rotation.y += deltaX * 0.008;
        rootGroup.rotation.x += deltaY * 0.008;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e) => {
      isMouseDown = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
      mount.style.cursor = 'grabbing';
    };

    const handlePointerUp = () => {
      isMouseDown = false;
      mount.style.cursor = 'grab';
    };

    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // ==========================================
    // Render Loop & Mode Switching
    // ==========================================
    let frameId;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastTime = performance.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // FPS Calculation
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      // Smooth mouse follow damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 0.9;
      camera.position.y = mouse.y * 0.9;
      camera.lookAt(0, 0, 0);

      // Auto rotation
      if (isRotatingRef.current && !isMouseDown) {
        rootGroup.rotation.y += delta * 0.15;
      }

      // Mode-specific animations
      const curMode = modeRef.current;

      if (curMode === 'core') {
        coreGroup.visible = true;
        particleSystem.visible = true;
        topologyGroup.visible = false;

        outerMesh.rotation.y += delta * 0.2;
        outerMesh.rotation.x += delta * 0.1;
        innerMesh.rotation.y -= delta * 0.35;
        ring1.rotation.z += delta * 0.25;
        ring2.rotation.z -= delta * 0.2;

        // Subtle vertex breathing on the core
        const scale = 1 + Math.sin(elapsed * 2) * 0.03;
        innerMesh.scale.set(scale, scale, scale);
      } else if (curMode === 'nebula') {
        coreGroup.visible = false;
        particleSystem.visible = true;
        topologyGroup.visible = false;

        // Dynamic fluid particle swirl
        const positions = particleGeo.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += particleVel[i * 3];
          positions[i * 3 + 1] += particleVel[i * 3 + 1];
          positions[i * 3 + 2] += particleVel[i * 3 + 2];

          // Gravitational pull back to radius
          const d = Math.sqrt(
            positions[i * 3] ** 2 +
            positions[i * 3 + 1] ** 2 +
            positions[i * 3 + 2] ** 2
          );
          if (d > 6.0 || d < 1.0) {
            positions[i * 3] = originalPos[i * 3];
            positions[i * 3 + 1] = originalPos[i * 3 + 1];
            positions[i * 3 + 2] = originalPos[i * 3 + 2];
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
      } else if (curMode === 'topology') {
        coreGroup.visible = false;
        particleSystem.visible = false;
        topologyGroup.visible = true;

        topologyGroup.rotation.y += delta * 0.18;
        topologyGroup.rotation.x = Math.sin(elapsed * 0.5) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      innerGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/[0.08] bg-[#07080a] shadow-2xl flex flex-col justify-between">
      {/* Top Floating Control Bar */}
      <div className="absolute top-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* HUD Label */}
        <div className="pointer-events-auto flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0d0e13]/90 border border-white/[0.1] backdrop-blur-xl text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-status" />
          <span className="font-mono text-zinc-200 tracking-wider text-[11px] font-semibold">WEBGL KINETIC SYSTEM</span>
          <span className="text-zinc-600">|</span>
          <span className="font-mono text-zinc-400 text-[11px]">{fps} FPS &bull; Low Draw Call</span>
        </div>

        {/* Mode Switcher */}
        <div className="pointer-events-auto flex items-center gap-1 p-1 rounded-xl bg-[#0d0e13]/90 border border-white/[0.1] backdrop-blur-xl">
          {[
            { id: 'core', label: 'Neural Core' },
            { id: 'nebula', label: 'Latent Space' },
            { id: 'topology', label: 'Graph Topology' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                activeMode === mode.id
                  ? 'bg-zinc-200 text-zinc-950 font-bold shadow'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Bottom Telemetry HUD */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 text-xs font-mono text-zinc-500 bg-[#0d0e13]/80 px-3 py-1.5 rounded-xl border border-white/[0.06] backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 text-zinc-400" />
          <span>DRAG TO ORBIT &bull; MOVE CURSOR TO DEFLECT PARTICLES</span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0d0e13]/80 border border-white/[0.08] backdrop-blur-md text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition"
          >
            {isRotating ? <Pause className="w-3.5 h-3.5 text-zinc-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isRotating ? 'Auto-Orbit: ON' : 'Auto-Orbit: PAUSED'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
