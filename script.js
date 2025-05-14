function openForm(productName) {
  // Setting the product name in the readonly input field
  document.getElementById("productName").value = productName;

  // Displaying the form
  document.getElementById("buyFormContainer").style.display = "block";
}

function closeForm() {
  // Hiding the form
  document.getElementById("buyFormContainer").style.display = "none";
}


// Search function
function searchProducts() {
  const searchTerm = document.getElementById("searchBox").value.toLowerCase();
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    const productName = card.getAttribute("data-name").toLowerCase();
    if (productName.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
