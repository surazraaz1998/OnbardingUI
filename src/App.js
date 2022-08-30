import UserForm from "./components/UserForm";
import "./styles.css";
import Logo from "./Eden.PNG";

export default function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Logo" />
      <UserForm className="userform" />
    </div>
  );
}
