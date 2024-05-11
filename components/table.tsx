import Image from 'next/image';
import Layout from "../components/layout";
import styles from '../styles/home.module.css';
import arrowPic from '../public/design/arrow.png'

export async function getStaticProps() {
    return {
        props: {
        },
    };
}


export default function Table() {
    return (
        <table className={styles.table_content}>
            <tbody>
                <tr>
                    <td className={styles.table_placeholder}></td>
                    <td className={styles.table_placeholder}></td>
                </tr>
                <tr>
                    <td className={styles.table_info_text}>
                        Opening: 29.5. at 18:00
                        <h2> 30.05.2024 &mdash; <br />02.06.2024</h2>
                        Alte Pathologie, Am schwarzen Meer 134/136
                    </td>
                    <td><Image priority className={styles.table_arrow} src={arrowPic} alt="" /></td>
                </tr>
                <tr>
                    <td><Image priority className={styles.table_arrow_flip} src={arrowPic} alt="" /></td>
                    <td className={styles.table_curatorial_text}>
                        Curatorial text<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </td>
                </tr>
                <tr>
                    <td className={styles.table_arrow}></td>
                    <td><Image priority className={styles.table_arrow} src={arrowPic} alt="" /></td>
                </tr>
                <tr>
                    <td><Image priority className={styles.table_arrow_flip} src={arrowPic} alt="" /></td>
                    <td className={styles.table_arrow}></td>
                </tr>
            </tbody>
        </table>
    )
}