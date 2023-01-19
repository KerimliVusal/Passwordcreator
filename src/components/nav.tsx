import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../components/paswrdlogo.png' 

function Navbar() {
    return (
      <Container className="nav1" fluid>
        <Row lg={1} className="nav2 p-3">
            <Col className="nav3">
                <span className="logo"><img src={logo}/></span>
            <h2>Password Generator</h2>
            </Col>
        </Row>
      </Container>
    );
  }
  
  export default Navbar;