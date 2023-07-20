import PageLayout from '@/components/pageLayout'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Sandbox</title>
        <meta
          name="description"
          content="A place to try out components and let the tides of carry them away."
          key="description"
        />
      </Head>
      <PageLayout />
    </>
  )
}
