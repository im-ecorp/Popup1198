const showbtn = document.querySelector('.showbtn1198')
const popup1198 = document.querySelector('.popup-box1198')
const closebtn = document.querySelector('.closebtn1198')

showbtn.addEventListener('click' , function(){
    popup1198.style.display = "flex";
    popup1198.style.transform = "scale(1)";

});

closebtn.addEventListener('click' , function(){
    popup1198.style.display = "none";
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup1198.style.display = "none";
    }
  });