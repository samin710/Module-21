// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function calculations(number){
    if(number % 2 === 1){
        return number * 2;
    }
    return number / 2;
}
console.log(calculations(4));
console.log(calculations(5));