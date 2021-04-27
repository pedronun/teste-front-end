import styles from "./designer.module.scss";

import FelipeDesigner from "../../assets/felipe.png";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Designer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <MdKeyboardArrowLeft size="32" fill="#707070" />

        <div className={styles.leftSide}>
          <img src={FelipeDesigner} alt="Designer" />
          <div>
            <strong>Felipe Salmim </strong>
            <p>Designer</p>
          </div>
        </div>
        
        <div className={styles.rightSide}>
          <span>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for ‘lorem ipsum’
          </span>
        </div>

        <MdKeyboardArrowRight size="32" fill="#707070" />

      </div>
    </div>
  );
};

export default Designer;
