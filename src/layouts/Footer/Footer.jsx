import { Link } from 'react-router-dom';
import iconColor from '../../assets/icons/icon-color.png'

const Footer = () => {
  return (
    <footer className="bem-especial-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-disclaimer">
              <p>*Os produtos e campanhas</p>
              <p>podem ser alterados pelo</p>
              <p>Programa a qualquer tempo.</p>
              <p>Copyright © 2020. Todos os</p>
              <p>direitos reservados epharma.</p>
            </div>
            
            <button className="footer-icon-button">
              <div className="icon-circle">
                <img src={iconColor} alt="icon" className="icon" />
              </div>
            </button> 

          </div>

          <div className="footer-center">
            <h3 className="footer-title">Bem Especial</h3>
            <ul className="footer-links">
              <li><Link to="/vouchers">Meus Vouchers</Link></li>
              <li><Link to="/resgatar">Resgates</Link></li>
              <li><Link to="/meus-pontos">Meus Pontos</Link></li>
            </ul>
          </div>

          <div className="footer-right">
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-links">
              <li><Link to="/privacidade">Portal da Privacidade</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}; 

export default Footer;