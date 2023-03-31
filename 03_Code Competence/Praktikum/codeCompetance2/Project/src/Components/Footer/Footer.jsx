import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {

    return(
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Footer</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="fontawesome/css/all.css" />

        <body> 
        <footer className="footer">
            <div className="footer-left">
                <h5>Contact Us</h5>
                    <p className="footer-addres1">Papanggo Tanjung Priok Jakarta Utara</p>
                    <p className="footer-addres2">,Indonesia +62 077-777-77</p>
            </div>
            <div className="footer-center">
                <h5>Partnership</h5>
                <p>Websites</p>
                <p>Social Media</p>
                <p>Branding</p>
            </div>
            <div className="footer-right">
                    <h5>Follow Us</h5>
                    <div className="footer-media">
                    <a href="https://www.instagram.com/yonathann.ch/">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/yonathanch">
                        <FaGithubAlt />    
                    </a>
                    <a href="#">
                        <FaTelegram />
                    </a>
                    <a href="https://twitter.com/ntngyj">
                        <FaTwitter />
                    </a>
                    </div>
          </div>
            <div className="Copyright">
                    <p>&amp;Copyright 2023 Gyj. All Rights Reserved Designed by N</p>
            </div>
        </footer>
        </body>
        <i></i>
      </>
      
      
    )
}

export default Footer