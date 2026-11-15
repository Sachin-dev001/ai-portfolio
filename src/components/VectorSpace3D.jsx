import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCcw, Play, Pause, Sparkles } from 'lucide-react';

const EMBEDDING_NODES = [
  // Cluster 1: Agentic & Automation (Emerald)
  { id: '1', name: 'Playwright Stealth', cluster: 'Agentic Systems', color: 0x10b981, pos: [-3.2, 1.4, 1.2], vector: [0.89, 0.42, -0.15], metric: 'Zero detection' },
  { id: '2', name: 'HITL Telegram Bot', cluster: 'Agentic Systems', color: 0x10b981, pos: [-2.5, 2.1, -0.5], vector: [0.92, 0.38, -0.11], metric: 'Real-time Approval' },
  { id: '3', name: 'Recruiter Q&A Vault', cluster: 'Agentic Systems', color: 0x10b981, pos: [-3.8, 0.5, -1.2], vector: [0.85, 0.51, -0.19], metric: 'Long-term Memory' },
  { id: '4', name: 'Human Emulation Typing', cluster: 'Agentic Systems', color: 0x10b981, pos: [-1.8, 1.2, 2.0], vector: [0.79, 0.48, -0.22], metric: 'Jitter & Delays' },

  // Cluster 2: RAG & Vector Retrieval (Cyan)
  { id: '5', name: 'Qdrant Vector DB', cluster: 'RAG & Retrieval', color: 0x06b6d4, pos: [2.8, 1.6, 1.4], vector: [-0.12, 0.94, 0.31], metric: '5,000+ Vectors' },
  { id: '6', name: 'BAAI Cross-Encoder', cluster: 'RAG & Retrieval', color: 0x06b6d4, pos: [3.4, 0.8, -0.8], vector: [-0.09, 0.96, 0.28], metric: '+28% Precision' },
  { id: '7', name: 'Timestamp Chunking', cluster: 'RAG & Retrieval', color: 0x06b6d4, pos: [2.1, 2.4, -1.5], vector: [-0.15, 0.91, 0.35], metric: 'Sub-minute Sync' },
  { id: '8', name: 'Hybrid Sparse-Dense', cluster: 'RAG & Retrieval', color: 0x06b6d4, pos: [1.9, 0.6, 2.2], vector: [-0.18, 0.88, 0.41], metric: 'BM25 + Dense' },

  // Cluster 3: LLMOps & Evals (Violet)
  { id: '9', name: 'Ragas Benchmarking', cluster: 'LLMOps & Evals', color: 0xa855f7, pos: [0.2, -2.5, 2.2], vector: [0.35, -0.21, 0.91], metric: '200+ Scenarios' },
  { id: '10', name: 'DeepEval Faithfulness', cluster: 'LLMOps & Evals', color: 0xa855f7, pos: [-1.2, -2.8, 0.8], vector: [0.38, -0.18, 0.89], metric: '94% Faithfulness' },
  { id: '11', name: 'NeMo Safety Guardrails', cluster: 'LLMOps & Evals', color: 0xa855f7, pos: [1.1, -2.2, 1.2], vector: [0.41, -0.25, 0.87], metric: '-25% Hallucination' },
  { id: '12', name: 'Injection Defense Filter', cluster: 'LLMOps & Evals', color: 0xa855f7, pos: [-0.4, -3.2, -1.1], vector: [0.33, -0.29, 0.93], metric: '100% Mitigated' },

  // Cluster 4: Inference & Cloud (Amber)
  { id: '13', name: 'Gemini 2.5 Flash Async', cluster: 'Inference & Cloud', color: 0xf59e0b, pos: [-1.5, -0.2, -2.9], vector: [-0.75, -0.45, 0.12], metric: '<800ms TTFT' },
  { id: '14', name: 'Supabase RLS Multi-tenant', cluster: 'Inference & Cloud', color: 0xf59e0b, pos: [0.8, -0.6, -3.2], vector: [-0.71, -0.49, 0.18], metric: '100+ Sessions' },
  { id: '15', name: 'FastAPI Streaming', cluster: 'Inference & Cloud', color: 0xf59e0b, pos: [-0.2, 0.7, -3.4], vector: [-0.78, -0.41, 0.15], metric: 'SSE Pipeline' },
  { id: '16', name: '4-bit Quantization (AWQ)', cluster: 'Inference & Cloud', color: 0xf59e0b, pos: [1.8, -1.4, -2.4], vector: [-0.68, -0.52, 0.22], metric: 'Edge Optimized' },
];

