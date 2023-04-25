import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import useAppContext from "../Hooks/useContext";

const NavBar = () => {
  const { user, logoutUser } = useAppContext();
  return (
    <div>
      <Navbar style={{ background: "gray" }}>
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
            </Nav>

            <div className="user d-flex">
              {user ? (
                <Nav.Link href="#action1">{user?.name}</Nav.Link>
              ) : (
                <Link to="/login">Login</Link>
              )}

              {user && <button onClick={() => logoutUser()}>Logout</button>}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
