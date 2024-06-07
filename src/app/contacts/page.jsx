import Image from 'next/image';
import styles from './contacts.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src='/contact.png'
          alt='Contact Image'
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea placeholder='Message' cols='30' rows='10'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
