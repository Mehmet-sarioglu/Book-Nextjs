import Link from "next/link"
import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
       <p>CopyRights &copy; Book Site</p> 
        <p>
            <Link href='/about'>
                about this site
            </Link>
        </p>
    </footer>
  )
}
