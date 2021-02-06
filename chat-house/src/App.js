import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="f3cd408b-4e3c-467b-bcab-e455038f3914"
      userName="archit.soni"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
export default App;
