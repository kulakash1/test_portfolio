let hrsInEl = document.getElementById("hoursInput");
let minInEl = document.getElementById("minutesInput");
let Btn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeOut = document.getElementById("timeInSeconds");
let hrs = hrsInEl.value;
let mins = minInEl.value;

function convert() {
    let hrs = hrsInEl.value;
    let mins = minInEl.value;
    if (hrs !== "" && mins !== "") {
        errorMsg.textContent = "";
        let secs = (hrs * 60 * 60) + (mins * 60);
        timeOut.textContent = secs + "s";
        timeOut.classList.add("out-time");
    } else if (hrs === "" && mins !== "") {
        errorMsg.textContent = "Please enter a valid number of hours";
    } else if (mins === "" && hrs !== "") {
        errorMsg.textContent = "Please enter a valid number of minutes";
    } else if (hrs === "" && mins === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
    }

}
Btn.addEventListener("click", convert);