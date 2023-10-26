import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import ViewAllColgDept from '../methods/ViewAllColgDept';
import AddStudentDetail from '../methods/AddStudentDetail';
import ViewAllCategory from '../methods/ViewAllCategory';
import ViewAllColgProgram from '../methods/ViewAllColgProgram';
import MaterialTable from 'material-table';
import ViewStudentDetail from '../methods/ViewStudentDetail';

// import AdStudentBasicView from './AdStudentBasicView';

class AdStudentBasicInfo extends React.Component{

   constructor(props)
   {
       super(props);   
       this.state={       
       collegeId:1,
       colgAsDept:'',
       programList:[],
       academicYear:'',
       studentUniqueId:'',
       stdAdmissionNo:'',
       stdName:'',
       stdDob:'',
       gender:'',
       stdMobileNo:'',
       stdMName:'',
       stdFName:'',
       stdEmailId:'',
       loginId:1,
       messageStd:'',
       categoryList:[],
       category:'',
       program:'',
       stdDetailList:[],
       displayMsg:''
       

      }      
   }

   componentDidMount=()=>{
       this.handlViewAllColgProgram();
       this.handleViewAllCategory();   
     }

     handleViewAllCategory=()=>{
      ViewAllCategory().then(resp=>{
          if(resp){
              if(resp.data[0]){
                  this.setState({
                         categoryList:resp.data[0],
                         message:""
                  })
              }
              else if(resp.data[1]){
               this.setState({
                  categoryList:[],
                  message:resp.data[1]
               })
              }
              else{
               this.setState({
                  categoryList:[],
                  message:resp.data
               })

              }
          }
      })
  }

     handleAddStudentDetail=(event)=>{
      event.preventDefault();
      const{program,academicYear,category,studentUniqueId,stdAdmissionNo,stdName,stdDob,gender,stdMobileNo,stdFName,stdMName,stdEmailId,loginId}=this.state
     
      AddStudentDetail(program,academicYear,category,studentUniqueId,stdAdmissionNo,stdName,stdDob,gender,stdMobileNo,stdFName,stdMName,stdEmailId,loginId).then(resp=>{
         if(resp){
            if(resp.data[0]){
               this.setState({
                  messageStd:resp.data[0]
               })
            }
           else if(resp.data[1]){
               this.setState({
                  messageStd:resp.data[1]
               })
            }
            else{
               this.setState({
                  messageStd:resp.data
               })
            }
            
         }
      })
   
   }


   // handleViewAllColgDept=()=>{
   //    const{collegeId}=this.state
   //    ViewAllColgDept(collegeId).then(resp=>{
   //        if(resp){
   //            if(resp.data==='NO'){       
   
   //            }
   //            else{
   //                this.setState({
   //                    departmentList:resp.data
   //                })
   
   //            }
   //        }
   //    })
   // }

   handlViewAllColgProgram=()=>{
      const{collegeId}=this.state
      ViewAllColgProgram(collegeId).then(resp=>{
         if(resp){
            if(resp.data['list']){
                this.setState({
                  programList:resp.data['list']
                })
            }
            else if(resp.data['msg']){
              this.setState({
                programList:[],
                message:resp.data['msg']
              })
            }
            else{
              this.setState({
                message:resp.data,
                programList:[]
              })
            }    
         }
      })
   }

   handleViewStudentDetail=(e)=>{
      e.preventDefault();
       const{loginId,program,academicYear}=this.state
      ViewStudentDetail(loginId,program,academicYear).then(resp=>{
         if(resp){
            if(resp.data[0]){
               this.setState({
                  stdDetailList:resp.data[0],
                  displayMsg:''
               })
            }
            else if(resp.data[1]){
               this.setState({
                  stdDetailList:[],
                  displayMsg:resp.data[1]                  
               })
            }
            else{
               this.setState({
                  stdDetailList:[],
                  displayMsg:resp.data
               })
            }
         }
      })
   }

   // setColgDeptProg= ({ target: { value } }) => {
   //    this.setState({
   //        colgDeptProg: value
   //    })    
   // }
   setProgram= ({ target: { value } }) => {
      this.setState({
          program: value
      })    
   }
   setCategory= ({ target: { value } }) => {
      this.setState({
          category: value
      })    
   }

