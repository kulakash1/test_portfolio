// An array of visited places with city, country, images, description, and reviews
const visitedPlaces = [{
  city: "Agra",
  country: "India",
  images: ["Agra1.jpg", "Agra2.jpg", "Agra3.jpg"],
  description: "Agra is a historic city in northern India famous for the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
  reviews: [
      "One of the most beautiful cities I've ever visited!",
      "The Taj Mahal was marbelous beauty of Love.",
      "The food was amazing, especially the Kachoris and Bhalla."
  ]
},
{
  city: "Manali",
  country: "India",
  images: ["Manali1.jpg", "Manali2.jpg", "Manali3.jpg"],
  description: "Manali is a picturesque hill station located in the Indian state of Himachal Pradesh, known for its stunning landscapes, snow-capped mountains, and adventurous activities.",
  reviews: [
      "Scenic landscapes and breathtaking mountain views.",
      "The local dish 'Siddu' was mouth-watering.",
      "Serene temples and cultural experiences"
  ]
},
// Add more visited places as needed
];

// Function to dynamically generate the list of visited places in the HTML
function generateTravelDiary() {
const travelDiarySection = document.getElementById("travel-diary");

visitedPlaces.forEach(place => {
  const placeCard = document.createElement("div");
  placeCard.classList.add("place-card");

  

  const placeInfo = document.createElement("div");
  placeInfo.classList.add("place-info");
  const placeName = document.createElement("h2");
  placeName.textContent = `${place.city}, ${place.country}`;

  placeInfo.appendChild(placeName);

  const placeDescription = document.createElement("p");
  placeDescription.textContent = place.description;

  
  placeInfo.appendChild(placeDescription);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  
  // Loop through images array and create image elements
  place.images.forEach(imageUrl => {
      let City = place.city;
      const img = document.createElement("img");
      img.src = "/Travel Diary/Travel Pics/"+City +"/"+imageUrl;
      console.log(City);
      img.alt = `${place.city}, ${place.country}`;
      imgContainer.appendChild(img);
  });

  
  
  const reviewsList = document.createElement("ul");
  reviewsList.classList.add("reviews");
  place.reviews.forEach(review => {
      const reviewItem = document.createElement("li");
      reviewItem.textContent = review;
      reviewsList.appendChild(reviewItem);
  });

  placeCard.appendChild(placeInfo);
  placeCard.appendChild(imgContainer);
  
  placeCard.appendChild(reviewsList);

  travelDiarySection.appendChild(placeCard);
});
}

// Call the function to generate the travel diary when the page loads
generateTravelDiary();