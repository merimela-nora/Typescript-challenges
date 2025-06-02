//challenge 1 :  Sum of Positives
function sumOfPositives(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        if (arr[i] > 0) {
            sum += arr[i];
        }
    return sum;
}
console.log(sumOfPositives([6, 3, 4]));
//challenge 2: Find Maximum Value
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++)
        if (arr[i] > max) {
            max = arr[i];
        }
    return max;
}
console.log(findMax([5, 3, 6]));
//challenge 3: election winner
function findWinner(arr) {
    var high = arr[0];
    for (var i = 0; i < arr.length; i++)
        if (arr[i].votes > high.votes) {
            high = arr[i];
        }
    return high;
}
console.log(findWinner([
    { name: "grace", votes: 50 },
    { name: "caleb", votes: 75 },
    { name: "max", votes: 65 },
]));
//challenge 4: Longest word
function findLongestWord(arr) {
    var long = arr[0];
    for (var i = 1; i < arr.length; i++)
        if (arr[i].length > long.length) {
            long = arr[i];
        }
    return long;
}
console.log(findLongestWord(["grape", "tomato", "banana"]));
//challenge 5:  Count Properties
function countProperties(value) {
    var count = 0;
    for (var key in value) {
        count = count + 1;
    }
    return count;
}
var value = {
    name: "caro",
    age: 30,
};
console.log(countProperties(value));
