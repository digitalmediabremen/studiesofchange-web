import Image from 'next/image';
import styles from '../styles/home.module.css';
import arrowPic from '../public/design/arrow.png'
import logoHfk from '../public/logos/hfk.png'
import logoDigitalmedia from '../public/logos/digitalmedia@2x.png'
import logoGeg from '../public/logos/geg.png'
import titlePic from '../public/design/title.png'
import texts from '../texts/curatorial';
import Link from "next/link";
import React from 'react';

let enOrDe: boolean = true; // true:en, false:de


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
                {/* row 0----------------------------------------------------------- */}
                <tr>
                    <td colSpan={2} className={styles.title_div}>
                        <Image priority className={styles.title} src={titlePic} alt="" />

                    </td>
                </tr>
                {/* row 1----------------------------------------------------------- */}
                <tr>
                    <td className={styles.table_info_text}>
                        Opening: 29.5. at 18:00
                        <h2> 30.05 &mdash; <br />02.06.2024</h2>
                        Alte Pathologie, Am schwarzen Meer 134/136
                    </td>
                    <td><Image priority className={styles.table_arrow} src={arrowPic} alt="" /></td>
                </tr>
                {/* row 2----------------------------------------------------------- */}
                <tr>
                    <td colSpan={2} className={styles.table_curatorial_text}>
                        {/* language switch */}
                        <Link legacyBehavior={true} href="/">
                            <a onClick={() => { enOrDe = !enOrDe; }}>EN/DE</a>
                        </Link>
                        {/* title of curatorial text */}
                        {
                            (enOrDe ?
                                (<h3>{texts.en.subtitle}</h3>)
                                : (<h3>{texts.de.subtitle}</h3>)
                            )
                        }
                    </td>
                </tr>
                {/* row 3----------------------------------------------------------- */}
                <tr>
                    {
                        (enOrDe ?
                            [// english curatorial
                                <td className={styles.table_curatorial_text} key={0}>
                                    <p>{texts.en.body[0]}</p>
                                    <p>{texts.en.body[1]}</p>
                                </td>,
                                <td className={styles.table_curatorial_text}key={1}>
                                <p>{texts.en.body[2]}</p>
                                <p></p>
                            </td>
                            ]
                            : [// deutsch curatorial
                                <td className={styles.table_curatorial_text} key={0}>
                                    <p>{texts.de.body[0]}</p>
                                    <p>{texts.de.body[1]}</p>
                                </td>,
                                <td className={styles.table_curatorial_text} key={1}>
                                <p>{texts.de.body[2]}</p>
                                <p></p>
                            </td>
                            ]
                        )
                    }
                </tr>
                {/* row 4----------------------------------------------------------- */}
                <tr>
                    <td><Image priority className={styles.table_arrow_flip} src={arrowPic} alt="" /></td>
                </tr>
                {/* row 5----------------------------------------------------------- */}
                <tr>
                    <td className={styles.table_logos}>
                        <Image src={logoHfk} alt="logo of the University of the Arts, Bremen" />
                        <Image src={logoDigitalmedia} alt="logo of the digital media program" />
                        <Image src={logoGeg} alt="logo of Grundstücksentwicklung Klinikum Bremen-Mitte" />
                    </td>
                    <td className={styles.table_placeholder}></td>
                </tr>
                {/* ----------------------------------------------------------- */}
            </tbody>
        </table>
    )
}