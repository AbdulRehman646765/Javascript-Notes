// Events in JavaScript....................................................................................

// // Add Event this way..................................................
// function myFuc(){
//     console.log("Clicked on Main Title");
// }
// const mainTitle = document.querySelector(".main-title")
// mainTitle.onclick = myFuc

// // addEventListener() as a Named Function..............................
// function sayHi(){
//     console.log("Clicked on Heading Number Two");
// }
// const h2 = document.querySelector("h2")
// h2.addEventListener('click', sayHi)

// // addEventListener() as a Anonymous Function..........................
// const card = document.querySelector(".card");
// card.addEventListener("click", function () {
//   console.log("Clicked on this Card Number");
// });

// // addEventListener() as a Arrow Function...............................
// const card1 = document.querySelector(".card")
// card1.addEventListener("click", () => {
//     console.log("Clicked on this Card Number");
// })

// Example of addEventListener when Click Button add the New Card..........................
const container = document.querySelector(".container");
const card = document.querySelector(".card");
const reachedHead = document.querySelector(".reached-head");

let count = 1;
card.addEventListener("click", function myCardFun() {
    const newCard = card.cloneNode();
    newCard.classList.remove("add-card");

    newCard.innerText = count;
    count++;
    container.append(newCard);

  // if (count <= 10) {
  //   const newCard = card.cloneNode();
  //   newCard.classList.remove("add-card");

  //   newCard.innerText = count;
  //   count++;
  //   container.append(newCard);
  // } else {
  //   console.log("Your Limit is reached!");
  //   reachedHead.innerText = "Your Cards Limit is reached!";
  // }
});

// // ager cards ko slowly slowly print karna ho, or cards ko 500 print hony ky bad rok dena ho tu .......................
// const intervalId = setInterval(() => {
//   card.click()
//   if(count > 500){
//     clearInterval(intervalId)
//   }
// }, 50)



// for(let i = 1; i <= 100; i++){
//   card.click()
// }

// Form Event and Event Object in JavaScript................................................

// input Event.......................................................
const inputUsername = document.querySelector("#input-username");
const inputUserEmail = document.querySelector("#input-user-email");
const inputPassword = document.querySelector("#input-password");
const inputValueHeading = document.querySelector(".input-value");

let inputValue;
inputUsername.addEventListener("input", (e) => {
  inputValueHeading.innerText = e.target.value;
  inputValue = e.target.value; // input ki value is variable (inputValue) main update hoti rahy gi.
});

let inputPwValue;
inputPassword.addEventListener("input", (e) => {
  inputValueHeading.innerText = e.target.value;
  inputPwValue = e.target.value; // input ki value is variable (inputValue) main update hoti rahy gi.
});

// Change Event.......................................................
// Change event tab fire ho ga jab hum input main type kar ky us ky bahir kahi b click karyn gy
const changeUsername = document.querySelector("#change-username");
const changeUserEmail = document.querySelector("#change-user-email");
const changeValueHeading = document.querySelector(".change-value");

let changeValue;
changeUserEmail.addEventListener("change", (e) => {
  console.log(e.target.value);
  changeValueHeading.innerText = e.target.value;
  changeValue = e.target.value;
});

// Focus Event.......................................................
// Focus event tab fire ho ga jab hum input ky ander click karyn gy.
const focusUsername = document.querySelector("#focus-username");
const focusUserEmail = document.querySelector("#focus-user-email");
const focusValueHeading = document.querySelector(".focus-value");

let focusValue;
focusUsername.addEventListener("focus", (e) => {
  console.log(e.target.value);
  console.log(e.type);
  focusValueHeading.innerText = e.target.value;
  focusValue = e.target.value;
});

// Blur Event.......................................................
// Blur event tab fire ho ga jab hum input ky bahir click karyn gy.
const blurUsername = document.querySelector("#blur-username");
const blurUserEmail = document.querySelector("#blur-user-email");
const blurValueHeading = document.querySelector(".blur-value");

let blurValue;
blurUsername.addEventListener("blur", (e) => {
  console.log(e.target.value);
  console.log(e.type);
  blurValueHeading.innerText = e.target.value;
  blurValue = e.target.value;
});

