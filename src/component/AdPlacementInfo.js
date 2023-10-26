import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'; 
import ViewAllColgProgram from '../methods/ViewAllColgProgram';
import ViewAllStdProgWise from '../methods/ViewAllStdProgWise';
import ViewParticularStdData from '../methods/ViewParticularStdData';
import AddPlacementRecord from '../methods/AddPlacementRecord';
import ViewAllCollege from '../methods/ViewAllCollege';
import ViewColgProg from '../methods/ViewColgProg';
// import AdPlacementView from './AdPlacementView'

class AdPlacementInfo extends React.Component{
    
   constructor(props)
{
    super(props);   
    this.state={
      loginId:1,
    collegeId:1,
    performa:'',
    program:'',
    programList:[],
    academicYear:'',
    programStdList:[],
    studentList:[],
    student:'',
    stdAdmissionNo:'',
    stdCategory:'',
    sportQuota:'',
    colg_Prog:'',

    /**Higher Study */
    eduProg:'',
    nameOfInstitute:'',
    addressOfInstitute:'',
    typeOfInstitue:'',
    admissionDate:'',
    turnover:'',
    disableButton:0,
    message:'',
    personalEmail:'',
    universityPassout:'',
    collegeList:[],
    collegeSelect:'',
    colgProg:[],


    /**Job Placement */
    nameOfOrganizationJB:'',
    addressOfOrganizationJB:'',
    typeOfOrganizationJB:'',
    packageJB:'',
    placementDateJB:'',

    
   }   
}
componentDidMount=()=>{
  this.handlViewAllColgProgram();
  this.handleViewAllCollege();
    
}
setPersonalEmail=(e)=>{
  this.setState({
    personalEmail:e.target.value
  })
}
setUniversityPassout = ({ target: { value } }) => {
  this.setState({
      universityPassout: value,
  })
}
setColgProg=({target:{value}}) => {
  this.setState({
    colg_Prog:value
  })
}

setCollegeList = ({ target: { value } }) => {
  this.setState({
      collegeSelect: value,
  })
  this.handleViewColgProg(value)
}

setPerforma = ({ target: { value } }) => {  
  if(value==""){
    this.setState({
      disableButton:0,
      performa:''
    })
  }
  else{     
    this.setState({
        performa: value,
        disableButton:1
    })
  }
}

setAcedemicYear= ({ target: { value } }) => {
  this.setState({
      academicYear: value,
      program:''
  })    
}

setProgram= ({ target: { value } }) => {
  const{academicYear}=this.state
  this.setState({
      program: value
  }) 
  this.handleViewAllStdProgWise(academicYear,value )   
}


setStudent=(e)=>{
  this.setState({
    student:e.target.value
  })
this.handleViewParticularStdData(e.target.value)  
}

setSportQuota=(e)=>{
  this.setState({
    sportQuota:e.target.value
  })
}


setEduProg = ({ target: { value } }) => { 
  this.setState({
      eduProg: value
  })  
}

setNameOfInstitute=(e)=>{
  this.setState({
    nameOfInstitute:e.target.value
  })
}

setAddressOfInstitute=(e)=>{
  this.setState({
     addressOfInstitute:e.target.value
  })
}

setTypeOfInstitue=(e)=>{
  this.setState({
    typeOfInstitue:e.target.value
  })
}

setAdmisiionDate=(e)=>{
  this.setState({
    admissionDate:e.target.value
  })
}

setPackage=(e)=>{
  this.setState({
    turnover:e.target.value
  })
}

/**Job Placement Parameters */

// setJBNameOfOrg=(e)=>{
//   this.setState({
//     nameOfOrganizationJB:e.target.value
//   })
// }

// setJBAddressOfOrg=(e)=>{
//   this.setState({
//     addressOfOrganizationJB:e.target.value
//   })
// }

// setJBTypeOfOrg=(e)=>{
//   this.setState({
//     typeOfOrganizationJB:e.target.value
//   })
// }

// setJBPackage=(e)=>{
//   this.setState({
//     packageJB:e.target.value
//   })
// }
// setJB
handleViewParticularStdData=(stdId)=>{
  ViewParticularStdData(stdId).then(resp=>{
    if(resp){
      if(resp.data){
        this.setState({
            stdAdmissionNo:resp.data.admissionno,
            stdCategory:resp.data.category,
        })
      }
    }
  })
}
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


handleViewAllStdProgWise=(academicYear,program)=>{
  // const{academicYear,program}=this.state
  ViewAllStdProgWise(academicYear,program).then(resp=>{
    if(resp){
      if(resp.data['list']){
        this.setState({
          programStdList:resp.data['list'],
          message:''
        })
      }
      else if(resp.data['msg']){
        this.setState({
          programStdList:[],
          message:resp.data['msg']
        })
      }
      else{
        this.setState({
          programStdList:[],
          message:resp.data
        })
      }
    }
  })
}

handleViewColgProg=(colgId)=>{
  try{    
    ViewColgProg(colgId).then(resp=>{        
        if(resp){          
          if(resp.data['list']){
            this.setState({
              message:"",
              colgProg:resp.data['list']
            })
          }
          else if(resp.data['NO']){
            this.setState({
              message:resp.data['NO'],
              colgProg:[]
            })
          }
          else{
            this.setState({
              message:resp.data,
              colgProg:[]
            })
          }       
      }
    })
  }
  catch(error){
    console.log("catch");
    console.error(error); // You might send an exception to your error tracker like AppSignal
    return error;
  }  
}

handleAddPlacementRecord=(event)=>{
  event.preventDefault();
  const{student,sportQuota,performa,eduProg,nameOfInstitute,addressOfInstitute,typeOfInstitue,admissionDate,turnover,personalEmail,universityPassout,collegeSelect,colg_Prog,loginId,program}=this.state
  if((universityPassout=="Yes") && (collegeSelect=="" || colg_Prog=="" ) ){
    this.setState({
           message:'Select College and Program also'
    })
  }

  if((performa=="Higher Studies") &&(eduProg=="")){
    this.setState({
      message:'All Fields are Mandatory related to Higher Studies'
    })
  }

  if((performa=="Job Placement") && (turnover=="") ){
    this.setState({
      message:'All Fields are Mandatory related to Job Placement'
    })
  }
  // if(student=="" || sportQuota==""||performa==""||eduProg==""||nameOfInstitute==""||addressOfInstitute==""||typeOfInstitue==""||admissionDate==""||turnover==""
  //    ||personalEmail=="" ||universityPassout=="")
  if(student=="" || sportQuota==""||performa==""||nameOfInstitute==""||addressOfInstitute==""||typeOfInstitue==""||admissionDate==""||
      personalEmail=="" ||universityPassout=="")
  {
    this.setState({
      message:'All Fields are Mandatory'
    })
  }
  else{ 
  AddPlacementRecord(student,sportQuota,performa,eduProg,nameOfInstitute,addressOfInstitute,typeOfInstitue,admissionDate,turnover,personalEmail,universityPassout,collegeSelect,colg_Prog,loginId,program).then(resp=>{
    if(resp){      
      if(resp.data[0]){
        this.setState({
           message:resp.data[0]
        })
      }
      else if(resp.data[1]){
        this.setState({
          message:resp.data[1]
        })
      }
      else if(resp.data[2]){
        this.setState({
          message:resp.data[2]
        })
      }
      else{
        this.setState({
          message:resp.data
        })
      }
    }
  })
}
}


