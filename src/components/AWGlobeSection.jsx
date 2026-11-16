import React, { useState, useEffect, useRef } from 'react';

const PILL_STATES = [
  {
    left: 'gate · precision>+28%',
    bottom: 'recovered ✓',
    right: 'in-jaipur · global-remote',
  },
  {
    left: 'human approved ✋',
    bottom: '0 bot flags ✓',
    right: 'us-east · eu-west',
  },
  {
    left: 'qdrant.hnsw · <15ms',
    bottom: 'faithfulness · 0.96 ✓',
    right: '60fps sse · active',
  },
];

const NODES = [
  { label: 'Qdrant HNSW Cluster', color: '#9B5DE5', desc: 'Vector embeddings & hybrid rerank' },
  { label: 'Gemini 2.5 Flash', color: '#F59E0B', desc: 'Sub-800ms structured inference' },
  { label: 'Playwright Stealth', color: '#22C55E', desc: 'Anti-bot fingerprint mitigation' },
  { label: 'Telegram HITL Gate', color: '#FF5A4F', desc: 'Human-in-the-loop webhook gate' },
];

export default function AWGlobeSection() {
  const [cycleIndex, setCycleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeNode, setActiveNode] = useState(null);

  const stageRef = useRef(null);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const angleRef = useRef(0);

  // 3.2s Telemetry pill cycling with smooth fade
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCycleIndex((prev) => (prev + 1) % PILL_STATES.length);
        setIsFading(false);
      }, 250);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  // Continuous animation frame loop for idle rotation + momentum inertia damping
  useEffect(() => {
    let animId;

    const frame = () => {
      if (!isDraggingRef.current) {
        // Idle rotation
        angleRef.current = (angleRef.current + 0.25 + velocityRef.current) % 360;
        velocityRef.current *= 0.92;
      } else {
        angleRef.current = (angleRef.current + velocityRef.current) % 360;
        velocityRef.current *= 0.88;
      }

      setRotationAngle(angleRef.current);
      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer drag event handlers
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    try {
      if (stageRef.current && stageRef.current.setPointerCapture) {
        stageRef.current.setPointerCapture(e.pointerId);
      }
    } catch (_) {}
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velocityRef.current += dx * 0.12;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const currentPill = PILL_STATES[cycleIndex];

  return (
    <section id="everywhere" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background soft sketchbook grid decoration */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(var(--ink) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Interactive Draggable Sketchbook Globe */}
        <div className="flex flex-col items-center">
          
          <div 
            ref={stageRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="globe-stage globe-grab relative w-full max-w-[360px] sm:max-w-[420px] aspect-square flex items-center justify-center select-none touch-pan-y"
            aria-label="Interactive 3D Sketchbook Globe: Drag to spin"
          >
            {/* 1. Orbiting Teal Paper Plane Icon */}
            <div className="orbit-plane-fly" aria-hidden="true">
              <svg 
                viewBox="0 0 64 64" 
                className="w-full h-full filter drop-shadow-[2px_2px_0px_#1A1917]"
              >
                <path 
                  d="M4 30 L60 6 L40 58 L31 40 Z" 
                  fill="#2EC4B6" 
                  stroke="#1A1917" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M60 6 L31 40" 
                  stroke="#1A1917" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            {/* 2. Main SVG Globe & Orbit Rings */}
            <svg 
              viewBox="0 0 240 240" 
              className="w-full h-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="globeRadialGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6B93F6" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#6B93F6" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </radialGradient>
                <clipPath id="globeInnerClip">
                  <circle cx="120" cy="120" r="86" />
                </clipPath>
              </defs>

              {/* Outer Dashed Orbit Ring (Slow continuous spin) */}
              <circle 
                cx="120" 
                cy="120" 
                r="108" 
                fill="none" 
                stroke="#6E6A63" 
                strokeWidth="2" 
                strokeDasharray="6 7" 
                opacity="0.55" 
              />

              {/* Globe Base Sphere: White with blue radial glow and 2.5px solid ink border */}
              <circle 
                cx="120" 
                cy="120" 
                r="86" 
                fill="url(#globeRadialGlow)" 
                stroke="#1A1917" 
                strokeWidth="2.75" 
              />

              {/* Elements clipped inside the sphere */}
              <g clipPath="url(#globeInnerClip)">
                
                {/* Static Horizontal Latitude Rings in Periwinkle Blue */}
                <g stroke="#6B93F6" strokeWidth="1.75" fill="none" opacity="0.6">
                  <ellipse cx="120" cy="120" rx="86" ry="28" />
                  <ellipse cx="120" cy="120" rx="86" ry="58" />
                  <line x1="34" y1="120" x2="206" y2="120" />
                </g>

                {/* Rotating Longitudinal Meridians & 4 Colored Node Markers */}
                <g 
                  transform={`rotate(${rotationAngle.toFixed(2)} 120 120)`} 
                  stroke="#3a7bff" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.75"
                >
                  <ellipse cx="120" cy="120" rx="30" ry="86" />
                  <ellipse cx="120" cy="120" rx="60" ry="86" />
                  <line x1="120" y1="34" x2="120" y2="206" />

                  {/* 4 Colored Interactive Nodes */}
                  {/* Purple dot (#9B5DE5 — Qdrant HNSW Vector Cluster) */}
                  <g className="cursor-pointer" onClick={() => setActiveNode(NODES[0])}>
                    <circle cx="158" cy="148" r="6" fill="#9B5DE5" stroke="#1A1917" strokeWidth="1.5" />
                    <circle cx="158" cy="148" r="9" fill="none" stroke="#9B5DE5" strokeWidth="1" opacity="0.6" />
                  </g>

                  {/* Amber dot (#F59E0B — Gemini 2.5 Flash Inference Node) */}
                  <g className="cursor-pointer" onClick={() => setActiveNode(NODES[1])}>
                    <circle cx="110" cy="150" r="6" fill="#F59E0B" stroke="#1A1917" strokeWidth="1.5" />
                    <circle cx="110" cy="150" r="9" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.6" />
                  </g>

                  {/* Green dot (#22C55E — Playwright Stealth Runner) */}
                  <g className="cursor-pointer" onClick={() => setActiveNode(NODES[2])}>
                    <circle cx="152" cy="104" r="6" fill="#22C55E" stroke="#1A1917" strokeWidth="1.5" />
                    <circle cx="152" cy="104" r="9" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.6" />
                  </g>

                  {/* Coral dot (#FF5A4F — Telegram HITL Webhook Gate) */}
                  <g className="cursor-pointer" onClick={() => setActiveNode(NODES[3])}>
                    <circle cx="90" cy="86" r="6" fill="#FF5A4F" stroke="#1A1917" strokeWidth="1.5" />
                    <circle cx="90" cy="86" r="9" fill="none" stroke="#FF5A4F" strokeWidth="1" opacity="0.6" />
                  </g>
                </g>
              </g>

              {/* Sphere Outer Ink Stroke Overlay for Clean Bevel */}
              <circle 
                cx="120" 
                cy="120" 
                r="86" 
                fill="none" 
                stroke="#1A1917" 
                strokeWidth="2.75" 
              />
            </svg>

            {/* 3. Floating Monospace Status Pills (Cycles every 3.2s) */}
            {/* Pill 1: Left (-2deg tilt) */}
            <div 
              className={`absolute -left-1 sm:-left-5 top-[38%] -rotate-2 bg-white border-2 border-[#1A1917] rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-[3px_3px_0px_#1A1917] font-mono text-[11px] sm:text-[12.5px] font-bold text-[#1A1917] transition-all duration-300 z-30 whitespace-nowrap pointer-events-none ${
                isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {currentPill.left}
            </div>

            {/* Pill 2: Bottom (+1deg tilt) */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 -bottom-2 sm:-bottom-4 rotate-1 bg-white border-2 border-[#1A1917] rounded-xl px-2.5 py-1 sm:px-3.5 sm:py-1.5 shadow-[3px_3px_0px_#1A1917] font-mono text-[11px] sm:text-[12.5px] font-bold text-[#1A1917] transition-all duration-300 z-30 whitespace-nowrap pointer-events-none ${
                isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {currentPill.bottom}
            </div>

            {/* Pill 3: Right (+1.5deg tilt) */}
            <div 
              className={`absolute -right-1 sm:-right-6 top-[54%] rotate-[1.5deg] bg-white border-2 border-[#1A1917] rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-[3px_3px_0px_#1A1917] font-mono text-[11px] sm:text-[12.5px] font-bold text-[#1A1917] transition-all duration-300 z-30 whitespace-nowrap pointer-events-none ${
                isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {currentPill.right}
            </div>
          </div>

          {/* Interactive Drag Hint */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="font-hand text-base sm:text-lg text-[#544b3f] font-bold inline-flex items-center gap-1.5 bg-[#FAF6EF] px-3 py-1 rounded-full border border-[#1A1917]/20 shadow-sm">
              <span className="text-base">✋</span>
              <span>click & drag globe to rotate topology</span>
            </span>
          </div>

          {/* Node Active Tooltip if clicked */}
          {activeNode && (
            <div className="mt-3 p-2.5 bg-white border-2 border-[#1A1917] rounded-xl shadow-[3px_3px_0px_#1A1917] text-center max-w-xs animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-center gap-2 font-mono font-bold text-xs">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeNode.color }} />
                <span>{activeNode.label}</span>
              </div>
              <p className="font-sans text-xs text-[#544b3f] mt-1">{activeNode.desc}</p>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Portfolio Content & Hand-Drawn Bullets */}
        <div className="space-y-6">
          
          {/* Eyebrow: Teal handwritten script */}
          <div>
            <span className="font-hand text-2xl sm:text-3xl text-[#1fbfa4] font-bold tracking-wide">
              deployed & production-ready everywhere ✎
            </span>
          </div>

          {/* Bold Serif Heading */}
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1917] leading-[1.12] tracking-tight">
            Ships wherever <br className="hidden sm:inline" />your teams build.
          </h2>

          {/* Clean Sans Body Copy */}
          <p className="font-sans text-base sm:text-lg text-[#544b3f] leading-relaxed max-w-xl">
            Cloud-native & remote-ready by default. My RAG pipelines are containerized, my stealth agents are fault-tolerant, and my evaluation suites are deterministic — deployed on cloud microservices or inside your VPC.
          </p>

          {/* 3 Handwritten script bullet lines with right arrows (→) */}
          <ul className="space-y-3.5 pt-2 list-none p-0">
            <li className="font-hand text-xl sm:text-2xl text-[#1A1917] font-bold flex items-start gap-2.5">
              <span className="text-[#FF5A4F] select-none text-2xl">→</span>
              <span>videosage.rag · sub-800ms streaming across 5,000+ chunks</span>
            </li>
            <li className="font-hand text-xl sm:text-2xl text-[#1A1917] font-bold flex items-start gap-2.5">
              <span className="text-[#1fbfa4] select-none text-2xl">→</span>
              <span>autoapply.stealth · 50+/day runs routed to Telegram HITL</span>
            </li>
            <li className="font-hand text-xl sm:text-2xl text-[#1A1917] font-bold flex items-start gap-2.5">
              <span className="text-[#3a7bff] select-none text-2xl">→</span>
              <span>evals.triad · 92.4% precision verified on every commit</span>
            </li>
          </ul>

          {/* 4 Colored Topology Nodes Legend Cards */}
          <div className="pt-4 grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg">
            {NODES.map((node) => (
              <div 
                key={node.label}
                onClick={() => setActiveNode(node)}
                className="p-2 sm:p-2.5 bg-white border-2 border-[#1A1917] rounded-xl shadow-[2.5px_2.5px_0px_#1A1917] hover:shadow-[3.5px_3.5px_0px_#1A1917] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                <span 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: node.color }}
                />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-[#1A1917] truncate">
                  {node.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}