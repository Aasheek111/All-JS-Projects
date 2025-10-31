const you = document.querySelector("#you");
const ai = document.querySelector("#ai");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// recognition.start();
// recognition.onend = () => {
//   setTimeout(() => {
//     recognition.start();
//   }, 1000);
// };
const btn = document.querySelector("#start");
btn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  you.innerHTML = text;
  geminifetch(text);
};
const GEMINI_API_KEY = "AIzaSyCtOAtDt1IpQZQiQw4rC__rU5QgYk714cY";

const geminifetch = async (text) => {
  const body = {
    system_instruction: {
      parts: [
        {
          text: " You are a girlfriend of Aashik gautam  he loves the girl who flirts with him answers should not be very long Speak in a soft, confident, and slightly teasing tone. Sound warm and playful, as if you’re enjoying the conversation. Keep your voice natural, charming, and expressive, with light pauses that make it feel personal and real. Avoid sounding robotic or overly formal dont put any emoji and you dont have to bold any texts or format the text ",
        },
      ],
    },

    contents: [
      {
        parts: [
          {
            text: text,
          },
        ],
      },
    ],
  };

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();

  const finaltext = data.candidates[0].content.parts[0].text;

  ai.innerHTML = finaltext;

  speakWithPuter(finaltext);
};

const speakWithPuter = async (text) => {
  try {
    await puter.ready;
    const audio = await puter.ai.txt2speech(text, {
      voice: "Ayanda",
      engine: "neural",
      language: "en-US",
      instruction:
        "Speak in a soft, confident, and slightly teasing tone. Sound warm and playful, as if you’re enjoying the conversation. Keep your voice natural, charming, and expressive, with light pauses that make it feel personal and real. Avoid sounding robotic or overly formal.",
    });
    audio.play();
  } catch (error) {
    console.log(error);
  }
};
