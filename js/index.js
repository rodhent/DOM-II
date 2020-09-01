// Your code goes here
console.dir(document);

const navLink = document.getElementById("nav-link");

navLink.addEventListener("mouseover", function( event ) {
    event.target.style.color = "pink"; 
}