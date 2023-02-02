import { useState } from "react"
import { useHistory } from "react-router-dom"
import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa"


const SignUp = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name: "", email: "", password: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = user
        try {
            const res = await fetch("/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            })
            const data = await res.json()
            console.log(data)
            window.alert("registered successfully")
            history.push("/login")
        } catch (error) {
            console.log(error)
        }
    }
    return <div className="container-box">
        <div className="container">
            <form method="POST" onSubmit={handleSubmit} >
                <div className="input-sections">
                    <label htmlFor="username"><FaUserCircle className="input-icons" /></label>
                    <input
                        type="text" id="username" className="login-input" placeholder="username"
                        value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                </div>
                <div className="input-sections">
                    <label htmlFor="email"><FaEnvelope className="input-icons" /></label>
                    <input
                        type="email" id="email" className="login-input" placeholder="email"
                        value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div className="input-sections">
                    <label htmlFor="password"><FaLock className="input-icons" /></label>
                    <input
                        type="password" id="password" className="login-input" placeholder="password"
                        value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <div className="submit-container">
                    <button type="submit" className="input-submit" >Register</button>
                </div>
            </form>
        </div>
    </div>
}

export default SignUp;