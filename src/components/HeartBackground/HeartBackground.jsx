import React, { useEffect } from 'react';
import './HeartBackground.css';

const HeartBackground = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';

      // Posição aleatória na tela
      heart.style.left = Math.random() * 100 + 'vw';

      // Cor aleatória de tom vermelho
      const reds = ['#e60000', '#e60000', '#e60000', '#e60000', '#e60000', '#e60000'];
      heart.style.backgroundColor = reds[Math.floor(Math.random() * reds.length)];
      heart.style.setProperty('--heart-color', heart.style.backgroundColor);

      // Duração da animação
      heart.style.animationDuration = (5 + Math.random() * 5) + 's';

      document.querySelector('.heart-container')?.appendChild(heart);

      // Remove após 10 segundos
      setTimeout(() => heart.remove(), 10000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <div className="heart-container" />;
};

export default HeartBackground;
