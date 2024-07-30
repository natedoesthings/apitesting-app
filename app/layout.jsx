import '@styles/globals.css'
import Nav from '@components/nav'
import Footer from '@components/footer'

export const metadata = {
  title: 'apitesting.com',
  description: 'Test Your API',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body className='relative'>
        <Nav />
        <main className='app'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout