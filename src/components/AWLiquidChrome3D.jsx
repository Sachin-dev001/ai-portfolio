import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Compass, Sparkles, Play, Pause, Activity } from 'lucide-react';

export default function AWLiquidChrome3D() {
  const mountRef = useRef(null);
  const [activeShape, setActiveShape] = useState('sphere'); // 'sphere' | 'torus' | 'nebula'
  const [isRotating, setIsRotating] = useState(true);
  const [fps, setFps] = useState(60);

  const shapeRef = useRef('sphere');
  const isRotatingRef = useRef(true);

  useEffect(() => {
    shapeRef.current = activeShape;
  }, [activeShape]);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    mount.appendChild(renderer.domElement);

    // Dynamic Studio Lighting for Liquid Chrome
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.5);
    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const blueRimLight = new THREE.PointLight(0xe4e4e7, 3.0, 15);
    blueRimLight.position.set(-6, -4, 4);
    scene.add(blueRimLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Organic Liquid Chrome Sphere Geometry
    const sphereGeo = new THREE.IcosahedronGeometry(1.8, 32);
    const posAttr = sphereGeo.attributes.position;
    const origPositions = new Float32Array(posAttr.array);

    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5f5f7,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.9,
      wireframe: false,
    });

    const liquidSphereMesh = new THREE.Mesh(sphereGeo, chromeMaterial);
    rootGroup.add(liquidSphereMesh);

    // 2. Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32);
    const torusMesh = new THREE.Mesh(torusGeo, chromeMaterial);
    torusMesh.visible = false;
    rootGroup.add(torusMesh);

    // 3. Floating Micro-Particles around the core
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // Mouse Damping Physics
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isMouseDown = false;
    let prevMouse = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.targetX = normX;
      mouse.targetY = normY;

      if (isMouseDown) {
        const deltaX = e.clientX - prevMouse.x;
        const deltaY = e.clientY - prevMouse.y;
        rootGroup.rotation.y += deltaX * 0.008;
        rootGroup.rotation.x += deltaY * 0.008;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e) => {
      isMouseDown = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isMouseDown = false;
    };

    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let frameId;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastTime = performance.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // FPS Telemetry
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      // Smooth camera damping
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      camera.position.x = mouse.x * 0.8;
      camera.position.y = mouse.y * 0.8;
      camera.lookAt(0, 0, 0);

      // Auto rotation
      if (isRotatingRef.current && !isMouseDown) {
        rootGroup.rotation.y += delta * 0.2;
      }

      // Dynamic Liquid Vertex Ripple on Sphere
      const curShape = shapeRef.current;
      if (curShape === 'sphere') {
        liquidSphereMesh.visible = true;
        torusMesh.visible = false;
        particles.visible = true;

        const positions = sphereGeo.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const ox = origPositions[i];
          const oy = origPositions[i + 1];
          const oz = origPositions[i + 2];

          // Complex wave combination for organic liquid ripple
          const wave =
            Math.sin(ox * 2.2 + elapsed * 1.6) *
            Math.cos(oy * 2.2 + elapsed * 1.4) *
            Math.sin(oz * 2.2 + elapsed * 1.2) * 0.14;

          positions[i] = ox + (ox / 1.8) * wave;
          positions[i + 1] = oy + (oy / 1.8) * wave;
          positions[i + 2] = oz + (oz / 1.8) * wave;
        }
        sphereGeo.attributes.position.needsUpdate = true;
        sphereGeo.computeVertexNormals();
      } else if (curShape === 'torus') {
        liquidSphereMesh.visible = false;
        torusMesh.visible = true;
        particles.visible = true;

        torusMesh.rotation.x += delta * 0.4;
        torusMesh.rotation.y += delta * 0.3;
      } else {
        liquidSphereMesh.visible = false;
        torusMesh.visible = false;
        particles.visible = true;

        particles.rotation.y += delta * 0.35;
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
      sphereGeo.dispose();
      torusGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <section id="3d-core" className="py-28 bg-black relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-zinc-900/60 backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
              <span>3D LIQUID CHROME WEBGL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Organic Intelligence.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-sans leading-relaxed">
            Real-time liquid mercury shader with dynamic vertex displacement and studio light reflection. Inspired by high-end neo-brutalist cinema graphics.
          </p>
        </div>

        {/* 3D Canvas Box */}
        <div className="relative w-full h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/[0.1] bg-[#050608] shadow-2xl flex flex-col justify-between">
          {/* Top Floating Controls */}
          <div className="absolute top-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/[0.1] backdrop-blur-xl text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-live-dot" />
              <span>LIQUID CHROME SHADER</span>
              <span className="text-zinc-600">|</span>
              <span>{fps} FPS</span>
            </div>

            <div className="pointer-events-auto flex items-center gap-1 p-1 rounded-full bg-zinc-900/80 border border-white/[0.1] backdrop-blur-xl text-xs font-mono">
              {[
                { id: 'sphere', label: 'Liquid Mercury' },
                { id: 'torus', label: 'Kinetic Torus' },
                { id: 'nebula', label: 'Latent Particles' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveShape(s.id)}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeShape === s.id
                      ? 'bg-white text-black font-bold shadow'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* WebGL Canvas */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Bottom Telemetry Bar */}
          <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none text-xs font-mono text-zinc-500">
            <div className="pointer-events-auto flex items-center gap-2 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-zinc-400" />
              <span>DRAG TO ROTATE &bull; MOVE MOUSE FOR ANISOTROPIC LIGHTING</span>
            </div>

            <button
              onClick={() => setIsRotating(!isRotating)}
              className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/[0.08] backdrop-blur-md text-zinc-300 hover:text-white transition"
            >
              {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isRotating ? 'Orbit Active' : 'Orbit Paused'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
