import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src='/about.png' alt='About Image' fill />
      </div>
    </div>
  );
}
