import Link from 'next/link';
import styles from '../styles/Header.module.scss'

const Header = () => (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
            Головна
        </Link>
        <Link href="/contacts">
            Контакти
        </Link>
        <Link href="/contacts">
            Клієнти
        </Link>
        <Link href="/devices">
            Товари 
        </Link>
      </nav>
    </header>
  );
  
  export default Header;