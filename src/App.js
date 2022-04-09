import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm"

const App = () => {
    if (!localStorage.getItem("username")) return < LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="354844f5-c151-4d38-ab41-56f9e3a32092"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => {
                return <ChatFeed{...chatAppProps} />
            }}
        />
    )
}

export default App;
