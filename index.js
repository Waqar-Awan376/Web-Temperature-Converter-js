const inputTemp = document.getElementById("inputTemperature");
const convertCtoF = document.getElementById("convertCtoFButton");
const convertFtoC = document.getElementById("convertFtoCButton")
const convertedTemp = document.getElementById("resultantTemp");
convertCtoF.addEventListener('click', function () {
    let tempInC = Number(inputTemp.value);
    let tempInF = Number(((9.0 / 5.0) * tempInC) + 32);
    convertedTemp.value = tempInF.toFixed(2);
})
convertFtoC.addEventListener('click', function () {
    let tempInF = Number(inputTemp.value);
    let tempInC = Number((5.0 / 9.0) * (tempInF - 32));
    convertedTemp.value = tempInC.toFixed(2);
})



