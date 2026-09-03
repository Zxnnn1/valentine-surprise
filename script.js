const revealBtn = document.getElementById('revealBtn');
const surprise = document.getElementById('surprise');
const card = document.querySelector('.card');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const restartBtn = document.getElementById('restartBtn');

// Reveal surprise
revealBtn.addEventListener('click', () => {
    card.style.display = 'none';
    surprise.classList.remove('hidden');
});

// Yes button
yesBtn.addEventListener('click', () => {
    surprise.classList.add('hidden');
    response.classList.remove('hidden');
    createConfetti();
});

// No button runs away
noBtn.addEventListener('click', () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Restart
restartBtn.addEventListener('click', () => {
    response.classList.add('hidden');
    card.style.display = 'block';
    surprise.classList.add('hidden');
});

// Create confetti effect
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ff6b6b', '#ff8787'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confettiFall ${2 + Math.random() * 1}s ease-in forwards`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Add confetti animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some initial stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
        starsContainer.appendChild(star);
    }
}

createStars();