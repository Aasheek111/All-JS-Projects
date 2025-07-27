let array = [
  // 1-50 (Most common)
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "I",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "me",

  // 51-100
  "when",
  "make",
  "can",
  "like",
  "time",
  "no",
  "just",
  "him",
  "know",
  "take",
  "people",
  "into",
  "year",
  "your",
  "good",
  "some",
  "could",
  "them",
  "see",
  "other",
  "than",
  "then",
  "now",
  "look",
  "only",
  "come",
  "its",
  "over",
  "think",
  "also",
  "back",
  "after",
  "use",
  "two",
  "how",
  "our",
  "work",
  "first",
  "well",
  "way",
  "even",
  "new",
  "want",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",

  // 101-150
  "is",
  "are",
  "was",
  "were",
  "been",
  "has",
  "had",
  "did",
  "done",
  "said",
  "says",
  "saying",
  "asked",
  "asking",
  "went",
  "going",
  "came",
  "coming",
  "got",
  "getting",
  "made",
  "making",
  "took",
  "taking",
  "put",
  "putting",
  "let",
  "letting",
  "told",
  "telling",
  "saw",
  "seeing",
  "found",
  "finding",
  "gave",
  "giving",
  "left",
  "leaving",
  "called",
  "calling",
  "felt",
  "feeling",
  "became",
  "becoming",
  "kept",
  "keeping",
  "brought",
  "bringing",
  "began",
  "beginning",

  // 151-200
  "thing",
  "things",
  "person",
  "people",
  "man",
  "men",
  "woman",
  "women",
  "child",
  "children",
  "place",
  "places",
  "time",
  "times",
  "way",
  "ways",
  "day",
  "days",
  "year",
  "years",
  "week",
  "weeks",
  "month",
  "months",
  "life",
  "lives",
  "part",
  "parts",
  "number",
  "numbers",
  "world",
  "house",
  "home",
  "water",
  "food",
  "money",
  "story",
  "point",
  "hand",
  "hands",
  "eye",
  "eyes",
  "face",
  "mouth",
  "head",
  "body",
  "friend",
  "friends",
  "family",
  "school",

  // 201-250 (Common verbs)
  "run",
  "walk",
  "sit",
  "stand",
  "jump",
  "eat",
  "drink",
  "sleep",
  "wake",
  "talk",
  "speak",
  "listen",
  "hear",
  "see",
  "watch",
  "read",
  "write",
  "draw",
  "paint",
  "sing",
  "dance",
  "play",
  "work",
  "study",
  "learn",
  "teach",
  "buy",
  "sell",
  "open",
  "close",
  "start",
  "stop",
  "continue",
  "try",
  "change",
  "cut",
  "break",
  "fall",
  "catch",
  "throw",
  "carry",
  "bring",
  "take",
  "give",
  "show",
  "hide",
  "push",
  "pull",
  "hold",
  "wait",

  // 251-300 (Adjectives)
  "good",
  "bad",
  "big",
  "small",
  "long",
  "short",
  "tall",
  "wide",
  "narrow",
  "high",
  "low",
  "far",
  "near",
  "fast",
  "slow",
  "hot",
  "cold",
  "warm",
  "cool",
  "new",
  "old",
  "young",
  "same",
  "different",
  "happy",
  "sad",
  "angry",
  "excited",
  "scared",
  "bored",
  "tired",
  "hungry",
  "thirsty",
  "strong",
  "weak",
  "hard",
  "soft",
  "easy",
  "difficult",
  "clean",
  "dirty",
  "beautiful",
  "ugly",
  "dark",
  "light",
  "heavy",
  "light",
  "full",
  "empty",
  "right",

  // 301-350 (Prepositions/Conjunctions)
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "among",
  "around",
  "as",
  "at",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "between",
  "beyond",
  "by",
  "down",
  "during",
  "except",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "like",
  "near",
  "of",
  "off",
  "on",
  "onto",
  "out",
  "outside",
  "over",
  "past",
  "since",
  "through",
  "to",
  "toward",
  "under",
  "underneath",
  "until",
  "up",
  "upon",
  "with",
  "within",
  "without",
  "and",
  "but",

  // 351-400 (Common nouns)
  "apple",
  "animal",
  "air",
  "baby",
  "ball",
  "bed",
  "bird",
  "book",
  "box",
  "car",
  "cat",
  "chair",
  "clock",
  "dog",
  "door",
  "egg",
  "fish",
  "flower",
  "game",
  "garden",
  "hat",
  "horse",
  "key",
  "letter",
  "map",
  "milk",
  "name",
  "nest",
  "paper",
  "pen",
  "pencil",
  "picture",
  "ring",
  "road",
  "room",
  "ship",
  "shoe",
  "street",
  "sun",
  "table",
  "tree",
  "watch",
  "window",
  "word",
  "bedroom",
  "kitchen",
  "bathroom",
  "garden",
  "school",
  "park",

  // 401-450 (Adverbs)
  "always",
  "often",
  "usually",
  "sometimes",
  "rarely",
  "never",
  "soon",
  "now",
  "then",
  "today",
  "tomorrow",
  "yesterday",
  "here",
  "there",
  "everywhere",
  "somewhere",
  "anywhere",
  "nowhere",
  "very",
  "too",
  "quite",
  "rather",
  "almost",
  "enough",
  "much",
  "little",
  "more",
  "less",
  "well",
  "badly",
  "easily",
  "hardly",
  "quickly",
  "slowly",
  "carefully",
  "loudly",
  "quietly",
  "together",
  "alone",
  "again",
  "back",
  "forward",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",

  // 451-500 (Miscellaneous)
  "color",
  "sound",
  "voice",
  "light",
  "dark",
  "morning",
  "afternoon",
  "evening",
  "night",
  "summer",
  "winter",
  "spring",
  "fall",
  "weather",
  "rain",
  "snow",
  "wind",
  "cloud",
  "sky",
  "star",
  "moon",
  "sun",
  "earth",
  "world",
  "country",
  "city",
  "town",
  "village",
  "house",
  "building",
  "road",
  "street",
  "bridge",
  "river",
  "mountain",
  "forest",
  "field",
  "sea",
  "lake",
  "island",
  "ship",
  "boat",
  "plane",
  "train",
  "bus",
  "car",
  "bike",
  "airport",
  "station",
  "stop",
];
let input = document.querySelector("#inp");
input.focus();
let text = document.querySelector(".showwords");
let timerr = document.querySelector(".showtimer");
let updatetxtlen = document.querySelector(".showtextlength");
let words = 0;
let output = document.querySelector(".output");
let correctword = 0;
let btntype = null;
let i, j;
let t = null;
let select = document.querySelectorAll(".selectbtn");
let timee = 15;
let originaltime = 15;
let istime = true;
let totalwords = 0;
let isword = false;
let startingtime = null;
let endingtime = null;
let wordtimerstart = false;
let dif = null;

