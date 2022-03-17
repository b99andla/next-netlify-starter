import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <>
      <header className="site-header">This is the site header</header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default Application
