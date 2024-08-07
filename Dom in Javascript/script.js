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


// Change styles using JavaScript..........................................................................
// const allParagraphs = document.querySelectorAll("p")
// allParagraphs[0].style.color = "goldenrod"  
// allParagraphs[1].style.color = "goldenrod"  

// // Apply Style with For loop....................................
// const allStrongTag = document.querySelectorAll("strong")
// for(let i = 0; i < allStrongTag.length; i++){
//     allStrongTag[i].style.color = "goldenrod"
// }

// // Apply Style with For of loop.................................
// for(const tagStyle of allStrongTag){
//     tagStyle.style.textShadow = "0 0 10px white"
// }

// Hum is tarah b style add kar sakty hain jesy hum Css main likhty hain................................
// const allParagraphs = document.querySelectorAll("p")
// for(const paragraphs of allParagraphs){
//     paragraphs.style.cssText = `
//     font-family: "Poppins", sans-serif; 
//     color: white;
//     background-color: ;
//     padding-left: 10px;
//     border-left: 5px solid white; `
// }


// Adding and Removing Classes in JavaScript................................................................
// Add Class Method ...................................................
// const addMethod = document.querySelectorAll("h2")[1].classList.add("title-style")

// Remove Class Method .................................................
// const removeMethod = document.querySelectorAll("h2")[1].classList.remove("title-style")

// Toggle Class Method .................................................
// const toggleMethod = document.querySelectorAll("h2")[1].classList.toggle("title-style")

// const h2 = [document.querySelector(".dom-tree")]
// for (const addMethod of h2) {
//     addMethod.classList.toggle("title-style")
//     console.log(h2);
// }


// Access Parent Sibling & Children Elements using JavaScript..............................................
// // Parent Element................................................
// const test = document.querySelector(".three-to-one")
// console.log(test.parentElement);

// // Children Element...............................................
// const test = document.querySelector(".three-to-one")
// console.log(test.children);

// // Sibling Element................................................
// const test = document.querySelector("[alt='pic20']")
// console.log(test.previousElementSibling);
// console.log(test.nextElementSibling);


// // Remove element using JavaScript.........................................................................
// // Remove() vs RemoveChild()............................................

// // Remove().............................................................
// // const container = document.querySelector(".container")

// const deleteH1 = document.getElementById("h1")
// deleteH1.remove()   

// const deletePara = document.getElementById("p")
// deletePara.remove()   

// const deleteLink = document.getElementById("a")
// deleteLink.remove()

// // RemoveChild().........................................................
// const deleteMyLink = document.querySelector("#a")
// deleteMyLink.parentElement.removeChild(deleteMyLink)

// deleteH1.parentElement.removeChild(deleteH1)







// *****************************************************************************************************
// Headings Style.................................................
    const h1 = document.querySelectorAll("h1");
    // console.log(h1);
    h1[1].setAttribute("class", "title-style")
    h1[2].setAttribute("class", "title-style")
    h1[3].setAttribute("class", "title-style")
    h1[4].setAttribute("class", "title-style") 
    h1[5].setAttribute("class", "title-style")
    h1[6].setAttribute("class", "title-style")
    h1[7].setAttribute("class", "title-style")
    h1[8].setAttribute("class", "title-style") 
    h1[9].setAttribute("class", "title-style")
    h1[10].setAttribute("class", "title-style")
    h1[11].setAttribute("class", "title-style")
    h1[12].setAttribute("class", "title-style") 
    h1[13].setAttribute("class", "title-style") 
    h1[14].setAttribute("class", "title-style") 
    h1[15].setAttribute("class", "title-style") 
    h1[16].setAttribute("class", "title-style") 
    h1[17].setAttribute("class", "title-style") 
    h1[18].setAttribute("class", "title-style") 
    h1[19].setAttribute("class", "title-style") 
     