const WHATSAPP_NUMBER = "918910425745";

const categories = [
  {name: "Earrings",image: "Earrings 1.png"}, 
  {name: "Bangles",image: "Earrings 1.png"}, 
  {name: "Pendants",image: "Earrings 1.png"}, 
  {name: "Bracelets",image: "Earrings 1.png"}, 
  {name: "Photo Frames",image: "Earrings 1.png"}, 
  {name: "Wall Clocks",image: "Earrings 1.png"}, 
  {name: "Preservation",image: "Earrings 1.png"}, 
];

// Notun product jog korte ekta line copy kore naam, category ar image bodlao
const products = [
  { name: "Resin Earring 1", category: "Earrings", image: "Earrings 1.png" },
  { name: "Resin Earring 2", category: "Earrings", image: "Earrings 2.png" },
  { name: "Resin Earring 3", category: "Earrings", image: "Earrings 3.png" },
  { name: "Resin Earring 4", category: "Earrings", image: "Earrings 4.png" },
  { name: "Resin Earring 5", category: "Earrings", image: "Earrings 5.png" },
  { name: "Resin Earring 6", category: "Earrings", image: "Earrings 6.png" },
  { name: "Resin Earring 7", category: "Earrings", image: "Earrings 7.png" },
  { name: "Resin Earring 8", category: "Earrings", image: "Earrings 8.png" },
  { name: "Resin Bangle 1", category: "Bangles", image: "images/bangle1.jpg" },
  { name: "Resin Pendant 1", category: "Pendants", image: "images/pendant1.jpg" },
  { name: "Resin Bracelet 1", category: "Bracelets", image: "images/bracelet1.jpg" },
  { name: "Photo Frame 1", category: "Photo Frames", image: "images/frame1.jpg" },
  { name: "Wall Clock 1", category: "Wall Clocks", image: "images/clock1.jpg" },
  { name: "Flower Preservation 1", category: "Preservation", image: "images/preserve1.jpg" },
];

const catBox = document.getElementById("categories");
const prodBox = document.getElementById("products");
const modal = document.getElementById("order-modal");
const selectedText = document.getElementById("selected-item");
let selectedItem = "";
let activeCat = "Empty";

function showCategories() {
  catBox.innerHTML = "";
  categories.forEach(function (c) {
    const card = document.createElement('div');
 card.className = 'cat-btn' + (c.name === activeCat ? ' active' : '');
 card.innerHTML = ~<img src="${c.image}" alt="${c.name}"><span>${c.name}</span>~;
 card.onclick = function() {
     activeCat = c.name;
     showCategories();
     showProducts();
 };
 catBox.appendChild(card);
  });
}

function showProducts() {
  prodBox.innerHTML = "";
  products
    .filter(function (p) { return activeCat !== "Empty" || p.category === activeCat; })
    .forEach(function (p) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = '<img src="' + p.image + '" alt="' + p.name + '"><h3>' + p.name + '</h3>';
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.textContent = "Order / Interest";
      btn.onclick = function () {
        selectedItem = p.name;
        selectedText.textContent = "Product: " + p.name;
        modal.classList.remove("hidden");
      };
      card.appendChild(btn);
      prodBox.appendChild(card);
    });
}

document.getElementById("close-modal").onclick = function () {
  modal.classList.add("hidden");
};

document.getElementById("send-order").onclick = function () {
  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const note = document.getElementById("cust-note").value.trim();
  if (!name || !phone) { alert("Naam ar phone number dao"); return; }
  const msg = "Notun order!\nProduct: " + selectedItem + "\nNaam: " + name + "\nPhone: " + phone + "\nNote: " + note;
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
  modal.classList.add("hidden");
};

showCategories();
showProducts();
