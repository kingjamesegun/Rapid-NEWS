import Cards from "./Cards"
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import headerStyles from '../styles/Header.module.css'
  
function Header() {
  return (
    <header className={headerStyles.header}>
      <div className="flex pt-8">
      <div className="mx-auto text-6xl md:text-8xl font-sans inline-block align-middle text-white tracking-wind">
        12 : 45 am
      </div>
      </div>
      
    </header>
  )
}

export default Header
