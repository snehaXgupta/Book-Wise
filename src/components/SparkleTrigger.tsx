'use client';

import { useEffect } from 'react';

export default function SparkleTrigger() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Create sparkles
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-effect';
        
        // Random position around click
        const x = e.pageX + (Math.random() - 0.5) * 40;
        const y = e.pageY + (Math.random() - 0.5) * 40;
        
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.background = `hsla(${Math.random() * 360}, 100%, 80%, 0.8)`;
        
        document.body.appendChild(sparkle);
        
        // Clean up
        setTimeout(() => {
          sparkle.remove();
        }, 1000);
      }
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return null;
}
