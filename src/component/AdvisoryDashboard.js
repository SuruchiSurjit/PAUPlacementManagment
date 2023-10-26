import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import AdStudentBasicInfo from './AdStudentBasicInfo';
import AdPlacementInfo from './AdPlacementInfo';
import AdInbox from './AdInbox';
import Button from 'react-bootstrap/Button';


import Logo from './logo.jpg';
class Login extends React.Component{
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
                                               <b> WELCOME ADVISORY</b>    
                                            <Button size="sm" variant="info" onClick={this.logoutPanel}>Logout </Button>{' '}
                                            </Col>
                                        </Row> 
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                            <br/>
                       
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first"  transition={true} >
                                    <Row style={{paddingTop:paddingTopCss}}>
                                       <Col sm={3}>
                                         <Nav variant="pills" className="flex-column">
                                         <Nav.Item>
                                            <Nav.Link eventKey="first">Inbox</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="third">Student Information</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">Placement Record</Nav.Link>
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                            <Nav.Link eventKey="fourth">Logout</Nav.Link>
                                            </Nav.Item> */}
                                           
                                         </Nav>
                                        </Col>
                                        <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="third">
                                                <AdStudentBasicInfo/>

                                                </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                            <AdPlacementInfo/>
                                                </Tab.Pane>

                                            <Tab.Pane eventKey="first">
                                              <AdInbox/>
                                             </Tab.Pane>

                                             <Tab.Pane eventKey="fourth">
                                             
                                             </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                            </Tab.Container>

                             <Row>
                    <Col>
                        <Navbar size='sm' fixed="bottom" bg="secondary">
                            <span style={{ fontSize: '0.5em', color:'white', paddingLeft:'2%' }}>For Discrepency/Query Contact the Developers: Er. Suruchi Badhan (Programmer)</span>
                        </Navbar>
                    </Col>
                </Row>               
             </Container>
        </div>
    )
}
}
export default Login