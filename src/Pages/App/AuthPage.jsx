import SignUpForm from "../../Components/SignUpForm";
import LoginForm from "../../Components/LoginForm";

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    );
}