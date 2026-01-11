// Category Filter
document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("categoryFilter");
    const products = document.querySelectorAll(".product-card");
  
    filter.addEventListener("change", () => {
      const value = filter.value;
  
      products.forEach(card => {
        const category = card.getAttribute("data-category");
  
        if (value === "all" || category === value) {
          card.style.display = "block";
          // card.style,width:3
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  