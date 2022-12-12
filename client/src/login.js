import { FaEnvelope, FaLock } from "react-icons/fa"
import { Link,useHistory} from "react-router-dom"
import {useState} from "react"

const Login = () => {
    const history=useHistory()
    const [user, setUser] = useState({
        email:"",password:""
    })
    const handleSubmit = async(e) => {
        e.preventDefault()
        const { email, password } = user
        try {
            const res = await fetch("/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            })
            const data = await res.json()
            console.log(data)
            history.push("/")
        } catch (error) {
            console.log("login failed")
        }
    }
    return <div className="container-box">
        <div className="container">
            <form action="" onSubmit={handleSubmit} >
                <div className="input-sections">
                    <label htmlFor="email"><FaEnvelope className="input-icons" /></label>
                    <input
                        type="email" id="email" className="login-input" placeholder="email"
                        value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div className="input-sections">
                    <label htmlFor="password"><FaLock className="input-icons" /></label>
                    <input type="password" id="password" className="login-input" placeholder="password"
                        value={user.password}  onChange={(e)=>setUser({...user,password:e.target.value})}
                    />
                </div>
                <div className="submit-container">
                    <button type="submit" className="input-submit">Submit</button>
                </div>
            </form>
                <h3 className="login">not yet registered? <Link to="/signup" className="links">Register</Link></h3>
        </div>
    </div>
}

export default Login