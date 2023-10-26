import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.jpg';

class Login extends React.Component{
    state ={
        username:"",
        password:"",

    }
    setPassword = (e) =>{
       this.setState({
        password:e
       })

    }

    setUserName =(e) =>{
        this.setState({
            username:e
        })

    }

    handleLogin =(event) =>{
        event.preventDefault();
        const{username,password}=this.state;
        console.log(username,password)

        if(username=="admin@pau.edu" && password=="pau123"){
        
            this.props.history.push(`/AdminDashboard`)
            console.log("hello Admin")
        }
        else{
            console.log("Error")
        }

        // if(username=="ad@pau.edu" && password=="pau123"){
        //     this.props.history.push(`/AdDashboard`)
        //     console.log("AdDashboard")
        // }
        // else if(username=="pc@pau.edu" && password=="pau123"){
        //     this.props.history.push(`/PCDashboard`)
        //     console.log("PCDashboard")

        // }
        // else if(username=="dc@pau.edu" && password=="pau123"){
        //     this.props.history.push(`/DeanColgDashboard`)
        //     console.log("DeanColgDashboard")
        // }

       

    }
render(){
    return(
        <div>
             <Container>
                        <Navbar fixed="top" style={{ background: 'linear-gradient(to right, green, #ffff88)' }} className="justify-content-between">
                                <Navbar.Brand>
                                    <img 
                                     src={Logo}                                    
                                    width={70} height={70} alt='PAU' 
                                    style={{ borderRadius: '50%',paddingleft:'2%' }} />
                                    
                                    <span style={{ color: 'white',paddingLeft:'80%',fontSize:'35px' }}>PAU Placement Record Management Portal</span>
                                </Navbar.Brand>
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                       
                                        {/* <Row style={{ paddingTop: '5px' }}>
                                            <Col> <Button size="sm" variant="info" onClick={this.logoutPanel}>Logout</Button>{' '}</Col>
                                        </Row> */}


                                    </Navbar.Text>

                                </Navbar.Collapse>
                            </Navbar>




                <Row xs={1} lg={2} style={{paddingTop:'15%'}}>
                    <Col >
                         <Card>
                            <Card.Body>
                                <Card.Title> Instruction</Card.Title>
                                <Card.Text>
                                          1. Instruction 1
                                          <br/>
                                          2. Instruction 2
                                          <br/>
                                          3. Instruction 3

                                </Card.Text>
                            </Card.Body>
                         </Card>
                    </Col> 
                    <Col >
                            <Card >
                            <Card.Img variant="top" 
                            //src="holder.js/100px180" 
                            />
                            <Card.Body>
                                <Card.Title>LogIn </Card.Title>
                            <Card.Text>
                            <Form onSubmit={this.handleLogin}>
                                <Row>
                                    <Col>
                                     <Form.Group  controlId="formBasicEmail">
                                     <Form.Label>User Name</Form.Label>
                                     <Form.Control type="email"
                                                   placeholder="User Name"
                                                   onChange={(e)=>this.setUserName(e.target.value)}
                                                   autoFocus />        
                                    </Form.Group>                                    
                                    </Col>
                                </Row>

                                <Row>
                                  <Col>
                                     <Form.Group  controlId="formBasicPassword">
                                     <Form.Label>Password</Form.Label>
                                     <Form.Control type="password" 
                                                   placeholder="Password"
                                                   onChange={(e)=>this.setPassword(e.target.value)} />
                                     </Form.Group>                                  
                                  </Col>

                                </Row>

                                <Row>
                                    <Col></Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col> 
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    </Col>
                                </Row>
                            </Form>
                            </Card.Text>
                              
                            </Card.Body>
                        </Card>
                    
                    
                    </Col>
                </Row>
               
             </Container>

        </div>
    )
}

}
export default Login