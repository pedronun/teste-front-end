import { useEffect, useState } from "react";

import { api } from "../../services/api";
import styles from "./products.module.scss";

import BateriaEletronica from "../../assets/bateriaEletronica.png";
import { IoSearchCircle } from "react-icons/io5";
import ProductModal from "../Modal";

const Products = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  useEffect(() => {
    api.get("/").then((response) => console.log(response.data));
  }, []);

  return (
    <div className={styles.container}>
      <span>
        instrumentos <strong>musicais</strong>
      </span>
      <p>
        it is a long established fact that a reader will be distracted by the
        readable
      </p>

      <div className={styles.content}>
        <div>
          <img src={BateriaEletronica} alt="Bateria Eletrônica" />
          <span>Bateria Eletrônica</span>
          <p>
            Many desktop publishing packages and web page editors now Many
            desktop publishing…
          </p>
          <strong>R$ 1499,90</strong>
        </div>
        <button onClick={handleOpenModal}>
          <IoSearchCircle size="32" fill="#041E50" />
        </button>

        {isOpenModal && (
          <ProductModal
            isOpen={isOpenModal}
            onRequestClose={handleCloseModal}
          />
        )}
      </div>

      <div className={styles.viewMore}>
        <button>ver mais</button>
      </div>
    </div>
  );
};

export default Products;
