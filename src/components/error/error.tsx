import { FaSadTear } from "react-icons/fa";

import styles from "./error.module.scss";

type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return (
    <article className={styles.error}>
      <FaSadTear className={styles.error__icon} />
      <p>Oops! {message}</p>
    </article>
  );
};

export default Error;
