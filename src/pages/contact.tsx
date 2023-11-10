import Head from 'next/head'
import React from 'react'
import DashboardLayout from '../../sandbox-lib/layouts/dashboardLayout'

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
      <DashboardLayout>
        <h1>Contact</h1>
      </DashboardLayout>
    </>
  )
}
