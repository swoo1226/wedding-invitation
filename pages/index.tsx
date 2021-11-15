import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Hello!</p>
      </section>

        {/* <Image
          src="/images/wedding.jpeg"
          width={700}
          height={1050}
          alt="wedding"
        /> */}
     

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer> */}
    </Layout>
  )
}
