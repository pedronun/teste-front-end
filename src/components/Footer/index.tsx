import styles from "./footer.module.scss";

import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import FormasPagamento from "../../assets/formaspagamento.png";
import Seguranca from "../../assets/seguranca.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div>
            <ul>
              <strong>
                <li>institucional</li>
              </strong>
              <span>
                <li> quem somos </li>
              </span>
              <span>
                <li>nossas lojas</li>
              </span>
            </ul>

            <ul>
              <strong>
                <li className={styles.lastStrongLeftSide}>atendimento</li>
              </strong>
              <span>
                <li>fale conosco</li>
              </span>
              <span>
                <li>vendas@ninjasom.com.br</li>
              </span>
            </ul>
          </div>
          <div>
            <ul>
              <strong>
                <li>ajuda e suporte</li>
              </strong>
              <span>
                <li>política de privacidade</li>
              </span>
              <span>
                <li>política de trocas</li>
              </span>
              <span>
                <li>prazos de entrega</li>
              </span>
              <span>
                <li>termos de uso</li>
              </span>
            </ul>
            <FaInstagram size="15" fill="#fff" />
            <FaTwitter size="15" fill="#fff" />
            <FaFacebookF size="15" fill="#fff" />
          </div>
        </div>

        <div className={styles.rightSide}>
          <div>
            <div>
              <strong>formas de pagamento</strong>
              <div>
                <img src={FormasPagamento} alt="Formas de pagamento" />
              </div>
            </div>
            <div className={styles.security}>
              <strong>segurança</strong>
              <img src={Seguranca} alt="Segurança" />
            </div>
          </div>
          <div className={styles.form}>
            <form>
              <span>
                assine nosso <strong>newsletter</strong>
              </span>{" "}
              <br />
              <p>e receba novidades e promoções</p>
              
              <input type="text" placeholder="seu nome" />
              <input type="text" placeholder="seu email" />

              <div>
                <button>enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
