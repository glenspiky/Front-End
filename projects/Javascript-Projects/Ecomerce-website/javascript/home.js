const account = document.querySelector(".account");
const help = document.querySelector(".help");
const accContainer = document.querySelector(".acc-container");
const helpContainer = document.querySelector(".help-container");
const search = document.getElementById("search");
const close = document.getElementById("close");
const slider = document.getElementById("slider");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const productContainer = document.getElementById("productContainer");

function toggleDropDown() {
  account.addEventListener("click", () => {
    const isOpen = accContainer.style.display === "flex";
    helpContainer.style.display = "none";
    help.style.backgroundColor = "";

    if (isOpen) {
      account.style.backgroundColor = "";
      accContainer.style.display = "none";
    } else {
      account.style.backgroundColor = "lightgrey";
      accContainer.style.display = "flex";
      accContainer.innerHTML = `
    <button>Sign In</button>
    <span><i class="ri-user-3-line"> </i>
        <p>My Account</p>
     </span>
    <span><i class="ri-shopping-bag-3-line"></i>
      <p>Orders</p></span>
       <span><i class="ri-heart-line"></i>
      <p>Wish List</p></span>
    `;
    }
  });
  help.addEventListener("click", () => {
    const isOpen = helpContainer.style.display === "flex";
    account.style.backgroundColor = "";
    accContainer.style.display = "none";

    if (isOpen) {
      help.style.backgroundColor = "";
      helpContainer.style.display = "none";
    } else {
      help.style.backgroundColor = "lightgrey";
      helpContainer.style.display = "flex";
      helpContainer.innerHTML = `
    <span><i class="ri-questionnaire-line"> </i>
        <p>Help Center</p>
     </span>
    <span><i class="ri-shopping-bag-3-line"></i>
      <p>Place your Order</p></p></span>
       <span><i class="ri-bank-card-line"></i>
      <p>Payment Options</p></span>
       <span><i class="ri-refund-line"></i>
      <p>Returns & Refunds</p></span>
       <span><i class="ri-bank-card-line"></i>
      <p>Waranty</p></span>
      <button><i class="ri-message-2-line"></i>Live Chat</button>
    `;
    }
  });
  document.addEventListener("click", (event) => {
    const isClickInsideAccount =
      account.contains(event.target) || accContainer.contains(event.target);
    const isClickInsideHelp =
      help.contains(event.target) || helpContainer.contains(event.target);
    if (!isClickInsideAccount) {
      account.style.backgroundColor = "";
      accContainer.style.display = "none";
    }
    if (!isClickInsideHelp) {
      help.style.backgroundColor = "";
      helpContainer.style.display = "none";
    }
  });
}
toggleDropDown();

function updatePlaceHolder() {
  if (window.innerWidth > 600 && window.innerWidth < 964) {
    search.placeholder = "Search products and brands...";
  } else {
    search.placeholder = "Search for products, brands, and categories";
  }
}
updatePlaceHolder();
window.addEventListener("resize", updatePlaceHolder);

function updatePlaceHolder() {
  if (window.innerWidth > 600 && window.innerWidth < 964) {
    search.placeholder = "Search products and brands...";
  } else {
    search.placeholder = "Search for products, brands, and categories";
  }
}
updatePlaceHolder();
window.addEventListener("resize", updatePlaceHolder);

function openSidebar() {
  const catCenter = document.getElementById("catCenter");
  console.log("helllo");

  const isOpen = catCenter.style.display === "flex";
  catCenter.style.display = "none";
  if (isOpen) {
    catCenter.style.display = "none";
  } else {
    catCenter.style.display = "flex";
  }
}

function closeSidebar() {
  catCenter.style.display = "none";
}
let index = 0;
// const firstClone = slider[0].cloneNode(true);
const width = document.querySelector(".top-sellers-right").clientWidth;
function slideImagesLeft() {
  index++;
  slider.style.transform = `translateX(-${index * width}px)`;
  if (index === slider.length) {
    setTimeout(() => {
      slider.appendChild(firstClone);

      slider.style.transition = "none";
      index = 0;
      slider.style.transform = `translateX(0px)`;
    }, 400);
  }
}
function slideImagesRight() {
  index--;
  slider.style.transform = `translateX(${index * width}px)`;

  console.log(index);
}

//Generate products
function generateProducts() {
  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    displayProducts(data);
  }
  getProducts();
  function displayProducts(data) {
    // console.log(data);

    function generateStars(rating) {
      const fullStars = Math.floor(rating);
      const emptyStars = 5 - fullStars;

      const full = `<i class="ri-star-fill"></i>`.repeat(fullStars);
      const empty = `<i class="ri-star-line"></i>`.repeat(emptyStars);

      return full + empty;
    }

    generateStars();

    const updatedData = data.products
      .map(({ id, images, title, price, rating, discountPercentage }) => {
        const stars = generateStars(rating);
        return `
  <div class="product-item" id="${id}">
          <div class="pro-img">
            <img src=${images[0]} alt="" />
          </div>
          <div class="pro-desc">
            <h3>${title}</h3>
            <h2>KES ${price}<span>
                        KES ${(price - (price * discountPercentage) / 100).toFixed(2)}
            </span></h2>
                        <span>Save KES ${((price * discountPercentage) / 100).toFixed(2)}</span>
           <div class="rating">
            ${stars}
              <span class="rating-num">${rating.toFixed(1)}</span>
              </div>
            <div class="add-cart">
           <i class="ri-shopping-basket-fill"></i> 
              <p>Add to cart</p>
            </div>
          </div>
        </div>`;
      })
      .join("");
    productContainer.innerHTML = updatedData;
    // console.log(productContainer);
  }
}

generateProducts();
