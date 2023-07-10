// // let AboutHidden = document.getElementById("aboutTab").style.display = "none";
// let TimeToVisitHidden = document.getElementById("timeToVisitTab").style.display = "none";
// let AttractionsHidden = document.getElementById("attractionsTab").style.display = "none";

// let AboutBtnColorWhite = document.getElementById("aboutButton").style.backgroundColor = "white";
// let TimeToVisitBtnColorWhite = document.getElementById("timeToVisitButton").style.backgroundColor = "white";
// let AttractionsBtnColorWhite = document.getElementById("attractionsButton").style.backgroundColor = "white";



// let AboutBtnColorGrey = document.getElementById("aboutButton").style.backgroundColor = "#dae2ec";
// let TimeToVisitBtnColorGrey = document.getElementById("timeToVisitButton").style.backgroundColor = "#dae2ec";
// let AttractionsBtnColorGrey = document.getElementById("attractionsButton").style.backgroundColor = "#dae2ec";

document.getElementById("timeToVisitTab").style.display = "none";
document.getElementById("attractionsTab").style.display = "none";

function onClickAboutTab() {
    document.getElementById("aboutButton").style.backgroundColor = "white";
    document.getElementById("timeToVisitButton").style.backgroundColor = "#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor = "#dae2ec";

    document.getElementById("aboutTab").style.display = "inline";

    document.getElementById("timeToVisitTab").style.display = "none";
    document.getElementById("attractionsTab").style.display = "none";
}

function onClickTimeToVisitTab() {
    document.getElementById("timeToVisitButton").style.backgroundColor = "white";
    document.getElementById("aboutButton").style.backgroundColor = "#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor = "#dae2ec";

    document.getElementById("timeToVisitTab").style.display = "inline";

    document.getElementById("aboutTab").style.display = "none";
    document.getElementById("attractionsTab").style.display = "none";
}

function onClickAttractionsTab() {
    document.getElementById("attractionsButton").style.backgroundColor = "white";
    document.getElementById("timeToVisitButton").style.backgroundColor = "#dae2ec";
    document.getElementById("aboutButton").style.backgroundColor = "#dae2ec";

    document.getElementById("attractionsTab").style.display = "inline";

    document.getElementById("timeToVisitTab").style.display = "none";
    document.getElementById("aboutTab").style.display = "none";
}

























// let aboutButtonEl = document.getElementById("aboutButton");
// let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
// let attractionsButtonEl = document.getElementById("attractionsButton");

// let aboutTabEl = document.getElementById("aboutTab");
// let timeToVisitTabEl = document.getElementById("timeToVisitTab");
// let attractionsTabEl = document.getElementById("attractionsTab");

// timeToVisitTabEl.classList.add("d-none");
// attractionsTabEl.classList.add("d-none");

// function onClickAboutTab() {
//   aboutTabEl.classList.remove("d-none");
//   timeToVisitTabEl.classList.add("d-none");
//   attractionsTabEl.classList.add("d-none");

//   aboutButtonEl.classList.add("selected-button");
//   timeToVisitButtonEl.classList.remove("selected-button");
//   attractionsButtonEl.classList.remove("selected-button");
// }

// function onClickTimeToVisitTab() {
//   aboutTabEl.classList.add("d-none");
//   timeToVisitTabEl.classList.remove("d-none");
//   attractionsTabEl.classList.add("d-none");

//   aboutButtonEl.classList.remove("selected-button");
//   timeToVisitButtonEl.classList.add("selected-button");
//   attractionsButtonEl.classList.remove("selected-button");
// }

// function onClickAttractionsTab() {
//   aboutTabEl.classList.add("d-none");
//   timeToVisitTabEl.classList.add("d-none");
//   attractionsTabEl.classList.remove("d-none");

//   aboutButtonEl.classList.remove("selected-button");
//   timeToVisitButtonEl.classList.remove("selected-button");
//   attractionsButtonEl.classList.add("selected-button");
// }