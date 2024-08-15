let para = document.getElementById("para")
let button = document.getElementById("btn")

let fetchData = () => {    
 fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        }
    }).then((res) => {
        return res.json() 
    }).then((data) => {
        para.innerHTML = data.joke;
    }).catch((error) => {
        para.innerHTML = "Oops! Something went wrong. Please try again.";
        console.log("Something went wrong", error);
    })
}

fetchData();

button.addEventListener("click",fetchData)