import Head from 'next/head'
import React from 'react'

const SandboxWrapper = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <>
      <Head>
        <title>Sandbox</title>
        <meta
          name="description"
          content="A place to try new things and let the tides of development carry them away."
          key="description"
        />
      </Head>
      {children}
    </>
  )
};

export default SandboxWrapper;