    render(){
        return(
            <div>
                <Container fluid>
                <Tabs
                     defaultActiveKey="add information"
                       id="uncontrolled-tab-example"
                         className="mb-3"
                    >
                      <Tab eventKey="add information" title="Add Information">         
                <Card>
                            <Card.Body>
                                <Card.Title> Placement Information</Card.Title>
                                {this.state.message?this.state.message:''}
                                <Card.Text>
                                <Row xs={1} lg={4}>
                                <Col>Academic Year <b style={{color:'red'}}>*</b></Col>
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
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>                                                                                                                  
                                            </Form.Control>                           
                                    </Col>
                                <Col>Degree <b style={{color:'red'}}>*</b></Col>
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
                                    
                                  </Row>
                               
                                  <Row xs={1} lg={4} style={{paddingTop:'1%'}}>
                                    <Col> Select Student<b style={{color:'red'}}>*</b></Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.student} 
                                                         onChange={this.setStudent}
                                                         required
                                                        >
                                                <option value="">Select</option>
                                                {this.state.programStdList.map((studentDetail,id)=>(
                                                 <option key={id} value={studentDetail.std_id }>{studentDetail.name} - {studentDetail.fathername}</option>
                                                   ))}                                                                                                                   
                                            </Form.Control>                           
                                    </Col>
                                    <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Admission Number   </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" 
                                                      value={this.state.stdAdmissionNo}                                                                                                     
                                                      readOnly />    
                                     </Col>

                                  </Row>
                                 
                                   <Row xs={1} lg={4} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>    Category  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" 
                                                      value={this.state.stdCategory}
                                                      readOnly />    
                                     </Col>
                                     <Col> Sports Quota</Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                value={this.state.sportQuota} 
                                                 onChange={this.setSportQuota}
                                                 required
                                                >
                                        <option value="">Open this select menu</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>                                      
                                    </Form.Control>                             
                                    </Col>
                                   </Row>
                                   <Row xs={1} lg={4} style={{paddingTop:'1%'}}>
                                     <Col> 
                                        <Form.Group as={Row}>
                                                <Form.Label>   Personal Email id  </Form.Label>
                                        </Form.Group>                             
                                     </Col>
                                     <Col>
                                        <Form.Control type="text" 
                                                       value={this.state.personalEmail}
                                                       onChange={this.setPersonalEmail}
                                                       required
                                                      />    
                                     </Col>
                                     <Col> University Passout</Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                 value={this.state.universityPassout} 
                                                 onChange={this.setUniversityPassout}
                                                 required
                                                >
                                        <option value="">Open this select menu</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>                                      
                                    </Form.Control>                             
                                    </Col>
                                   </Row>
                                  
                                       {this.state.universityPassout=="Yes"?
                                   <Row xs={1} lg={4} style={{paddingTop:'1%'}}>
                                    <Col style={{colSpan:'2'}}>Degrees passed out from PAU <b style={{color:'red'}}>*</b> </Col>
                                     <Col>
                                        <Form.Control as="select" aria-label="Default select example" 
                                                         value={this.state.collegeSelect} 
                                                         onChange={this.setCollegeList}
                                                         required
                                                        >
                                                <option value="">Select College</option>
                                                {this.state.collegeList.map((collegeDetail,id)=>(
                                                 <option key={id} value={collegeDetail.college_id}>{collegeDetail.college}</option>
                                                   ))}  
                                                
                                                                                                                          
                                            </Form.Control> 
                                    </Col>
                                    {/* <Col> 
                                        <Form.Control as="select" aria-label="Default select example" 
                                                //  value={this.state.universityPassout} 
                                                //  onChange={this.setUniversityPassout}
                                                 required
                                                >
                                        <option>Type</option>
                                        <option value="UG">UG</option>
                                        <option value="PG">PG</option>                                      
                                    </Form.Control>                             
                                    </Col> */}
                                    <Col> 
                                        <Form.Control as="select" aria-label="Default select example" 
                                                       value={this.state.colg_Prog} 
                                                       onChange={this.setColgProg}
                                                 required
                                                >
                                        <option value="">Program </option>
                                        
                                                {this.state.colgProg.map((programDetail,id)=>(
                                                 <option key={id} value={programDetail.programmaster_id}>{programDetail.program}</option>
                                                   ))}                                      
                                    </Form.Control>                             
                                    </Col>
                                    
                                  </Row>
                                  :''}


                                 
                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col><b> Select Performa Type <b style={{color:'red'}}>*</b></b></Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                value={this.state.performa} 
                                                 onChange={this.setPerforma}
                                                 required
                                                >
                                        <option value="">Open this select menu</option>
                                        <option value="Higher Studies">Higher Studies</option>
                                        <option value="Job Placement">Job Placement</option>
                                        <option value="Self Employed">Self Employed</option>
                                        <option value="">Other</option>
                                    </Form.Control>                             
                                    </Col>
                                  </Row>
                                 <b><hr/></b>
                                 <Form onSubmit={this.handleAddPlacementRecord}>                                   {
                                    this.state.performa=='Higher Studies'? /**Higher Studies */
                                    <div>   

                                    <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                            <Col> Educatonal Programme Joined <b style={{color:'red'}}>*</b></Col>
                                            <Col> 
                                                <Form.Control as="select" aria-label="Default select example" 
                                                            value={this.state.eduProg} 
                                                            onChange={this.setEduProg}
                                                            required
                                                            >
                                                    <option value="">Open this select menu</option>
                                                    <option value="Diploma">Diploma</option>
                                                    <option value="Graduate">Graduate</option>
                                                    <option value="Masters">Masters</option>
                                                    <option value="Doctoral">Doctoral</option>
                                                    <option value="PDF">PDF</option>
                                                </Form.Control>                             
                                            </Col>
                                     </Row>                        

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Name of the Institute/University <b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control type="text"
                                         value={this.state.nameOfInstitute}
                                         onChange={this.setNameOfInstitute}
                                        required  />    
                                     </Col>
                                  </Row>
                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Address of Organization<b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control 
                                                type="text"
                                                value={this.state.addressOfInstitute}
                                                onChange={this.setAddressOfInstitute}
                                                required  />    
                                     </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col> Type of Institute/University <b style={{color:'red'}}>*</b></Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                 value={this.state.typeOfInstitue} 
                                                 onChange={this.setTypeOfInstitue}
                                                 required
                                                >
                                        <option value="">Select</option>
                                        <option value="Indian">Indian</option>
                                        <option value="Foreign">Foreign</option>                                                                             
                                    </Form.Control>                             
                                    </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Admission Date<b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control type="date" 
                                        value={this.state.admissionDate} 
                                        onChange={this.setAdmisiionDate}
                                        require />    
                                     </Col>
                                  </Row>                                
                                 
                                   </div>            
                                    
                                    :this.state.performa=='Job Placement'? /** Job Placement */
                                    <div>                           

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Name of the Organization <b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control type="text" 
                                            value={this.state.nameOfInstitute}
                                            onChange={this.setNameOfInstitute}
                                            required
                                         />    
                                     </Col>
                                  </Row>
                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Address of Organization <b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control 
                                        type="text" 
                                        value={this.state.addressOfInstitute}
                                        onChange={this.setAddressOfInstitute} 
                                        required/>    
                                     </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col> Type of Organization <b style={{color:'red'}}>*</b></Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                value={this.state.typeOfInstitue} 
                                                 onChange={this.setTypeOfInstitue}
                                                 required
                                                >
                                        <option value="">Open this select menu</option>
                                        <option value="Public Sector">Public Sector</option>
                                        <option value="Private Sector">Private Sector</option>
                                        <option value="State Govt">State Govt.</option>  
                                        <option value="Central Govt">Central Govt.</option>                                        
                                    </Form.Control>                             
                                    </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Package (Per annum)<b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control type="number"
                                                      value={this.state.turnover}
                                                      onChange={this.setPackage}
                                                      required  />    
                                     </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Placement Date <b style={{color:'red'}}>*</b></Col>
                                    <Col>

                                        <Form.Control type="date"
                                             value={this.state.admissionDate} 
                                             onChange={this.setAdmisiionDate}
                                             required />    
                                     </Col>
                                  </Row>

                                  {/* <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Degrees passed out from PAU (UG/Master/Ph.D.)- If Two or more degrees have been passed-out from PAU ,
                                     all have to mention with Degree disciptions</Col>
                                    <Col>
                                        <Form.Control type="text" />    
                                     </Col>
                                  </Row>                         */}
                                   </div>                             
                                    :this.state.performa=='Self Employed'? /** Self Employed */
                                    <div>
                                      <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Name of the Business Organization <b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control type="text" 
                                         value={this.state.nameOfInstitute} 
                                         onChange={this.setNameOfInstitute}
                                         required/>    
                                     </Col>
                                  </Row>
                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Address of Business Organization <b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control type="text" 
                                         value={this.state.addressOfInstitute}
                                         onChange={this.setAddressOfInstitute}
                                         required />    
                                     </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col> Type of  Business Organization <b style={{color:'red'}}>*</b></Col>
                                    <Col> 
                                    <Form.Control as="select" aria-label="Default select example" 
                                                value={this.state.typeOfInstitue} 
                                                 onChange={this.setTypeOfInstitue}
                                                 required
                                                >
                                        <option>Open this select menu</option>
                                        <option value="Own Start Up">Own Start Up</option>
                                        <option value="Already Existing Family Business">Already Existing Family Business</option>
                                                                          
                                    </Form.Control>                             
                                    </Col>
                                  </Row>

                                  <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Annual turnover <b style={{color:'red'}}>*</b></Col>
                                    <Col>
                                        <Form.Control 
                                                type="number"
                                                onChange={this.setPackage}
                                                value={this.state.package}
                                                required
                                          />    
                                     </Col>
                                  </Row>
                                  {/* <Row xs={1} lg={2} style={{paddingTop:'1%'}}>
                                    <Col>Degrees passed out from PAU (UG/Master/Ph.D.)- If Two or more degrees have been passed-out from PAU ,
                                     all have to mention with Degree disciptions</Col>
                                    <Col>
                                        <Form.Control type="text" />    
                                     </Col>
                                  </Row>                            */}
                                    </div>
                                    :''}

                                    {this.state.performa!=null?
                                     <Row xs={1} lg={2}>
                                     <Col></Col>
                                     <Col>
                                             <Button variant="primary" 
                                                     type="submit" 
                                                     style={{width:'100%',marginTop:'3%',marginBottom:'3%'}}
                                                     disabled={this.state.disableButton==0}
                                                     >
                                                 Submit
                                             </Button>                                     
                                     </Col>
                                   </Row>                          
                                    :''}
                                      </Form>
                                              <br/>
                                </Card.Text>
                            </Card.Body>
                         </Card>
                         </Tab>
                            <Tab 
                            eventKey="profile" title="View Detail">
                              {/* <AdPlacementView/> */}
                             
 

                            </Tab>

</Tabs>
                    
                </Container>
            </div>
        )
    }
}
export default AdPlacementInfo;