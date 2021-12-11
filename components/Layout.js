import Meta from "./Meta"
import Nav from "./Navbar"
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Meta/>
      <Nav/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}