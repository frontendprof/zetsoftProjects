



    const pics=[
        "cB-0.jpeg",
        "cB-1.jpeg",
        "cB-2.jpeg",
        "cB-3.jpeg",
        "cB-4.jpeg",
        "cB-5.jpeg",
        "cB-6.jpeg",
        "cB-7.jpeg",
        "cB-8.jpeg"

    ];

    let counter=0;

    const btns=document.querySelectorAll(".btn");

    btns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            
            if(e.target.classList.contains("btn-left")){
                counter--;
                console.log(counter);
                if(counter<0){
                    counter=pics.length-1;
                }
                document.querySelector(".img-cont").style.backgroundImage=`url("img/${pics[counter]}")`;                
            }    
            
            
            if(e.target.classList.contains("btn-right")){
                counter++;
                if(counter>pics.length-1){
                    counter=0;
                }
                document.querySelector(".img-cont").style.backgroundImage=`url("img/${pics[counter]}")`;                
            }
            
            

        });
    });
 


    let a=5;
    let b=10;
    let num=a+b;
    let res="Natija ikki son qo'shish uchun"+" "+num;
    let res_2="natisja asdfj asdfj f ${a+b}"
    `fjasldfj asdfjasljdf lasdf lasdf ${a+b}`