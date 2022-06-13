const allBtns = document.querySelectorAll(".btn");
const img = document.querySelector(".main-image");
const someImage = document.querySelectorAll(".image");
const num = document.querySelector(".number");
const num1 = document.querySelector(".number1");
const product = document.querySelector(".product");
const navToggle = document.querySelector(".menu-icon");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navbar = document.querySelector(".fixed");
const price = document.querySelector(".total-price");
const cart = document.querySelector(".cart-svg")
const cartCard = document.querySelector(".cart-card")
const trash = document.querySelector(".trash")
let count = 0;

// Delete
trash.addEventListener('click',()=>{
    cartCard.style.display = 'none'
})


cart.addEventListener('click',()=>{
    if(cartCard.style.display != 'block')
    cartCard.style.display = 'block'
    else{
        cartCard.style.display = 'none'
    }
})


// Link Height

navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed navbar
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// Slected Image Blur
const myFunction = (event) => {
  const clickedElem = event.target;
  img.src = clickedElem.src;
  someImage.forEach((btn) => btn.classList.remove("active"));
  clickedElem.classList.add("active");
};

// Increase and Decrease count

function plus() {
  count++;
  num.innerHTML = count;
  num1.innerHTML = count
  product.innerHTML = count
  price.innerHTML = count*125.00
  product.style.display = 'block'
}
function minus() {
  if (num.innerHTML != 0) {
    count--;
    num.innerHTML = count;
    num1.innerHTML = count
    price.innerHTML = count*125.00
    product.innerHTML = count
  }
}
console.log(navbar)

function invisible(){
  if(num.innerHTML = 0){
    cartCard.style.display = 'none'
  }
}