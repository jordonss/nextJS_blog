import Image from "next/image";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/Artem.jpg"
          alt="Artem image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi</h1>
      <p>A blog about web development</p>
    </section>
  );
}

export default Hero;
