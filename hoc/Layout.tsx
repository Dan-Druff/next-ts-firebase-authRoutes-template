import React, {FunctionComponent} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Menus from "../components/Menus";
interface LayoutProps {
    children: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {

    return (
        <div className={styles.layoutDiv}>
            <Head>
                <title>Web Template</title>
                <meta name="description" content="hamtron template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Menus />
            </div>
            
            <div className={styles.main}>
                {children}
            </div>
            <footer className={styles.footer}>
                <a
                    href="https://hamtronmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                hamtron
                <span className={styles.logo}>
                    <Image src="/hhh.png" alt="HamtronMedia Logo" width={16} height={16} />
                </span>
                media
                </a>
            </footer>
        </div>
        )
  

}
export default Layout;