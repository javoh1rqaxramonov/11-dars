// 1-masala

// function getLastChar(str) {
//     if (str.length === 0) {
//       return null; 
//     } else {
//       return str.charAt(str.length - 1);
//     }
//   }
  
//   let nameStr  = "javohir";
//   console.log(getLastChar(nameStr)); 

// 2-masala

// function getMiddleChar(str) {
//     let length = str.length;
//     if (length % 2 === 0) {
//       return str.substr(length / 2 - 1, 2);
//     } else {
//       return str.charAt(Math.floor(length / 2));
//     }
//   }
  
//   let Str1 = "javohir";
//   console.log(getMiddleChar(Str1)); 

// 3-masala 

// function getFirstCharCode(str) {
//     return str.charCodeAt();
//   }
  
//   let str = "javohir";
//   console.log(getFirstCharCode(str));

// 4-masala

// function getStringLengthDescription(str) {
//     if (str.length > 10) {
//       return "Uzoq string";
//     } else {
//       return "Qisqa string";
//     }
//   }
  
//   let str = "hayir";
  
//   console.log(getStringLengthDescription(str)); 

// 5-masala

// function getCharCodes(str) {
//     let charCodes = [];
//     for (let i = 0; i < str.length; i++) {
//       charCodes.push(str.charCodeAt(i));
//     }
//     return charCodes;
//   }
  
//   let str = "hayir";
//   console.log(getCharCodes(str)); 

// 1-masala

// function getFirstThreeChars(str) {
//     return str.slice(0, 3);
//   }
  
//   // Misol:
//   var exampleString = "hayir";
//   console.log(getFirstThreeChars(exampleString)); 

// 2-masala 

// function getLastFiveChars(str) {
//     return str.slice(-5);
//   }
  
//   let string = "ozbekiston";
//   console.log(getLastFiveChars(string));

// 3-masala

// function getMiddleChars(str) {
//     let length = str.length;
//     if (length % 2 === 0) {
//       return str.substring(length / 2 - 1, length / 2 + 1);
//     } else {
//       return str.charAt(Math.floor(length / 2));
//     }
//   }
  
//   let str = "hayir";
//   console.log(getMiddleChars(str)); 

// 4-masala

// function getThreeCharsFromFifthIndex(str) {
//     if (str.length >= 8) {
//       return str.substr(5, 3);
//     } else {
//       return " yetarli emas";
//     }
//   }
  
//   let str = "lorempicsum";
//   console.log(getThreeCharsFromFifthIndex(str));

// 5-masala

// function getFirstTenChars(str) {
//     if (str.length >= 10) {
//       return str.substring(0, 10);
//     } else {
//       return " yetarli emas";
//     }
//   }
//   let str = "lorempicsum";
//   console.log(getFirstTenChars(str)); 

// 1-masala 

// function convertToUpperCase(str) {
//     return str.toUpperCase();
//   }
  
//   let nameStr = "javOhir";
//   console.log(convertToUpperCase(nameStr)); 

// 2-masala 

// function convertToLowerCase(str) {
//     return str.toLowerCase();
//   }
  
//   let nameStr = "JAVOHIR";
//   console.log(convertToLowerCase(nameStr)); 

// 3-masala

// function concatStrings(str1, str2) {
//     return str1.concat(str2);
//   }
//   let firstString = "Sardor. ";
//   let secondString = ""Sardor. "";
//   console.log(concatStrings(firstString, secondString));

// 4-masala 

// function trimString(str) {
//     return str.trim();
//   }
  
//   let str1 = "Sardor  .Sardor. " ;
//   console.log(trimString(str1)); 

// 8-masala

// function trimStartString(str) {
//     return str.trimStart();
//   }
  
//   let str = "        javohir";
//   console.log(trimStartString(str));

// 1-masala 

// function repeatString(str, N) {
//     return str.repeat(N);
//   }
  
//   let str = "hayir";
//   console.log(repeatString(str, 3)); 

// 2-masala 
// function replaceAppleWithOrange(str) {
//     return str.replace("apple", "orange");
//   }
//   let str = "I have an apple";
//   console.log(replaceAppleWithOrange(str)); 

// 3-masala

// function replaceFirstSmallAToBigA(str) {
//     return str.replace("a", "A");
//   }
  
