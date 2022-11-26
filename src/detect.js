import { FaUserCircle,FaLock} from "react-icons/fa"

const Detect = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return <div className="container-box">
        <div className="container">
            <form action="" onSubmit={handleSubmit}>
                <div className="input-sections">
                    <label htmlFor="username"><FaUserCircle className="input-icons"/></label>
                    <input type="text" id="username" className="login-input"/>
                </div>
                <div className="input-sections">
                    <label htmlFor="password"><FaLock className="input-icons" /></label>
                    <input type="text" id="password" className="login-input" />
                </div>
                <div className="submit-container">
                    <button type="submit" className="input-submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
}

export default Detect;