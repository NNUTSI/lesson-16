"user strict";
// _________________________
// 1. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// არგუმენტად გადაეცით ეს მასივი:
let num = [10, 50, 6, 7, 8, 11, 6, 3, 9];

function calculateSum(numbers) {
  let sum = 0;
  for (let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
  }
  return sum;
}

let result = calculateSum(num);
console.log(result);
// __________________________________
// 2. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის
// გამოტოვებით (მაგ:'giorgi saakadze') თუ isloggedin არის true
// და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};
function getUser(user) {
  if (user.isloggedin) {
    return `${user.firstname} ${user.lastname}`;
  } 
    return false;
  }

let result2 = getUser(user);
console.log(result2);

// 3. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი.
//  ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ
// უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

// ____________________________________________________
// 4. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ
// რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ
//  ლუწი; თუ ლუწია დააბრუნოს - this number is even‘;
// თუ კენტია დააბრუნოს - this number is odd;

function newFnc4(number) {
  if (number % 2 == 0) {
    console.log("this number is even");
  } else if (number % 2 == 1) {
    console.log("this number is odd");
  } else {
    console.log("Please enter an integer");
  }
}
newFnc4();

// __________________________________________________
// 5. მოცემულია მასივი:
// for ციკლის საშუალებით მიიღეთ reverse ვერისია,
// ანუ 5,4,3,2,1
let array = [1, 2, 3, 4, 5];
let reverseArray = [];
for (let n = array.length - 1; n >= 0; n--) {
  reverseArray.push(array[n]);
}

console.log(reverseArray);
// ________________________________________________
// 6. ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი
// ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ
// შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე
// დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ
// არასწულწლოვანი. eს ამოცანა დაწერეთ arrow function-ით
//   და if ის პირობა ჩაწერეთ ახალი სინტაქსით

let newFnc6 = (birthYear, yearNow) => {
  let age = yearNow - birthYear;
  //   if (age >= 18) {
  //     return "სრულწლოვანი";
  //   }
  //   return "არასრულწლოვანი";
  let ageResult6 = age >= 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
  return ageResult6;
};
let result6 = newFnc6(1991, 2024);
console.log(result6);
