var slidePage = document.querySelector(".slidepage");
var nextBtn1 = document.querySelector(".nextBtn");
var nextBtn2 = document.querySelector(".next-1");
var nextBtn3 = document.querySelector(".next-2");
var prevBtn1 = document.querySelector(".prev-1");
var prevBtn2 = document.querySelector(".prev-2");
var prevBtn3 = document.querySelector(".prev-3");
var submit = document.querySelector(".submit");
var progressText = document.querySelectorAll(".step p");
var progressCheck = document.querySelectorAll(".step .check");
var progressBullet = document.querySelectorAll(".step .bullet");

var max = 4;
var current = 1;

nextBtn1.addEventListener("click", function(){

    slidePage.style.marginLeft = "-25%";
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1; 
});

nextBtn2.addEventListener("click", function(){

    slidePage.style.marginLeft = "-50%";
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1; 
});

nextBtn3.addEventListener("click", function(){

    slidePage.style.marginLeft = "-75%";
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1; 
});

submit.addEventListener("click", function(){
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1; 
    location.reload();
    setTimeout(function(){
        alert("You're Successfully signed up!");
        location.reload();
    }, 800);
});

prevBtn1.addEventListener("click", function(){

    slidePage.style.marginLeft = "0%";
    progressBullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1; 
});

prevBtn2.addEventListener("click", function(){

    slidePage.style.marginLeft = "-25%";
    progressBullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1; 
});

prevBtn3.addEventListener("click", function(){

    slidePage.style.marginLeft = "-50%";
    progressBullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1; 
});