export default function VectorSpace3D() {
  const mountRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isRotating, setIsRotating] = useState(true);
  const isRotatingRef = useRef(true);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0f, 0.08);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    currentMount.appendChild(renderer.domElement);

    // Subtle Ambient and Point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 2, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Root group for all objects
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Ambient background particle dust
    const dustCount = 180;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i++) {
      dustPositions[i] = (Math.random() - 0.5) * 16;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      color: 0x475569,
      size: 0.04,
      transparent: true,
      opacity: 0.45,
    });
    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    rootGroup.add(dustPoints);

    // Node Meshes
    const nodeMeshes = [];
    const sphereGeometry = new THREE.SphereGeometry(0.18, 24, 24);

    EMBEDDING_NODES.forEach((node) => {
      const material = new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.45,
        roughness: 0.2,
        metalness: 0.8,
      });

      const mesh = new THREE.Mesh(sphereGeometry, material);
      mesh.position.set(...node.pos);
      mesh.userData = node;

      // Outer glow wireframe halo
      const haloGeo = new THREE.SphereGeometry(0.26, 12, 12);
      const haloMat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      mesh.add(halo);

      rootGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Connecting Lines within clusters (Cosine Similarity representation)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x334155,
      transparent: true,
      opacity: 0.35,
    });

    for (let i = 0; i < EMBEDDING_NODES.length; i++) {
      for (let j = i + 1; j < EMBEDDING_NODES.length; j++) {
        const nodeA = EMBEDDING_NODES[i];
        const nodeB = EMBEDDING_NODES[j];

        // Connect if same cluster or close in distance
        if (nodeA.cluster === nodeB.cluster) {
          const points = [
            new THREE.Vector3(...nodeA.pos),
            new THREE.Vector3(...nodeB.pos)
          ];
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeo, lineMaterial);
          rootGroup.add(line);
        }
      }
    }

    // Raycaster for hover interactions
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 0.2;
    const mouse = new THREE.Vector2(-100, -100);

    const onPointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        setHoveredNode(hit.userData);
        renderer.domElement.style.cursor = 'pointer';
      } else {
        setHoveredNode(null);
        renderer.domElement.style.cursor = 'grab';
      }
    };

    // Smooth drag rotation
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (event) => {
      isDragging = true;
      prevMousePos = { x: event.clientX, y: event.clientY };
      renderer.domElement.style.cursor = 'grabbing';
    };

    const onMouseMove = (event) => {
      onPointerMove(event);
      if (!isDragging) return;

      const deltaX = event.clientX - prevMousePos.x;
      const deltaY = event.clientY - prevMousePos.y;

      rootGroup.rotation.y += deltaX * 0.006;
      rootGroup.rotation.x += deltaY * 0.006;

      prevMousePos = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointermove', onMouseMove);
    domElement.addEventListener('pointerdown', onMouseDown);
    window.addEventListener('pointerup', onMouseUp);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotatingRef.current && !isDragging) {
        rootGroup.rotation.y += delta * 0.25;
      }

      // Subtle pulse to hovered node or active filter
      nodeMeshes.forEach((mesh) => {
        const data = mesh.userData;
        if (hoveredNode && hoveredNode.id === data.id) {
          mesh.scale.set(1.45, 1.45, 1.45);
          mesh.material.emissiveIntensity = 1.0;
        } else {
          mesh.scale.set(1, 1, 1);
          mesh.material.emissiveIntensity = 0.45;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('pointermove', onMouseMove);
      domElement.removeEventListener('pointerdown', onMouseDown);
      window.removeEventListener('pointerup', onMouseUp);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
    };
  }, []);

  const clusters = ['All', 'Agentic Systems', 'RAG & Retrieval', 'LLMOps & Evals', 'Inference & Cloud'];

  return (
    <div className="relative w-full h-[480px] lg:h-[540px] rounded-2xl bg-gradient-to-b from-[#0e1017] to-[#090a0f] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between">
      {/* Top Banner / UI Pill */}
      <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono font-medium text-emerald-400">3D SEMANTIC VECTOR SPACE</span>
          <span className="text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400">Drag to orbit &bull; Hover nodes to inspect vectors</span>
        </div>

        {/* Rotate Toggle */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/60 backdrop-blur-md rounded-lg p-1">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded font-medium transition text-slate-300 hover:text-white hover:bg-slate-800"
            title={isRotating ? 'Pause auto-spin' : 'Resume auto-spin'}
          >
            {isRotating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isRotating ? 'Spinning' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Hover Information HUD */}
      {hoveredNode && (
        <div className="absolute bottom-16 left-4 right-4 sm:left-6 sm:w-80 pointer-events-none z-20 transition-all duration-200">
          <div className="p-3.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 backdrop-blur-xl shadow-xl text-left">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: `#${hoveredNode.color.toString(16).padStart(6, '0')}` }} />
                {hoveredNode.cluster}
              </span>
              <span className="text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 px-2 py-0.5 rounded-full">
                {hoveredNode.metric}
              </span>
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">{hoveredNode.name}</h4>
            <div className="text-[11px] font-mono text-slate-400 bg-slate-950/80 p-2 rounded border border-slate-800 flex items-center justify-between">
              <span>Embedding Coord:</span>
              <span className="text-emerald-400">[{hoveredNode.vector.join(', ')}]</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Clusters Legend */}
      <div className="absolute bottom-3 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none text-xs">
        <div className="pointer-events-auto flex items-center gap-3 overflow-x-auto py-1 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Agents</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> RAG & Retrieval</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Evals & Safety</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Inference</span>
        </div>
        <span className="hidden md:inline font-mono text-[10px] text-slate-500">Cosine Distance Topology</span>
      </div>
    </div>
  );
}
