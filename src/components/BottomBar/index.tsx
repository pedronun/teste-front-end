import styles from "./bottombar.module.scss";

import { VscTriangleDown } from "react-icons/vsc";

const BottomBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        <li>
          <a href="#">todas as categorias</a>
        </li>
        <li>
          <a href="#">som profissional</a>
          <VscTriangleDown size="5" fill="#041E50" />
        </li>
        <li>
          <a href="#">intrumentos musicais</a>
          <VscTriangleDown size="5" fill="#041E50" />
        </li>
        <li>
          <a href="#">promoções</a>
        </li>
        <li>
          <a href="#">contato</a>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