input.addEventListener("input", () => {
  //this to start the timer when user selects the time and tries to input the data
  if (istime == true && input.value.length == 1) {
    starttime();

  }
  if (isword == true) {
    showtextlength(words);
  }
  handelinput();
});

forsec(); //this function randomly shows the 30 words in the screen

select.forEach((btn) => {
  //this is to determine the what user has selected and which function should be run
  btn.addEventListener("click", () => {
    totalwords = 0;
    input.focus();
    input.disabled = false;

    let btntype = btn.getAttribute("data-kam");
    if (t != null) {
      clearInterval(t);
    }
    if (btntype == "15sec") {
      forsec();
      timee = 15;
      originaltime = 15;
      justdisplay(15);
      input.value = "";
      istime = true;    
      isword = false;

    } else if (btntype == "30sec") {
      forsec();
      justdisplay(30);
      timee = 30;
      originaltime = 30;

      input.value = "";
      istime = true;
      isword = false;
    } else if (btntype == "60sec") {
      forsec();
      justdisplay(60);
      timee = 60;
      originaltime = 60;

      input.value = "";
      istime = true;
      isword = false;
    } else if (btntype == "20word") {
      istime = false;
      forword(20);
      showtextlength(20);
      input.value = "";
      isword = true;
      istime = false;
      words = 20;
    } else if (btntype == "35word") {
      forword(35);
      istime = false;
      isword = true;
      showtextlength(35);
      input.value = "";
      words = 35;
    } else if (btntype == "60word") {
      forword(60);
      istime = false;
      isword = true;
      showtextlength(60);
      input.value = "";
      words = 60;
    }
  });
});


