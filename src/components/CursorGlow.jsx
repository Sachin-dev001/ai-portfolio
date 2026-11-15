import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    let targetX = -200;
    let targetY = -200;
    let curX = -200;
    let curY = -200;
    let animId;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('pointermove', handlePointerMove);

    const loop = () => {
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
      setPos({ x: curX, y: curY });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-10 transition-opacity duration-300"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '650px',
        height: '650px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.045) 0%, rgba(255, 255, 255, 0) 70%)',
      }}
    />
  );
}
