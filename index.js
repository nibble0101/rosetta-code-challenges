// Rosetta Code: Vector dot product
function dotProduct(...arr) {
  let dotProd = [],
    arrLen = [],
    l = arr.length,
    tot = 0;
  if (!arr.length) {
    return null;
  }
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (dotProd[j] === undefined) {
        dotProd.push(arr[i][j]);
      } else {
        dotProd[j] *= arr[i][j];
      }
    }
    arrLen.push(arr[i].length);
  }
  if (
    arrLen.some((val) => {
      return val != arrLen[0];
    })
  ) {
    return null;
  }
  for (let k = 0; k < dotProd.length; k++) {
    tot += dotProd[k];
  }
  return tot;
}
// Rosetta Code: Factorial

function factorial(n) {
  return n === 1 || n === 0 ? 1 : n * factorial(n - 1);
}
// Rosetta Code: Factors of an integer

function factors(num) {
  let arr = [];
  if (num === 1) {
    return [1];
  }
  for (let i = 0; i <= Math.round(num / 2); i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  arr.push(num);
  return arr;
}

//Rosetta Code: Sum of squares
function sumsq(array) {
  return array.reduce((acc, cur) => {
    return acc + cur ** 2;
  }, 0);
}

//  Rosetta Code: Cumulative standard deviation

function standardDeviation(arr) {
  const n = arr.length;
  const [tot, sqDev] = arr.reduce(
    (acc, curr) => {
      acc[0] += curr;
      acc[1] += curr ** 2;
      return acc;
    },
    [0, 0]
  );

  let ans = Math.pow(sqDev / n - (tot / n) ** 2, 0.5);
  return Number.isInteger(ans) ? ans : Math.round(ans * 1000) / 1000;
}

// Rosetta Code: Greatest common divisor

function gcd(a, b) {
  const commonFactors = [];
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      commonFactors.push(i);
    }
  }
  return commonFactors[commonFactors.length - 1];
}

// Rosetta Code: Evaluate binomial coefficients

function binom(n, k) {
  let num = 1,
    den = 1;
  while (k > 0) {
    num *= n - k + 1;
    den *= k;
    k--;
  }
  return num / den;
}

// Rosetta Code: Ethiopian multiplication

function eth_mult(a, b) {
  function halveInt(a) {
    let arr = [a];
    while (a !== 1) {
      a = Math.floor(a / 2);
      arr.push(a);
    }
    return arr;
  }
  function doubleInt(b) {
    let arr = [b],
      l = halveInt(a).length;
    for (let i = 1; i < l; i++) {
      b *= 2;
      arr[i] = b;
    }
    return arr;
  }
  function isEven(arr1, arr2) {
    let prod = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] % 2 !== 0) {
        prod += arr2[i];
      }
    }
    return prod;
  }

  return isEven(halveInt(a), doubleInt(b));
}

// Rosetta Code: Ackermann function
function ack(m, n) {
  if (m === 0) {
    return n + 1;
  } else if (m > 0 && n === 0) {
    return ack(m - 1, 1);
  } else if (m > 0 && n > 0) {
    return ack(m - 1, ack(m, n - 1));
  }
}

//Rosetta Code: Symmetric difference

function symmetricDifference(A, B) {
  // Good luck!
  let diff = [];
  A.forEach((val) => {
    if (!B.includes(val)) {
      diff.push(val);
    }
  });
  B.forEach((val) => {
    if (!A.includes(val)) {
      diff.push(val);
    }
  });
  if (typeof diff[0] === "number") {
    return diff.sort((a, b) => a - b);
  } else if (typeof diff[0] === "string") return diff.sort();
}
// Rosetta Code: Day of the week
function findXmasSunday(start, end) {
  let arr = [],
    date;
  for (start; start <= end; start++) {
    date = new Date(start, 11, 25);
    if (date.getDay() === 0) {
      arr.push(start);
    }
  }
  return arr;
}

// Rosetta Code: Count occurrences of a substring

function countSubstring(str, subStr) {
  const a = str.length;
  const b = str.split(subStr).join("").length;
  return (a - b) / subStr.length;
}

//Rosetta Code: Letter frequency

