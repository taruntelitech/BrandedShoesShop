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


document.getElementById("buyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    address: form.address.value,
  };

  // URL of your Google Apps Script Web App
  const scriptURL = "https://script.google.com/macros/s/AKfycbzUjXMGyJJnhBqJrxLN14Lf0DJk7tmLbJ6HUyMwVHrvFMWWyI3mBx6sTyAbi9UyFMeq/exec";

  // Send data to the Google Script Web App using Fetch API
  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams(data),  // Convert data to URL-encoded format
  })
  .then(res => res.json())
  .then(response => {
    alert("Order submitted successfully!");
    closeForm();
    form.reset();
  })
  .catch(error => {
    alert("Something went wrong!");
    console.error(error);
  });
});

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
