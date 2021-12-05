import Cards from "./Cards"
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import headerStyles from '../styles/Header.module.css'
  
function Header() {
  return (
    <header className={headerStyles.header}>
      <Container>
      <Row>
        <Col>
          <div className={headerStyles.header__main}>
            <h1 className={headerStyles.header__hot}>
              A new wave of peaceful protests has just started
              in the capital.
            </h1>
            <p className={headerStyles.header__p}>27 minutes ago <span className={headerStyles.header__span}>World</span></p>
          </div>
        </Col>
        <div className="col-lg-4 col-md-4 col-xs-12">
          <div className="header__submain">
            <Cards/>
          </div>
        </div>
      </Row>
      </Container>
      
    </header>
  )
}

export default Header