let gameon = false;

function handelinput() {
  console.log(istime)
  console.log(isword)
  //this function is to show the green and red effect on the user input and track the user input using highligther
  correctword = 0;
  let i = input.value.trim();
  iarr = i.split(/\s+/);

  let displayedall = document.querySelectorAll(".word");

  displayedall.forEach((word) => {
    word.classList.remove("correct", "incorrect", "current");
  });

  iarr.forEach((word, index) => {
    let present = displayedall[index]; //displayedall is a nodlist and we can acces it using index like array just learned it :)

    if (!present) return;
    else if (word == present.innerText.trim()) {
      present.classList.add("correct");
      correctword++;
    } else {
      present.classList.add("incorrect");
    }

    if (present) {
      present.classList.add("current");
    }
  });



  if (istime && iarr.length + 5 >= displayedall.length) {
    console.log("lauda lassan");
    let tempo = suffle(array).slice(0, 10);
    let html = tempo
      .map((value, index) => {
        return `<span class="word" data-index=${index}>${value} </span>`;
      })
      .join("");

    text.insertAdjacentHTML("beforeend", html);
    displayedall = document.querySelectorAll(".word");
  }
  if (timee <= 0) {
    clearInterval(t);
    handelresult();
    input.disabled = true;
    gameon = false;
  }
  if (!wordtimerstart && isword) {
    startingtime = Date.now();
    wordtimerstart = true;
  }

  if (
    isword &&
    iarr.length >= displayedall.length &&
    iarr[iarr.length - 1] ==
      displayedall[displayedall.length - 1].innerText.trim()
  ) {
    dif = 0;
    endingtime = Date.now();
    dif = (endingtime - startingtime) / 1000;
    input.disabled = true;
    showwpm();
  }
  totalwords = correctword;
}

function justdisplay(ti) {
  //just to display when user selects the time
  updatetxtlen.innerText = "";
  timerr.innerHTML = `${ti} secs`;
}

function forsec() {
  //it displays the suffled word
  let newarray = suffle(array);
  let ar = newarray.slice(0, 30);

  let html = ar.map((e, i) => {
    return `<span class="word" data-index=${i}>${e} </span>`;
  });

  text.innerHTML = html.join(" ");
}

function timeshow(duration) {
  clearInterval(t);
  gameon = true;
  updatetxtlen.innerHTML = "";
  timee = duration;
  timerr.innerHTML = `${timee} secs`;
  t = setInterval(() => {
    timee--;

    timerr.innerHTML = `${timee} secs`;

    if (timee <= 0) {
      clearInterval(t);
      t = null;
      handelresult();
    }
  }, 1000);
}

function starttime() {
  if (timee == "15") {
    timeshow(15);
  } else if (timee == "30") {
    timeshow(30);
  } else if (timee == "60") {
    timeshow(60);
  }
}

function suffle(arr) {
  let clone = [...arr];

  for (i = arr.length - 1; i >= 0; i--) {
    j = Math.floor(Math.random() * i + 1);

    let temp = clone[i];
    clone[i] = clone[j];
    clone[j] = temp;
  }
  return clone;
}

function forword(word) {
  //suffle the words for word and display the desired no of words
  let newarr = suffle(array);
  let ar = newarr.slice(0, word);
  let html = ar.map((text, i) => {
    return `<span class='word' data-index=${i}>${text}</span>`;
  });
  text.innerHTML = html.join(" ");
}

function showtextlength(len) {
  //this function just show the text length on the screen when the user selects the word

  updatetxtlen.innerText = `${totalwords}/${len} words`;
  timerr.innerHTML = "";
}
function showwpm() {
  console.log("Words:", totalwords);
  console.log("Time (mins):", dif);
  console.log("WPM:", totalwords / dif);
  let wpm = ((totalwords + 1) * 60) / dif;
  output.innerText = `Your WPM is ${Math.round(wpm)}`;
}

function handelresult() {
  // this function just display the wpm

  if (!gameon) return;
  let wpm = (totalwords * 60) / originaltime;
  output.innerText = `Your WPM is ${Math.round(wpm)}`;
}
