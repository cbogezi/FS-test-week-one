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

function isPalindrome(num) {
    // Finding the appropriate factor to extract the fisrt digit
    let factor = 1;
    while (num / factor >= 10){
        factor *= 10;
    }
    while (num) {
        let first = Math.floor(num / factor);
        let last = num % 10;
        // If first and last digit not same return false
        if (first != last){
            return false;
        }
        // Removing the first and last digit from number
        num = Math.floor ((num % factor) / 10);
        // Reducing factor by a factor of 2 as 2 digits are dropped
        factor = factor / 100;
    }
    return true;
};
console.log(isPalindrome(123241));
console.log(isPalindrome(12321));
console.log(isPalindrome(-12321));
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false


// start copied from internet
//const isPalindrome = (num) => {
//     // Finding the appropriate factor to extract the fisrt digit
//     let factor = 1;
// }


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

// function addGridItems(grid) {
//     let y = [[1], [2]];

//     let x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
// };

// console.log(addGridItems(y)); // 3
// console.log(addGridItems(x)); // 50


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

function createFileName (str) {
    let letter = ""
    for(i=0; i<str.length; i++){  //looping thru each char in the sentence
      if(str[i] === " "){ //if char is a space...
       letter += "_" + str[i+1].toLowerCase() + str.push(FileExtensionName); //lowercase & concat the next letter & a space & add file extension name
       i++;                              //iterate again to skip over repeating the next letter twice (e.g. WwentTto)
      } else if (str[i] !== " "){  //doesn't seem to work without else if
        letter += str[i];  //if not a space, concat char to string
      }
    } return letter
}
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

//COPIED CODE FROM LOOPING CLASS below:
// function titleCase (str){
//     let letter = ""
//     for(i=0; i<str.length; i++){  //looping thru each char in the sentence
//       if(str[i] === " "){ //if char is a space...
//        letter += " " + str[i+1].toUpperCase(); //uppercase & concat the next letter & a space
//        i++;                              //iterate again to skip over repeating the next letter twice (e.g. WwentTto)
//       } else if (str[i] !== " "){  //doesn't seem to work without else if
//         letter += str[i];  //if not a space, concat char to string
//       }
//     } return letter
//   } 
//   console.log(titleCase("He went to the store."))
//   console.log(titleCase("It's not pretty but it works"))

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
let number = '';

for (let x = 99; x >= 88; x--) {
  number = number + x;
  console.log(number);
}

let rowCount = '';
for (let i = 0; i < names; i++);
