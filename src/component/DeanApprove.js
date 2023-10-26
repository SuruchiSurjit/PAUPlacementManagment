import React from "react";
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ApproveStdDetailDean from '../methods/ApproveStdDetailDean';

class DeanApprove extends React.Component{
    constructor(props)
{
    super(props);   
    this.state={
    performa:'',
    dialogStatus:false,
    name:'',
    program:'',
    admissionYear:'',
    personalEmail:'',
    fName:'',
    mName:'',
    uniPassout:'',
    instName:'',
    address:'',
    typeOrg:'',
    instOrgjoined:'',
    instOrgCountry:'',
    startUpType:'',
    turnover:'',
    joiningDetail:'',
    email:'',
    sportsQuota:'',
    insOrgCountry:'',
    loginId:'',
    stdTrackId:'9999999',
    progId:'',
    stdId:'',
    stdInfoId:'',
    message:'',
    disableButton:0,
   }
   
}
componentDidMount(){  
       this.setState({
          name:this.props.stdName,
          program:this.props.stdProg,
          admissionYear:this.props.stdAdmission,
          registration:this.props.stdRegistration,
          fName:this.props.stdFName,
          personalEmail:this.props.stdPersonalEmail,
          performaType:this.props.stdPerforma,
          address:this.props.stdOrgInsAddress,
          typeOrg:this.props.stdOrgInsType,
          instName:this.props.stdOrgInsName,
          uniPassout:this.props.stdPassoutYear,
          joiningDetail:this.props.stdOrgInsJoined,
          email:this.props.stdEmail,
          sportsQuota:this.props.stdQuota,
          mName:this.props.stdMName,
          insOrgCountry:this.props.stdOrgInsCountry,
          turnover:this.props.stdOrgInsTurnOver,
          loginId:this.props.loginId,
          stdTrackId:this.props.stdInfoTrackId,
          progId:this.props.stdProgId,
          stdId:this.props.stdId,
          stdInfoId:this.props.stdInfoId
    })
}

handleApproveStdDetailDean=(e)=>{
  e.preventDefault();  
  const{loginId,stdTrackId,progId,stdId,stdInfoId}=this.state
  ApproveStdDetailDean(loginId,stdTrackId,progId,stdId,stdInfoId).then(resp=>{
    if(resp){
      if(resp.data[0]){
        this.setState({
          message:resp.data[0],
          disableButton:1
        })
      
      }
      else if(resp.data[1]){
        this.setState({
          message:resp.data[1],
          disableButton:0
        })
      }
      else if(resp.data[2]){
        this.setState({
          message:resp.data[2],
          disableButton:0
        })
      }
      else if(resp.data[3]){
        this.setState({
          message:resp.data[3],
          disableButton:0
        })
      }
      else if(resp.data[4]){
        this.setState({
          message:resp.data[4],
          disableButton:0

        })
      }
      else if(resp.data[5]){
        this.setState({
          message:resp.data[5],
          disableButton:0
        })
      }
      else{
        this.setState({
          message:resp.data,
          disableButton:0
        })
      }
    }
  })
}

setDialogDisplay=()=>{
    this.setState({
        dialogStatus:true
    })
}

setDialogDisplayOff=()=>{
    this.setState({
        dialogStatus:false
    })
}


    render(){
        return(
            <div>
                 <Button variant="primary" onClick={this.setDialogDisplay}>+More</Button>

                <Container fluid>
                <Modal show={this.state.dialogStatus}
                //  onHide={this.setDialogDisplayOff}
                size ='xl'
                 >
        <Modal.Header style={{backgroundColor:'#1E88E5',color:'white'}}>
          <Modal.Title >Student Placement Detail</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          {this.state.message?this.state.message:''}
          {/* Detail of  <b>{this.state.name}</b> */}
         
        <Table striped>
      <thead>
        <tr>
          <th>Program</th>
          <th>AcademicYear</th>
          <th>StudentName</th>
          <th>PersonalEmail</th>
          <th>FatherName</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.program}</td>
          <td>{this.state.admissionYear}</td>
          <td>{this.state.name}</td>
          <td>{this.state.personalEmail}</td>
          <td>{this.state.fName}</td>
        </tr>       
      </tbody>
      <thead>
        <tr>
          <th>PassOutProgram</th>
          <th>UniversityPassout</th>
          <th>Sports Quota</th>    
          <th>Email</th>
          <th>MotherName</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.program}</td>
          <td>{this.state.uniPassout}</td>
          <td>{this.state.sportsQuota}</td>
          <td>{this.state.email}</td>
          <td>{this.state.mName}</td>
        </tr>       
      </tbody>

      <thead>
        <tr>

          <th>Performa</th>
          {/* <th>UniversityPassout</th> */}
          <th>Name</th>
          <th>Address</th>
          <th>Type</th>
          <th>JoiningDate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.performaType}</td>
          {/* <td>{this.state.uniPassout}</td> */}
          <td>{this.state.instName}</td>
          <td>{this.state.address?this.state.address:'--'}</td>
          <td>{this.state.typeOrg?this.state.typeOrg:'--'}</td>
          <td>{this.state.joiningDetail?this.state.joiningDetail:'--'}</td>
        </tr>
       
      </tbody>
      <thead>
        <tr>
          <th>Country</th>
          <th>Turn Over</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.insOrgCountry?this.state.insOrgCountry:'--'}</td>
          <td>{this.state.turnover?this.state.turnover:'--'}</td>         
        </tr>       
      </tbody>
    </Table>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"           
           onClick={this.setDialogDisplayOff}
          >
            Close
          </Button>
          <Button variant="primary" 
             disabled={this.state.disableButton==1}
             onClick={this.handleApproveStdDetailDean}
          >
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
                    
                </Container>
            </div>
        )
    }
}
export default DeanApprove