// Google Map Initialization
function initMap() {
  const iitLocation = { lat: 41.8349, lng: -87.6270 }; // IIT Chicago coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: iitLocation,
  });

  const marker = new google.maps.Marker({
    position: iitLocation,
    map: map,
    title: "Illinois Tech",
  });
  
  // Info window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>A Level 1 Arboretum Campus!</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
  
   // Reset button
  const resetButton = document.getElementById("resetMap");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      map.setCenter(iitLocation);
      map.setZoom(14);
    });
  }
}


// JavaScript for the Image Slider

function initImageSlider() {
  const sliderImages = document.querySelectorAll('.slider-image');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  const updateSlider = () => {
    sliderImages.forEach((image, index) => {
      if (index === currentIndex) {
        image.classList.add('active');
        image.classList.remove('hidden');
      } else {
        image.classList.remove('active');
        image.classList.add('hidden');
      }
    });
  };

  if (prevButton && nextButton && sliderImages.length > 0) {
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
      updateSlider();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % sliderImages.length;
      updateSlider();
    });

    updateSlider(); // Show the first image
  }
}

// Load Map when all resources are ready
window.addEventListener("load", () => {
  if (typeof google !== "undefined") {
    initMap();
  } else {
    console.error("Google Maps API failed to load.");
  }
});

// Load Slider after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initImageSlider();
});