// Submit Event.......................................................
// Submit event tab fire ho ga jab hum input ky bahir click karyn gy.
const submitUsername = document.querySelector("#submit-username");
const submitUserEmail = document.querySelector("#submit-user-email");
const submitForm = document.querySelector(".submit-form");
const submitValueHeading = document.querySelector(".submit-value");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault(); // is method sy form ka default behavior rok jye ga. form submit hi nai ho ga. page reload hi nai ho ga.
  const myFormData = new FormData(submitForm);
  // console.log(myFormData);
  // console.log(e.type);

  for (const p of myFormData.entries()) {
    console.log(p);
  }
  // console.log(e.target);
  // console.log(e.currentTarget);
  console.log("Form Submitted");
});

// Keyboard events in JavaScript............................................................................

// Keypress event.............................................................
// Keypress event tab fire ho ga jab hum key ko press karyn gy.
const imagineWindowBox1 = document.querySelector(".imagine-win-box-1");
const KeyPress = document.querySelector(".key-h2");

imagineWindowBox1.addEventListener("keypress", (e) => {
  console.log("Code:", e.code);
  console.log("Value:", e.key);
  KeyPress.innerText = e.code;
});

// Keyup event.............................................................
// Keyup event tab fire ho ga jab hum key ko press kar ky chooryn gy. jab tak key ko press kar ky rakhyn gy tu event fire nai ho ga.
const imagineWindowBox2 = document.querySelector(".imagine-win-box-2");
const keyUp = document.querySelector(".key-up-h2");

imagineWindowBox2.addEventListener("keyup", (e) => {
  console.log("Code:", e.code);
  console.log("Value:", e.key);
  keyUp.innerText = e.code;
});

// Mouse events in JavaScript............................................................................

// Mouse Click event...........................................................
const mouseClickBtn = document.querySelector(".mouse-click-btn");
const mouseClick = document.querySelector(".mouse-click-value");

mouseClickBtn.addEventListener("click", (e) => {
  console.log(e);
  mouseClick.innerText = `Event type: ${e.type}`;
});

// Mouse Double Click event...........................................................
const mouseDblclickBtn = document.querySelector(".mouse-dblclick-btn");
const mouseDblclick = document.querySelector(".mouse-dblclick-value");

mouseDblclickBtn.addEventListener("dblclick", (e) => {
  console.log(e);
  mouseDblclick.innerText = `Event type: ${e.type}`;
});

// Mouse Up event...........................................................
const mouseUpBtn = document.querySelector(".mouse-up-btn");
const mouseUp = document.querySelector(".mouse-up-value");

mouseUpBtn.addEventListener("mouseup", (e) => {
  console.log(e);
  mouseUp.innerText = `Event type: ${e.type}`;
});

// Mouse Down event...........................................................
const mouseDownBtn = document.querySelector(".mouse-down-btn");
const mouseDown = document.querySelector(".mouse-down-value");

mouseDownBtn.addEventListener("mousedown", (e) => {
  console.log(e);
  mouseDown.innerText = `Event type: ${e.type}`;
});

// Mouse Enter event...........................................................
const mouseEnterBtn = document.querySelector(".mouse-enter-btn");
const mouseEnter = document.querySelector(".mouse-enter-value");

mouseEnterBtn.addEventListener("mouseenter", (e) => {
  console.log(e);
  mouseEnter.innerText = `Event type: ${e.type}`;
});

// Mouse Leave event...........................................................
const mouseLeaveBtn = document.querySelector(".mouse-leave-btn");
const mouseLeave = document.querySelector(".mouse-leave-value");

mouseLeaveBtn.addEventListener("mouseleave", (e) => {
  console.log(e);
  mouseLeave.innerText = `Event type: ${e.type}`;
});

// Mouse Move event...........................................................
const mouseMoveBtn = document.querySelector(".mouse-move-btn");
const mouseMove = document.querySelector(".mouse-move-value");

mouseMoveBtn.addEventListener("mousemove", (e) => {
  console.log(e);
  mouseMove.innerText = `Event type: ${e.type}`;
});

// Mouse Over event...........................................................
// Mouse Over event child par b apply hota hai.
const mouseOverBtn = document.querySelector(".mouse-over-btn");
const mouseOver = document.querySelector(".mouse-over-value");

mouseOverBtn.addEventListener("mouseover", (e) => {
  console.log(e);
  mouseOver.innerText = `Event type: ${e.type}`;
});

