import Image from 'next/image';
import styles from './singlePost.module.css';

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src='https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='PostImage'
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src='https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='User Image'
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>25.06.2024</span>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            perferendis pariatur repellat asperiores. Autem alias ad itaque
            laborum sit tenetur.
          </div>
        </div>
      </div>
    </div>
  );
}
