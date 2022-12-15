import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FullName from './Profile/FullName';
import Address from './Profile/Address';

function Navigation(){
    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login"><FullName />, <Address /> </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;