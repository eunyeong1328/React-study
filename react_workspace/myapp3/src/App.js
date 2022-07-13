import './App.css';
import Customer from './components/Customer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const customers = [
    {
      id : 1,
      image: "http://placeimg.com/64/64/any",
      name : "홍길동1",
      birthday : "20",
      job : "대학생"
    },
    {
      id : 2,
      image: "http://placeimg.com/64/64/any",
      name : "홍길동2",
      birthday : "25",
      job : "개발자"
    }
  ];
  return (
    <div className="App">
    <Container className="content-sm table_style">
        <Row>
          <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>id</th>
                <th>Image</th>
                <th>Name</th>
                <th>birthday</th>
                <th>job</th>
              </tr>
            </thead>
            <tbody>
            {
              customers.map((customer) =>{
                return(
                  <Customer 
                      id = {customer.id}
                      image = {customer.image}
                      name = {customer.name}
                      birthday = {customer.birthday}
                      job = {customer.job} 
                      key  = {customer.id}
                    />
                )
              })
            }
            </tbody>
          </Table>
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;
