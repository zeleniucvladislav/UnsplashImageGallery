import Footer from "./footer/footer";
import UserData from "./userData/userData";

import ImageData from "../../types/imageData";

import styles from "./image.module.scss";

const Image = (img: ImageData) => {
  return (
    <section key={img.id} className={styles.image_wrapper}>
      <img src={img.urls.small} alt="background" className={styles.image} />
      <article className={styles.image_data}>
        <UserData user={img.user} description={img.alt_description} />
        <Footer
          color={img.color}
          createdAt={img.created_at}
          likes={img.likes}
          downloadUrl={img.links.download}
        />
      </article>
    </section>
  );
};

export default Image;
