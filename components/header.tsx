import styles from './header.module.css';
import Link from "next/link";
import Image from 'next/image';
import { siteTitle } from "./layout";
import titlePic from '../public/design/title.png'


export default function Header() {
  return (
    <div>
      <div className={styles.title_div}>
        <Image priority className={styles.title} src={titlePic} alt={siteTitle} />
        <table className={styles.nav}>
          <tbody>
          <tr>
            <td><h3>About</h3></td>
            <td><h3>Works</h3></td>
            <td><h3>Contact</h3></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

