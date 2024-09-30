'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import styles from './styles/Navigation.module.css';

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={`link ${pathname === '/' ? styles.active : ''}`} href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={`link ${pathname === '/about' ? styles.active : ''}`} href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={`link ${pathname === '/contact' ? styles.active : ''}`} href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
    }
