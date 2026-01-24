import { useEffect } from 'react';

function Stars() {
  useEffect(() => {
    // Generate random stars with varied animation durations
    const container = document.querySelector('.stars-container');
    if (!container) return;

    const starCount = 40;
    container.innerHTML = '';

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random positioning without clustering
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      // Different animation durations for each star (2s to 6s)
      const duration = Math.random() * 4 + 2;
      star.style.setProperty('--twinkle-duration', duration + 's');
      
      // Different animation delays for varied twinkling
      star.style.animationDelay = Math.random() * duration + 's';
      
      // Varied opacity
      star.style.opacity = Math.random() * 0.6 + 0.2;
      
      container.appendChild(star);
    }
  }, []);

  return <div className="stars-container"></div>;
}

export default Stars;
