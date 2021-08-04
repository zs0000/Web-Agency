import Footer from '../Footer/footer'
import Meta from '../../Meta/meta'


export default function Layout({ children }) {
    return (
      <>
        <Meta />
        <div className="min-h-screen max-w-screen-2xl bg-gray-100">

          <main>{children}</main>
        </div>
        <Footer/>
      </>
    )
  }