import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='Post Image'
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>25.06.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Description</p>
        <Link className={styles.link} href='/'>Read more</Link>
      </div>
    </div>
  );
}
