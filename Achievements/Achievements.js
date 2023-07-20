// Function to display a modal with certificate details when clicked
function showCertificateDetails(title, issueDate, description) {
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h2>${title}</h2>
    <p><strong>Issue Date:</strong> ${issueDate}</p>
    <p><strong>Description:</strong> ${description}</p>
  `;

  const modal = document.getElementById('certificateModal');
  modal.style.display = 'block';
}

// Function to close the modal when the close button is clicked
function closeModal() {
  const modal = document.getElementById('certificateModal');
  modal.style.display = 'none';
}
