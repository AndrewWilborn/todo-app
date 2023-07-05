import { Link } from "react-router-dom"

export default function Login() {
    return (
        <main>
            <h1>Login</h1>
            Not a user? <Link to="/signup">Sign Up</Link>
        </main>
    )
}