// JavaScript source code


function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + merchTax(merchTot);
    }

    function merchTax(merchTot) {

        var taxTot = (0.03 * (merchTot - 50))

        return taxTot
    }

    return orderTot.toFixed(2);
}


function checkAddress(fieldID) {
    if (document.getElementById(fieldId).value === "") {
        alert("email address required.")
    }
}

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}