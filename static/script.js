/* sum section*/

function sum() {
    var n1 = document.getElementById("number1").value
    var n2 = document.getElementById("number2").value

    var number1 = parseInt(n1)
    var number2 = parseInt(n2)
    var result = number1 + number2

    var resultElement = document.getElementById("result")
    resultElement.innerText = "sum result: " + result
}

/* sum section*/


function hideDivById(divId) {
    hideAllDivW3Includes()
    var element = document.getElementById(divId)
    if (element.style.display === "none") {
        element.style.display = "block"
    }
}

function hideAllDivW3Includes() {
    var elementArray = document.getElementsByName("w3includes")
    for (var element of elementArray) {
        element.style.display = "none"
    }
}

w3.includeHTML()