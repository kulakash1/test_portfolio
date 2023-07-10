let customBtnElement = document.getElementById("customButton");

function ChangeBtnStyle() {
    let bgColorElement = document.getElementById("bgColorInput").value;
    let fontColorElement = document.getElementById("fontColorInput").value;
    let fontSizeElement = document.getElementById("fontSizeInput").value;
    let fontWeightElement = document.getElementById("fontWeightInput").value;
    let paddingElement = document.getElementById("paddingInput").value;
    let borderRadiusElement = document.getElementById("borderRadiusInput").value;


    customBtnElement.style.backgroundColor = bgColorElement;
    customBtnElement.style.color = fontColorElement;
    // customBtnElement.style.fontSize = fontSizeElement;
    customBtnElement.style.fontSize = fontSizeElement + "px";
    customBtnElement.style.fontWeight = fontWeightElement;
    // customBtnElement.style.padding = paddingElement;
    customBtnElement.style.padding = paddingElement + "px";
    // customBtnElement.style.borderRadius = borderRadiusElement;
    customBtnElement.style.borderRadius = borderRadiusElement + "px";
}