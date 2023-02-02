import {useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isTrue, setIsTrue] = useState(false)
    const user=null
    return <>
            <nav className="navbar">
            <div className="logo">
                <h1 className="logo-head">BayMax</h1>
            </div>
            <button className="nav-btn" onClick={() => setIsTrue(!isTrue)}><FaBars/></button>
            <div id="nav-links" className={isTrue ? "show" : "hide"}>
                <input type="text" className="search-bar" placeholder="search"/>
                <ul className="list">
                    <li>
                        <Link  to="/" className="links">
                            Home
                            <span className="effect"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detect" className="links">
                            Medicines
                            <span className="effect"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="links">
                            Login
                            <span className="effect"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/temp" className="links">
                            Find doctor
                            <span className="effect"></span>
                        </Link>
                    </li>
                </ul>
            </div>
            {user ? <h3>{user.name}</h3> : <FaUserCircle className="log-in" />}
        </nav>
    </>
}

export default Navbar;