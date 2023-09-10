document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;
        let convertedUnit;

        if (isNaN(temperature)) {
            resultDiv.innerText = "Please enter a valid temperature.";
            return;
        }

        if (unit === "celsius") {
            convertedTemperature = (temperature - 32) * (5/9);
            convertedUnit = "Celsius";
        } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = "Fahrenheit";
        } else if (unit === "kelvin") {
            convertedTemperature = temperature + 273.15;
            convertedUnit = "Kelvin";
        }

        resultDiv.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    });
});