// Mouse sy related events.................................................................................
// Mouse Wheel event...........................................................
// is ko jab hum scroll karyn gy tab fire ho ga.
const mouseWheelBtn = document.querySelector(".mouse-wheel-btn");
const mouseWheel = document.querySelector(".mouse-wheel-value");

mouseWheelBtn.addEventListener("wheel", (e) => {
  console.log(e);
  mouseWheel.innerText = `Event type: ${e.type}`;
});

// Darg event.................................................................
const dragBtn = document.querySelector(".drag-btn");
const dragValue = document.querySelector(".drag-value");

dragBtn.addEventListener("drag", (e) => {
  console.log(e);
  dragValue.innerText = `Event type: ${e.type}`;
});

// // yeh mouse sy related event nai hain.....................................................................

// // Scroll event.................................................................
// document.addEventListener("scroll", (e) => {
//   console.log(e);
// })

// // Touch Start event.................................................................
// const touchStartBtn = document.querySelector(".touch-start-btn");
// const touchStart = document.querySelector(".touch-start-value");

// touchStartBtn.addEventListener("touchstart", (e) => {
//   console.log(e);
//   touchStart  .innerText = `Event type: ${e.type}`;
// });

// // Touch End event.................................................................
// const touchEndBtn = document.querySelector(".touch-end-btn");
// const touchEnd = document.querySelector(".touch-end-value");

// touchEndBtn.addEventListener("touchend", (e) => {
//   console.log(e);
//   touchEnd  .innerText = `Event type: ${e.type}`;
// });

// // Touch Move event.................................................................
// const touchMoveBtn = document.querySelector(".touch-move-btn");
// const touchMove = document.querySelector(".touch-move-value");

// touchMoveBtn.addEventListener("touchmove", (e) => {
//   console.log(e);
//   touchMove  .innerText = `Event type: ${e.type}`;
// });

// ager hum ny esa event lagana ho jo desktop or mobail dono par fire ho tu hum PointerEvent lagayn gy
// Pointer event....................................................................
const pointerMoveBtn = document.querySelector(".pointer-move-btn");
const pointerMove = document.querySelector(".pointer-move-value");

pointerMoveBtn.addEventListener("pointermove", (e) => {
  console.log(e);
  pointerMove.innerText = `Event type: ${e.type}`;
});

// Event Bubbling and Event Capturing in JavaScript........................................................
// Event Bubbling........................................
const goldenBox = document.querySelector(".golden");
const grayBox = document.querySelector(".gray");
const whiteBox = document.querySelector(".white");

goldenBox.addEventListener("click", (e) => {
  console.log("3. Golden Event Listener");
});

grayBox.addEventListener("click", (e) => {
  console.log("2. Gray Event Listener");
});

whiteBox.addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log("1. White Event Listener");
});

// Event Capturing........................................
const goldenCaptureBox = document.querySelector(".golden-capture");
const grayCaptureBox = document.querySelector(".gray-capture");
const whiteCaptureBox = document.querySelector(".white-capture");

goldenCaptureBox.addEventListener(
  "click",
  (e) => {
    console.log("4. Golden Event Listener");
  },
  { capture: true }
);

grayCaptureBox.addEventListener(
  "click",
  (e) => {
    console.log("5. Gray Event Listener");
    // e.stopPropagation()
  },
  { capture: true }
);

whiteCaptureBox.addEventListener(
  "click",
  (e) => {
    console.log("6. White Event Listener");
  },
  { capture: true }
);

// ager hum ny kisi event ko sirf aik hi dafa chalana ho tu hum event ko {once: true} kar dyn gy.
// Once Time run event...............................................................
const oneTimeBtn = document.querySelector(".onetime-btn");
const oneTimeValue = document.querySelector(".onetime-value");

oneTimeBtn.addEventListener(
  "click",
  (e) => {
    oneTimeValue.innerText = `Event type: ${e.type}`;
  },
  { once: true }
);

// *****************************************************************************************************
// Headings Style.................................................
const h1 = document.querySelectorAll("h1");
// console.log(h1);
h1[1].setAttribute("class", "title-style");
h1[2].setAttribute("class", "title-style");
h1[3].setAttribute("class", "title-style");
h1[4].setAttribute("class", "title-style");
h1[5].setAttribute("class", "title-style");
h1[6].setAttribute("class", "title-style");
h1[7].setAttribute("class", "title-style");
h1[8].setAttribute("class", "title-style");
h1[9].setAttribute("class", "title-style");
