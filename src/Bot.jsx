// import React, { useState, useEffect } from "react";
// import "./Bot.css";
// import avatar from "./assets/logo.png"; // Replace with your avatar path
// import gifImage from "./assets/giphy.gif"; // Replace with your gif path
// import { FaMicrophoneAlt } from "react-icons/fa";

// const Bot = () => {
//   const [content, setContent] = useState("Click here to speak");
//   const [recognitionActive, setRecognitionActive] = useState(false);

//   // Initialize speech synthesis
//   const speak = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 1;
//     utterance.pitch = 1;
//     utterance.volume = 1;
//     window.speechSynthesis.speak(utterance);
//   };

//   // Greet user based on time
//   const wishMe = () => {
//     const hour = new Date().getHours();
//     if (hour >= 0 && hour < 12) speak("Good Morning Boss...");
//     else if (hour >= 12 && hour < 17) speak("Good Afternoon Master...");
//     else speak("Good Evening Sir...");
//   };

//   useEffect(() => {
//     speak("Initializing R J BOT...");
//     wishMe();
//   }, []);

//   // Setup SpeechRecognition
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new SpeechRecognition();
//   recognition.continuous = false;
//   recognition.lang = "en-US";

//   recognition.onresult = (event) => {
//     const transcript = event.results[event.resultIndex][0].transcript;
//     setContent(transcript);
//     takeCommand(transcript.toLowerCase());
//     setRecognitionActive(false);
//   };

//   recognition.onend = () => {
//     setRecognitionActive(false);
//   };

//   const startListening = () => {
//     setContent("Listening...");
//     setRecognitionActive(true);
//     recognition.start();
//   };

//   // Command handler
//   const takeCommand = (message) => {
//     if (message.includes("hey") || message.includes("hello")) {
//       speak("Hello Sir, How May I Help You?");
//     } 
//     else if (
//       message.includes("what is rj atlas digital ai") ||
//       message.includes("who is rj atlas digital ai") ||
//       message.includes("tell me about rj atlas digital ai")
//     ) {
//       speak(
//         "RJ ATLAS DIGITAL AI is a pioneering IT company where innovation is in our DNA, committed to delivering groundbreaking digital solutions by combining deep expertise in Web and App Development, Digital Marketing, and Creative Designing with the transformative power of Artificial Intelligence. We are constantly exploring and implementing every exciting development in the tech space—from cutting-edge digital builds to comprehensive Social Media Management—to ensure our clients always remain at the forefront. Our holistic approach means we handle all your digital needs seamlessly, empowering businesses globally with the intelligent, integrated solutions required for digital excellence and sustained success."
//       );
//     } 
//     else if (message.includes("open google")) {
//       window.open("https://google.com", "_blank");
//       speak("Opening Google...");
//     } 
//     else if (message.includes("open youtube")) {
//       window.open("https://youtube.com", "_blank");
//       speak("Opening YouTube...");
//     } 
//     else if (message.includes("open facebook")) {
//       window.open("https://facebook.com", "_blank");
//       speak("Opening Facebook...");
//     } 
//     else if (
//       message.includes("what is") ||
//       message.includes("who is") ||
//       message.includes("what are")
//     ) {
//       window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
//       speak("This is what I found on the internet regarding " + message);
//     } 
//     else if (message.includes("wikipedia")) {
//       window.open(
//         `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim().replace(/ /g, "_")}`,
//         "_blank"
//       );
//       speak("This is what I found on Wikipedia regarding " + message);
//     } 
//     else if (message.includes("time")) {
//       const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//       speak("The current time is " + time);
//     } 
//     else if (message.includes("date")) {
//       const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
//       speak("Today's date is " + date);
//     } 
//     else if (message.includes("calculator")) {
//       window.open("https://www.google.com/search?q=calculator", "_blank");
//       speak("Opening Calculator...");
//     } 
//     else {
//       window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
//       speak("I found some information for " + message + " on Google");
//     }
//   };

//   return (
//     <section className="main">
//       <div className="image-container">
//         <div className="image">
//           <img src={gifImage} alt="Jarvis" />
//         </div>
//         <h1>R J BOT</h1>
//         <p>I am a Virtual Assistant RJ BOT, How may I help you? <br />Try saying: "tell me about rj atlas digital ai"</p>
        
//       </div>

