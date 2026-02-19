const products = document.getElementById("products");
const search = document.getElementById("search");
const category = document.getElementById("category");

let allData = [];
async function getData() {
    try {
        const response = await fetch("https://dummyjson.com/products/");
  const jsonData = await response.json();

  allData = jsonData.products;
  // console.log(allData);
  displayData();
    } catch (Error)  {
        console.error(Error);
        
    }
  
}

function displayData() {
  //console.log( allData);
  allData.forEach((product) => {
    console.log(product);
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `<img src="${product.images[0]}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <span>$${product.price}</span>
    `;
      products.appendChild(productCard)
  });
}
getData();
