const month= document.querySelector(".monthly");
const monthspan= document.querySelector(".month");
const year = document.querySelector(".yearly");
const yearspan = document.querySelector(".year");
const btn = document.getElementById("month-to-year");
const btnDiv = document.querySelector("#month-to-year div");
const header = document.querySelector('header');
btn.addEventListener("click",()=>{
    if(month.style.display!=="none"){
    month.style.display="none";
    year.style.display="block";
    monthspan.style.opacity="0.4"
    btnDiv.style.right = '32px';
    yearspan.style.opacity="1";
    yearspan.style.color="rgb(76, 82, 90)";
}
    else if(year.style.display!=="none"){
        yearspan.style.opacity="0.4";
        btnDiv.style.right = '4px';
        month.style.display="block";
        year.style.display="none";
    monthspan.style.opacity="1"
}
})

window.addEventListener('scroll',()=>{
    if(window.scrollY>0){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
})