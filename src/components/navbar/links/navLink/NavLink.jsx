'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navLink.module.css';

export default function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathName === link.path && styles.active}`}
      key={link.path}
      href={link.path}
    >
      {link.title}
    </Link>
  );
}
