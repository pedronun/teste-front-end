import styles from "./header.module.scss";

import Logo from "../../assets/logo.svg";

import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { VscTriangleDown } from 'react-icons/vsc';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import TopBar from "../TopBar";
import BottomBar from "../BottomBar";

const Header = () => {
  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={Logo} alt="Ninja Som's Logo" height="28" width="180" />

          <div className={styles.inputBlock}>
            <input
              type="text"
              placeholder="Busque aqui..."
              className={styles.input}
            />

            <FiSearch size="19" />
          </div>

          <div className={styles.whatsappBlock}>
            <FaWhatsapp size="21" fill="#041E50" />
            <span>(11) 99999-9999</span>
          </div>

          <div className={styles.loginBlock}>
            <IoPersonOutline size="21" fill="#041E50" />
            <div>
              <strong>olá, visitante</strong>
              <span>minha conta</span>
            </div>
            <VscTriangleDown size="5" fill="#041E50"/>
          </div>

          <div className={styles.cartBlock}>
            <HiOutlineShoppingBag size="27" color="#fff"/>
            <strong>seu carrinho</strong>
            <span>0 item (s)</span>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Header;
