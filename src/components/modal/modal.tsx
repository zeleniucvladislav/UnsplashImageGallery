import { BsDownload } from "react-icons/bs";

import styles from "./modal.module.scss";

type Props = {
  text: string;
};

const Modal = ({ text }: Props) => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <BsDownload className={styles.modal__icon} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;
