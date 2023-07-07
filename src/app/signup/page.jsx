import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"

export default function SignUp() {
    return (
        <main className="bg-violet-600 min-h-screen text-orange-50 px-4 py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
            <SignUpForm />
            <p className="mt-4">Aready a user? <Link to="/login" className="text-sky-300 hover:underline hover:text-sky-500">Login</Link> </p>
        </main>
    )
}