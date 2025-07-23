let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let click="R";
let botscore=document.querySelector("#changebot");
let myscore=document.querySelector("#changemy");
let display=document.querySelector(".display");
let mycount=0;
let botcount=0;
let botChoise=["R","P","S"];


// ROCKKK

rock.addEventListener("click",()=>{
    rock.classList.remove("botborder");
    scissors.classList.remove("botborder");
    paper.classList.remove("botborder");

    display.innerHTML="";
    click="R";
    random=Math.random();
    ranIndx= Math.floor(random*botChoise.length);
    randomChoise=botChoise[ranIndx];

    if(randomChoise=="R"){

        rock.classList.add("botborder");
    }

    else if(randomChoise=="S"){
        scissors.classList.add("botborder");
    }

    else{

        paper.classList.add("botborder");
    }

   console.log(randomChoise);

   if(click==randomChoise){

       display.innerHTML="Draw";
   }

   else if(randomChoise=="S"){
       mycount+=1;
       myscore.innerHTML=mycount;
       display.innerHTML="You Won!";
       
   }
   else {
       botcount+=1;
       botscore.innerHTML=botcount;
       display.innerHTML="You Lose!";
   }



});
   


//PAPER

 paper.addEventListener("click",()=>{
    rock.classList.remove("botborder");
    scissors.classList.remove("botborder");
    paper.classList.remove("botborder");
        click="P";
        random=Math.random();
        ranIndx= Math.floor(random*botChoise.length);
        randomChoise=botChoise[ranIndx];
      
    
       console.log(randomChoise);
   
       if(click==randomChoise){
   
           display.innerHTML="Draw";
       }
   
       else if(randomChoise=="R"){
           mycount+=1;
           myscore.innerHTML=mycount;
           display.innerHTML="You Won!";
           
       }
       else {
           botcount+=1;
           botscore.innerHTML=botcount;
           display.innerHTML="You Lose!";
       }

       if(randomChoise=="R"){

        rock.classList.add("botborder");
    }

    else if(randomChoise=="S"){
        scissors.classList.add("botborder");
    }

    else{

        paper.classList.add("botborder");
    }
    
    });


    //SCISSORS

   scissors.addEventListener("click",()=>{

    rock.classList.remove("botborder");
    scissors.classList.remove("botborder");
    paper.classList.remove("botborder");

        click="S";
        random=Math.random();
        ranIndx= Math.floor(random*botChoise.length);
        randomChoise=botChoise[ranIndx];
    
       console.log(randomChoise);
   
       if(click==randomChoise){
   
           display.innerHTML="Draw";
       }
   
       else if( randomChoise=="P"){
           mycount+=1;
           myscore.innerHTML=mycount;
           display.innerHTML="You Won!";
           
       }
       else {
           botcount+=1;
           botscore.innerHTML=botcount;
           display.innerHTML="You Lose!";
       }
       
       if(randomChoise=="R"){

        rock.classList.add("botborder");
    }
    
    else if(randomChoise=="S"){
        scissors.classList.add("botborder");
    }
    
    else{
    
        paper.classList.add("botborder");
    }
    
    });


 