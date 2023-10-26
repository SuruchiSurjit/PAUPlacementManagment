import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Logo from './logo.jpg';
import DCAddFaculty from "./DCAddFaculty";
import DCApproveStudent from "./DCApproveStudent";
import DCInbox from "./DCInbox";
import DCAssignStudent from "./DCAssignStudent";
import Button from 'react-bootstrap/Button';

class DeanDashboard extends React.Component{
    logoutPanel =()=>{
        this.props.history.push(`/`)
    }
render(){
    const paddingTopCss=window.innerWidth<550?'25%':'5%'
    return(
        <div>
             <Container fluid>
                        <Navbar fixed="top" style={{ background: 'linear-gradient(to right, green, #ffff88)' }} className="justify-content-between">
                                <Navbar.Brand>
                                    <img 
                                     src={Logo}
                                    
                                    width={60} height={60} alt='PAU' style={{ borderRadius: '50%' }} />
                                    
                                    <span style={{ color: 'white' }}>PAU Placement Record Management Portal</span>
                                </Navbar.Brand>
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                       
                                    <Row style={{ paddingTop: '5px',paddingLeft:'2%' }}>
                                            <Col style={{color:'black'}}>  
                                               <b> WELCOME Dean</b>    
                                            <Button size="sm" variant="info" onClick={this.logoutPanel}>Logout </Button>{' '}
                                            </Col>
                                    </Row>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                            <br/>
                       
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                                    <Row style={{paddingTop:paddingTopCss}}>
                                       <Col sm={2}>
                                         <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                            <Nav.Link eventKey="first">Inbox</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">Add Faculty</Nav.Link>
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                            <Nav.Link eventKey="third">Approve Student </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="fourth">Assign Student </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="fifth">Transfer/Delete Student  </Nav.Link>
                                            </Nav.Item> */}
                                            {/* <Nav.Item>
                                            <Nav.Link eventKey="sixth">Logout </Nav.Link>
                                            </Nav.Item> */}
                                         </Nav>
                                        </Col>
                                        <Col sm={10}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">  <DCInbox/>  </Tab.Pane>
                                            <Tab.Pane eventKey="second"> <DCAddFaculty/> </Tab.Pane>
                                            <Tab.Pane eventKey="third">  <DCApproveStudent/> </Tab.Pane>
                                            <Tab.Pane eventKey="fourth"> <DCAssignStudent/> </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">   Need ??? </Tab.Pane>
                                            <Tab.Pane eventKey="sixth"></Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                            </Tab.Container>               
             </Container>
        </div>
    )
}
}
export default DeanDashboard