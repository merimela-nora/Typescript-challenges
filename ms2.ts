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

//challenge 2: Find Maximum Value
function findMax(arr: number[]) {
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++)
      if (arr[i] > max) {
        max = arr[i];
      }
  
    return max;
  }
  console.log(findMax([5, 3, 6]));

  //challenge 3: election winner
function findWinner(arr: { name: string; votes: number }[]) {
    let high = arr[0];
  
    for (let i = 0; i < arr.length; i++)
      if (arr[i].votes > high.votes) {
        high = arr[i];
      }
    return high;
  }
  console.log(
    findWinner([
      { name: "grace", votes: 50 },
      { name: "caleb", votes: 75 },
      { name: "max", votes: 65 },
    ]),
  );
  
  //challenge 4: Longest word
function findLongestWord(arr:{ length: number }[]) {
    let long = arr[0];
    for (let i = 1; i < arr.length; i++)
      if (arr[i].length > long.length) {
        long = arr[i];
      }
    return long;
  }
  console.log(findLongestWord(["grape", "tomato", "banana"]));