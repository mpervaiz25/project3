// Google Map Initialization
function initMap() {
  const iitLocation = { lat: 41.8349, lng: -87.6270 }; // IIT Chicago coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: iitLocation,
  });






// JavaScript for the Image Slider

// Get all required elements
const sliderImages = document.querySelectorAll('.slider-image'); // All images
const prevButton = document.getElementById('prev'); // Previous button
const nextButton = document.getElementById('next'); // Next button

// Initialize the active image index
let currentIndex = 0;

// Function to show the active image
function updateSlider() {
  // Hide all images
  sliderImages.forEach((image, index) => {
    if (index === currentIndex) {
      image.classList.add('active'); // Show current image
      image.classList.remove('hidden');
    } else {
      image.classList.remove('active'); // Hide other images
      image.classList.add('hidden');
    }
  });
}

// Event listener for the 'Next' button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderImages.length; // Move to the next image (loop around)
  updateSlider();
});

// Event listener for the 'Previous' button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length; // Move to the previous image (loop around)
  updateSlider();
});

// Initial call to display the first image
updateSlider();