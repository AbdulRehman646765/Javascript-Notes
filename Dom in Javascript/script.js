// Selecting Element in JavaScript................................................................................................
// // Finding Element by Id........................................................
// const findElementById = document.getElementById("main-head")


// // Finding Element by Tag Name................................................... 
// const findElementByTagName = document.getElementsByTagName("img")


// // Finding Element by Class Name.................................................
// const findElementByClassName = document.getElementsByClassName("first-head")


// Finding Element by CSS selectors.................................................
// // QuerySelector().............................
// const findElementByClass = document.querySelector(".first-head")
// const findElementById = document.querySelector("#main-head")

// // QuerySelectorAll().............................
// const findElementByCssSelector = document.querySelectorAll("h1")


// Finding Element by Nested selector....................................................
// const nestedSelector = document.querySelectorAll("ul li")


// Finding Element by Attribute selector....................................................
// const attributeSelector = document.querySelectorAll("[alt]")


// // Change Image....................................................................................
// const changeImage = document.querySelectorAll("img")

// const imagesUrl = [
//     "https://images.unsplash.com/photo-1543218241-f5f4e1cbf4e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     "https://images.unsplash.com/photo-1514908335854-3721e1cf3e8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     "https://images.unsplash.com/photo-1538941214074-9b578e573632?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ]

// changeImage[0].src = imagesUrl[0]
// changeImage[1].src = imagesUrl[1]
// changeImage[2].src = imagesUrl[2]

//  for(let i = 0; i< changeImage.length; i++){
//     changeImage[i].src = imagesUrl[i]
//  }


// Difference Between InnerText and InnerContent..........................................................
// const para = document.querySelector("p")
// console.log(para.innerText);

// const para = document.querySelector("p")
// console.log(para.textContent);


// GetAttribute and SetAttribute..........................................................................

// Get Attributes..........................................
// const h1 = document.querySelector("h1")
// console.log(h1.getAttribute("class"));

// const img = document.querySelector("img")
// console.log(img.getAttribute("src"));

// Set Attributes..........................................
// const h1 = document.querySelector("h1")
// console.log(h1.setAttribute("id", "main-heading"));

// const img = document.querySelector("img")
// console.log(img.setAttribute("class", "pic-style"));