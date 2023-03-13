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
                        <a href="#">
                        <i className="fab fa-facebook"></i>
                        </a>
                        Facebook
                    </li>
                    <li>
                        <a href="#">
                        <i className="fab fa-twitter"></i>
                        </a>
                        Twitter
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                            Instagram
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
