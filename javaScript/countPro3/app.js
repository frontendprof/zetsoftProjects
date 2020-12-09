

// Immediate inoked function expression

(function(){

    let countVal=0;

    const btns=document.querySelectorAll(".btn");
    const cont=document.querySelector("#con2");
    
    btns.forEach(function(btn){
        btn.addEventListener("click",function(e){

            if(e.target.parentElement.classList.contains("btn-left")){
                countVal++;
            }

            else if(e.target.parentElement.classList.contains("btn-right")){
                countVal--;
            }

            cont.textContent=countVal;

            if(countVal>0){
                cont.style.color="green";
            }

            else if(countVal===0){
                cont.style.color="yellow";
            }

            else if(countVal<0){
                cont.style.color="crimson";
            }

            
        });
    });

})();