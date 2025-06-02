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
