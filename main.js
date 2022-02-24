const listItems = document.querySelectorAll("li");

console.log(`We have ${listItems.length} list items on this page`);

const btns = document.querySelectorAll('button');

const btnsArr = Array.from(btns);


window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}