//   let str = "apple";

//   console.log(replaceFirstSmallAToBigA(str)); 

// 4-masala

// function replaceAllCatsWithDogs(str) {
//     return str.replace(/cat/g, "dog");
//   }
  
  
//     let str = "I have a cat. My cat is cute.";
//   console.log(replaceAllCatsWithDogs(str)); 

// 5-masala

// function replaceAllSmallEToBigE(str) {
//     return str.replace(/e/g, "E");
//   }
  
//   let str = "elephant";
//   console.log(replaceAllSmallEToBigE(str)); 

// 6-masala

// function splitBySpaces(str) {
//     return str.split(" ");
//   }
  
//   let str = "Hello world";
//   console.log(splitBySpaces(str)); 

// 7-masala

// function splitByCommas(str) {
//   return str.split(",");
// }

// var exampleString = "apple,orange,banana";
// console.log(splitByCommas(exampleString)); 

// 8-masala 
// function splitByEachCharacter(str) {
//     return str.split("");
//   }
  
//   let str = "Hello";
//   console.log(splitByEachCharacter(str)); 

// 9-masala 

// function splitByDelimiter(str, delimiter) {
//     return str.split(delimiter);
//   }
  
//   let str = "apple,orange,banana";
//   let delimiter = ",";
//   console.log(splitByDelimiter(str, delimiter)); 
  

// 1 - masala

// function processString(str) {
//     let strArray = str.split(' ');
//     let newArray = strArray.map(item => item.toUpperCase());
//     let result = newArray.join(', ');
//     return result;
// }
// let testString = "bugun havo juda iliq";
// let processedString = processString(testString);
// console.log(processedString);

// 2 - masala

// function joinArray(arr) {
//     let result = arr.map(String).join("");
//     let totalLength = arr.reduce((acc, curr) => acc + String(curr).length, 0);
//     return result + totalLength;
// }
// let arr = [1, 23, 456, 7890];
// let result = joinArray(arr);
// console.log(result);

// 3 - masala

// function clean(arr) {
//   arr = arr.filter((item) => item !== "");
//   let result = arr.join("");
//   return result;
// }
// let arr = ["Salom", "", "hammaga", "", ""];
// let result = clean(arr);
// console.log(result);

// 4 - masala

// function Unicode(str) {
//     let unicodeArray = [];
//     for (let i = 0; i < str.length; i++) {
//         unicodeArray.push(str.charCodeAt(i));
//     }
//     return unicodeArray;
// }
// let str = "Hello";
// let unicodeArray = Unicode(str);
// console.log(unicodeArray)

// 5 - masala

// function reverseArray(arr) {
//     return arr.reverse();
// }
// function ToString(arr) {
//     return reverseArray(arr).join(",");
// }
// const exampleArray = [1, 2, 3, 4, 5];
// const reversed = ToString(exampleArray);
// console.log(reversed);

// 6 -masala

// function padArray(str) {
//     let arr = str.split(" ");
//     let paddedArr = arr.map(element => "0" + element);
//     let result = paddedArr.join(" ");
//     return result;
// }
// let str = "how are you";
// let result = padArray(str);
// console.log(result);

// 7 - masala

// function lowercase(arr) {
//     let newArr = arr.map(item => item.toLowerCase());
//     return newArr.join("-");
// }
// const arr = ["Apple", "Banana", "Orange"];
// console.log(lowercase(arr));

// 8 - masala

// function joinArray(str) {
//     return str.split(',').join('xyz');
// }

// let testStr = "abc,def,ghi,jkl";
// let result = joinArray(testStr);
// console.log(result);

// 9 - masala

// function sumArray(arr) {
//   let totalLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     totalLength += arr[i].length;
//   }
//   return totalLength.toString();
// }
// let arr = ["Hello", "bye", "good", "nice"];
// console.log(sumArray(arr));

// 10 - masala

// function squareCharacters(str) {
//     let characters = str.split('');
//     let squared = characters.map(char => Math.pow(Number(char), 2));
//     let result = squared.join(' ');
//     return result;
// }
// let testString = "hello";
// console.log(squareCharacters(testString));
  
  
  
  
  
  
  
  
  


  
  
  
  
  
  

  
  
  
  
  