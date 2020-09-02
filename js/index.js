// Your code goes here

//1 Mouse Over
const links = document.querySelectorAll("a");
links.forEach((item) =>
  item.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.style.fontSize = "500%";
  })
);

//2 Mouseover
const gonePic = document.querySelector('[src= "img/destination.jpg"]');
gonePic.addEventListener("mouseover", (event) => {
  gonePic.style.opacity = "0.1";
});

//3 Move Mouse Out
const funBus = document.querySelector(".intro img");

funBus.addEventListener("mouseenter", (e) => {
  funBus.style.transform = "scale(1.2)";
  funBus.style.transition = "all 0.3s";
});

//4 Move Mouse On
funBus.addEventListener("mouseleave", () => {
  funBus.style.transform = "scale(1)";
});

//5 Right click
const textPink = document.querySelector("p");
textPink.addEventListener("contextmenu", (event) => {
  textPink.style.color = "pink";
});

//6 Click text orange
const textOrange = document.querySelector("p");
textOrange.addEventListener("escape", (event) => {
  textOrange.style.color = "orange";
});

//7 Mousedown
const textBlue = document.querySelector("h1");
textBlue.addEventListener("mousedown", (event) => {
  textBlue.style.color = "blue";
});

//8 Mouseup
const textPurples = document.querySelector("h1");
textPurples.addEventListener("mouseup", (event) => {
  textPurples.style.color = "purple";
});

//9 Select Text
const textBoxed = document.querySelector("h1");
textBoxed.addEventListener("select", (event) => {
  textBoxed.style.border = "3px dashed #F7730E";
});

//10 Wheel over
const faded2 = document.querySelector('[src= "img/adventure.jpg"]');
faded2.addEventListener("wheel", (event) => {
  faded2.style.opacity = "0.6";
});

//mouseout bubbles
const bubbleFuchsia = document.querySelector("h2");
const noBubblePink = document.querySelector(".intro");
bubbleFuchsia.addEventListener("mouseleave", (event) => {
  bubbleFuchsia.style.color = "yellow";
  if (true) {
    noBubblePink.addEventListener("mouseout", (event) => {
      noBubblePink.style.color = "green";
    });
  }
});

Array.from(document.links).forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