function letterFrequency(txt) {
  const arr = txt.split(""),
    obj = {};
  arr.forEach((val) => {
    if (obj[val]) {
      obj[val]++;
    } else {
      obj[val] = 1;
    }
  });
  return Object.entries(obj).sort();
}
//Rosetta Code: Dot product
function dotProduct(ary1, ary2) {
  const product = ary1.reduce((prev, curr, ind) => {
    return prev + curr * ary2[ind];
  }, 0);

  return product;
}
//Rosetta Code: Hash from two arrays

function arrToObj(keys, vals) {
  const obj = {};
  keys.forEach((v, i) => {
    obj[v] = vals[i];
  });
  return obj;
}
//Rosetta Code: Least common multiple

//Euclidean Algorithm

function LCM(A) {
  if (A.length < 2) {
    return new Error("There must be atleast 2 numbers!");
  }
  A.sort((a, b) => a - b);
  const gcf = (a, b) => {
    if (!a) {
      return b;
    }
    return gcf(b % a, a);
  };
  const lcm = (a, b) => {
    return (a * b) / gcf(a, b);
  };
  while (A.length > 1) {
    const a = Math.min(A[0], A[1]);
    const b = Math.max(A[0], A[1]);
    const l = lcm(a, b);
    A.splice(0, 2, l);
  }
  return A[0];
}

//Rosetta Code: Left factorials

function leftFactorial(n) {
  if (n < 0) {
    throw new Error(`Expected ${n} to be postive.`);
  }
  if (!n) {
    return n;
  }

  const f = []; // f = [0!, 1!, 2!, ..., (n-1)!]
  n = n - 1; // !n = 0! + 1! + 2! + ... + (n - 1)!

  function factorial(n) {
    if (!n) {
      return (f[n] = 1);
    }
    return (f[n] = factorial(n - 1) * n);
  }
  factorial(n);
  const sum = f.reduce((acc, curr) => acc + curr);
  return sum;
}

//Rosetta Code: Sum multiples of 3 or 5 or both.
// This solution is inefficient

function sumMults(n) {
  let mult = [],
    sum = 0,
    max = Math.floor(n / 3),
    i = 1;

  for (i; i <= max; i++) {
    if (i * 3 < n) {
      if (!mult.includes(i * 3)) {
        mult.push(i * 3);
        sum += i * 3;
      }
    }
    if (i * 5 < n) {
      if (!mult.includes(i * 5)) {
        mult.push(i * 5);
        sum += i * 5;
      }
    }
  }
  return sum;
}

//Rosetta Code: Sum of a series

function sum(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += 1 / Math.pow(i, 2);
  }
  return sum;
}

//Rosetta Code: Date format
function getDateFormats() {
  const date = new Date(),
    arr = [];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const str = date.toString().split(" ");
  //You can use template literal
  arr[0] = str[3] + "-" + (date.getMonth() + 1) + "-" + str[2];
  arr[1] = days[date.getDay()] + ", " + str[1] + " " + str[2] + ", " + str[3];
  return arr;
}

//Rosetta Code: Date manipulation
//Solution is incomplete
function add12Hours(dateString) {
  const arr = dateString.split(" ");
  const [month, date, year, time, zone] = arr;
  const hour = parseInt(time);
  const minutes = parseInt(time.split(":")[1]);
  const dateTime = new Date();
}
const d = "March 7 2009 7:30pm EST";
console.log(d.split(" "));

//Rosetta Code: Last Friday of each month

function lastFriday(year, month) {
  const d = new Date(year, month, 0);
  let i = d.getDate();
  for (i; i > 0; i--) {
    d.setDate(i);
    if (d.getDay() === 5) {
      return i;
    }
  }
}

//Rosetta Code: Leap year
// Solution 1

function isLeapYear(year) {
  const d = new Date(year, 1, 29);
  return d.getDate() === 29;
}

//Rosetta Code: Leap year
// Solution 2

function isLeapYear(year) {
  if (!(year % 4)) {
    if (year % 100) {
      return true;
    }
    if (!(year % 400)) {
      return true;
    }
  }
  return false;
}

//Rosetta Code: Leap year
// Solution from https://stackoverflow.com/questions/16353211

