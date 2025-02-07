const gridContainer = document.querySelector('.grid');
const resetBtn = document.getElementById('reset-btn');
const nextBtn = document.getElementById('next-btn');
const homeBtn = document.getElementById('home-btn');

// Flag to track if the user is clicking and dragging
let isMouseDown = false;

// Array to hold the URLs of the images
const images = [
  'IMG_4305.JPG', // Replace with actual image URLs
  'IMG_6005.JPG',
  'IMG_6217.JPG',
  'IMG_6218.JPG',
  'e0b602c7-f28d-4954-9f3e-7bd8afde2a38.JPG',
  'IMG_0749.JPG',
  'IMG_2278.JPG',
  'IMG_2723.JPG',
  'IMG_5663.JPG',
  'IMG_5909.JPG',
  'IMG_5914.JPG',
  'IMG_5992.JPG',
  'IMG_6212 2.JPG',
  'IMG_6351.HEIC',
  'IMG_7010.JPG',
  'IMG_9087.jpg',
];

let currentImageIndex = 0; // Track the current image index

// Function to create the grid
function createGrid() {
  const gridWidth = window.innerWidth;  // Get the viewport width
  const gridHeight = window.innerHeight;  // Get the viewport height
  const squareSize = 10;  // Size of each square in pixels

  // Calculate the number of columns and rows based on the screen size
  const columns = Math.floor(gridWidth / squareSize);
  const rows = Math.floor(gridHeight / squareSize);

  // Set the grid style for columns and rows dynamically
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, ${squareSize}px)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, ${squareSize}px)`;

  // Create the squares
  for (let i = 0; i < columns * rows; i++) {
    const square = document.createElement('div');
    // Change color on click and drag
    square.addEventListener('mousedown', () => {
      isMouseDown = true;
      square.style.backgroundColor = 'black';  // Change color on mousedown
    });

    // Change color when mouse is moved over a square (if dragging)
    square.addEventListener('mouseover', () => {
      if (isMouseDown) {
        square.style.backgroundColor = 'black';  // Change color while dragging
      }
    });

    // Stop the dragging behavior on mouseup
    square.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    gridContainer.appendChild(square);
  }
}

// Function to reset all grid squares
function resetGrid() {
  const squares = document.querySelectorAll('.grid div');
  squares.forEach(square => {
    square.style.backgroundColor = 'rgba(255, 255, 255, 0)';  // Reset to original color
  });
}

// Event listener for reset button
resetBtn.addEventListener('click', resetGrid);

// Function to change the background image and clear the grid
function nextImage() {
  // Clear the grid before changing the background image
  gridContainer.innerHTML = ''; // Remove all grid squares

  // Update the current image index
  currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
  const newImage = images[currentImageIndex];

  // Set the new background image
  document.querySelector('.container').style.backgroundImage = `url('${newImage}')`;

  // Recreate the grid with the new background
  createGrid();
}

// Event listener for "Next Spot" button
nextBtn.addEventListener('click', nextImage);

// Initialize the grid on page load
createGrid();

// Optional: Recalculate the grid if the window is resized
window.addEventListener('resize', () => {
  gridContainer.innerHTML = '';  // Clear the grid
  createGrid();  // Recreate the grid based on new size
});

homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'; // Redirect to home page
  });


// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const imageFilename = urlParams.get('imageSrc');

// If the image filename is found, display the image
if (imageFilename) {
    const imageElement = document.createElement('img');
    
    // Assuming all images are in the same folder (e.g., "images/") in index.html
    imageElement.src = imageFilename;
    imageElement.style.width = '300px';  // Adjust as needed
    imageElement.style.height = '300px'; // Adjust as needed

    // Append the image to the body or any other container you prefer
    document.body.appendChild(imageElement);
}
else {
  console.log('No image filename found in the URL.');
}