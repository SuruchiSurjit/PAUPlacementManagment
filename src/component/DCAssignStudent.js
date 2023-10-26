import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import AdStudentBasicView from './AdStudentBasicView';

class AdStudentBasicInfo extends React.Component{

    render(){
        return(
            <div>
                <Container fluid>
                <Tabs
                     defaultActiveKey="add new record"
                       id="uncontrolled-tab-example"
                         className="mb-3"
                    >
                      <Tab eventKey="add new record" title="Add New Record">                  
                <Card>
                            <Card.Body>
                                <Card.Title>Map Information</Card.Title>
                                <Card.Text>
                                <Row xs={1} lg={4} style={{paddingTop:'1%'}}>
                                    <Col> Select Faculty</Col>
                                    <Col> 
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">Faculty 1</option>
                                        <option value="2">Faculty 2</option>
                                        <option value="3">Faculty 3</option>
                                    </Form.Select>                             
                                    </Col>
                                    <Col> Select Year</Col>
                                    <Col> 
                                    <Form.Select aria-label="Default select example">
                                        <option></option>
                                        <option value="1">2022</option>
                                        <option value="2">2023</option>
                                      
                                    </Form.Select>                             
                                    </Col>
                                  </Row>
                                  <Row xs={1} lg={4} style={{paddingTop:'1%'}}>
                                    <Col> Select Programe</Col>
                                    <Col> 
                                    <Form.Select aria-label="Default select example">
                                        <option></option>
                                        <option value="1">Program 1</option>
                                        <option value="2">Program 2</option>
                                        <option value="3">Program 3</option>
                                    </Form.Select>                             
                                    </Col>
                                    <Col> Select Year</Col>
                                    <Col> 
                                    <Form.Select aria-label="Default select example">
                                        <option></option>
                                        <option value="1">2022</option>
                                        <option value="2">2023</option>
                                      
                                    </Form.Select>                             
                                    </Col>
                                  </Row>
                                  <hr/>
                                  <Row>
                                    <Col>
                                    <Form.Control
                                           type="file"
                                            required
                                           name="file"
                                        //    onChange={handleChange}
                                            //  isInvalid={!!errors.file}
                                     />
                                    </Col>
                                  </Row>

                                    

                                </Card.Text>
                            </Card.Body>
                         </Card>
                         </Tab>


                    <Tab 
                    eventKey="profile" title="View Detail">
                     {/* <AdStudentBasicView/> */}
                    
                  </Tab>
                  
               </Tabs>

                </Container>
            </div>
        )
    }
}
export default AdStudentBasicInfo