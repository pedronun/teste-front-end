import styles from "./home.module.scss";

import BannerHome from "../../components/BannerHome";

import Bateria from "../../assets/bateria.png";
import Guitarra from "../../assets/guitarra.png";
import Mesa from "../../assets/mesaSom.png";
import Microfone from "../../assets/mic.png";
import Teclado from "../../assets/teclado.png";
import Violao from "../../assets/violao.png";
import Products from "../../components/Products";

import Akg from "../../assets/akg.png";
import Roland from "../../assets/roland.png";
import Boss from "../../assets/boss.png";
import Shure from "../../assets/shure.png";
import Designer from "../../components/Designer";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";

const Home = () => {
  return (
    <>
      <BannerHome />
      <div className={styles.container}>
        <div className={styles.categories}>
          <div>
            <img src={Guitarra} alt="Guitarra" />
            <span>guitarras</span>
          </div>
          <div>
            <img src={Microfone} alt="Mic" />
            <span>microfones</span>
          </div>
          <div>
            <img src={Mesa} alt="Mesa de Som" />
            <span>mesa de som</span>
          </div>
          <div>
            <img src={Teclado} alt="Teclado" />
            <span>teclados</span>
          </div>
          <div>
            <img src={Violao} alt="Violão" />
            <span>violão</span>
          </div>
          <div>
            <img src={Bateria} alt="Bateria" />
            <span>baterias</span>
          </div>
        </div>

        <div className={styles.banners}>
          <div className={styles.bannerBlock}>
            <span>novidades</span>
            <span>
              <strong>áudio</strong>
              <br />
              profissional
            </span>
            <button>confira</button>
          </div>
          <div className={styles.bannerBlock}>
            <span>novidades</span>
            <span>
              <strong>instrumentos</strong>
              <br />
              musicais
            </span>
            <button>confira</button>
          </div>
        </div>

        <Products />

        <div className={styles.partners}>
          <span>
            as <strong>melhores</strong> marcas
          </span>
          <p>
            it is a long established fact that a reader will be distracted by
            the readable
          </p>

          <div className={styles.brands}>
            <img src={Akg} alt="Akg" />
            <img src={Roland} alt="Roland" />
            <img src={Boss} alt="Boss" />
            <img src={Shure} alt="Shure" />
          </div>
        </div>

        <div className={styles.about}>
          <span>sobre nós</span>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy. Lorem Ipsum as their default model
            text, and a search for ‘lorem ipsum’ will uncover many web sites
            still in their infancy. Lorem Ipsum as their default model text, and
            a search for ‘lorem ipsum’ will uncover many web sites still in
            their infancy.
          </p>
        </div>

        <Designer />

        <Footer />

        <Copyright />
      </div>
    </>
  );
};

export default Home;
