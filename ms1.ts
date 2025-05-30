//challenge 1:  Return the Sum of Two Numbers
/*function addition(){
  let x:number = 6; 
   let y :number = 4;


  console.log(x + y);
}
addition(); 

//challenge 2: Convert Minutes into Seconds

function convert() {

  let minutes:number = 5;
  let Seconds:number = 60;

  console.log(minutes * Seconds);
}
convert();


//challenge 3:  Perimeter of a Rectangle

function findperimeter(length:number, width:number):number{
  return 2 * (length + width);
}
console.log(findperimeter(5, 6));

//challenge 4: Check Negative

function isNegative(num:number) {
  if (num < 0) {
    return true;
  }
  return false;
}
console.log(isNegative(-5));

*/
//challenge 5: Can i drive

function canDrive(name:string, age:number) {
  if (age >= 18) {
    return name + "  is old enough to drive";
  }
  return name + " is not old enough to drive";
}
console.log(canDrive("mercy", 30));
/*
//challenge 6: Largest Number

function findLargest(a:number, b:number, c:number) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(findLargest(10, 80, 70));

//challenge 7: BMI Calculator

function calculateBMI(weight:number, height:number) {
  let BMI = weight / (height * height);

  if (BMI <= 18.5) {
    return "your BMI is " + BMI + "- Underweight";
  } else if (BMI <= 24.5) {
    return "your BMI is " + BMI + "- Normal-weight";
  } else if (BMI <= 29.9) {
    return "your BMI is " + BMI + "- Overweight";
  } else {
    return "your BMI is " + BMI + "- Obese";
  }
}
console.log(calculateBMI(70, 2));

//challenge 8: Greeting Based On Time

function greetUser(name:string, hour:number) {
  if (hour >= 5 && hour <= 11) {
    return "Good morning " + name + "!";
  } else if (hour >= 12 && hour <= 17) {
    return "Good afternoon " + name + "!";
  } else if (hour >= 18 && hour <= 21) {
    return "Good evening " + name + "!";
  } else {
    return "Good night " + name + "!";
  }
}
console.log(greetUser("Susan", 10));


//challenge 9 : fuzz buzz
function fizzBuzzCheck(number:number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz ";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number.toString();
  }
}*/

