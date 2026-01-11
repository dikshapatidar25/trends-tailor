 document.getElementById("checkoutForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default form behavior
  
      // Optional: validate or save data here
  
      // Redirect to success page
      window.location.href = "success.html";
    });