let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let counter = 0;

function sendGetRequest() {
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayEl.textContent = jsonData.content;
        });
}

sendGetRequest();

let uniqueId;

function timeCounter() {
    counter = 0;
    timerEl.textContent = 0;
    uniqueId = setInterval(function() {
        counter++;
        timerEl.textContent = counter;
    }, 1000);
}

timeCounter();

submitBtnEl.addEventListener("click", function(event) {
    let input = quoteInputEl.value;
    if (input === "") {
        resultEl.textContent = "You typed incorrect sentence";
    } else {
        if (input !== quoteDisplayEl.textContent) {
            resultEl.textContent = "You typed incorrect sentence";
        } else {
            resultEl.textContent = "You typed in " + counter + " seconds";
            clearInterval(uniqueId);
        }
    }
});

resetBtnEl.addEventListener("click", function(event) {
    speedTypingTestEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    clearInterval(uniqueId);
    quoteInputEl.value = "";
    resultEl.textContent = "";
    sendGetRequest();
    speedTypingTestEl.classList.remove("d-none");
    spinnerEl.classList.add("d-none");
    timeCounter();
});