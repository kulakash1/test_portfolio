let imageElement = document.getElementById("image");

let originalImageWidth = "200px";

imageElement.style.width = originalImageWidth;


// document.getElementById("imageWidth").textContent = (imageElement.style.width);
let SizeWidth = parseInt(imageElement.style.width);

function decrementButton() {
    if (SizeWidth <= 100) {
        document.getElementById("imageWidth").textContent = (SizeWidth + "px");
        document.getElementById("warningMessage").textContent = "Can't Visible. Increase the size of the Image"
    } else {
        document.getElementById("warningMessage").textContent = "";
        SizeWidth = (SizeWidth - 5);
        imageElement.style.width = (SizeWidth + "px");
        document.getElementById("imageWidth").textContent = (SizeWidth + "px");
    }
}

function incrementButton() {
    if (SizeWidth >= 300) {
        document.getElementById("imageWidth").textContent = (SizeWidth + "px");
        document.getElementById("warningMessage").textContent = "Too Big. Decrease the size of the Image";
    } else {
        document.getElementById("warningMessage").textContent = "";
        SizeWidth = (SizeWidth + 5);
        imageElement.style.width = (SizeWidth + "px");
        document.getElementById("imageWidth").textContent = (SizeWidth + "px");
    }
}