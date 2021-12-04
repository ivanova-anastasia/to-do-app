import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = (): JSX.Element => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>To-Do App</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to='/'>
              <Nav.Link>Adding items</Nav.Link>
            </LinkContainer>
            <LinkContainer to='list'>
              <Nav.Link>To-Do list</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
