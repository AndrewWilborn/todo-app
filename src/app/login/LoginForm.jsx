import { useContext } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAryfFVpmYnl1OVEXjM1EhdbQze-IinvM",
    authDomain: "todo-auth-c11.firebaseapp.com",
    projectId: "todo-auth-c11",
    storageBucket: "todo-auth-c11.appspot.com",
    messagingSenderId: "316275732643",
    appId: "1:316275732643:web:ca7c3ff81ab76d81844f16"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function LoginForm() {

    const { setUser } = useContext(AuthContext); // obtains setUser function via context which is created in App.js
    const navigate = useNavigate();

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                setUser(userCredential.user) // Create account, logs user in
                // use router to send user back to home page
                navigate("/");
            })
            .catch((err) => alert(err.message))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user) // Create account, logs user in
                // use router to send user back to home page
                navigate("/");
            })
            .catch((err) => alert(err.message))
    }

    return (
        <main>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" />
                </label>
                {/* Stinky Break Tags Should use display:block instead*/}
                <br /> 
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>
            <button onClick={handleGoogle}>Login With Google</button>
        </main>

    )
}