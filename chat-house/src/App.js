import "./App.css";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./Components/LoginForm";
import ChatFeed from "./Components/ChatFeed";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="f3cd408b-4e3c-467b-bcab-e455038f3914"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
export default App;
