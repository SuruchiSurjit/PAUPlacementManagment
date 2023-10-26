import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddCollege from '../methods/AddCollege';
import ViewAllCollege from '../methods/ViewAllCollege';
import AddColgDept from '../methods/AddColgDept';
import ViewAllColgDept from '../methods/ViewAllColgDept';
import AddColgDeptProgram from '../methods/AddColgDeptProgram';
import CreateDeanLogin from '../methods/CreateDeanLogin';
import ViewCollegeDepartment from '../methods/ViewCollegeDepartment';
import ViewAllDesignation from '../methods/ViewAllDesignation';
import ViewAllCollegeLogin from '../methods/ViewAllCollegeLogin';
import MaterialTable from 'material-table';


  
class AdminAdd extends React.Component{
    constructor(props)
{
    super(props);   
    this.state={
        showAlert:false,
        vColor:'',
        message:'',
        college:'',
        collegeList:[],
        collegeSelect:'',
        department:'',
        messageColgDept:'',
        collegeSelectProg:'',
        departmentList:[],
        program:'',
        programDuration:'',
        messageColgDeptProgram:'',
        collegeSelectLogin:'',       
        designation:'',
        collegeDept:[],
        designationList:[],
        designationListData:[],
        username:'',
        password:'',
        name:'',
        mobileNo:'',
        colgAsDept:'',
        designationListLogin:'',
        collegeLoginList:[],
        programType:'',
        progLevel:'',
        progAbbrivation:'',
       

   }
   
}

componentDidMount=()=>{
    this.handleViewAllCollege();
    this.handleViewCollegeDepartment();
    this.handleViewAllDesignation();
    this.handleViewAllCollegeLogin();
    
}

setCollegeList= ({ target: { value } }) => {
    this.setState({
        collegeSelect: value
    })
}
setCollegeListProg= ({ target: { value } }) => {
    this.setState({
        collegeSelectProg: value
    })
    this.handleViewAllColgDept(value)
}

setCollege =(e)=>{
    this.setState({
        college:e.target.value
    })
}
setDepartment =(e)=>{
    this.setState({
        department:e.target.value
    })
}

setProgram=(e)=>{
    this.setState({
        program:e.target.value
    })
}



setProgAbbrivation=(e)=>{
    this.setState({
        progAbbrivation:e.target.value
    })
}

setColgDeptProg= ({ target: { value } }) => {
    this.setState({
        colgDeptProg: value
    })    
}

setProgramDuration = (e)=>{
    this.setState({
        programDuration:e.target.value
    })
}

setCollegeLogin= ({ target: { value } }) => {
    this.setState({
        collegeSelectLogin: value
    })    
}

setUserName =(e)=>{
    this.setState({
        username:e.target.value
    })
}

setPassword =(e)=>{
    this.setState({
        password:e.target.value
    })
}

setProgLevel=(e)=>{
    this.setState({
        progLevel:e.target.value
    })
}

setDesignation =(e)=>{
    this.setState({
        designation:e.target.value
    })
}

setName=(e)=>{
    this.setState({
        name:e.target.value
    })
}

setMobileNo=(e)=>{
    this.setState({
        mobileNo:e.target.value
    })
}

setProgramType=(e)=>{
    this.setState({
        programType:e.target.value
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


handleViewAllColgDept=(collegeSelectProg)=>{
    // const{collegeSelectProg}=this.state
    ViewAllColgDept(collegeSelectProg).then(resp=>{
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
handleViewAllCollege=()=>{
    // event.preventDefault();
    ViewAllCollege().then(resp=>{
        if(resp){
            if(resp.data){
                this.setState({
                    collegeList:resp.data
                })
            }
        }
    })
}

handleViewCollegeDepartment=()=>{
    // event.preventDefault();
    ViewCollegeDepartment().then(resp=>{
        if(resp){
            if(resp.data){
                this.setState({
                    collegeDept:resp.data
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

handleAddColgDept=(event)=>{
    event.preventDefault();
    const{collegeSelect,department}=this.state
    AddColgDept(collegeSelect,department).then(resp=>{
        if(resp){
            if(resp.data){
                this.setState({
                    messageColgDept:resp.data,
                    collegeSelect:'',
                    department:''

                  })
            }          
        }
    })
}

handleAddCollege=(event)=>{    
    event.preventDefault();
    const{college}=this.state   
   AddCollege(college).then(resp=>{
      if(resp){
          if(resp.data){
             this.setState({
                 message:resp.data,
                 showAlert:true,
                 vColor:'danger',
                 college:''
             })
          }
          else{
              this.setState({
                  message:'New Consumer Added Succesully.',
                  showAlert:true,
                  vColor:'success',                 

              })
          }
      }
      this.handleViewAllCollege();
   })
}
handleCreateLogin=(event)=>{
    event.preventDefault();
    const{colgAsDept,designationListLogin,name,mobileNo,username,password}=this.state
    CreateDeanLogin(colgAsDept,designationListLogin,name,mobileNo,username,password).then(resp=>{
        if(resp){
            if(resp.data){
                this.setState({
                    loginMessage:resp.data,
                    colgAsDept:'',
                    designationListLogin:'',
                    name:'',
                    mobileNo:'',
                    username:'',
                    password:''
                })
            }
        }
    })
}

handleViewAllCollegeLogin= ()=>{
    ViewAllCollegeLogin().then(resp=>{
        if(resp){
            if(resp.data){
                this.setState({
                    collegeLoginList:resp.data
                })
            }
        }
    })
}
handleAddColgDeptProgram=(event)=>{    
    event.preventDefault();
    const{collegeSelectProg,colgDeptProg,program,programDuration,programType,progAbbrivation,progLevel}=this.state   
    AddColgDeptProgram(collegeSelectProg,colgDeptProg,program,programDuration,programType,progAbbrivation,progLevel).then(resp=>{
      if(resp){
          if(resp.data){
             this.setState({
                messageColgDeptProgram:resp.data,
                 showAlert:true,
                 vColor:'danger',
                 college:''
             })
          }
          else{
              this.setState({
                  message:'New Consumer Added Succesully.',
                  showAlert:true,
                  vColor:'success',                 

              })
          }
      }
    
   })
}

    render(){
        // console.log(this.state.progLevel)
        return(
            <div>
                <Container fluid>
                <Tabs
                         defaultActiveKey="Master Data"
                         id="uncontrolled-tab-example"
                         className="mb-3"
                    >
                    <Tab eventKey="Master Data" title="Master Data">   
                <Card style={{padding:'1%'}} >  
                
                    <Row xs={1} lg={2} style={{paddingLeft:'2%',paddingTop:'2%'}}>
                        <Col> 
                              <Card style={{  width: '32rem'  }}>                            
                              <Card.Body>
                                  <Card.Title>Add College</Card.Title>
                                  <Card.Text>
                                    {this.state.message?this.state.message:''}
                                  <Form onSubmit={this.handleAddCollege} >
                                  <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>  College   </Form.Label></Col>
                                    <Col> <Form.Control 
                                                type="text" 
                                                placeholder="College"
                                                value={this.state.college}
                                                onChange={this.setCollege} 
                                                required
                                                />   
                                    </Col>
                                </Row>

                                <Row style={{paddingTop:'6%'}}>
                                    <Col></Col>
                                    <Col> 
                                            <Button variant="primary"
                                                    type="submit"
                                                    style={{width:'50%'}}>
                                                Submit
                                            </Button> 
                                     </Col>
                                </Row>
                                </Form>
                                
                                  </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                                 </Card.Body>
                                </Card>                         
                        </Col>

                        <Col> 
                              <Card style={{ width: '32rem' }}>                              
                              <Card.Body>
                              <Card.Title>Add Departments</Card.Title>
                                <Card.Text>
                                    {this.state.messageColgDept?this.state.messageColgDept:''}
                                    <Form onSubmit={this.handleAddColgDept}>
                                <Row>
                                    <Col>College</Col>
                                    <Col>
                                        <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.collegeSelect} 
                                                         onChange={this.setCollegeList}
                                                        >
                                                <option>Select</option>
                                                {this.state.collegeList.map((collegeDetail,id)=>(
                                                 <option key={id} value={collegeDetail.college_id}>{collegeDetail.college}</option>
                                                   ))}  
                                                
                                                                                                                          
                                            </Form.Control> 
                                    </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>   Department   </Form.Label></Col>
                                    <Col> <Form.Control type="text"
                                                onChange={this.setDepartment} 
                                                value={this.state.department}
                                                placeholder="Department" />   
                                    </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col></Col>
                                    <Col> 
                                            <Button variant="primary" type="submit" style={{width:'50%'}}>
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

                    <Row xs={1} lg={2} style={{paddingLeft:'2%',paddingTop:'2%'}}>
                        <Col> 
                              <Card style={{  width: '32rem'  }}>                            
                              <Card.Body>
                                  <Card.Title>Add Program</Card.Title>
                                  <Card.Text>
                                    {this.state.messageColgDeptProgram?this.state.messageColgDeptProgram:''}
                                  <Form 
                                        onSubmit={this.handleAddColgDeptProgram}
                                  >
                                   
                                    <Row style={{paddingTop:'2%'}}>
                                    <Col>College</Col>
                                    <Col>
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.collegeSelectProg} 
                                                         onChange={this.setCollegeListProg}
                                                        >
                                                <option>Select</option>
                                                {this.state.collegeList.map((collegeDetail,id)=>(
                                                 <option key={id} value={collegeDetail.college_id}>{collegeDetail.college}</option>
                                                   ))}  
                                                
                                                                                                                          
                                            </Form.Control>
                                    </Col>
                                </Row>
                                    <Row style={{paddingTop:'2%'}}>
                                    <Col>Department</Col>
                                    <Col>
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.colgDeptProg} 
                                                         onChange={this.setColgDeptProg}
                                                        >
                                                <option>Select</option>
                                                {this.state.departmentList.map((deptDetail,id)=>(
                                                 <option key={id} value={deptDetail.department_id }>{deptDetail.department}</option>
                                                   ))}  
                                                
                                                                                                                          
                                            </Form.Control> 
                                    </Col>
                                </Row>
                               
                                  <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>  Program   </Form.Label></Col>
                                    <Col> <Form.Control 
                                                    type="text" 
                                                    placeholder="Program"
                                                    onChange={this.setProgram}
                                                    value={this.state.program} />   </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label> Program Duration   </Form.Label></Col>
                                    <Col> <Form.Control 
                                                    type="text" 
                                                    placeholder="2/3/4"
                                                    onChange={this.setProgramDuration}
                                                    value={this.state.programDuration} />   </Col>
                                </Row>
                                <Row style={{paddingTop:'2%'}}>
                                    <Col><Form.Label>Program Type   </Form.Label></Col>
                                    <Col >
                                    
                                    <Form.Check
                                            inline
                                            label="UG"
                                            name="progType"
                                            type="radio" 
                                            checked={this.state.programType==="UG"}
                                             value="UG"
                                            onChange={this.setProgramType}
                                        />
                                        <Form.Check
                                            inline
                                            label="PG"
                                            name="progType"
                                            type="radio"
                                            checked={this.state.programType==="PG"}
                                            value="PG"
                                            onChange={this.setProgramType}                                           
                                        />
                                        
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:'2%'}}>
                                    <Col><Form.Label>Abbrivation  </Form.Label></Col>
                                    <Col><Form.Control 
                                                    type="text" 
                                                    placeholder="AG"
                                                    minLength={2}
                                                    maxLength={2}
                                                    onChange={this.setProgAbbrivation}
                                                    value={this.state.progAbbrivation} />
                                    </Col>
                                </Row>
                                <Row style={{paddingTop:'2%'}}>
                                    <Col><Form.Label>Level  </Form.Label></Col>
                                    <Col>
                                    <Form.Check
                                            inline
                                            label="Certified Course"
                                            name="level"
                                            type="radio" 
                                            checked={this.state.progLevel==="C"}
                                             value="C"
                                            onChange={this.setProgLevel}
                                        />
                                        <Form.Check
                                            inline
                                            label="Diploma"
                                            name="level"
                                            type="radio" 
                                            checked={this.state.progLevel==="D"}
                                             value="D"
                                            onChange={this.setProgLevel}
                                        />
                                        <Form.Check
                                            inline
                                            label="Bachelor Degree"
                                            name="level"
                                            type="radio" 
                                            checked={this.state.progLevel==="B"}
                                             value="B"
                                            onChange={this.setProgLevel}
                                        />
                                        <Form.Check
                                            inline
                                            label="Master Degree"
                                            name="level"
                                            type="radio" 
                                            checked={this.state.progLevel==="M"}
                                             value="M"
                                            onChange={this.setProgLevel}
                                        />
                                        <Form.Check
                                            inline
                                            label="Ph.D."
                                            name="level"
                                            type="radio" 
                                            checked={this.state.progLevel==="P"}
                                             value="P"
                                            onChange={this.setProgLevel}
                                        />
                                        <Form.Check
                                            inline
                                            label="Others"
                                            name="level"
                                            type="radio" 
                                            checked={this.state.progLevel==="O"}
                                             value="O"
                                            onChange={this.setProgLevel}
                                        />
                                    
                                    
                                    
                                    
                                    </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col></Col>
                                    <Col> 
                                            <Button variant="primary" type="submit" style={{width:'50%'}}>
                                                Submit
                                            </Button> 
                                     </Col>
                                </Row>
                                </Form>
                                
                                  </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                                 </Card.Body>
                                </Card>                         
                        </Col>

                        <Col style={{border:'10px'}}>                         
                              <Card style={{ width: '32rem', height:'26rem'}}>                              
                              <Card.Body>
                              <Card.Title> Create Login</Card.Title>
                                <Card.Text>
                                    <Form 
                                        onSubmit={this.handleCreateLogin}>
                                <Row>
                                    {this.state.loginMessage?this.state.loginMessage:''}
                                <Col>College/Department</Col>
                                    <Col>
                                        <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.colgAsDept} 
                                                         onChange={this.setColgAsDept}
                                                        >
                                                <option>Select</option>
                                                {this.state.collegeDept.map((collegeAsDept,id)=>(
                                                 <option key={id} value={collegeAsDept.department_id}>{collegeAsDept.department}</option>
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
                                                        >
                                                <option>Select</option>
                                                {this.state.designationList.map((designationData,id)=>(
                                                 <option key={id} value={designationData.designation_id }>{designationData.designation}</option>
                                                   ))}                                                                                                                           
                                            </Form.Control> 
                                              </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>  Name </Form.Label></Col>
                                    <Col> <Form.Control type="text" 
                                                       placeholder="ABC XA"
                                                       onChange={this.setName}
                                                       value={this.state.name} />   </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>  Mobile No </Form.Label></Col>
                                    <Col> <Form.Control type="number" 
                                                       placeholder="+91 123XXXXX"
                                                       onChange={this.setMobileNo}
                                                       value={this.state.mobileNo} />   </Col>
                                </Row>


                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>   User Name   </Form.Label></Col>
                                    <Col> <Form.Control type="email" 
                                                       placeholder="xyz@pau.edu"
                                                       onChange={this.setUserName}
                                                       value={this.state.username} />   </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>   Password   </Form.Label></Col>
                                    <Col> <Form.Control type="password" 
                                                        onChange={this.setPassword}
                                                        value={this.state.password} />   </Col>
                                </Row>

                                <Row style={{paddingTop:'2%'}}>
                                    <Col></Col>
                                    <Col> 
                                            <Button variant="primary" type="submit" style={{width:'50%'}}>
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

                     <Row xs={1} lg={2} style={{paddingLeft:'2%',paddingTop:'2%'}}>
                        <Col> 
                              <Card style={{  width: '32rem'  }}>                            
                              <Card.Body>
                                  <Card.Title>Add Designation</Card.Title>
                                  <Card.Text>
                                    {this.state.message?this.state.message:''}
                                  <Form onSubmit={this.handleAddCollege} >
                                  <Row style={{paddingTop:'2%'}}>
                                    <Col> <Form.Label>  Designation  </Form.Label></Col>
                                    <Col> <Form.Control 
                                                type="text" 
                                                placeholder="Designation"
                                                value={this.state.designation}
                                                onChange={this.setDesignation} 
                                                required
                                                />   
                                    </Col>
                                </Row>

                                <Row style={{paddingTop:'6%'}}>
                                    <Col></Col>
                                    <Col> 
                                            <Button variant="primary"
                                                    type="submit"
                                                    style={{width:'50%'}}>
                                                Submit
                                            </Button> 
                                     </Col>
                                </Row>
                                </Form>
                                
                                  </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                                 </Card.Body>
                                </Card>                         
                        </Col>

                       

                                               
                    </Row> 
                    <br/> <br/> <br/> <br/>
                    </Card>
                    
                    </Tab>
                    <Tab eventKey="View College" title="View College"> 
                    <MaterialTable 
                            title="College List"
                      
                            columns  ={[
                                    {title:'S.NO',field:'sno'},
                                    {title:'Collage Name',field:'collage'},                          
                                ]}
                                data={                                    
                                  this.state.collegeList.map((collegeData,index)=>(
                                    {
                                      'sno': index+1,                                
                                      'collage': collegeData.college                                 
                                    }
                                  )  )
                              } 
                              
                              options={{
                                exportButton: true,
                                pageSize: 5,
                                pageSizeOptions: [5, 10, 20,this.state.collegeList.length],
                                toolbar: true,
                                paging: true                              
                              }}                     
                            />                         
                    </Tab>
                    <Tab eventKey="View CollegeDepartment" title="College Wise Program"> </Tab>
                    <Tab eventKey="View CollegeLogin" title="College Login">
                    <MaterialTable 
                            title="College Dean Login List"
                      
                            columns  ={[
                                    {title:'S.NO',field:'sno'},
                                    {title:'Collage Name',field:'collage'}, 
                                    {title:'Name',field:'name'},   
                                    {title:'User Name',field:'userName'},
                                    {title:'Password',field:'password'},                        
                                ]}
                                data={                                    
                                  this.state.collegeLoginList.map((collegeLoginData,index)=>(
                                    {
                                      'sno': index+1,                                
                                      'collage':collegeLoginData.department,
                                      'name': collegeLoginData.name,
                                      'userName':collegeLoginData.username,
                                      'password':collegeLoginData.password,                           
                                    }
                                  )  )
                              } 
                              
                              options={{
                                exportButton: true,
                                pageSize: 5,
                                pageSizeOptions: [5, 10, 20,this.state.collegeList.length],
                                toolbar: true,
                                paging: true                              
                              }}                     
                            />   
                        
                     </Tab>
                      </Tabs>
                </Container>
            </div>
        )
    }
}
export default AdminAdd