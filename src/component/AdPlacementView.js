import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { MDBDataTable } from 'mdbreact';
const data = {
    columns: [
      {
        label: 'Registration No',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Student Name',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Father Name',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Email Id',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Program',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'More',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      },
      {
        name: 'L-2018-Programmer',
        position: 'Er. Suruchi',
        office: 'Father Name',
        age: 'suruchibadhan@pau.edu',
        date: 'Programmer',
        salary: '+'
      }
      
    ]
  };

class Template extends React.Component{
    constructor(props)
{
    super(props);   
    this.state={
    performa:'',
   }
   
}
setPerforma = ({ target: { value } }) => {
    this.setState({
        performa: value,

    })
}

    render(){
        return(
            <div>
                <Container fluid>
                    <Card>
                        <Card.Body>
                        <Card.Title> Select Record</Card.Title>
                                <Card.Text>
                                <Row xs={1} lg={4} style={{paddingTop:'1%'}}>
                                    <Col> Select Year</Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                // value={this.state.performa} 
                                                //  onChange={this.setPerforma}
                                                >
                                        <option>Open this select menu</option>
                                        <option value="1">2011</option>
                                        <option value="2">2022</option>
                                        <option value="3">2023</option>
                                    </Form.Control>                             
                                    </Col>
                                    
                                    <Col> Select Program</Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                // value={this.state.performa} 
                                                //  onChange={this.setPerforma}
                                                >
                                        <option>Open this select menu</option>
                                        <option value="1">Program 1</option>
                                        <option value="2">Program 2</option>
                                        <option value="3">Program 3</option>
                                    </Form.Control>                             
                                    </Col>
                                  </Row>
                                  <hr/> <b>Result</b> <hr/>
                                  <MDBDataTable
      paging={true}
      data={data}
      scrollY
      maxHeight="500px"
    />

                                </Card.Text>
                        </Card.Body>
                    </Card>

                    
                </Container>
            </div>
        )
    }
}
export default Template