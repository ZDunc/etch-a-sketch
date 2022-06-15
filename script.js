// FUNCTIONS -----------------------------------------------------------------

function createDivContainer() {
    const divContainer = document.createElement('div');
    divContainer.style.display = 'flex';
    divContainer.style.justifyContent = 'center';

    return divContainer;
}

function createDivGrid() {
    const grid = createDivContainer();

    for (let i = 0; i < 16; i++) {
        const row = createDivContainer();
        row.style.display = 'block';

        for (let j = 0; j < 16; j++) {
            const box = document.createElement('div');
            box.style.minHeight = '20px';
            box.style.minWidth = '20px;';
            box.style.padding = '10px';
            box.style.borderWidth = '0.5px';
            box.style.borderStyle = 'solid';
            box.style.borderColor = 'black';
            box.style.backgroundColor = 'white';

            if (j == 0)
                box.style.borderTopWidth = '2px';

            if (j == 15)
                box.style.borderBottomWidth = '2px';

            if (i == 0)
                box.style.borderLeftWidth = '2px';

            if (i == 15)
                box.style.borderRightWidth = '2px';

            row.appendChild(box);
        }
        grid.appendChild(row);
    }

    return grid;
}

// RUN PROGRAM --------------------------------------------------------------

const grid = document.querySelector('.grid');
grid.appendChild(createDivGrid());