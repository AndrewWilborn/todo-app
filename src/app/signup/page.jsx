import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"

export default function SignUp() {
    return (
        <main>
            <h1>Sign Up</h1>
            <SignUpForm />
            ALready a user? <Link to="/login">Login</Link>
        </main>
    )
}