//challenge 1 :  Sum of Positives

function sumOfPositives(arr:number[]) {
    let sum :number = 0;
    for (let i = 0; i < arr.length; i++)
      if (arr[i] > 0) {
        sum += arr[i];
      }
    return sum;
  }


console.log(sumOfPositives([6, 3, 4]));
