// const h1 = document.querySelector("h1")
// const container = document.querySelector(".container")
// const card = document.querySelector(".card")

// for(let i = 2; i <= 21; i++){
// const newCard = card.cloneNode()
// newCard.innerText = i
// container.appendChild(newCard)
// }

// const h1 = document.querySelector("h1")
// const container = document.querySelector(".container")
// const img = document.querySelector("img")

// const pokoPics = document.querySelector("img")
// for(let i = 2; i <= 1000; i++){
//     const imgPack = pokoPics.cloneNode()
//     imgPack.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(imgPack)
// }

// // Create Element in javaScript...........................................................................
// const h1 = document.querySelector("h1")
// const container = document.querySelector(".container")

// // const image = document.createElement("img")
// // image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
// // container.appendChild(image)

// for(let i = 2; i <= 100; i++){
//     const newImg = document.createElement("img")
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     // image.classList.add("border")
//     // image.id = "my-pic"
//     container.appendChild(newImg)
// }

// Create Element.....................................................................................................

// For Loop........................................................
// const container = document.querySelector(".container");

// for (let i = 1; i <= 100; i++) {
//   const imgBox = document.createElement("div");
//   imgBox.classList.add("img-box");

//   const newImage = document.createElement("img");
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//   const heading = document.createElement("h3");
//   heading.innerText = i;

//   imgBox.append(newImage, heading);

//   container.appendChild(imgBox);
// }


// For Loop Short way........................................................
// const container = document.querySelector(".container");

// for (let i = 1; i <= 40; i++) {
//   const imgBox = document.createElement("div");
//   imgBox.classList.add("img-box");
//   const myHtml = ` 
//   <div class="img-box">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//       <h3>${i}</h3> `;
//   imgBox.innerHTML = myHtml;
//   container.appendChild(imgBox);
// }


