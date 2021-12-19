import React from "react";

import styles from "./userData.module.scss";

type User = {
  portfolio_url: string;
  name: string;
  profile_image: { large: string };
};

type Props = {
  user: User;
  description: string;
};

const UserData: React.FC<Props> = ({ user, description }) => {
  const portfolioUrl =
    user.portfolio_url &&
    user.portfolio_url.replace(/(^\w+:|^)\/\//, "").replace(/^www\./, "");

  return (
    <article className={styles.user_desc}>
      <p className={styles.description}>{description}</p>
      <article className={styles.user}>
        <img src={user.profile_image.large} alt="user-img" />
        <div className={styles.user__info}>
          <p>{user.name}</p>
          <a href={user.portfolio_url} target="_blank" rel="noreferrer">
            {portfolioUrl}
          </a>
        </div>
      </article>
    </article>
  );
};

export default UserData;
