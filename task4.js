// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(array){
    let count = 0;

    for(let i of array){
        if (i === "0"){
            count++;
        }
    }
    return count;
}

let array = ["0", "0", "1", "1", "1", "0", "1", "0", "0", "0"];

console.log(count_zero(array));