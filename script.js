// Global Variables & Initial Program Variables

const DEFAULT_COLOR = 'lightskyblue';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

// FUNCTIONS -----------------------------------------------------------------

// resets page background color
function init() {
    const all = document.querySelector('*');
    all.classList.remove('rainbow2');
}

function createDivContainer() {
    const divContainer = document.createElement('div');
    divContainer.style.display = 'flex';
    divContainer.style.justifyContent = 'center';

    return divContainer;
}

function createGrid(size) {
    const grid = createDivContainer();

    for (let i = 0; i < size; i++) {
        const row = createDivContainer();
        row.style.display = 'block';

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add("pixel");

            // edge cases, stronger outline on outside of grid
            if (j == 0)
                pixel.style.borderTopWidth = '2px';
            if (j == size - 1)
                pixel.style.borderBottomWidth = '2px';
            if (i == 0)
                pixel.style.borderLeftWidth = '2px';
            if (i == size - 1)
                pixel.style.borderRightWidth = '2px';

            row.appendChild(pixel);
        }
        grid.appendChild(row);
    }

    return grid;
}

function paintConfiguration(mode) {
    const gridItems = document.querySelectorAll('.pixel');

    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
        
        switch (mode) {
            case 'grey_scale':
                const randomColor = Math.floor((Math.random() * 11) + 1);
                newColor = greySelector(randomColor);
                e.target.style.backgroundColor = newColor;
                break;
            case 'random':
                const randomR = Math.floor(Math.random() * 256);
                const randomG = Math.floor(Math.random() * 256);
                const randomB = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = `rgba(${randomR}, ${randomG}, ${randomB}, 2)`;
                break;
            case 'rainbow':
                const randomColor2 = Math.floor((Math.random() * 11) + 1);
                newColor = rainbowSelector(randomColor2);
                e.target.style.backgroundColor = newColor;
                break;
            case 'eraser':
                e.target.style.backgroundColor = 'white';
                break;
            default:
                e.target.style.backgroundColor = currentColor;
                e.target.style.opacity = 1;
                break;
        }
        });
    });
}

function rainbowSelector(randomColor) {
    switch (randomColor) {
        case 1:
            return 'rgb(255, 0, 0)';
        case 2:
            return 'rgb(255, 154, 0)';
        case 3:
            return 'rgb(208, 222, 33)';
        case 4:
            return 'rgb(79, 220, 74)';
        case 5:
            return 'rgb(63, 218, 216)';
        case 6:
            return 'rgb(47, 201, 226)';
        case 7:
            return 'rgb(28, 127, 238)';
        case 8:
            return 'rgb(95, 21, 242)';
        case 9:
            return 'rgb(186, 12, 248)';
        case 10:
            return 'rgb(251, 7, 217)';
        case 11:
            return 'rgb(255, 0, 0)';
        default:
            return 'rgb(255, 0, 0)';
    }
}

function greySelector(randomColor) {
    switch (randomColor) {
        case 1:
            return 'rgb(113, 121, 126)';
        case 2:
            return 'rgb(54, 69, 79)';
        case 3:
            return 'rgb(169, 169, 169)';
        case 4:
            return 'rgb(128, 128, 128)';
        case 5:
            return 'rgb(129, 133, 137)';
        case 6:
            return 'rgb(211, 211, 211)';
        case 7:
            return 'rgb(128, 128, 128)';
        case 8:
            return 'rgb(229, 228, 226)';
        case 9:
            return 'rgb(192, 192, 192)';
        case 10:
            return 'rgb(132, 136, 132)';
        case 11:
            return 'black';
        default:
            return 'black';
    }
}

function updateCurrentColor(color) {
    currentColor = color;
}

function clearSketch() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {pixel.setAttribute('style', 'background-color: white')});
}

// RUN PROGRAM --------------------------------------------------------------

// Execuate on onload
const grid = document.querySelector('.grid');
grid.appendChild(createGrid(DEFAULT_SIZE));
paintConfiguration(DEFAULT_MODE);


// Configure buttons -------------

// color picker
const colorPicker = document.querySelector('.color_picker');
let picker = new Picker({
    parent: colorPicker,
    color: 'gold',
    onChange: function(color) {
                  colorPicker.style.backgroundColor = color.rgbaString;
                  currentColor = color.rgbaString;
                  init();
              },
});

// grey-scale colors
const greyButton = document.querySelector('.grey_scale');
greyButton.addEventListener('click', function() {
    init();
    
    currentMode = 'grey_scale';
    paintConfiguration(currentMode);
});

// randomized colors
const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', function() {
    init();
    
    currentMode = 'random';
    paintConfiguration(currentMode);
});

// randomized rainbow colors with special page background
const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', function() {
    const all = document.querySelector('*');
    all.classList.add('rainbow2');
    
    currentMode = 'rainbow';
    paintConfiguration(currentMode);
});

// eraser
const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', function() {
    currentMode = 'eraser';
    paintConfiguration(currentMode);
});

// clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
    clearSketch();
});