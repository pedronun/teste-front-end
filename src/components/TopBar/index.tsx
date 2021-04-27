import styles from "./topbar.module.scss";

import { MdLockOutline } from "react-icons/md";
import { RiArrowLeftRightLine, RiPercentLine } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <MdLockOutline fill="#fff" size="20" />
          <p className={styles.p}>
            compra <span className={styles.span}>100% segura</span>
          </p>
        </div>
        <div>
          <RiArrowLeftRightLine fill="#fff" size="20" />
          <span className={styles.span}>1ª troca grátis</span>
        </div>
        <div>
          <RiPercentLine fill="#fff" size="20" />
          <span className={styles.span}>5X sem juros</span>
        </div>
        <div>
          <FiTruck fill="#fff" size="20" />
          <p className={styles.p}>
            entregas em <span className={styles.span}>todo brasil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
