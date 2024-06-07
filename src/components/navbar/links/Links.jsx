'use client';
import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/NavLink';

const links = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contacts',
    path: '/contacts',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const session = true;
const isAdmin = false;
export default function Links() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.path} link={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Log out</button>
          </>
        ) : (
          <NavLink link={{ title: 'Log in', path: '/login' }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prevValue) => !prevValue)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.path} link={link} />
          ))}
        </div>
      )}
    </div>
  );
}
