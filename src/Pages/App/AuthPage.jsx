import SignUpForm from "../../Components/SignUpForm";
import LoginForm from "../../Components/LoginForm";
import "../App/App.css"

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1 className="login">Register/Log In to Access the Site!</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    );
}