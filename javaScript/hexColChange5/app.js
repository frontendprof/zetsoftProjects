

// Defining immediate invoked function expression



    const btn=document.querySelector(".btn");
    const hexCol=document.querySelector(".hex-color");

    btn.addEventListener("click",function(){
        let hexP="#";
        const hexVal=[1,2,3,4,5,6,"A","B","C","D","E","F"];


        for(let i=0; i<6; i++){
            let randVal=Math.floor(Math.random()*hexVal.length);
            hexP += hexVal[randVal];
            
        }
        hexCol.textContent=hexP;
        document.body.style.backgroundColor=hexP;


    })

