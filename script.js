let text = "Guitarist  |  Photographer  |  Traveler";
let index = 0;

function type(){
document.getElementById("typing").innerHTML = text.slice(0,index);
index++;

if(index > text.length){
index = 0;
}

setTimeout(type,150);
}

type();

const contactBtn = document.querySelector(".contact-btn");
const contactBox = document.querySelector(".contact-popup");

contactBtn.addEventListener("click", function(e){
  e.preventDefault();
  if(contactBox.style.display === "block"){
    contactBox.style.display = "none";
  } else {
    contactBox.style.display = "block";
  }
});
