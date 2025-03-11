import React, { useState } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Translation_Page from "./pages/Translation_Page";
import Chat_Page from "./pages/Chat_Page";
import Chat_Message from "./components/chat_components/Chat_Message";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import OpenAI from "openai";
import "./App.css";

function App() {
  // const openai = new OpenAI({
  //   apiKey: process.env.openai_key,
  //   dangerouslyAllowBrowser: true,
  // });

  const [state, setState] = useState({
    userInput: "",
    inputLang: "english",
    language: "english",
    translation: " ",
    updateLanguage: (event) => {
      let languageChoice = event.target.id;
      setState((prevState) => {
        return { ...prevState, language: languageChoice };
      });
    },
    updateInputLang: (event) => {
      let languageChoice = event.target.value;
      setState((prevState) => {
        return { ...prevState, inputLang: languageChoice, userInput: "", translation: "" };
      });
    },
    updateOutputLang: (event) => {
      let languageChoice = event.target.value;
      setState((prevState) => {
        return { ...prevState, language: languageChoice };
      });
    },
    updateInput: (event) => {
      const userInput = event.target.value;
      setState((prevState) => {
        return { ...prevState, userInput: userInput, waiting: false };
      });
    },
    fetchResponse: async (aiPrompt) => {
      setState((prevState) => {
        return { ...prevState, translation: "" };
      });
      const completion = await openai.chat.completions.create({
        messages: aiPrompt,
        model: "gpt-3.5-turbo",
        presence_penalty: -2,
        frequency_penalty: -2,
      });
      let translation = completion.choices[0].message.content;
      setState((prevState) => {
        return { ...prevState, translation: translation };
      });
    },
    clearInput: () => {
      setState((prevState) => {
        return { ...prevState, userInput: "", translation: " " };
      });
    },
    addSelected: (event, flagGroup) => {
      let currentDiv = event.target;
      const flags = document.querySelectorAll(`${flagGroup}`);
      flags.forEach((flag) => {
        flag.classList.remove("selected");
      });
      currentDiv.classList.add("selected");
    },
    switchLangs: (lang1, lang2) => {
      setState((prevState) => {
        return { ...prevState, inputLang: lang2, language: lang1 };
      });
    },
    resetInputs: () => {
      setState((prevState) => {
        return { ...prevState, userInput: "" };
      });
    },
    addToChatLog: (inputObj, messageLog, createChatComponents) => {
      const inputText = document.getElementById("text-input");
      inputText.value = "";
      if (messageLog.length > 6) {
        messageLog.shift();
        messageLog.push(inputObj);
      } else {
        messageLog.push(inputObj);
      }
      setState((prevState) => {
        return { ...prevState, chatLog: messageLog };
      });
      createChatComponents(messageLog);
    },
    chatResponse: async (aiPrompt, addToChatLog, messageLog, createChatComponents) => {
      const completion = await openai.chat.completions.create({
        messages: aiPrompt,
        model: "gpt-3.5-turbo",
        temperature: 1,
      });

      let aiReply = completion.choices[0].message.content;
      setState((prevState) => {
        return { ...prevState, chatReply: aiReply };
      });
      let aiInput = { role: "system", content: aiReply };

      addToChatLog(aiInput, messageLog, createChatComponents);
      createChatComponents(messageLog);
      state.changeWaiting(true);
    },
    chatReply: "",
    chatLog: [],
    chatComponents: [],
    createChatComponents(chatLog) {
      let i = 0;

      const chatComponents = chatLog.map((inputObj) => {
        i++;
        const { role, content } = inputObj;
        return <Chat_Message role={role} content={content} key={i} />;
      });
      setState((prevState) => {
        return { ...prevState, chatComponents: chatComponents };
      });
    },
    waiting: true,
    changeWaiting: function (boolean) {
      setState((prevState) => {
        return { ...prevState, waiting: boolean };
      });
    },
    clearChat: function () {
      setState((prevState) => {
        return { ...prevState, chatComponents: [], chatLog: [] };
      });
    },

    resetLangs: function () {
      setState((prevState) => {
        return { ...prevState, inputLang: "english", language: "", translation: "", userInput: "" };
      });
    },
  });

  const props = { state, setState };
  return (
    <>
      <div className="check"></div>
      <div className="container-fluid app d-flex flex-column">
        <div className="row home-row flex-grow-1">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home props={props} />} />
                <Route path="/translation" element={<Translation_Page props={props} />} />
                <Route path="/chat" element={<Chat_Page props={props} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <div className="check"></div>
    </>
  );
}

export default App;