function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

//Rosetta Code: Compare a list of strings
// Challenge is not adequately described in FCC

function allEqual(arr) {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (arr[i] !== arr[j]) {
        return false;
      }
    }
  }
  return true;
}

function azSorted(arr) {
  if (arr.length < 2) {
    return true;
  }
  const sortedArr = [...arr].sort();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      return false;
    }
    if (arr[0] === arr[i]) {
      count++; //Determines if all elements of the array are the same
    }
  }
  if (count === arr.length) {
    return false;
  }
  return true;
}

//Rosetta Code: Convert seconds to compound duration
// This solution is inefficient

function convertSeconds(sec) {
  const week = 7 * 24 * 60 * 60,
    day = 24 * 60 * 60,
    hour = 60 * 60,
    minute = 60,
    seconds = 60;
  const wk = Math.floor(sec / week);
  const d = Math.floor((sec % week) / day);
  const hr = Math.floor(((sec % week) % day) / hour);
  const min = Math.floor((((sec % week) % day) % hour) / minute);
  sec = (((sec % week) % day) % hour) % minute;
  const arr = [
    [wk, " wk"],
    [d, " d"],
    [hr, " hr"],
    [min, " min"],
    [sec, " sec"],
  ];
  let str = "",
    i = 0;
  for (i; i < arr.length; i++) {
    if (!arr[i][0]) {
      arr.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += " " + arr[i][0] + arr[i][1] + ",";
      continue;
    }
    str += " " + arr[i][0] + arr[i][1];
  }
  return str.trim();
}

//Rosetta Code: Sum digits of an integer

function sumDigits(n) {
  let l = n.length,
    sum = 0;
  for (let i = 0; i < l; i++) {
    const c = n.charCodeAt(i);
    if (c < 58) {
      sum += +n[i];
      continue;
    }
    if (c < 91) {
      sum += c - 55;
      continue;
    }
    sum += c - 87;
  }
  return sum;
}

//Rosetta Code: Sum digits of an integer
// Using ES6
function sumDigits(n) {
  return n.split("").reduce((prev, curr) => {
    const c = curr.charCodeAt(0);
    return prev + (c < 58 ? +curr : c < 91 ? c - 55 : c - 87);
  }, 0);
}

// Rosetta Code: Define a primitive data type

function Num(n) {
  if (isNaN(n)) {
    throw new TypeError("Not a Number");
  }
  if (n < 1 || n > 10) {
    throw new TypeError("Out of range");
  }
  return new Number(n);
}

//Rosetta Code: Loop over multiple arrays simultaneously

function loopSimult(A) {
  return A[0].map((v, i) => {
    return A.reduce((prev, curr) => {
      return prev + curr[i];
    }, "");
  });
}

//Rosetta Code: Harshad or Niven series
// Optimise for general case
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined,
  };
  let i = 1;
  while (res.firstTwenty.length < 20) {
    if (i.toString().length < 2) {
      res.firstTwenty.push(i);
      i++;
      continue;
    }
    const sum = i
      .toString()
      .split("")
      .reduce((prev, curr) => {
        return prev + +curr;
      }, 0);
    if (!(i % sum)) {
      res.firstTwenty.push(i);
    }
    i++;
  }
  i = 1001;
  while (!res.firstOver1000) {
    const sum = i
      .toString()
      .split("")
      .reduce((prev, curr) => {
        return prev + +curr;
      }, 0);
    if (!(i % sum)) {
      res.firstOver1000 = i;
      break;
    }
    i++;
  }

  return res;
}

//Rosetta Code: Lychrel numbers
// Solution is incorrect

function isLychrel(n) {
  for (let i = 1; i <= 500; i++) {
    n = n + +n.toString().split("").reverse().join("");
    if (n.toString() === n.toString().split("").reverse().join("")) {
      return true;
    }
  }
  return false;
}

