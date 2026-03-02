const account = document.querySelector(".account");
const help = document.querySelector(".help");
const accContainer = document.querySelector(".acc-container");
const helpContainer = document.querySelector(".help-container");
const search = document.getElementById("search");

function toggleDropDown() {
  account.addEventListener("click", () => {
    const isOpen = (accContainer.style.display === "flex");
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
    const isOpen = (helpContainer.style.display === "flex");
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
    const isClickInsideAccount = account.contains(event.target) || accContainer.contains(event.target)
    const isClickInsideHelp = help.contains(event.target) || helpContainer.contains(event.target)
    if (!isClickInsideAccount) {
       account.style.backgroundColor = "";
       accContainer.style.display = "none";

    }
    if (!isClickInsideHelp) {
      help.style.backgroundColor = "";
      helpContainer.style.display = "none";
    }
  })
  
}
toggleDropDown();

function updatePlaceHolder() {
  if (window.innerWidth>600 && window.innerWidth<964) {
    search.placeholder="Search products and brands..."
  } else {
    search.placeholder = "Search for products, brands, and categories";
  }
}
updatePlaceHolder()
window.addEventListener("resize",updatePlaceHolder)