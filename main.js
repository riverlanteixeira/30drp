document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const arScene = document.getElementById('ar-scene');

    const inventoryButton = document.getElementById('inventory-button');
    const inventoryOverlay = document.getElementById('inventory-overlay');
    const closeInventoryButton = document.getElementById('close-inventory');
    const cluesList = document.getElementById('clues-list');

    const victoryScreen = document.createElement('div');
    victoryScreen.id = 'victory-screen';
    victoryScreen.className = 'fullscreen-overlay';
    victoryScreen.style.display = 'none';
    victoryScreen.innerHTML = `
        <img src="assets/img/emblema.png" alt="Emblema da Polícia Civil de SC">
        <h1>Parabéns!</h1>
        <p>Você desvendou o mistério e prendeu o ladrão!</p>
        <button id="restart-button-victory">Jogar Novamente</button>
    `;
    document.body.appendChild(victoryScreen);

    const errorScreen = document.createElement('div');
    errorScreen.id = 'error-screen';
    errorScreen.className = 'fullscreen-overlay';
    errorScreen.style.display = 'none';
    errorScreen.innerHTML = `
        <img src="assets/img/emblema.png" alt="Emblema da Polícia Civil de SC">
        <h1>Ops!</h1>
        <p>Essa não foi a escolha certa. Revise suas pistas!</p>
        <button id="restart-button-error">Tentar Novamente</button>
    `;
    document.body.appendChild(errorScreen);

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
    // Ensure these are only for clues, not suspects
    const pistaPegada = document.getElementById('pista-pegada');
    if (pistaPegada) {
        pistaPegada.addEventListener('click', () => {
            addClue('👣 Pegada – Sapato nº 42');
            pistaPegada.setAttribute('material', 'opacity: 0.5; transparent: true;');
            pistaPegada.classList.remove('clickable');
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

    // Suspect accusation logic
    function handleAccusation(accusedSuspectId) {
        console.log(`Acusando: ${accusedSuspectId}`); // Debug log

        // Hide all AR markers to prevent interaction after accusation
        document.querySelectorAll('a-marker').forEach(marker => {
            marker.setAttribute('visible', false);
        });
        arScene.style.display = 'none'; // Hide AR scene
        inventoryButton.style.display = 'none'; // Hide inventory button

        if (accusedSuspectId === 'suspect-frankenstein') {
            victoryScreen.style.display = 'flex';
        } else {
            errorScreen.style.display = 'flex';
        }

        // Disable further clicks on suspects
        document.querySelectorAll('.suspect').forEach(suspect => {
            suspect.classList.remove('clickable');
        });
    }

    // Attach click listeners to suspects
    const suspectFrankenstein = document.getElementById('suspect-frankenstein');
    const suspectDracula = document.getElementById('suspect-dracula');
    const suspectLobisomem = document.getElementById('suspect-lobisomem');

    if (suspectFrankenstein) {
        suspectFrankenstein.addEventListener('click', () => handleAccusation('suspect-frankenstein'));
    }
    if (suspectDracula) {
        suspectDracula.addEventListener('click', () => handleAccusation('suspect-dracula'));
    }
    if (suspectLobisomem) {
        suspectLobisomem.addEventListener('click', () => handleAccusation('suspect-lobisomem'));
    }

    // Restart buttons
    const restartButtonVictory = document.getElementById('restart-button-victory');
    const restartButtonError = document.getElementById('restart-button-error');

    function restartGame() {
        collectedClues = [];
        victoryScreen.style.display = 'none';
        errorScreen.style.display = 'none';
        startScreen.style.display = 'flex'; // Go back to start screen
        inventoryButton.style.display = 'block'; // Show inventory button again

        // Reset AR elements opacity and clickability
        document.querySelectorAll('[id^="pista-"]').forEach(pista => {
            pista.setAttribute('material', 'opacity: 1; transparent: false;');
            pista.classList.add('clickable');
        });
        document.querySelectorAll('.suspect').forEach(suspect => {
            suspect.classList.add('clickable');
        });

        // Make all markers visible again
        document.querySelectorAll('a-marker').forEach(marker => {
            marker.setAttribute('visible', true);
        });
    }

    if (restartButtonVictory) {
        restartButtonVictory.addEventListener('click', restartGame);
    }
    if (restartButtonError) {
        restartButtonError.addEventListener('click', restartGame);
    }
});