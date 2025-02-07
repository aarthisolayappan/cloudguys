// Function to place images along the vertical line
function positionImagesOnLine(imageCount) {
    const lineStartY = 14; // top percentage where the line starts
    const lineEndY = 74;   // bottom percentage where the line ends
    const lineX = 47.9;      // fixed X position for images on the line

    const step = (lineEndY - lineStartY) / (imageCount - 1); // Calculate the step between each image

    // Position each image along the line using the step
    for (let i = 0; i < imageCount; i++) {
        const image = document.getElementById(`image${i + 1}`);
        const topPosition = lineStartY + (step * i); // Calculate Y position on the line
        image.style.top = `${topPosition}%`;
        image.style.left = `${lineX}%`;
        image.style.display = 'block'; // Show the image
    }
}

// Function to scatter images randomly across the page
function scatterImagesRandomly(imageCount) {
    const pageWidth = window.innerWidth;  // Get page width
    const pageHeight = window.innerHeight; // Get page height

    for (let i = 0; i < imageCount; i++) {
        const image = document.getElementById(`image${i + 9}`); // Start from image6 onward
        const randomX = Math.random() * (pageWidth - 50);  // Generate random X position
        const randomY = Math.random() * (pageHeight - 50); // Generate random Y position

        image.style.left = `${randomX}px`;
        image.style.top = `${randomY}px`;
        image.style.display = 'block'; // Show the image
    }
}

// Show images when hovering over the page
document.body.addEventListener('mouseenter', function() {
    positionImagesOnLine(6);  // Position first 5 images on the line
    scatterImagesRandomly(10); // Scatter the next 10 images randomly
});



document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    console.log("Selected images:", images);  // This will help to see if the images are loaded

    images.forEach(image => {
        image.addEventListener('click', function() {
            // Ensure the image exists before accessing its properties
            const imageFilename = image.src.split('/').pop();
            window.location.href = `index.html?imageSrc=${encodeURIComponent(imageFilename)}`;
        });
    });
});
