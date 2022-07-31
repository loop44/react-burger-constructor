import React from "react";

import styles from "./Footer.module.scss";

import visa from "../../assets/images/icons/visa.svg";
import mastercard from "../../assets/images/icons/mastercard.svg";
import googlePay from "../../assets/images/icons/google-pay.svg";
import applePay from "../../assets/images/icons/apple-pay.svg";
import paypal from "../../assets/images/icons/paypal.svg";
import bitcoin from "../../assets/images/icons/bitcoin.svg";
import ethereum from "../../assets/images/icons/ethereum.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <p>2022. Make Your Burger</p>
        <a href="#">Privacy Policy</a> |<a href="#">Terms &#38; Conditions</a>
      </div>
      <div className={styles.footerRight}>
        <a className="footerLink" href="#">
          <img src={visa} alt="visa" />
        </a>
        <a className="footerLink" href="#">
          <img src={mastercard} alt="mastercard" />
        </a>
        <a className="footerLink" href="#">
          <img src={googlePay} alt="google-pay" />
        </a>
        <a className="footerLink" href="#">
          <img src={applePay} alt="apple-pay" />
        </a>
        <a className="footerLink" href="#">
          <img src={paypal} alt="paypal" />
        </a>
        <a className="footerLink" href="#">
          <img src={bitcoin} alt="bitcoin" />
        </a>
        <a className="footerLink" href="#">
          <img src={ethereum} alt="ethereum" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
