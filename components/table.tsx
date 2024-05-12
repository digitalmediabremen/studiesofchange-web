import Image from 'next/image';
import styles from '../styles/home.module.css';
import arrowPic from '../public/design/arrow.png'
import logoHfk from '../public/logos/hfk.png'
import logoDigitalmedia from '../public/logos/digitalmedia@2x.png'
import logoGeg from '../public/logos/geg.png'
import texts from '../texts/curatorial';
import React from 'react';


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
                        <h2> 30.05 &mdash; <br />02.06.2024</h2>
                        Alte Pathologie, Am schwarzen Meer 134/136
                    </td>
                    <td><Image priority className={styles.table_arrow} src={arrowPic} alt="" /></td>
                </tr>
                <tr>
                    <td><Image priority className={styles.table_arrow_flip} src={arrowPic} alt="" /></td>
                    <td className={styles.table_curatorial_text}>
                        <h3 dangerouslySetInnerHTML={{ __html: texts.en.title }}></h3>
                        <p dangerouslySetInnerHTML={{ __html: texts.en.subtitle }}></p>
                        <p dangerouslySetInnerHTML={{ __html: texts.en.body }}></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className={styles.table_placeholder}></td>
                    {/* <td ><Image priority className={styles.table_arrow} src={arrowPic} alt="" /></td> */}
                </tr>
                <tr>
                    <td><Image priority className={styles.table_arrow_flip} src={arrowPic} alt="" /></td>
                </tr>
                <tr>
                    <td className={styles.table_logos}>
                        <Image src={logoHfk} alt="logo of the University of the Arts, Bremen" />
                        <Image src={logoDigitalmedia} alt="logo of the digital media program" />
                        <Image src={logoGeg} alt="logo of Grundstücksentwicklung Klinikum Bremen-Mitte" />
                    </td>
                    <td className={styles.table_placeholder}></td>
                </tr>
            </tbody>
        </table>
    )
}