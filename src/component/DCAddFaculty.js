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
import AddFacultyDetail from '../methods/AddFacultyDetail'
import ViewAllColgDept from '../methods/ViewAllColgDept';
import ViewAllDesignation from '../methods/ViewAllDesignation';
import ViewAllAccessType from '../methods/ViewAllAccessType';
// import AdStudentBasicView from './AdStudentBasicView';

class DCAddFaculty extends React.Component{
   constructor(props)
   {
       super(props);   
       this.state={
       facultyId:'',
       facultyName:'',
       mobileNo:'',
       userName:'',
       password:'',
       collegeId:1,
       colgAsDept:'',
       departmentList:[],
       designationListLogin:'',
       designationList:[],
       userType:'',
       accessTypeList:[],
       accessType:'',
       facultyAddMessage:'',
      }
      
   }

   componentDidMount=()=>{
    this.handleViewAllColgDept()
    this.handleViewAllDesignation()
    this.handleViewAllAccessType()
   }



   
   setPerforma = ({ target: { value } }) => {
       this.setState({
           performa: value,
   
       })
   }

   setAccessType = ({ target: { value } }) => {
      this.setState({
          accessType: value,
  
      })
  }

   
   setFacultyId =(e)=>{
      this.setState({
          facultyId:e.target.value
      })
  }

  setFacultyName =(e)=>{
   this.setState({
      facultyName:e.target.value
   })
  }

  setFacutyMobileNo=(e)=>{
   this.setState({
      mobileNo:e.target.value
   })
  }

  setUserName=(e)=>{
   this.setState({
      userName:e.target.value
   })
  }

  setPassword=(e)=>{
   this.setState({
      password:e.target.value
   })
  }

  setColgAsDept= ({ target: { value } }) => {
   this.setState({
       colgAsDept: value
   })    
}
setDesignationLogin= ({ target: { value } }) => {
   this.setState({
       designationListLogin: value
   })    
}

setColgDeptProg= ({ target: { value } }) => {
   this.setState({
       colgDeptProg: value
   })    
}
handleViewAllColgDept=()=>{
   const{collegeId}=this.state
   ViewAllColgDept(collegeId).then(resp=>{
       if(resp){
           if(resp.data==='NO'){       

           }
           else{
               this.setState({
                   departmentList:resp.data
               })

           }
       }
   })
}
handleViewAllDesignation=()=>{
   ViewAllDesignation().then(resp=>{
       if(resp){
           if(resp.data){
               this.setState({
                   designationList:resp.data
               })
           }
       }
   })
}

handleViewAllAccessType=()=>{
   ViewAllAccessType().then(resp=>{
      if(resp){
         if(resp.data){
            this.setState({
               accessTypeList:resp.data
            })
         }
      }
   })
}

  handleAddFacultyDetail=(event)=>{
   event.preventDefault();
   const{colgDeptProg,designationListLogin,accessType,facultyId,facultyName,mobileNo,userName,password}=this.state
   AddFacultyDetail(colgDeptProg,designationListLogin,accessType,facultyId,facultyName,mobileNo,userName,password).then(resp=>{
      if(resp){
         if(resp.data){
            this.setState({
               facultyAddMessage:resp.data
            })

         }
      }
   })
  }
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
                                 {this.state.facultyAddMessage?this.state.facultyAddMessage:''}
                               <Form onSubmit={this.handleAddFacultyDetail}>
                              
                                    <Row style={{paddingTop:'2%'}}>
                                    <Col>Department</Col>
                                    <Col>
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.colgDeptProg} 
                                                         onChange={this.setColgDeptProg}
                                                         required
                                                        >
                                                <option>Select</option>
                                                {this.state.departmentList.map((deptDetail,id)=>(
                                                 <option key={id} value={deptDetail.department_id }>{deptDetail.department}</option>
                                                   ))}  
                                                
                                                                                                                          
                                            </Form.Control> 
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>  Designation  </Form.Label></Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.designationListLogin} 
                                                         onChange={this.setDesignationLogin}
                                                         required
                                                        >
                                                <option>Select</option>
                                                {this.state.designationList.map((designationData,id)=>(
                                                 <option key={id} value={designationData.designation_id }>{designationData.designation}</option>
                                                   ))}                                                                                                                           
                                            </Form.Control> 
                                              </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>  User Type </Form.Label></Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.accessType} 
                                                         onChange={this.setAccessType}
                                                         required
                                                        >
                                                <option>Select</option>
                                                {this.state.accessTypeList.map((accessTypeData,id)=>(
                                                 <option key={id} value={accessTypeData.access_type}>{accessTypeData.access_type}</option>
                                                   ))}                                                                                                                           
                                            </Form.Control> 
                                              </Col>
                                </Row>
                                    <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Faculty Id  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" 
                                                     value={this.state.facultyId}    
                                                     onChange={this.setFacultyId}                             
                                                      placeholder="L-Faculty-01"
                                                      autoFocus 
                                                      required
                                                      />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Name  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text"
                                                      placeholder="abc" 
                                                      required
                                                      value={this.state.facultyName}    
                                                     onChange={this.setFacultyName} />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Mobile No  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="Number" 
                                         required
                                        value={this.state.mobileNo}    
                                        onChange={this.setFacutyMobileNo} 
                                        placeholder="+91-XXXX" />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>   User Name </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="email"
                                                required
                                                value={this.state.userName}    
                                                onChange={this.setUserName} 
                                         placeholder="xyz@gmail.com" 
                                         />    
                                     </Col>
                                   </Row>
                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row} style={{paddingTop:'1%'}}>
                                                <Form.Label>  Password </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="password" 
                                                    required
                                                      value={this.state.password}
                                                      onChange={this.setPassword}
                                                      placeholder="****" />    
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
                                   </Form>
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
export default DCAddFaculty