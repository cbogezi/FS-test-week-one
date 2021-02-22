/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.


Test cases:
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
------------------*/

// // start copied from internet
// function isPalindrome(num) {
//     // Finding the appropriate factor to extract the fisrt digit
//     let factor = 1;
//     while (num / factor >= 10){
//         factor *= 10;
//     }
//     while (num) {
//         let first = Math.floor(num / factor);
//         let last = num % 10;
//         // If first and last digit not same return false
//         if (first != last){
//             return false;
//         }
//         // Removing the first and last digit from number
//         num = Math.floor ((num % factor) / 10);
//         // Reducing factor by a factor of 2 as 2 digits are dropped
//         factor = factor / 100;
//     }
//     return true;
// };
// console.log(isPalindrome(123241));
// console.log(isPalindrome(12321));
// console.log(isPalindrome(-12321));
// console.log(isPalindrome(1)); // true
// console.log(isPalindrome(84146)); // false
// console.log(isPalindrome(12)); // false


//REVIEW OF TEST in class
function isPalindrome(num) {
  //no special case for negative numbers or single digits
  //step 1: convert the number to string
  //step 2: reverse number
  //step 3: return true is they match

//solution 1
//   let numstr = num.toString(); // there are some other ways of converting a number into a string e.g. putting it in `${num}`
//   let revnumstr = numstr.split('').reverse().join('')
//   if (revnumstr === numstr) { //items in parenthesis can also be boolean. so we can reduce it so that it is less verbose. 
//     return true;
//       } else {
//         return false; // if return fals is not called, it'll return undefined 
//       }
// }

// solution 2
// let numstr = num.toString(); 
//   let revnumstr = numstr.split('').reverse().join('')
//   return (revnumstr === numstr)  
  
// }

//solution 3
let numstr = num.toString(); 
  return numstr === numstr.split('').reverse().join('');
  
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false


/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
------------------*/

//while it is hard to write psuedo code for this one, one of the ways to think about this is first to be able to print all the numbers
//and then when all the numbers are printed, to add the numbers.
//from the example we can see that we have 3 levels of nested arrays, and therefore we are going to need nested loops.
//it helps to take small steps/codes in solving this kind of challenge.

function addGridItems(grid) {
  let sum = 0;
    for (let i=0; i<grid.length; i++) { //1st loop
        for (let j=0; j<grid[i].length; j++){
            for (let k=0; k<grid[i][j].length; k++) {
              // console.log(grid[i][j][k]); instead of console.log, we want to return the current number to the sum
              sum += grid[i][j][k]
            }
        }
    } 
      return sum;
  }

const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50


/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json

Examples:
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
------------------*/

function createFileName (name, type) {
//pseudocode: convert file name to Lower Case
//convert spaces to underscores (various ways to do this: 1. using array expression;
    // 2. loop through the string and everytime you see a space replace it; 3. use array split and join)
//add the right extension (e.g. using if, else statements, or a Switch statement)

let lcname = name.toLowerCase();
let fileName = lcname.split(' ').join('_');

//or use replaceAll

// let lcname = name.toLowerCase().replaceAll(' ', '_'); //this is called chaining; putting several commands together

//using the if else statement
// if (type === 'PDF') {
//   fileName += '.pdf';
// } else if (type === 'image') {
//   fileName += '.png';
// } else {
//   fileName += '.json';
// }
// return fileName;
// }

//2ndmethod using a switch statement can be used for when we have a
// have a variable that we want to compare to another if... else:
//switch will compare type to any of the cases and if none matches then it will bring up nothing.

switch (type) { //first put the variable that we want to compare to other things
  case 'PDF': //we have a number of cases, we put the number of cases that we want to use for each comparison
    fileName += '.pdf';
    break;//break is used to move on to the next sentence, otherwise it will add all the ext to the fileName
  case 'image':
    fileName += '.png';
    break;
  case 'JSON':
    fileName += '.json';
    break;
  default: //default is optional but can be useful sometimes to catch cases that don't match any of the options
    break;
}

return fileName;

}

console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"


/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
------------------*/
let nums = [99, 96, 93, 90, 88]; //create an array of the numbers
//to print on one line, get the array to join..
//i want to print 5 numbers, then 4, then 3, then 2, then 1
//therefore I want a loop that starts from the length of the array and decremets down to the beginning of the array

// for (let i=nums.length; i>0; i--) { //so we are starting t the last elememnt, while i >= 0 bse we are decremnting and want to stop once we have done the 0th element

//   //console.log( nums.slice(0, i) ); //this works but prints the pattern as an array. 
//   //We should take it out of array mode by printing it as a string
//   console.log( nums.slice(0,i).join(' ') ); //nums.slice will return the slice/portion, and .join will convert it into a string.
// }

// nums.slice(0, 4) // takes to arguments in (the starting position, and the position after) i.e. will print 4 elements at locations 0,1,2,3


//another solution using while. given that this is not required to be an array, we could treat it as a pattern.
//for loop = known ahead of time for when the loop should stop; while loop = unknown end of stop, i.e. until the test stops.

while (nums.length > 0) {
  console.log( nums.join(' ') );
  nums.pop();
}
//