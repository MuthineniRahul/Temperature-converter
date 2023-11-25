 function convertTemperature() {
            // Get user input
            var inputTemp = parseFloat(document.getElementById("inputTemp").value);
            var fromUnit = document.getElementById("fromUnit").value;

            // Convert temperature
            var result = (fromUnit === "celsius") ? celsiusToFahrenheit(inputTemp) : fahrenheitToCelsius(inputTemp);

            // Display result
            document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + " " + ((fromUnit === "celsius") ? "Fahrenheit" : "Celsius");
        }

        function celsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32;
        }

        function fahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }