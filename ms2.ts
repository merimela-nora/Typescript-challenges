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


//challenge 5:  Count Properties
  function countProperties(value:object):number {
    let count = 0;
    for (let key in value) {
      count = count + 1;
    }
    return count;
  }
  const value = {
    name: "caro",
    age: 30,
  };
  
  console.log(countProperties(value));

  
//challenge 6:Filter by Length
function filterByLength(arr:string[], minLength:number):string[] {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
  
      if (current.length >= minLength) {
        result.push(current);
      }
    }
    return result;
  }
  console.log(filterByLength(["giraffe", "lion"], 5));
  
  //challenge 7:sum of even numbers
function sumEvenNumbers(arr:number[]) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (arr[i] % 2 === 0) {
        sum += current;
      }
    }
  
    return sum;
  }
  console.log(sumEvenNumbers([1, 2, 3]));

  //challenge 8:Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(arr:number[]){
    let oddSum = 0;
    let evenSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenSum += arr[i];
      } else {
        oddSum += arr[i];
      }
    }
    return evenSum - oddSum;
  }
  console.log(differenceEvenOdd([1, 2, 3, 4]));

  //challenge 9: average
function average(arr:number[]) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let av = sum / arr.length;
  
    return av;
  }
  console.log(average([1, 2, 3, 4]));
  
  // challenge 10 : count truthy

function countTruthy(value:Record<string, boolean>):number {
    let count = 0;
  
    for (let key in value) {
      if (value [key]) {
        count++;
      }
    }
    return count;
  }
  const take = {
  name: true ,
  };
  console.log(countTruthy(take));

  //challenge 11: Linear Search
function linearSearch(arr:string[], value:string):number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  console.log(linearSearch(["banana", "mango", "orange"], "orange"));

  //challenge 12:Reverse Linear Search
function reverseLinearSearch(arr:string[], value:string):number {
    for (let i = arr.length - 1; i >= 0; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  console.log(reverseLinearSearch(["banana", "apple", "tomato"], "tomato"));

  //challenge 13:Linear Search All Indices
function linearSearchAll(arr:number[], value:number):number[]{
    let result: number[] = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        result.push(i);
      }
    }
    return result;
  }
  console.log(linearSearchAll([1, 2, 3, 4,7], 7));