//Rosetta Code: Long multiplication
// Optimise this code
function mult(strNum1, strNum2) {
  const a = strNum1,
    b = strNum2;
  let r = 0,
    q = 0,
    arr = []; //Product store
  for (let i = b.length - 1; i >= 0; i--) {
    const str = "";
    //Shifts first digit of product to appropriate position
    str = str.padEnd(b.length - 1 - i, "0");
    for (let j = a.length - 1; j >= 0; j--) {
      const pdt = +b[i] * +a[j] + q;
      r = pdt % 10;
      q = Math.floor(pdt / 10);
      if (j === 0) {
        str = pdt + str;
        //Sets quotient and remainder to 0 after multiplying first number
        //by a digit of the second number
        r = 0;
        q = 0;
      } else {
        str = r + str;
      }
    }
    arr.push(str);
  }
  //r: remainder, q:quotient
  r = 0;
  q = 0;
  let ans = "",
    lastStr = arr[arr.length - 1];
  for (let j = lastStr.length - 1; j >= 0; j--) {
    let sum = q;
    arr.forEach((v, i) => {
      if (v.length < lastStr.length) {
        v = v.padStart(lastStr.length, "0");
        //Makes all products same length
      }
      sum += +v[j];
    });
    r = sum % 10;
    q = Math.floor(sum / 10);
    if (j === 0) {
      ans = sum + ans; //Not sum += ans
    } else {
      ans = r + ans;
    }
  }
  return ans;
}

// Rosetta Code: Fibonacci sequence
// Take first three terms as 1, 1 and 2
// Needs to be optimized
// Try using recursion though it is slow

function fibonacci(n) {
  const cache = [0, 1, 1];
  if (n < 3) {
    return cache[n];
  }
  while (cache.length <= n) {
    const len = cache.length;
    cache.push(cache[len - 1] + cache[len - 2]);
  }
  return cache[cache.length - 1];
}

//Rosetta Code: Longest string challenge
function longestString(strings) {
  let max = 0;
  strings.forEach((val) => {
    if (val.length > max) {
      max = val.length;
    }
  });
  return strings.filter((val) => val.length === max);
}

// Rosetta Code: FizzBuzz
function fizzBuzz() {
  const arr = [];
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
      continue;
    } else if (i % 3 === 0) {
      arr.push("Fizz");
      continue;
    } else if (i % 5 === 0) {
      arr.push("Buzz");
      continue;
    }
    arr.push(i);
  }
  return arr;
}

//Rosetta Code: JortSort
//Array.prototype.sort() sorts array in place and returns the sorted array
// Clone the original array and sort in place before comparing
function jortsort(array) {
  const clone = [...array].sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== clone[i]) {
      return false;
    }
  }
  return true;
}

//Rosetta Code: Sorting algorithms/Bead sort
// This doesn't sort in place. Implement the same algorithm modifying the input array
// https://en.wikipedia.org/wiki/Bead_sort
//https://mathworld.wolfram.com/Bead-Sort.html
function beadSort(arr) {
  const poles = new Array(Math.max(...arr)).fill(0),
    returnArr = [];
  for (const e of arr) {
    for (let i = 0; i < e; i++) {
      poles[i] += 1;
    }
  }
  for (let i = arr.length; i > 0; i--) {
    let c = 0;
    for (let j = 0; j < poles.length; j++) {
      if (poles[j] === i) {
        c += 1;
        poles[j]--;
      }
    }
    returnArr.push(c);
  }
  return returnArr;
}

//Rosetta Code: Iterated digits squaring
function iteratedSquare(n) {
  while (true) {
    if (n === 1 || n === 89) {
      break;
    }
    n = n
      .toString()
      .split("")
      .reduce((prev, curr) => {
        return +prev + (+curr) ** 2;
      }, 0);
  }
  return n;
}

//Rosetta Code: Deepcopy
// Though the solutions below pass the tests, they don't do a deep copy of an object
// Read more about deep copy at:
//https://flaviocopes.com/how-to-clone-javascript-object/
//https://stackoverflow.com/questions/122102

function deepcopy(obj) {
  return Object.assign({}, obj);
}

function deepcopy(obj) {
  return { ...obj };
}

//Rosetta Code: Sort disjoint sublist
//Find another way of solving the challenge though this solution is correct
function sortDisjoint(values, indices) {
  const arr = [];
  for (const e of indices) {
    arr.push(values[e]);
  }
  indices.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = arr[i];
  }
  return values;
}

