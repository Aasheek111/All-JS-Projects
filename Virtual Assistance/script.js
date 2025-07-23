let btn = document.querySelector(".btn");
let giff = document.querySelector(".giff");

function speak(txt) {
  let voice = new SpeechSynthesisUtterance(txt);
  voice.pitch = 1;
  voice.rate = 1.3;
  voice.volume = 10;
  window.speechSynthesis.speak(voice);
}

function greet() {
  let time = new Date(); //just to get the present time

  let hr = time.getHours();
  if (hr == 12) {
    speak("Good Noon aashik boss, how can i serve you");
  } else if (hr > 12) {
    speak("Good afternoon aashik boss , how can i serve you ");
  } else if (hr < 12) {
    speak("Good morning aashik boss , how can i serve you ");
  }
}

btn.addEventListener("click", () => {
  aawaj.start();
  giff.style.display = "block";
  greet();
  btn.style.display = "none";
});

function stopgif() {
  giff.style.display = "none";
}

let speech = window.SpeechRecogniton || window.webkitSpeechRecognition;
let aawaj = new speech();
aawaj.continuous = true;
aawaj.interimResults = false;

aawaj.addEventListener("result", (event) => {
  let text = "";
  let currentindex = event.resultIndex;

  text = event.results[currentindex][0].transcript;
  commands(text.toLowerCase());
  console.log(text);
});

function commands(message) {
  stopgif();

  btn.style.display = "flex";

  if (message.includes("hello") || message.includes("hey")) {
    speak("hello there how can i help you today");
  } else if (message.includes("who created")) {
    speak("My sir aashik created me");
  } else if (message.includes("open youtube")) {
    speak("opening youtube");
    window.open("https://www.youtube.com/");
  } else if (message.includes("open facebook")) {
    speak("opening facebook");
    window.open("https://www.facebook.com/");
  } else if (message.includes("who is your boss")) {
    speak("His name is aashik and you can know more in his website");
    window.open("https://www.aashikgautam.com.np/");
  } else if (message.includes("can you do")) {
    speak("I am here to help you. what  do you want me to do ");
  } else if (message.includes("what is your name")) {
    speak("I am aash bot . i am here to serve u ");
  } else if (message.includes("open calculator")) {
    window.open("calculator://");
  } else if (message.includes("open brave")) {
    window.open("Brave://");
  } else if (message.includes("time")) {
    let time = new Date();

    let hrs = time.getHours();
    let min = time.getMinutes();

    let ampm = hrs >= 12 ? "PM" : "AM";
    speak(`It is ${hrs} ${min} ${ampm}`);
  } else if (message.includes("date")) {
    let time= new Date();
    let tt=time.toLocaleString('en-US',{

      weekday:"long",
      year: "numeric",
      day: "numeric",
      month: "short"
    })

    speak(`Today is ${tt}`);
    console.log(tt);
  }
   else {

    speak("I found this on web");
    window.open(`https://www.google.com/search?q=${message}`);
  }
}
