
const WHATSAPP_NUMBER = "918910425745";

// CATEGORY LIST
const categories = [
  { name: "Earrings", image: "Earrings 1.png" },
  { name: "Bangles", image: "Bangles 1.png" },
  { name: "Pendants", image: "Pendants 1.webp" },
  { name: "Bracelets", image: "Bracelet 1.jpg" },
  { name: "Photo Frames", image: "Photo frame 1.jpg" },
  { name: "Wall Clocks", image: "Wall clock 1.jfif" },
  { name: "Preservation", image: "Preservation 1.webp" }
];

// PRODUCTS
const products = [
  { name: "Resin Earring 1", category: "Earrings", image: "Earrings 1.png" },
  { name: "Resin Earring 2", category: "Earrings", image: "Earrings 2.png" },
  { name: "Resin Earring 3", category: "Earrings", image: "Earrings 3.png" },
  { name: "Resin Earring 4", category: "Earrings", image: "Earrings 4.png" },
  { name: "Resin Earring 5", category: "Earrings", image: "Earrings 5.png" },
  { name: "Resin Earring 6", category: "Earrings", image: "Earrings 6.png" },
  { name: "Resin Earring 7", category: "Earrings", image: "Earrings 7.png" },
  { name: "Resin Earring 8", category: "Earrings", image: "Earrings 8.png" },
  { name: "Resin Bangle 1", category: "Bangles", image: "ResinBangles/Bangles 1.png" },
  { name: "Resin Bangle 2", category: "Bangles", image: "Bangles 2.avif" },
  { name: "Resin Bangle 3", category: "Bangles", image: "Bangles 3.jfif" },
  { name: "Resin Bangle 4", category: "Bangles", image: "Bangles 4.jpg" },
  { name: "Resin Bangle 5", category: "Bangles", image: "Bangles 5.jfif" },
  { name: "Resin Bangle 6", category: "Bangles", image: "Bangles 6.jfif" },
  { name: "Resin Bangle 7", category: "Bangles", image: "Bangles 7.jfif" },
  { name: "Resin Pendant 1", category: "Pendants", image: "Pendants 1.webp" },
  { name: "Resin Pendant 2", category: "Pendants", image: "Pendants 2.webp" },
  { name: "Resin Pendant 3", category: "Pendants", image: "Pendants 3.jpg" },
  { name: "Resin Pendant 4", category: "Pendants", image: "Pendants 4.jfif" },
  { name: "Resin Pendant 5", category: "Pendants", image: "Pendants 5.jpeg" },
  { name: "Resin Pendant 6", category: "Pendants", image: "Pendants 6.jpg" },
  { name: "Resin Bracelet 1", category: "Bracelets", image: "Bracelet 1.jpg" },
  { name: "Resin Bracelet 2", category: "Bracelets", image: "Bracelet 2.jpg" },
  { name: "Resin Bracelet 3", category: "Bracelets", image: "Bracelet 3.jpg" },
  { name: "Resin Bracelet 4", category: "Bracelets", image: "Bracelet 4.jfif" },
  { name: "Resin Bracelet 5", category: "Bracelets", image: "Bracelet 5.jfif" },
  { name: "Resin Bracelet 6", category: "Bracelets", image: "Bracelet 6.jfif" },
  { name: "Photo Frame 1", category: "Photo Frames", image: "Photo frame 1.jpg" },
  { name: "Photo Frame 2", category: "Photo Frames", image: "Photo frame 2.webp" },
  { name: "Photo Frame 3", category: "Photo Frames", image: "Photo frame 3.jfif" },
  { name: "Photo Frame 4", category: "Photo Frames", image: "Photo frame 4.jpg" },
  { name: "Photo Frame 5", category: "Photo Frames", image: "Photo frame 5.jpg" },
  { name: "Photo Frame 6", category: "Photo Frames", image: "Photo frame 6.jfif" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 1.jfif" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 2.jfif" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 3.jpg" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 4.jfif" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 5.jfif" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 6.jpg" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 7.jfif" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 8.webp" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "Wall clock 9.jfif" },
  { name: "Flower Preservation 1", category: "Preservation", image: "Preservation 1.webp" },
  { name: "Flower Preservation 1", category: "Preservation", image: "Preservations 2.jfif" },
  { name: "Flower Preservation 1", category: "Preservation", image: "Preservations 3.jfif" },
  { name: "Flower Preservation 1", category: "Preservation", image: "Preservations 4.jfif" },
  { name: "Flower Preservation 1", category: "Preservation", image: "Preservations 5.jfif" },
  { name: "Flower Preservation 1", category: "Preservation", image: "Preservations 6.webp" },
  { name: "Flower Preservation 1", category: "Preservation", image: "Preservations 7.jpg" }
];

// HTML ELEMENTS
const catBox = document.getElementById("categories");
const prodBox = document.getElementById("products");
const modal = document.getElementById("order-modal");
const selectedText = document.getElementById("selected-item");

let selectedItem = "";
let activeCat = null;

// SHOW CATEGORIES
function showCategories() {
  catBox.innerHTML = "";

  categories.forEach(function (c) {
    const card = document.createElement("div");
    card.className = "cat-btn";

    if (c.image) {
      const img = document.createElement("img");
      img.src = c.image;
      img.alt = c.name;
      card.appendChild(img);
    }

    const title = document.createElement("span");
    title.textContent = c.name;
    card.appendChild(title);

    card.onclick = function () {
      activeCat = c.name;
      showCategories();
      showProducts();
    };

    catBox.appendChild(card);
  });
}

// SHOW SELECTED CATEGORY PRODUCTS
function showProducts() {
  prodBox.innerHTML = "";

  if (!activeCat) return;

  const filteredProducts = products.filter(function (p) {
    return p.category === activeCat;
  });

  filteredProducts.forEach(function (p) {
    const card = document.createElement("div");
    card.className = "card";

    // Only image, no product name
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = "Product image";
    card.appendChild(img);

    // Order button
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Order / Interest";

    btn.onclick = function () {
      selectedItem = p.name;
      selectedText.textContent = "Product selected";
      modal.classList.remove("hidden");
    };

    card.appendChild(btn);
    prodBox.appendChild(card);
  });
}

// CLOSE MODAL
document.getElementById("close-modal").onclick = function () {
  modal.classList.add("hidden");
};

// SEND WHATSAPP ORDER
document.getElementById("send-order").onclick = function () {
  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const note = document.getElementById("cust-note").value.trim();

  if (!name || !phone) {
    alert("Naam ar phone number dao");
    return;
  }

  const msg =
    "Notun order!" +
    "\nProduct: " + selectedItem +
    "\nNaam: " + name +
    "\nPhone: " + phone +
    "\nNote: " + note;

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(msg),
    "_blank"
  );

  modal.classList.add("hidden");
};

// INITIAL PAGE
showCategories();
showProducts();
