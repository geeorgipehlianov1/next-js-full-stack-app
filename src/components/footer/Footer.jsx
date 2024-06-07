import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        Lama creative thoughts ® All rights reserved
      </div>
    </footer>
  );
}
