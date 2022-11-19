import {useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa"

const Navbar = () => {
    const [isTrue, setIsTrue] = useState(false)
    return <>
        <nav>
            <div className="logo">
                <h1>logo</h1>
            </div>
            <button className="nav-btn" onClick={() => setIsTrue(!isTrue)}><FaBars/></button>
            <div id="nav-links" className={isTrue ? "show" : "hide"}>
                <input type="text" className="search-bar" placeholder="search"/>
                <ul className="list">
                    <li>
                        <a href="/" className="links">
                            Home
                            <span className="effect"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="links">
                            Detect Disease
                            <span className="effect"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="links">
                            Find Doctor
                            <span className="effect"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="links">
                            Upload image
                            <span className="effect"></span>
                        </a>
                    </li>
                </ul>
            </div>
                <FaUserCircle className="log-in"/>
        </nav>
    </>
}

export default Navbar;