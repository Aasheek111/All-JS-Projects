let input = document.querySelector("#input");
let list = document.querySelector(".list");
let btn = document.querySelector(".btn");


btn.addEventListener("click",()=>{
     

    if (input.value==''){
    
       alert("Enter task to add..");
    }
    else{

        let another = document.createElement("li");
     another.innerHTML= input.value;
     list.appendChild(another);

     let span = document.createElement("span");
      span.innerHTML= '&#10008;'
     another.appendChild(span);
     span.classList.add("span")
     input.value="";    
     saveData();
    
    }
})

list.addEventListener("click",(evnt)=>{

    if (evnt.target.tagName=="LI"){

        evnt.target.classList.toggle("checked");
        saveData();
    }
    else if (evnt.target.tagName=="SPAN"){

        evnt.target.parentElement.remove();
        saveData();
    }
})

console.log(list.innerHTML);
function saveData(){

    localStorage.setItem("Data",list.innerHTML);

}
function showTask(){

    list.innerHTML= localStorage.getItem("Data")
}
showTask();