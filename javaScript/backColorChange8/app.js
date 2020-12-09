
const colors=["lime","maroon","red","blue","yellow","cyan","turqoise","teal","plum","magenta","indigo","green","brown"];
const btn=document.querySelector(".btn");


btn.addEventListener('click',changeColor);

function changeColor(){

    let random=Math.floor(Math.random()*colors.length);
    console.log(random);

    document.body.style.backgroundColor=colors[random];    

}