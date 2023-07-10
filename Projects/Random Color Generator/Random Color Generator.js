let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];



function button() {
    var low = 0;
    var high = bgColorsArray.length;
    var result = Math.floor(Math.random() * (1 + high - low)) + low;
    document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[result];
}