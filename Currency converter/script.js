const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
let amount = document.querySelector(".amount input");
let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("#btn");

// let flagurl=`https://flagsapi.com/NP/flat/64.png`;
let msg = document.querySelector(".msg");
let fromdis = document.querySelector(".fromdisplay");
let todis = document.querySelector(".todisplay");

// Adding all country codes in option
for (let select of dropdowns) {
  for (code in countryList) {
    let newElement = document.createElement("option");
    newElement.name = code;
    newElement.innerText = code;
    select.append(newElement);
  }

  
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    selectedCurrency=evt.target.value.toLowerCase();
    showRate(selectedCurrency);
  });
}

// Function to update flag according to the country code
function updateFlag(change) {
  let newImage = change.parentElement.querySelector("img");
  let countrycode = countryList[change.value];
  newImage.src = `https://flagsapi.com/${countrycode}/flat/64.png`;
}


 async function showRate(countrycode){

  console.log(countrycode);
  let response=await fetch(BASE_URL);
  let data= await response.json();

  let cRate= data.eur[countrycode];
  console.log(cRate);

  fromdis.innerHTML="1 EUR =";
  todis.innerHTML= cRate;
  return cRate;


};


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    
if (amount.value==0){
  
  fromdis.innerHTML= "ENTER AMOUNT FIRST"
  todis.innerHTML= "";
  msg.classList.add("red");
  
} else{
    let x = await showRate(selectedCurrency);

    fromdis.innerHTML= `${amount.value} EUR = `
    todis.innerHTML= amount.value* x;
}
  })
  