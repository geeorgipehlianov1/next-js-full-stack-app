import Link from 'next/link';
import Links from './links/Links';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <header>
      <nav className={styles.container}>
        <div>
          <Link href='/' className={styles.logo}>
            Logo
          </Link>
        </div>
        <div>
          <Links />
        </div>
      </nav>
    </header>
  );
}
