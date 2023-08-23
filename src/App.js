import "./App.css";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./Components/LoginForm";
import ChatFeed from "./Components/ChatFeed";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="4a3abfd3-655f-44e1-a975-75be18cd8dd0"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
export default App;
