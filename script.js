// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function(){

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background =
"rgba(7,18,29,0.98)";

navbar.style.boxShadow =
"0 8px 20px rgba(0,0,0,0.25)";

}

else{

navbar.style.background =
"rgba(7,18,29,0.92)";

navbar.style.boxShadow =
"none";

}

});


// SECTION FADE ANIMATION

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

});

sections.forEach((section)=>{

section.style.opacity = "0";

section.style.transform =
"translateY(40px)";

section.style.transition =
"all 1s ease";

observer.observe(section);

});