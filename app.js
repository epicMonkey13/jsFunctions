//dry do not repeat yourself
const firstName = "Lucy";

function myFunction() {
  console.log("this is my first function");
}
myFunction();

function consoleDouble(num) {
  console.log("this is the output for double function", num * 2);
}
consoleDouble(2);

function double(num) {
  let result = num * 2;
  return result;
}
let doubleValue = double(3);
console.log("res from double", doubleValue);

function multiplier(firstNum, secondNum, thirdNum) {
  let results = firstNum * secondNum * thirdNum;
  console.log("this is from multiplier");

  return results;
}

let resultMult = multiplier(2, 3, 4);
console.log(resultMult);

function welcome(Name) {
  return `hi ${Name} , Good Morning`;
}

console.log(welcome("Henry"));

(function () {
  console.log("this is an IIFE");
})(); //anon funct immed invkd exprsn

let globalVar = 10;
(function () {
  let globalVar = 100;
  console.log(globalVar + 100);
})();
console.log(globalVar);

//func exprsn
const getRectArea = function (width, height) {
  return width * height;
};
console.log(getRectArea(10, 20));

function showArea(area) {
  console.log(area);
}
showArea(getRectArea(10, 20));

//template literals ``
let temp = "John";
let str = "Hello" + "" + "how r u" + "" + temp;

let better = `Hello how r u ${temp}`;
console.log(better);

//exercises
function helloFunction() {
  console.log("Hello World from my exercises");
}
helloFunction();

function Quadrupler(myNum) {
  let resultOfQuadrupler = myNum * 4;
  return resultOfQuadrupler;
}

let resultQuad = Quadrupler(2);
console.log(resultQuad, "quadrupler's result");

function welcomeMessage(firstNameA, lastNameA) {
  return `hello ${firstNameA.toLowerCase()}${lastNameA.toUpperCase()}, how can I help you?`;
}

console.log(welcomeMessage("Gulmira", "Zhalgasbayeva"));

function tempConverter(Fahrenheit) {
  const celsiusResult = (Fahrenheit - 32) * 5 / 9;
  console.log("this is from tempConverter");
  return celsiusResult;
}

let tempConverterResult = tempConverter (50);
console.log(tempConverterResult);


const dogYearOne = 15;

let dogYearTwo = 9;

let dogYearAdditional = 5;

const preciousMe = "Gulmira";

let preciousMeAge = 35;

const preciousMeAgeInDogYears = preciousMeAge - dogYearOne -dogYearTwo;

console.log(preciousMeAgeInDogYears);

let afterFirstTwoYears = preciousMeAgeInDogYears/5;
console.log(afterFirstTwoYears);

let myDogAgeFinal = afterFirstTwoYears + 2;
console.log(myDogAgeFinal, "this is my 'dog age'");

function myDogAgeDisplay() {
  return `this is how old ${preciousMe} is in dog age - ${myDogAgeFinal}`;
}

console.log(myDogAgeDisplay());

//calculator
function calculate(number1,number2,operator){
  if (!number1 || !number2){
      return "Invalid number"
  }
  if (!['*','-','/','+'].includes(operator)){
      return "Invalid operator"
  }
  switch(operator){
    case "+":
      return number1 + number2;
    case "/":
      return number1 * number2;
    case "*":
      return number1 * number2;
    case "-":
      return number1 - number2;
   }
  }
  console.log(calculate(5,5,"+"), " switch case calculator's res")

  //calculator if else
const operatorA = ( '/' );

const num1 = 1;
const num2 = 2;

let result;

if (operatorA == '+') {
    result = num1 + num2;
} else if (operatorA == '-') {
    result = num1 - num2;
} else if (operatorA == '*') {
    result = num1 * num2;
} else {
    result = num1 / num2;
}

console.log(`${num1}${operatorA}${num2}= ${result}`);

//less than
function testLessThan(numX, numY) {
  if (numX < numY) {
    return [numX, "this is the smaller number of the given two"];
  }else {
    return [numX,"is not smaller than", numY];
    //ask N how to display without arrays
  }
}
console.log(testLessThan(3,9));

//power n
// let testPower = Math.pow(2,2);
// console.log(testPower);

function mathPowTest(someNumOne, someNumTwo) {
  let powResult = Math.pow(someNumOne, someNumTwo);
  return powResult;
}
console.log(mathPowTest(2,3));

