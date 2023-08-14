import PageLayout from '@/components/pageLayout'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact - C. Schulzke</title>
        <meta
          name="description"
          content="Reach out if you have questions."
          key="description"
        />
      </Head>
      <PageLayout>
        <h1>Contact</h1>
      </PageLayout>
    </>
  )
}