//       <div className="input" onClick={startListening}>
//         <button className="talk">
//           <FaMicrophoneAlt />
//         </button>
//         <h1 className="content">{content}</h1>
//       </div>
//     </section>
//   );
// };

// export default Bot;






import React, { useState, useEffect, useRef } from "react";
import "./Bot.css";
import avatar from "./assets/logo.png"; // Replace with your avatar path
import gifImage from "./assets/giphy.gif"; // Replace with your gif path
import { FaMicrophoneAlt, FaStop } from "react-icons/fa";

const Bot = () => {
  const [content, setContent] = useState("Click here to speak");
  const [recognitionActive, setRecognitionActive] = useState(false);
  const recognitionRef = useRef(null);

  // Initialize speech synthesis
  const speak = (text) => {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  // Greet user based on time
  const wishMe = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) speak("Good Morning Boss...");
    else if (hour >= 12 && hour < 17) speak("Good Afternoon Master...");
    else speak("Good Evening Sir...");
  };

  useEffect(() => {
    speak("Initializing R J BOT...");
    wishMe();

    // Initialize SpeechRecognition only once
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript;
      setContent(transcript);
      takeCommand(transcript.toLowerCase());
      setRecognitionActive(false);
    };

    recognition.onend = () => {
      setRecognitionActive(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startStopListening = () => {
    if (!recognitionActive) {
      // Start listening
      setContent("Listening...");
      setRecognitionActive(true);
      recognitionRef.current.start();
    } else {
      // Stop listening
      recognitionRef.current.stop();
      setRecognitionActive(false);
      setContent("Click here to speak");
      window.speechSynthesis.cancel(); // stop ongoing speech
    }
  };

  // Command handler
  const takeCommand = (message) => {
    if (message.includes("hey") || message.includes("hello")) {
      speak("Hello Sir, How May I Help You?");
    } else if (
      message.includes("what is rj atlas digital ai") ||
      message.includes("who is rj atlas digital ai") ||
      message.includes("tell me about rj atlas digital ai")
    ) {
      speak(
        "RJ ATLAS DIGITAL AI is a pioneering IT company where innovation is in our DNA, committed to delivering groundbreaking digital solutions..."
      );
    } else if (message.includes("open google")) {
      window.open("https://google.com", "_blank");
      speak("Opening Google...");
    } else if (message.includes("open youtube")) {
      window.open("https://youtube.com", "_blank");
      speak("Opening YouTube...");
    } else if (message.includes("open facebook")) {
      window.open("https://facebook.com", "_blank");
      speak("Opening Facebook...");
    } else if (
      message.includes("what is") ||
      message.includes("who is") ||
      message.includes("what are")
    ) {
      window.open(
        `https://www.google.com/search?q=${message.replace(/ /g, "+")}`,
        "_blank"
      );
      speak("This is what I found on the internet regarding " + message);
    } else if (message.includes("wikipedia")) {
      window.open(
        `https://en.wikipedia.org/wiki/${message
          .replace("wikipedia", "")
          .trim()
          .replace(/ /g, "_")}`,
        "_blank"
      );
      speak("This is what I found on Wikipedia regarding " + message);
    } else if (message.includes("time")) {
      const time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
      });
      speak("The current time is " + time);
    } else if (message.includes("date")) {
      const date = new Date().toLocaleString(undefined, {
        month: "short",
        day: "numeric",
      });
      speak("Today's date is " + date);
    } else if (message.includes("calculator")) {
      window.open("https://www.google.com/search?q=calculator", "_blank");
      speak("Opening Calculator...");
    } else {
      window.open(
        `https://www.google.com/search?q=${message.replace(/ /g, "+")}`,
        "_blank"
      );
      speak("I found some information for " + message + " on Google");
    }
  };

  return (
    <section className="main">
      <div className="image-container">
        <div className="image">
          <img src={gifImage} alt="Jarvis" />
        </div>
        <h1>R J BOT</h1>
        <p>
          I am a Virtual Assistant RJ BOT, How may I help you? <br />
          Try saying: "tell me about rj atlas digital ai"
        </p>
      </div>

      <div className="input" onClick={startStopListening}>
        <button className="talk">
          {recognitionActive ? <FaStop /> : <FaMicrophoneAlt />}
        </button>
        <h1 className="content">{content}</h1>
      </div>
    </section>
  );
};

export default Bot;
