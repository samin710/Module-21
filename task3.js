// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(number, size){
    let sum = 0;
    for(let i of number){
        sum += i;
    }
    return sum / size;
}

let number = [1, 2, 3, 4];

console.log(make_avg(number, number.length));