import Modal from "react-modal";

import styles from './modal.module.scss';

import Bateria from "../../assets/bateriaEletronica.png";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.container}>
        <div>
          <img src={Bateria} alt="Bateria Eletronica" />
        </div>
        <div>
          <span>Bateria Eletrônica</span>
          <strong>R$ 1499,90</strong>
          <p>
            Many desktop publishing packages and web page editors now Many
            desktop publishing…
          </p>
          <a href="">Veja mais detalhes do produto</a>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
