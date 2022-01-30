// celciusToFarenheit
/* function celciusToFarenheit(celcius) {
    return (celcius * 9 / 5) + 32
}
var result = celciusToFarenheit(2);
console.log(result); */

// farenheitToCelcius
/* function farenheitToCelcius(farenheit) {
    return (farenheit - 32) * 5 / 9
}
var result1 = farenheitToCelcius(50);
console.log(result1); */

// grade calculation
/* function gradeCalculation(number) {
    if (number <= 100 && number >= 80) {
        return 'A+';
    } else if (number <= 79 && number >= 70) {
        return 'A';
    } else if (number <= 69 && number >= 60) {
        return 'A-';
    } else if (number <= 59 && number >= 50) {
        return 'B+';
    } else if (number <= 49 && number >= 40) {
        return 'B';
    } else if (number <= 39 && number >= 30) {
        return 'C';
    } else {
        return 'F';
    }
}
var resutl1 = gradeCalculation(66);
console.log(resutl1); */

// simple interest calculate
function simpleInterest(l, r, t) {
    var s = l * (1 + (r * t));
    return s;
}
var result = simpleInterest(10000, 0.1, 2);
console.log(result)