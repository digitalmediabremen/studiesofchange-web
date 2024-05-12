import Layout from "../components/layout";
import Image from 'next/image';
import styles from '../styles/home.module.css';
import titlePic from '../public/design/title.png'
import bg01 from '../public/design/rotated/arrow@2x.png'
import bg02 from '../public/design/rotated/back@2x.png'
import border from '../public/design/borders@2x.png'
import bg01_mobile from '../public/design/bg-01@2x.png'
import bg02_mobile from '../public/design/bg-02@2x.png'
import { siteTitle } from "../components/layout";
import Device from "../components/device";
import Table from "../components/table";
import Header from "../components/header";

// export async function getStaticProps({ }: any) {
//   return {
//     props: {

//     },
//   };
// }
export default function Home() {
  return (
    <Layout>
      {
        <div>
          <Header />
          <Device>
            {({ isMobile }) => {
              if (!isMobile) {
                return <div className={styles.bg_div}>
                  <Image priority={true} className={styles.bg_02} src={bg02} alt={siteTitle} />
                  <Image priority={true} className={styles.bg_01} src={bg01} alt={siteTitle} />
                  <Image priority={true} className={styles.border} src={border} alt={siteTitle} />
                </div>
              }
              return <div className={styles.bg_div}>
                <Image priority={true} className={styles.bg_02} src={bg02_mobile} alt={siteTitle} />
                <Image priority={true} className={styles.bg_01} src={bg01_mobile} alt={siteTitle} />
                <Image priority={true} className={styles.border} src={border} alt={siteTitle} />
              </div>
            }}
          </Device>
          <div>
            <Table />
          </div>
        </div>
      }
    </Layout>
  );
}
