// Imagine deciding what to wear based on the weather. If it's raining, you wear a raincoat. Otherwise(else), you wear sunglasses.
// let isRaining = true;
let isRaining = false;
if (isRaining) {
    console.log("Wear a Raincoat.");
}
else {
    console.log("Wear Sunglasses.");
}
// extending above situation, if it's raining, you wear a raincoat. Else it's cloudy, you wear a light jacket. Otherwise you wear sunglasses.
let weather = "cloudy";
if (weather === "raining") {
    console.log("you wear a raincoat.");
}
else if (weather === "cloudy") {
    console.log("you wear a light jacket.");
}
else {
    console.log("you wear sunglasses.");
}
// If you get 80% marks you will get A*, Else you get 70% marks you will get A, otherwise you will get B.
let results = "65";
if (results === "80") {
    console.log("you will get A*");
}
else if (results === "70") {
    console.log("you will get A");
}
else {
    console.log("you will get B");
}
export {};
