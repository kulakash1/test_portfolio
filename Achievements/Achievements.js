// Event listener for clicking outside the modal to close it
window.onclick = function (event) {
  const modal = document.getElementById("certificateModal");
  if (event.target === modal) {
    modal.style.display = "none";
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = "";
  }
};





function showCertificateDetails(title, issueDate, description, duration, imageUrl, verificationLink) {
  const modal = document.getElementById("certificateModal");
  const fullImg = document.getElementById("fullCertificateImg"); // Corrected variable name here
  const modalContent = document.getElementById("modalContent");

  // Set modal content with certificate details
  // fullImg.src = imageUrl;

  // Create elements to display certificate details
  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const imageContainer = document.createElement("div"); // Container for the image
  const certificateImage = document.createElement("img");
  certificateImage.src = imageUrl;
  certificateImage.alt = title;
  imageContainer.appendChild(certificateImage);

  const issueDateElement = document.createElement("p");
  issueDateElement.innerHTML = `<strong>Issue Date:</strong> ${issueDate}`;

  const durationElement = document.createElement("p"); // Added duration element
  durationElement.innerHTML = `<strong>Duration:</strong> ${duration}`;


  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

  const verificationLinkElement = document.createElement("p");
  verificationLinkElement.innerHTML = `<strong>Verification Link:</strong> <a href="${verificationLink}" target="_blank">${verificationLink}</a>`;

  // Clear previous content and append new details
  // modalContent.innerHTML = ""; // Clear previous content
  modalContent.appendChild(imageContainer); // Append image container first
  modalContent.appendChild(titleElement);
  modalContent.appendChild(issueDateElement);
  modalContent.appendChild(descriptionElement);
  modalContent.appendChild(durationElement);
  modalContent.appendChild(verificationLinkElement);

  modal.style.display = "block";
}


function showCertificateDetailsType2(title, issueDate, description, certificationNo, imageUrl, issuedBy) {
  const modal = document.getElementById("certificateModal");
  const fullImg = document.getElementById("fullCertificateImg"); // Corrected variable name here
  const modalContent = document.getElementById("modalContent");

  // Set modal content with certificate details
  // fullImg.src = imageUrl;

  // Create elements to display certificate details
  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const imageContainer = document.createElement("div"); // Container for the image
  const certificateImage = document.createElement("img");
  certificateImage.src = imageUrl;
  certificateImage.alt = title;
  imageContainer.appendChild(certificateImage);

  const issueDateElement = document.createElement("p");
  issueDateElement.innerHTML = `<strong>Issue Date:</strong> ${issueDate}`;

  const certificationNoElement = document.createElement("p"); // Added certificationNo element
  certificationNoElement.innerHTML = `<strong>Certification No.:</strong> ${certificationNo}`;


  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

  const issuedByElement = document.createElement("p");
  issuedByElement.innerHTML = `<strong>Issued By:</strong> ${issuedBy}`;

  // Clear previous content and append new details
  // modalContent.innerHTML = ""; // Clear previous content
  modalContent.appendChild(imageContainer); // Append image container first
  modalContent.appendChild(titleElement);
  modalContent.appendChild(issueDateElement);
  modalContent.appendChild(descriptionElement);
  modalContent.appendChild(certificationNoElement);
  modalContent.appendChild(issuedByElement);

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "none";
  // Clear the image source to reset the modal when closing
  // const fullImg = document.getElementById("fullCertificateImg");
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = "";
  
  // modal.removeChild(modalContent);
  
  // fullImg.src = "";
}


// DOMContentLoaded event listener is not required here

// ... (Remaining JavaScript code remains the same) ...
