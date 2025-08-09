function openForm(productName) {
  const formContainer = document.getElementById("buyFormContainer");
  document.getElementById("productName").value = productName;

  // Show form with fade-in animation
  formContainer.style.display = "flex";
  setTimeout(() => {
    formContainer.classList.add("show");
  }, 10);
}

function closeForm() {
  const formContainer = document.getElementById("buyFormContainer");

  // Remove fade-in and apply fade-out
  formContainer.classList.remove("show");

  // Wait for animation to finish before hiding
  setTimeout(() => {
    formContainer.style.display = "none";
  }, 300);
}

// Search function
function searchProducts() {
  const searchTerm = document.getElementById("searchBox").value.toLowerCase();
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    const productName = card.getAttribute("data-name").toLowerCase();
    card.style.display = productName.includes(searchTerm) ? "block" : "none";
  });
}


function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}
