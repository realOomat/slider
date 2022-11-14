

// let main = document.querySelector(".main");
// let btn = document.querySelector("button");
// let main_block = document.querySelector(".main_block")
// let main_content = document.querySelector(".main_content");
// let img = document.querySelector(".image_block")

// main.style.backgroundColor = "aqua";
// main.style.fontSize = "30px";


// btn.style.cssText = "padding: 10px 20px;background: red;font-size: 20px";


// main_block.classList.add("pip");
// main_block.classList.remove("none");
// console.log(main_block.classList.contains("pip"));

// console.log(main_block.classList);




// Event - Событие 


// btn.addEventListener("click", () => {
//   console.log("Clicked");
// })



// btn.addEventListener("click", () => {
//   if(main_content.style.backgroundColor == "yellow") {
//     main_content.style.backgroundColor = "green"
//   } else {
//     main_content.style.backgroundColor = "yellow"
//   }
// })



// btn.addEventListener("click", () => {
//   if(main_content.classList.contains("yellow")) {
//     main_content.classList.remove("yellow")
//   } else {
//     main_content.classList.add("yellow")
//   }
// })



// btn.addEventListener("click", () => {
//     main_content.classList.toggle("yellow");
// })




// let h = document.createElement("h1")

// h.innerText = "Hello world!"


// main_block.prepend(h);
// main_block.append(h);

// main_block.before(h);
// main_block.after(h);

// console.log(h)

// main_block.innerText = "hi"
// console.log(main_block.innerText);


// main_block.before(btn);



// let btnCopy = btn.cloneNode();
// main_block.before(btnCopy);
// btnCopy.textContent = "Button #2";




// const colors = ["red", "yellow", "green", "purple", "pink", "violet", "brown", "grey"];
// let i = 0;

// btn.addEventListener("click", () => {
//   i == colors.length ? i = 0 : main_content.style.backgroundColor = colors[i]; i++;
// })





// slider





let slider = document.querySelector(".slider_row")
let next = document.querySelector(".btn_next")
let prev = document.querySelector(".btn_prev")

let position = 0;

next.addEventListener("click", () => {
  if(position > 1200) {
    position = 0;
  }
  position += 300;

  slider.style.left = -position + "px";
})


prev.addEventListener("click", () => {
  position -= 300;
  
  if(position < 0) {
    position = 1200;
  }

  slider.style.left = -position + "px";
})

// console.log("Oomatbek");


