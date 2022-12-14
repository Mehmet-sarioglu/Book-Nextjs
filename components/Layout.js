import Head from "next/head"
import Header from "./Header"
import styles from "../styles/Layout.module.css"
import Footer from './Footer'
export default function Layout({description,keywords,title,children}) {
  return (
    <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
    </Head>
    <Header/>
    <div className={styles.container}>
    {children}
    </div>

    <Footer/>
    </div>
  )
}
Layout.defaultProps={
  title:'Best books Site',
  description:'best site for sells books',
  keywords:'books,files,more'
}