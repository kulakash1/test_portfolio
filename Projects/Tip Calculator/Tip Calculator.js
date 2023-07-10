function calculateButton() {
    let billAmt = document.getElementById("billAmount").value;
    let percentTip = document.getElementById("percentageTip").value;

    let tipAmt = 0;
    let totalAmt = 0;

    if (billAmt === "" || percentTip === "") {
        document.getElementById("errorMessage").textContent = "please Enter a Valid Input.";
    } else {
        document.getElementById("errorMessage").textContent = "";
        tipAmt = (parseInt(percentTip) / 100) * parseInt(billAmt);
        document.getElementById("tipAmount").value = tipAmt;

        totalAmt = parseInt(billAmt) + parseInt(tipAmt);
        document.getElementById("totalAmount").value = totalAmt;
    }
}