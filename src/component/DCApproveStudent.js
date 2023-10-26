import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DCAddFacultyView from './DCAddFacultyView'
// import AdStudentBasicView from './AdStudentBasicView';

class DCApproveStudent extends React.Component{

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
                                <Card.Title> Faculty Detail</Card.Title>
                                <Card.Text>
                               
                                    <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Faculty Id  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" placeholder="L-Faculty-01" autoFocus />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Name  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" placeholder="abc" />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Mobile No  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" placeholder="+91-XXXX" />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>   User Name </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" placeholder="xyz@gmail.com" />    
                                     </Col>
                                   </Row>
                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row} style={{paddingTop:'1%'}}>
                                                <Form.Label>  Password </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="password" placeholder="****" />    
                                     </Col>
                                   </Row>

                                  
                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col></Col>
                                     <Col > 
                                            <Button variant="primary" type="submit" style={{width:'60%'}}>
                                                Submit
                                            </Button> 
                                     </Col>
                                   </Row>

                                </Card.Text>
                            </Card.Body>
                         </Card>
                         </Tab>


                    <Tab 
                    eventKey="profile" title="View Detail">
                     {/* <AdStudentBasicView/> */}
                     <DCAddFacultyView/>
                    
                  </Tab>
                  
               </Tabs>

                </Container>
            </div>
        )
    }
}
export default DCApproveStudent