import {FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return <section className="footer">
        <div className="icon-section">
            <h3>Follow us on | </h3>
            <div className="icons">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter />
            </div>
        </div>
        <p className='foot-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia quam facere natus nam voluptas non neque velit culpa fuga animi sint totam, mollitia, aliquam dolore quod quaerat quisquam recusandae sit blanditiis consequuntur inventore suscipit debitis minima. Ipsa, laudantium eius!</p>
    </section>
}

export default Footer;