//Rosetta Code: Sort an array of composite structures
// Find a way of sorting without using Array.prototype.sort

function sortByKey(arr) {
  return arr.sort((a, b) => a.key - b.key);
}

//Rosetta Code: Accumulator factory

function accumulator(sum) {
  return function (arg) {
    return (sum += arg);
  };
}

//Rosetta Code: General FizzBuzz
function genFizzBuzz(rules, num) {
  let result = "";
  rules.forEach((rule) => {
    if (!(num % rule[0])) {
      result += rule[1];
    }
  });
  return result ? result : result + num;
}

//Rosetta Code: Look-and-say sequence
function lookAndSay(str) {
  let ans = "",
    i = 0;
  while (i < str.length) {
    let sub = str[i],
      j = i + 1;
    inner: for (j; j < str.length; j++) {
      if (sub[0] !== str[j]) {
        break inner;
      }
      sub += str[j];
    }
    ans += sub.length + sub[0];
    i = j;
  }
  return ans;
}

// Rosetta Code: Circles of given radius through two points
// Read more about how to solve this challenge at:
//http://mathforum.org/library/drmath/view/53027.html#:~:text=The%20distance%20between%20(x1%2C%20y1,point%20we're%20looking%20for.

function getCircles(...args) {
  if (!args[2]) {
    return "Radius Zero";
  }
  const {
    0: { 0: x1, 1: y1 },
    1: { 0: x2, 1: y2 },
    2: radius,
  } = args;
  const distanceApart = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  if (distanceApart > radius * 2) {
    return "No intersection. Points further apart than circle diameter";
  } else if (distanceApart === radius * 2) {
    return [(x1 + x2) / 2, (y1 + y2) / 2];
  }
  if (x1 === x2 && y1 === y2) {
    return "Coincident point. Infinite solutions";
  }
  //Normalized Mirror Line directions
  const xDirection = (y1 - y2) / distanceApart;
  const yDirection = (x2 - x1) / distanceApart;
  //Heigth of center above mid-point of Line joining points 1 and 2
  const height = Math.sqrt(radius ** 2 - (distanceApart / 2) ** 2);
  const c1x = (x1 + x2) / 2 + height * xDirection;
  const c1y = (y1 + y2) / 2 + height * yDirection;
  const c2x = (x1 + x2) / 2 - height * xDirection;
  const c2y = (y1 + y2) / 2 - height * yDirection;
  return [
    [
      Math.round(c1x * 10000, c1y * 10000) / 10000,
      Math.round(c1y * 10000, c1y * 10000) / 10000,
    ],
    [
      Math.round(c2x * 10000, c2y * 10000) / 10000,
      Math.round(c2y * 10000, c2y * 10000) / 10000,
    ],
  ];
}

// Rosetta Code: CUSIP

function isCusip(s) {
  if (s.length < 8) {
    return false;
  }
  const len = s.length,
    lastChar = s[len - 1];
  let sum = 0;
  for (let i = 0; i < len - 2; i++) {
    let c,
      char = s[i];
    if (Number.isInteger(+char)) {
      c = +char;
    } else if (char.length === 1 && char.match(/[a-z]/i)) {
      c = char.toLowerCase().charCodeAt(0) - 96 + 9;
    } else if (char === "*") {
      c = 36;
    } else if (char === "@") {
      c = 37;
    } else if (char === "#") {
      c = 38;
    }
    if ((i + 1) % 2 === 0) {
      c = c * 2;
    }
    sum += Math.floor(c / 10) + (c % 10);
  }

  return (10 - (sum % 10)) % 10 === +lastChar;
}

//Rosetta Code: Equilibrium index

function equilibrium(a) {
  const eqIndices = [];
  for (let i = 0; i < a.length; i++) {
    const first = a.slice(0, i);
    const second = a.slice(i + 1);
    const sumFirst = first.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    const sumSecond = second.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    if (sumFirst === sumSecond) {
      eqIndices.push(i);
    }
  }
  return eqIndices;
}

// Rosetta Code: Babbage problem

