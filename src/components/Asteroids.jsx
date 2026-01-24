import { useEffect, useRef } from 'react';

function Asteroids() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSnowMelt = (x, y) => {
      const melt = document.createElement('div');
      melt.className = 'snowmelt';
      melt.style.left = x + 'px';
      melt.style.top = y + 'px';
      
      container.appendChild(melt);

      // Remove melt effect after animation completes
      setTimeout(() => {
        melt.remove();
      }, 600);
    };

    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      const size = Math.random() * 8 + 4; // 4-12px
      const leftPos = Math.random() * 100;
      const duration = Math.random() * 6 + 8; // 8-14s fall time for gentle snow
      const windDrift = Math.random() * 100 - 50; // -50 to 50px drift
      
      snowflake.className = 'snowflake';
      snowflake.style.left = leftPos + '%';
      snowflake.style.width = size + 'px';
      snowflake.style.height = size + 'px';
      snowflake.style.setProperty('--fall-duration', duration + 's');
      snowflake.style.setProperty('--wind-drift', windDrift + 'px');
      snowflake.style.setProperty('--rotate', Math.random() * 360 + 'deg');
      
      container.appendChild(snowflake);

      // Create melt effect when snowflake hits bottom
      setTimeout(() => {
        const rect = snowflake.getBoundingClientRect();
        createSnowMelt(rect.left, window.innerHeight - 10);
        snowflake.remove();
      }, duration * 1000);
    };

    // Create snowflake every 3 seconds
    const intervalId = setInterval(createSnowflake, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="asteroids-container" ref={containerRef}></div>;
}

export default Asteroids;
