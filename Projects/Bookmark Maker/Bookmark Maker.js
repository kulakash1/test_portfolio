let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Google",
    url: "https://google.com/",
}, ];

let bookmarkForm = document.getElementById("bookmarkForm")
let siteNameInput = document.getElementById("siteNameInput")
let siteUrlInput = document.getElementById("siteUrlInput")
let submitBtn = document.getElementById("submitBtn")
let siteNameErrMsg = document.getElementById("siteNameErrMsg")
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg")
let bookmarksList = document.getElementById("bookmarksList")

siteNameInput.addEventListener('change', function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

siteUrlInput.addEventListener('Change', function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

let sum = 2;

createAndAppendLink();

function createAndAppendLink() {
    let listElement = document.createElement('li');
    bookmarksList.appendChild(listElement);
    listElement.classList.add("form-cont", "d-flex", "flex-row", "mt-4", "mb-4");

    let paraElement = document.createElement('p');
    listElement.appendChild(paraElement);
    paraElement.textContent = bookmarks[sum - 2].name;
    paraElement.classList.add("list-para");

    let ancherEl = document.createElement('a');
    listElement.appendChild(ancherEl);
    ancherEl.href = bookmarks[sum - 2].url;
    ancherEl.classList.add("ml-auto");

    let visitButton = document.createElement('button');
    ancherEl.appendChild(visitButton);
    visitButton.textContent = "Visit";
    visitButton.classList.add("btn", "btn-primary")
}

function validateInput() {
    console.log("did");

    if (siteNameInput.value === "" && siteUrlInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteUrlErrMsg.textContent = "Required*";
    } else if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteUrlErrMsg.textContent = "";
    } else if (siteUrlInput.value === "") {
        siteNameErrMsg.textContent = "";
        siteUrlErrMsg.textContent = "Required*";
    } else if ((siteNameInput.value !== "") && (siteUrlInput.value !== "")) {
        siteNameErrMsg.textContent = "";
        siteUrlErrMsg.textContent = "";
        let my_object = {};
        console.log("did");
        my_object.bookmarkId = "bookmark" + sum;
        sum = sum + 1;
        my_object.name = siteNameInput.value;
        my_object.url = siteUrlInput.value;
        bookmarks.push(my_object);
        createAndAppendLink();
    }
}
bookmarkForm.addEventListener('submit', function(event) {
    event.preventDefault();
    validateInput();
});