function babbage(babbageNum, endDigits) {
  let flag = true;
  let i = 100; // Math.sqrt(269696) = 519.3226357477594;
  while (flag) {
    if (+(i * i).toString().slice(-6) === endDigits) {
      return i;
    }
    i++;
  }
}

//Rosetta Code: Element-wise operations
// Challenge description isn't clear about scalar-matrix operation
// Not all tests are passing

function operation(op, arr1, arr2) {
  op =
    op === "m_add"
      ? "+"
      : op === "m_sub"
      ? "-"
      : op === "m_mult"
      ? "*"
      : op === "m_div"
      ? "/"
      : "**";
  return arr1.map((v, i) => {
    return v.map((w, j) => {
      return eval(w + op + arr2[i][j]);
    });
  });
}

//Rosetta Code: Split a character string based on change of character

function split(str) {
  let arr = [],
    i = 0;
  while (i < str.length) {
    let sub = str[i],
      j;
    inner: for (j = i + 1; j < str.length; j++) {
      if (sub[0] !== str[j]) {
        break inner;
      }
      sub += str[j];
    }
    arr.push(sub);
    i = j;
  }
  return arr;
}

// Rosetta Code: Abundant, deficient and perfect number classifications
// Potential infinite loop according to FCC test. Find a way of optimising it

function getDPA(num) {
  const arr = [0, 0, 0];
  const P = (n) => {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum < n ? "deficient" : sum === n ? "perfect" : "abundant";
  };
  for (let j = 1; j <= num; j++) {
    P(j) === "deficient" ? arr[0]++ : P(j) === "perfect" ? arr[1]++ : arr[2]++;
  }
  return arr;
}

//Rosetta Code: Josephus problem
// Solution incomplete

function josephus(init, kill) {
  const prisoners = new Array(init).fill(1).map((v, i) => {
    return { N: i, isAlive: true };
  });

  while (prisoners.length > 1) {
    for (let i = 0; i < prisoners.length; i++) {
      if (prisoners.N === kill) {
        prisoners.splice(i, 1);
        k += 2;
      }
    }
  }
}

//Rosetta Code: Vector dot product
//This solution appears to be incorrect though it passess the tests

function dotProduct(...vectors) {
  if (!vectors.length) {
    return null;
  }

  const acc = new Array(vectors[0].length).fill(1);

  for (let i = 0; i < vectors.length; i++) {
    for (let k = 0; k < vectors[i].length; k++) {
      acc[k] *= vectors[i][k];
    }
  }

  const sum = acc.reduce((prev, curr) => prev + curr, 0);
  if (isNaN(sum)) {
    return null;
  }
  return sum;
}

//Rosetta Code: Last letter-first letter
//Solution incorrect. Doesn't take into consideration words starting with same letter

function findLongestChain(items) {
  const final = [];
  let longest = 0;
  for (let i = 0; i < items.length; i++) {
    const clone = [...items];
    clone.splice(i, 1);
    const arr = [items[i]];
    for (let j = 0; j < clone.length; j++) {
      let currWord = arr[arr.length - 1];
      let nextWord = clone[j];
      let lastLetter = currWord[currWord.length - 1];
      let firstLetter = nextWord[0];
      if (lastLetter === firstLetter) {
        arr.push(nextWord);
        clone.splice(j, 1);
        j = -1;
      }
    }
    final.push(arr);
    if (arr.length > longest) {
      longest = arr.length;
    }
  }

  return final.find((v) => v.length === longest);
}

//Rosetta Code: Word wrap
//This solution is incorrect

function wrap(text, limit) {
  let lines = Math.ceil(text.length / limit),
    str = "";
  for (let i = 1; i <= lines; i++) {
    str += text.slice((i - 1) * limit, i * limit) + "\n";
  }
  return str;
}

//Rosetta Code: Date manipulation
//This solution doesn't handle day change therefore incorrect

function add12Hours(dateString) {
  let [m, d, y, t, z] = dateString.split(" ");
  m = new Date(Date.parse(m + " 1, 2020")).getMonth();
  let min = parseInt(t.split(":")[0], 10);
  let sec = parseInt(t.split(":")[1], 10);
  let date = new Date(+y, m, +d, min, sec);
  date = new Date(date.getTime() + 12 * 60 * 60 * 1000);
}
