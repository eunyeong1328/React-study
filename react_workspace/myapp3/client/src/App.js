import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useRef, useState } from 'react';
import CustomerAdd from './components/CustomerAdd';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [customers, setCustomers] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/api/customerList/",{
      header:{
        'Accept':'application/json'
      }
    })
    .then((res)=>{
      return res.json();
    })
    .then((data) =>{
      setCustomers(data);
    })
    .catch((err) =>{
      console.log('App.js error ==>' + err);
    })
  });

  //검색
  const searchKeyRef  = useRef(null);
  const filteredComponent = () => {
    console.log('filteredComponent 실행');
    let customerList = customers.filter((customer) => {
      return( (customer.name.indexOf(searchKeyRef.current.value)) > -1);
    })

    return customerList.map((customer)=>{
      return (      <Customer 
                      id={customer.id}
                      image={customer.image}
                      name={customer.name}
                      birthday={customer.birthday}
                      job={customer.job}
                      key={customer.id} />
      )
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    filteredComponent();
  } 

  // const customers = [
  //   {
  //     // https://placeimg.com/64/64/any 에 들어가면 64x64 이미지를 랜덤으로 줌
  //     id: 1,
  //     image: "https://placeimg.com/64/64/any",
  //     name: "홍길동1",
  //     birthday: "111111",
  //     job: "대학생"
  //   },
  //   {
  //     id: 2,
  //     image: "https://placeimg.com/64/64/any",
  //     name: "홍길동2",
  //     birthday: "222222",
  //     job: "개발자"
  //   }
  // ];
  return (
    <>
    <Navbar bg="dark"variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Customer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form onSubmit = {handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              ref = {searchKeyRef}
            />
            <Button type = "submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Container className="container-sm" >
        <p className = 'mt-3' ><CustomerAdd /> </p>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>image</th>
                  <th>name</th>
                  <th>birthday</th>
                  <th>job</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              { 
                customers ? filteredComponent(customers) : ""
                // customers.map((customer) => {
                //   return (
                //     <Customer 
                //       id={customer.id}
                //       image={customer.image}
                //       name={customer.name}
                //       birthday={customer.birthday}
                //       job={customer.job}
                //       key={customer.id} />
                //   )
                // })
              }
              </tbody>
            </Table>    
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
