const fetchBtn = document.getElementById("fetchBtn");
const joke = document.getElementById("joke");
function displayData() {
    
    fetchBtn.addEventListener("click", () => {
        const API_URL = "https://official-joke-api.appspot.com/random_joke";
        async function getData() {
            const fetchedData = await fetch(API_URL)
            const jsonData = await fetchedData.json() 
            console.log(jsonData);
            joke.textContent = `${jsonData.setup} - ${jsonData.punchline}`;
        }
        getData()
    });
}
displayData()

