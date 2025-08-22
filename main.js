document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const arScene = document.getElementById('ar-scene');

    const inventoryButton = document.getElementById('inventory-button');
    const inventoryOverlay = document.getElementById('inventory-overlay');
    const closeInventoryButton = document.getElementById('close-inventory');
    const cluesList = document.getElementById('clues-list');

    let collectedClues = [];

    // Handle Start Button
    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        arScene.style.display = 'block';
    });

    // Handle Inventory Button
    inventoryButton.addEventListener('click', () => {
        inventoryOverlay.style.display = 'flex';
        renderClues();
    });

    // Handle Close Inventory Button
    closeInventoryButton.addEventListener('click', () => {
        inventoryOverlay.style.display = 'none';
    });

    // Function to add clue to inventory
    function addClue(clueText) {
        if (!collectedClues.includes(clueText)) {
            collectedClues.push(clueText);
            console.log(`Pista coletada: ${clueText}`); // Placeholder for toast notification
        }
    }

    // Function to render clues in the inventory overlay
    function renderClues() {
        cluesList.innerHTML = ''; // Clear existing clues
        if (collectedClues.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Nenhuma pista coletada ainda.';
            cluesList.appendChild(li);
        } else {
            collectedClues.forEach(clue => {
                const li = document.createElement('li');
                li.textContent = clue;
                cluesList.appendChild(li);
            });
        }
    }

    // Click handlers for AR elements
    const pistaPegada = document.getElementById('pista-pegada');
    if (pistaPegada) {
        pistaPegada.addEventListener('click', () => {
            addClue('👣 Pegada – Sapato nº 42');
            pistaPegada.setAttribute('material', 'opacity: 0.5; transparent: true;'); // Make it semi-transparent after collection
            pistaPegada.classList.remove('clickable'); // Prevent further clicks
        });
    }

    const pistaTestemunha1 = document.getElementById('pista-testemunha1');
    if (pistaTestemunha1) {
        pistaTestemunha1.addEventListener('click', () => {
            const audio = new Audio('assets/audio/testemunha1.mp3');
            audio.play();
            addClue('📏 Altura: 1,90m');
            pistaTestemunha1.setAttribute('material', 'opacity: 0.5; transparent: true;');
            pistaTestemunha1.classList.remove('clickable');
        });
    }

    const pistaTestemunha2 = document.getElementById('pista-testemunha2');
    if (pistaTestemunha2) {
        pistaTestemunha2.addEventListener('click', () => {
            const audio = new Audio('assets/audio/testemunha2.mp3');
            audio.play();
            addClue('🧤 Luva');
            pistaTestemunha2.setAttribute('material', 'opacity: 0.5; transparent: true;');
            pistaTestemunha2.classList.remove('clickable');
        });
    }

    const pistaCamera = document.getElementById('pista-camera');
    if (pistaCamera) {
        pistaCamera.addEventListener('click', () => {
            // For the camera, we need to display the suspects image. This will be more complex.
            // For now, just add the clue.
            addClue('📹 Câmera de segurança – “Três suspeitos estiveram no local”');
            pistaCamera.setAttribute('material', 'opacity: 0.5; transparent: true;');
            pistaCamera.classList.remove('clickable');
        });
    }
});