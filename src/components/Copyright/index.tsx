import styles from "./copyright.module.scss";

import CopyrightEconverse from '../../assets/copyrighteconverse.png';

const Copyright = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <p>NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15</p>
          <img src={CopyrightEconverse} alt="Copyright Econverse"/>
      </div>
    </div>
  );
};

export default Copyright;
