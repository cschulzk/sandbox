import Head from 'next/head'
import React from 'react'
import DashboardLayout from '../../lib/layouts/dashboardLayout'

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
      <DashboardLayout>
        <>Main page</>
      </DashboardLayout>
    </>
  )
}
