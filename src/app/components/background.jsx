// components/ParticleBackground.js
'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';

const background = () => {
  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size, position and color
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.1;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.background = `rgba(59, 130, 246, ${opacity})`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
      
      // Animate particles
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      return particle;
    }
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
    
    // Add more particles on click
    const handleClick = () => {
      for (let i = 0; i < 5; i++) {
        createParticle();
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div id="particles" className="fixed top-0 left-0 w-full h-full z-0"></div>
  );
};

export default background;