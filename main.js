document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const arScene = document.getElementById('ar-scene');

    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        arScene.style.display = 'block';
        // Optionally, you might want to initialize AR.js here if it doesn't auto-start
        // For A-Frame AR.js, it usually starts automatically when the scene is displayed.
    });
});
