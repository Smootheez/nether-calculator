function calculateCoordinates() {
    const mode = document.querySelector('.toggle-button.selected').dataset.mode;
    const xInput = parseInt(document.getElementById('xInput').value) || 0;
    const zInput = parseInt(document.getElementById('zInput').value) || 0;
    let xOutput = 0;
    let zOutput = 0;

    if (mode === 'overworldToNether') {
        xOutput = Math.floor(xInput / 8);
        zOutput = Math.floor(zInput / 8);
    } else {
        xOutput = xInput * 8;
        zOutput = zInput * 8;
    }

    document.getElementById('outputX').innerText = `X: ${xOutput}`;
    document.getElementById('outputZ').innerText = `Z: ${zOutput}`;
}

function switchMode(mode) {
    const overworldButton = document.getElementById('overworldButton');
    const netherButton = document.getElementById('netherButton');
    const xLabel = document.getElementById('xLabel');
    const zLabel = document.getElementById('zLabel');
    const outputLabel = document.getElementById('outputLabel');
    const slider = document.getElementById('slider');

    if (mode === 'overworldToNether') {
        overworldButton.classList.add('selected');
        overworldButton.classList.remove('unselected');
        netherButton.classList.add('unselected');
        netherButton.classList.remove('selected');
        xLabel.innerText = 'Overworld X';
        zLabel.innerText = 'Overworld Z';
        outputLabel.innerText = 'Nether Coordinates:';
        slider.style.transform = 'translateX(0)';
    } else {
        netherButton.classList.add('selected');
        netherButton.classList.remove('unselected');
        overworldButton.classList.add('unselected');
        overworldButton.classList.remove('selected');
        xLabel.innerText = 'Nether X';
        zLabel.innerText = 'Nether Z';
        outputLabel.innerText = 'Overworld Coordinates:';
        slider.style.transform = 'translateX(calc(100% + 2px))';
    }

    calculateCoordinates();
}