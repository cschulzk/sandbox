import PageLayout from '@/components/pageLayout'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - C. Schulzke</title>
        <meta
          name="description"
          content="The hub of all my hobby and professional projects."
          key="description"
        />
      </Head>
      <PageLayout>
        <>Main page</>
      </PageLayout>
    </>
  )
}
