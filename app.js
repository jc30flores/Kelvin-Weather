//The forecast today is 293 Kelvin.
const kelvin = 293;

//Celsius if 273 degrees less than Kelvin, so for that reason we substract 273 to the kelvin variable.
const celsius = kelvin - 273;

//Fahrenheit is equal Celsius * (9/5) + 32, with this information we'll create a variable named fahrenheit that have this formula.
let fahrenheit = celsius *(9/5) + 32;

//We need to change the decimal result in Fahrenheit to int, so we'll use the built-in Math objetc .floor() to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Now we'll convert celsius to the Newton scale using this equation Celsius * (33/100)
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.` )
