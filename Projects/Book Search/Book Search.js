let searchInputEl = document.getElementById("searchInput");
let selectDisplayCountEl = document.getElementById("selectDisplayCount");
let spinnerEl = document.getElementById("spinner");
let noResultMsgEl = document.getElementById("noResultMsg");
let popularBooksHeadingEl = document.getElementById("popularBooksHeading");
let searchResultsEl = document.getElementById("searchResults")


searchInputEl.addEventListener("keydown", searchResults);
searchInputEl.addEventListener("blur", fetchAndDisplayResults);


function searchResults() {
    if (event.key === "Enter") {
        fetchAndDisplayResults();
    }


}


function fetchAndDisplayResults() {
    let userInput = searchInputEl.value;
    if (userInput === "") return;
    let url = "https://apis.ccbp.in/book-store?" + "title=" + userInput + "&maxResults=" + selectDisplayCountEl.value;
    console.log(url);
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    popularBooksHeadingEl.classList.add("d-none");
    searchResultsEl.textContent = "";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {


            display(jsonData.search_results);
        })


}




function display(results) {
    spinnerEl.classList.add("d-none");
    if (results.length === 0) {
        noResultMsgEl.classList.remove("d-none");
        popularBooksHeadingEl.classList.add("d-none");
        searchResultsEl.textContent = "";
    } else {


        popularBooksHeadingEl.classList.remove("d-none");
        noResultMsgEl.classList.add("d-none");


        for (let result of results) {
            let colEl = document.createElement("div");
            colEl.classList.add("col-6", "mt-3", "mb-3");
            searchResultsEl.appendChild(colEl);
            let imgEl = document.createElement("img");
            imgEl.src = result.imageLink;
            imgEl.classList.add("w-100", "mb-3");
            colEl.appendChild(imgEl);
            let authorEl = document.createElement("p");
            authorEl.textContent = result.author;
            authorEl.style.textAlign = "center";
            authorEl.style.fontSize = "20px";
            authorEl.style.color = "#323f4b";
            colEl.appendChild(authorEl);


        }
    }
}
selectDisplayCountEl.addEventListener("change", fetchAndDisplayResults);