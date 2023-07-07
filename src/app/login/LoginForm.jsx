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
        <section className="bg-emerald-200 text-violet-950 p-6 rounded-lg max-w-[420px] w-full mx-auto">
            <form onSubmit={handleLogin}  className="flex flex-col items-start justify-around min-h-[30vh]">
                <label htmlFor="email" className="flex justify-between  w-full">
                    <span>Email</span>
                    <input type="email" name="email" className="rounded-lg border-transparent border border-violet-900 py-2 px 4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2 focus:ring-viiolet-600 focus:border-transparent"/>
                </label>
                <label htmlFor="password" className="flex justify-between w-full">
                    <span>Password</span>
                    <input type="password" name="password" className="rounded-lg border-transparent border border-violet-900 py-2 px 4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2 focus:ring-viiolet-600 focus:border-transparent"/>
                </label>
                <input type="submit" value="Login" className="bg-violet-500 text-orange-50 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-violet-700 hover:shadow-sm cursor-pointer w-full"/>
            </form>
            <button onClick={handleGoogle} className="mt-4 bg-sky-500 text-orange-50 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-sky-700 hover:shadow-sm cursor-pointer w-full">Login With Google</button>
        </section>

    )
}