   setAcedemicYear= ({ target: { value } }) => {
      this.setState({
          academicYear: value
      })    
   }
   setStudentUniqueId=(e)=>{
      this.setState({
          studentUniqueId:e.target.value
      })
  }

  setAdmissionNo=(e)=>{
   this.setState({
      stdAdmissionNo:e.target.value
   })
  }
   
  setStdName=(e)=>{
   this.setState({
      stdName:e.target.value
   })
  }

  setStdDob=(e)=>{
   this.setState({
      stdDob:e.target.value
   })
  }

  
  setGender=(e)=>{
   this.setState({
      gender:e.target.value
   })
  }

  setStdMobileNo=(e)=>{
   this.setState({
      stdMobileNo:e.target.value
   })
  }

  setStdFName=(e)=>{
   this.setState({
      stdFName:e.target.value
   })
  }
  setStdMName=(e)=>{
   this.setState({
      stdMName:e.target.value
   })
  }

  setStdEmailId=(e)=>{
   this.setState({
      stdEmailId:e.target.value
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
                                <Card.Title> Student  Basic Information</Card.Title>
                                <Card.Text>
                                 <Form onSubmit={this.handleAddStudentDetail}>
                                    {this.state.messageStd?this.state.messageStd:''}
                                <Row xs={1} lg={4}>
                                <Col>Degree</Col>
                                    <Col>
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.program} 
                                                         onChange={this.setProgram}
                                                         required
                                                        >
                                                <option value="">Select</option>
                                                {this.state.programList.map((programDetail,id)=>(
                                                 <option key={id} value={programDetail.programmaster_id}>{programDetail.program}</option>
                                                   ))}                                                                                                                   
                                            </Form.Control> 
                                    </Col>
                                    <Col>Academic Year</Col>
                                    <Col>  
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.academicYear} 
                                                         onChange={this.setAcedemicYear}
                                                         required
                                                        >
                                                <option value="">Select</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030"> 2030</option>
                                                <option value="2031">2031</option>                                                                                                                  
                                            </Form.Control>                           
                                    </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col> Category  </Col>
                                    <Col>
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.category} 
                                                         onChange={this.setCategory}
                                                         required
                                                        >
                                                <option>Select</option>
                                                {this.state.categoryList.map((categoryDetail,id)=>(
                                                 <option key={id} value={categoryDetail.category_id }>{categoryDetail.category}</option>
                                                   ))}                                                                                                                   
                                            </Form.Control> 
                                    
                                    </Col>

