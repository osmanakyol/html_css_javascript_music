document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.scene');
    const card = document.querySelector('.card');

    // Add 3D hover effect
    scene.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = scene.getBoundingClientRect();
        const x = (e.clientX - left - width/2) / 25;
        const y = (e.clientY - top - height/2) / 25;
        
        card.style.transform = `
            rotateY(${x}deg) 
            rotateX(${-y}deg) 
            translateZ(50px)
        `;
    });

    scene.addEventListener('mouseleave', () => {
        card.style.transform = 'translateZ(0)';
    });

    // Add click effect to title
    const title = document.querySelector('.title');
    title.addEventListener('click', () => {
        title.style.animation = 'none';
        title.offsetHeight; // Trigger reflow
        title.style.animation = 'neonPulse 1s';
    });

    // Create dynamic neon glow effect
    const neonCircle = document.querySelector('.neon-circle');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        neonCircle.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(123, 0, 255, 0.3) 0%, transparent 70%)`;
    });
});