import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import Both from './components/Both';
import CasesPage from "./pages/CasesPage";
import RegistrationForm from "./components/RegistrationForm";
import EmptyPage from "./pages/EmptyPage"
import OfficersPage from "./pages/OfficersPage";
import Background from "./components/background.jpg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Case1 from "./pages/Cases/Case1";
import Case2 from "./pages/Cases/Case2";
import Case3 from "./pages/Cases/Case3";
import Case4 from "./pages/Cases/Case4";
import Case5 from "./pages/Cases/Case5";
import Officer1 from "./pages/Officers/Officer1";
import Officer2 from "./pages/Officers/Officer2";
import Officer3 from "./pages/Officers/Officer3";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const navBackground = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "contain",
}

const authForm = {
  position: "absolute",
  right: "2%",
  top: "27%",
}

const popupStyle = {
  border: "1px solid #000000",
  backgroundColor: "white",
  width: "900px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "40px",
}

function App() {
  return (
    <>
      <Router>
        <Navbar className="navbar" style={navBackground} collapseOnSelect expand="md" bg="light" variant="light">
          <p className="textHeader">ООО “ВелоТрейн”. Прокат велосипедов по России.</p>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ marginLeft: "50px" }} className="me-auto">
              <Nav.Link style={{ color: "black" }} as={Link} to="/">Главная</Nav.Link>
              <Nav.Link style={{ color: "black" }} as={Link} to="/cases">Сообщения о кражах</Nav.Link>
              <Nav.Link style={{ color: "black" }} as={Link} to="/officers">Ответственные сотрудники</Nav.Link>
              <Popup trigger={<Nav.Link style={{ color: "black" }}> Регистрация </Nav.Link>} modal contentStyle={popupStyle}>
                <div>
                  <RegistrationForm />
                </div>
              </Popup>
            </Nav>

            <Form className="form" style={{ marginRight: "150px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col>
                    <Form.Control required type="login" placeholder="Логин" />
                  </Col>
                  <Col>
                    <Form.Control required type="password" placeholder="Пароль" />
                  </Col>
                </Row>
              </Form.Group>
              <Button className="btn_clp" style={authForm} type="submit">
                Войти
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" exact element={<Both />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/43453" element={<Case1 />} />
          <Route path="/cases/47676" element={<Case2 />} />
          <Route path="/cases/65645" element={<Case3 />} />
          <Route path="/cases/44345" element={<Case4 />} />
          <Route path="/cases/65644" element={<Case5 />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/officers/6789" element={<Officer1 />} />
          <Route path="/officers/3427" element={<Officer2 />} />
          <Route path="/officers/7295" element={<Officer3 />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
