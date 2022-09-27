function makeGrid(number) {
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 0; i < number * number; i++) {
      let cell = document.createElement('div');
      cell.style.backgroundColor = ''
      grid.appendChild(cell).setAttribute('id', 'box');
    }
}

makeGrid(16)

const smallGrid = document.querySelector('#small');
const mediumGrid = document.querySelector('#medium');
const largeGrid = document.querySelector('#large');

mediumGrid.classList.add('activeGrid')

function gridSizeSmall() {
    grid.innerHTML = ''
    smallGrid.addEventListener('click', makeGrid(8))
}

function gridSizeMedium() {
    grid.innerHTML = ''
    mediumGrid.addEventListener('click', makeGrid(16))
}

function gridSizeLarge() {
    grid.innerHTML = ''
    largeGrid.addEventListener('click', makeGrid(24))
}

smallGrid.addEventListener('click', gridSizeSmall)
mediumGrid.addEventListener('click', gridSizeMedium)
largeGrid.addEventListener('click', gridSizeLarge)

const color = document.querySelector('#color');
const randomColor = document.querySelector('#random');
const erase = document.querySelector('#erase');
const clearGrid = document.querySelector('#clear');
const toggleGrid = document.querySelector('#togglegrid');

function blackColor() {
    grid.querySelectorAll('#box').forEach(box =>
        box.addEventListener('click', () => {
            box.style.backgroundColor = 'black'
    }));
}

black.addEventListener('click', blackColor)

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function rndColor() {
    grid.querySelectorAll('#box').forEach(box =>
        box.addEventListener('click', () => {
            box.style.backgroundColor = makeRandomColor()
        }));
}

randomColor.addEventListener('click', rndColor)

function erasor() {
    grid.querySelectorAll('#box').forEach(box =>
        box.addEventListener('click', () => {
            box.style.backgroundColor = ''
        }));
}

erase.addEventListener('click', erasor)

function resetGrid() {
    const target = '#box'
    grid.querySelectorAll('#box').forEach(box => {
        box.style.backgroundColor = ''
    })
}

clearGrid.addEventListener('click', resetGrid)

function gridToggle() {
    if (box.style.border === '1px solid black') {
        (grid.querySelectorAll('#box').forEach(box => {
        box.style.border = 'none'
    })) } else {(grid.querySelectorAll('#box').forEach(box => {
        box.style.border = '1px solid black'
    }))
}
}

toggleGrid.addEventListener('click', gridToggle)

black.addEventListener('click', () => {
    black.classList.add('activeColor')
    randomColor.classList.remove('activeColor')
    erase.classList.remove('activeColor')
})

randomColor.addEventListener('click', () => {
    randomColor.classList.add('activeColor')
    black.classList.remove('activeColor')
    erase.classList.remove('activeColor')
})

erase.addEventListener('click', () => {
    erase.classList.add('activeColor')
    black.classList.remove('activeColor')
    randomColor.classList.remove('activeColor')
})

smallGrid.addEventListener('click', () => {
    smallGrid.classList.add('activeGrid')
    mediumGrid.classList.remove('activeGrid')
    largeGrid.classList.remove('activeGrid')
    black.classList.remove('activeColor')
    randomColor.classList.remove('activeColor')
    erase.classList.remove('activeColor')
})

mediumGrid.addEventListener('click', () => {
    mediumGrid.classList.add('activeGrid')
    smallGrid.classList.remove('activeGrid')
    largeGrid.classList.remove('activeGrid')
    black.classList.remove('activeColor')
    randomColor.classList.remove('activeColor')
    erase.classList.remove('activeColor')
})

largeGrid.addEventListener('click', () => {
    largeGrid.classList.add('activeGrid')
    smallGrid.classList.remove('activeGrid')
    mediumGrid.classList.remove('activeGrid')
    black.classList.remove('activeColor')
    randomColor.classList.remove('activeColor')
    erase.classList.remove('activeColor')
})