import PageLayout from '@/components/pageLayout'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>About - C. Schulzke</title>
        <meta
          name="description"
          content="About me as an engineer."
          key="description"
        />
      </Head>
      <PageLayout>
        <h1>About</h1>
      </PageLayout>
    </>
  )
}
