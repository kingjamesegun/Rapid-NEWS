import Cards from "./Cards"
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import headerStyles from '../styles/Header.module.css'
  
function Header() {
  return (
    <header className={headerStyles.header}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="flex pt-5">
              <div className="bg-red-500 rounded-full w-2 h-2 content-center"></div>
              <div className="uppercase tracking-wide text-xs pb-4 text-white font-semibold">Hot topic</div>
            </div>
            <h1 className="text-3xl lg:text-5xl text-white  px-1 w-30">
              A new wave of peaceful protests has just started
              in the capital.
              </h1>
              <div className="text-xs text-red-500">World</div>
          </div>
          <div className="">
          </div>
        </div>
      </div>
      {/* <Container>
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
      </Container> */}
      
    </header>
  )
}

export default Header
