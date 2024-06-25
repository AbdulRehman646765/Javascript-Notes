// String Methods & Properties
// Length Property Define..............................................

// const username = "Abdul Rehman";
// const nameLengthDefine = username.length;
// console.log(nameLengthDefine); // Length Result is "12"

// const userEmail = "abdulofficial187@gmail.com";
// const emailLengthDefine = userEmail.length;
// console.log(emailLengthDefine); // Length Result is "26"

// const userAddress = "H# 3C/5, StarColony, Bhimbher Rode, Gujrat";
// const addressLengthDefine = userAddress.length;
// console.log(addressLengthDefine); // Length Result is "42"


// Methods (Without Argument)........................................
// toUpperCase() Define ...............................

// const username = "Abdul Rehman";
// const nameUpperCase = username.toUpperCase()
// console.log(nameUpperCase); // The Result is "ABDUL REHMAN"


// toLowerCase() Define ...............................

// const username = "Abdul Rehman";
// const nameLowerCase = username.toLowerCase()
// console.log(nameLowerCase); // The Result is "abdul rehman"


// trim() Define ...............................
// Removed Whitespaces.

// const username = "     Abdul Rehman     ";
// const nameTrim = username.trim()
// console.log(nameTrim); // The Result is "Abdul Rehman"


// trimStart() Define ...............................
// Removed Whitespaces from The Start.

// const username = "   Abdul Rehman";
// const nameTrimStart = username.trimStart()
// console.log(nameTrimStart); // The Result is "   Abdul Rehman" to "Abdul Rehman"


// trimEnd() Define ...............................
// Removed Whitespaces from The End.

// const username = "Abdul Rehman    ";
// const nameTrimEnd = username.trimEnd()
// console.log(nameTrimEnd); // The Result is "Abdul Rehman    " to "Abdul Rehman"


// Methods (With Argument)............................................
// includes() Define...............................

// is condition main hum yeh pata laga sakty hain ky is string main jo b hum search karyn wo include hai yan hai. or is ka result "True" usi zoorat main mily ga jesa us main typeing kia ho ga. or ager kuch b galat type kia ty result "False" aye ga.
// const username = "My Name is Abdul Rehman.";
// const includeNameTrue = username.includes("Abdul Rehman")
// console.log(includeNameTrue); // The Result is True
// const includeNameFalse = username.includes("Abdur Rehman")
//  console.log(includeNameFalse); // The Result is False


// indexOf() Define.................................

// const username = "Hello"; // is main 5 char hain or is ko count is tarah karyn gy (0,1,2,3,4)
// const indexOfName = username.indexOf("e");
// console.log(indexOfName); // The Result is "1" | wesy tu "e" 2sry number par hai or javaScript main choonky "0" sy count kia jata hai is lye yeh "1" number par hai.


// replace() Define.................................

// const username = "0341 1264622"
// const replaceName = username.replace("0341 1264622", "0340 3148438")
// console.log(replaceName); // The Result is "0340 3148438"


// replaceAll() Define.................................

// let text = "I love Dogs. Dogs are very easy to love. Dogs is a Beautiful Animal."
// text = text.replaceAll("Dogs", "Cats")
// console.log(text); // The Result is "I love Cats. Cats are very easy to love. Cats is a Beautiful Animal."


// concat() Define.................................

// const username = "My Name is "
// const firstName = "Abdul"
// const LastName = "Rehman"
// const fatherName = "Muhammad Mehdi"
// const mixString = username.concat(firstName, " " , LastName, "." , " My Father Name is ", fatherName, ".");
// console.log(mixString); // The Result is "My Name is Abdul Rehman. My Father Name is Muhammad Mehdi."


// padStart() Define.................................

// const accountNumber = 8643
// const hideAccount = "8643".padStart(16, "*")
// console.log(hideAccount); // The Result is "************8643"


// padEnd() Define...................................

// const accountNumber = 8643
// const hideAccount = "8643".padEnd(16, "*")
// console.log(hideAccount); // The Result is "8643************"


// charAt() Define....................................
// yeh method "indexOf()" ka opposite hai

// let text = "Hello";
// // let defineChar = text.charAt(1)
// defineChar = text[0] // The result is "H"
// console.log(defineChar); // The Result is "e"


// charCodeAt() Define................................

// const text = "Hello"
// const defineCharCode = text.charCodeAt(0)
// console.log(defineCharCode); // The Result is "72"


// split() Define.....................................

// const username = "My Name is Abdul Rehman";
// const splitName = username.split(" ");
// console.log(splitName); // The result is "['My', 'Name', 'is', 'Abdul', 'Rehman']"

// const text1 = "Hello";
// const defineCharText1 = text1.charAt(1)
// console.log(defineCharText1); // The Result is "e"

// const text2 = "Hello";
// const defineCharText2 = text2[0] 
// console.log(defineCharText2); // The result is "H"
  

// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
console.log(h1);
h1[1].setAttribute("class", "title-style")
h1[2].setAttribute("class", "title-style")
h1[3].setAttribute("class", "title-style") 
