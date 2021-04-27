import styles from "./bannerhome.module.scss";

const BannerHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>novos produtos</span>
        <span>
          <strong>instrumentos</strong> <br />
          profissionais
        </span>
        <div>
          <p>confira</p>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
