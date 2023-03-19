import "./Footer.css";

const Footer = () => {
    return (
        <div>
                <footer>
            <div className="footer-container">
            <div className="footer-logo">
                <img src="./images/logofondo.png" alt="Logo" />
            </div>
            <div className="footer-contact">
                <h3>Contacto</h3>
                <p>Malabia 375</p>
                <p>Buenos Aires, Argentina, CP 1425</p>
                <p>Teléfono: (54) 11-7890-1250</p>
            </div>
            <div className="footer-social">
                <h3>Redes Sociales</h3>
                    <ul>
                    <li>
                        <a href="www.facebook.com">
                        <img src="./images/facebook.png" alt="logo-facebook" width= "30p"/>
                        </a>
                    </li>
                    <li>
                        <a href="www.twitter.com">
                        <img src="./images/twitter.png" alt="logo-twitter" width= "30p"/>
                        </a>
                    </li>
                    <li>
                        <a href="www.instagram.com">
                            <img src="./images/instagram.png" alt="logo-instagram" width= "30p"/>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <span>Todos Los Derechos Reservados © 2023 - Bar a Dptos</span>
            </div>
            </footer>
        </div>
    );
};

export default Footer;
