import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Logo from './logo.jpg';
import Button from 'react-bootstrap/Button';
import AdminAdd from './AdminAdd';
//  import MaterialTable from "material-table";
// import AdminMain from './AdminMain';

class AdminDashboard extends React.Component{
    logoutPanel =()=>{
        this.props.history.push(`/`)
    }
render(){
    const paddingTopCss=window.innerWidth<768?'25%':'5%'
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
                                               <b> WELCOME Admin</b>    
                                            <Button size="sm" variant="info" onClick={this.logoutPanel}>Logout </Button>{' '}
                                            </Col>
                                    </Row>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                            <br/> <br/>
                       
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first"  transition={true} >
                                    <Row style={{paddingTop:paddingTopCss}}>
                                       <Col sm={3}>
                                         <Nav variant="pills" className="flex-column">
                                         <Nav.Item>
                                            <Nav.Link eventKey="first">Dashboard</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">View Data</Nav.Link>
                                            </Nav.Item>
                                           
                                            {/* <Nav.Item>
                                            <Nav.Link eventKey="third">Logout</Nav.Link>
                                            </Nav.Item> */}
                                           
                                         </Nav>
                                        </Col>
                                        <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">                                                
                                               {/* <AdminMain/> */}
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">
                                                <AdminAdd/>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                              
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
export default AdminDashboard