                                  </Row>
                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Student Id  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" 
                                              value={this.state.studentUniqueId}
                                              onChange={this.setStudentUniqueId}
                                              placeholder="ABCD Portal Id"
                                               autoFocus
                                               required />    
                                     </Col>
                                   </Row>
                                    <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Admission Number   </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text"
                                                       value={this.state.stdAdmissionNo}
                                                       onChange={this.setAdmissionNo}
                                                      placeholder="L-2018-Prog"
                                                      required />    
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
                                                      value={this.state.stdName}
                                                      onChange={this.setStdName} 
                                                      required/>    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Date of Birth  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="date" 
                                                    value={this.state.stdDob}
                                                    onChange={this.setStdDob}
                                                    placeholder="24-10-XXXX"                                         
                                                    required/>    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Gender  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                     <Form.Check
                                            inline
                                            label="Male"
                                            name="gender"
                                            type="radio" 
                                            checked={this.state.gender==="Male"}
                                             value="Male"
                                            onChange={this.setGender}
                                            required
                                        /> 
                                         <Form.Check
                                            inline
                                            label="Female"
                                            name="gender"
                                            type="radio" 
                                            checked={this.state.gender==="Female"}
                                             value="Female"
                                            onChange={this.setGender}
                                            required
                                        /> 
                                         <Form.Check
                                            inline
                                            label="Others"
                                            name="gender"
                                            type="radio" 
                                            checked={this.state.gender==="Others"}
                                             value="Others"
                                            onChange={this.setGender}
                                            required
                                        />    
                                     </Col>
                                   </Row>




                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>   Mobile Number  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="number"
                                           value={this.state.stdMobileNo}
                                           onChange={this.setStdMobileNo}
                                           placeholder="98XXXXXXX"
                                           required />    
                                     </Col>
                                   </Row>
                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row} style={{paddingTop:'1%'}}>
                                                <Form.Label>  Father Name  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text"
                                                    value={this.state.stdFName}
                                                    onChange={this.setStdFName}
                                                    placeholder="ABCXX"  required />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>   Mother Name  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" 
                                             value={this.state.stdMName}
                                             onChange={this.setStdMName}
                                        placeholder="KLJXX"  required />    
                                     </Col>
                                   </Row>

                                   <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>   Email Id  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="email"
                                         value={this.state.stdEmailId}
                                         onChange={this.setStdEmailId}
                                        placeholder="abc@domain.com"  required />    
                                     </Col>
                                   </Row>

                                   {/* <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>   Pass Out Year  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="date" placeholder="20XX" />    
                                     </Col>
                                   </Row> */}


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

                     <Card>
                            <Card.Body>
                                <Card.Title> View Inserted Student Data</Card.Title>
                                <Card.Text>
                                 {this.state.displayMsg?this.state.displayMsg:''}
                                 <Form onSubmit={this.handleViewStudentDetail}>
                                <Row xs={1} lg={5}>
                                <Col>Degree</Col>
                                    <Col>
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.program} 
                                                         onChange={this.setProgram}
                                                         required
                                                        >
                                                <option>Select</option>
                                                {this.state.programList.map((programDetail,id)=>(
                                                 <option key={id} value={programDetail.programmaster_id}>{programDetail.program}</option>
                                                   ))}                                                                                                                   
                                            </Form.Control> 
                                    </Col>
                                    <Col>Academic Year</Col>
                                    <Col>  
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.academicYear} 
                                                         onChange={this.setAcedemicYear}
                                                         required
                                                        >
                                                <option>Select</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>                                                                                                                  
                                            </Form.Control>                           
                                    </Col>
                                    <Col > 
                                            <Button variant="primary" type="submit" style={{width:'40%'}}>
                                               Search
                                            </Button> 
                                     </Col>
                                  </Row>
                                  <hr/>

                                  <MaterialTable 
                            title="Advisory Inbox"
                      
                            columns  ={[
                                    {title:'S.NO',field:'sno'},
                                    {title:'Degree',field:'degree'},
                                    {title:'Academic_Year',field:'year'},
                                    {title:'Name',field:'name'}, 
                                    {title:'AdmissionNo',field:'admission'},   
                                    {title:'StudentUniqueId',field:'stdUniqId'},
                                    {title:'Category',field:'cat'}, 
                                    {title:'DateOfBirth',field:'dob'}, 
                                    {title:'Gender',field:'gen'}, 
                                    {title:'MobileNo',field:'mobileNo'},                        
                                    {title:'FatherName',field:'fname'},
                                    {title:'MotherName',field:'mname'},
                                    {title:'EmailId',field:'emailId'},
                                    {title:'Created',field:'created'},
                                ]}
                                data={                                    
                                  this.state.stdDetailList.map((stdData,index)=>(
                                    {
                                      'sno': index+1,                                
                                      'degree':stdData.program,
                                      'year':stdData.academicyear,
                                      'name': stdData.name,
                                      'admission':stdData.admissionno,
                                      'stdUniqId':stdData.stdUniqueId,                             
                                      'cat': stdData.category,
                                      'dob':stdData.dob,
                                      'gen':stdData.gender, 
                                      'mobileNo': stdData.mobileno,
                                      'fname':stdData.fathername,
                                      'mname':stdData.mothername,      
                                       'emailId':stdData.email_id,
                                       'created':stdData.stdrecordlog,                       
                                    }
                                  )  )
                              } 
                              
                              options={{
                                exportButton: true,
                                pageSize: 5,
                                pageSizeOptions: [5, 10, 20],
                                toolbar: true,
                                paging: true                              
                              }}                     
                            />

                           </Form>
                           </Card.Text>
                           </Card.Body>
                           </Card>
                    
                  </Tab>
                  
               </Tabs>

                </Container>
            </div>
        )
    }
}
export default AdStudentBasicInfo