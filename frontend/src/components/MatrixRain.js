import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let fontSize = 14;

    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~';

    let columns;
    let drops;

    const initCanvas = () => {

      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;

      columns = Math.floor(canvas.width / fontSize);

      drops = Array(columns).fill(1);

    };

    initCanvas();

    function draw() {

      ctx.fillStyle = 'rgba(5,5,5,0.05)';

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {

        const text =
          characters[Math.floor(Math.random() * characters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i]++;

      }

    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {

      initCanvas();

    };

    window.addEventListener('resize', handleResize);

    return () => {

      clearInterval(interval);

      window.removeEventListener('resize', handleResize);

    };

  }, []);

  return (

    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
      style={{ imageRendering: 'pixelated' }}
    />

  );

};

export default MatrixRain;