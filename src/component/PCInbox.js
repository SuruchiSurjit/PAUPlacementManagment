import React from "react";
import Container from 'react-bootstrap/Container';
import MaterialTable from 'material-table';
import ViewAllMarkedStudentPC from '../methods/ViewAllMarkedStudentPC';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HodInbox extends React.Component{
    constructor(props)
{
    super(props);   
    this.state={
    performa:'',
    loginId:5,
    stdDetail:[],
    message:'',
   }   
}
componentDidMount=()=>{
    this.handleViewAllMarkedStudentPC();      
  }
 
handleViewAllMarkedStudentPC=()=>{
    const{loginId}=this.state
    ViewAllMarkedStudentPC(loginId).then(resp=>{
        if(resp){           
            if(resp.data[0]){                
                this.setState({
                    stdDetail:resp.data[0],
                    message:'',
                })
            }
            else if(resp.data[1]){               
                this.setState({
                    stdDetail:[],
                    message:resp.data[1],
                })
            }
            else{               
                this.setState({
                    stdDetail:[],
                    message:resp.data,
                })
            }
        }
    })
}

    render(){        
        return(
            <div>
                <Container fluid>
                    <Row style={{paddingTop:'1%'}}>
                        <Col> {this.state.message?this.state.message:''}</Col>
                    </Row>
                   <Row>
                    <Col>College</Col>
                    <Col>Department</Col>
                    <Col>Program</Col>
                    <Col>Search</Col>
                   </Row>


                <MaterialTable 
                            title=" Inbox"  
                                         
                            columns  ={[
                                    {title:'S.NO',field:'sno'},
                                    {title:'Program',field:'prog'}, 
                                    {title:'AdmissionYear',field:'admissionyear'},   
                                    {title:'RegistrationNo',field:'registration'},
                                    {title:'SportsQuota',field:'sportsQuota'},
                                    {title:'Name',field:'name'},
                                    {title:'FatherName',field:'fName'}, 
                                    {title:'MotherName',field:'mName'},
                                    {title:'Gender',field:'gender'},
                                    {title:'PersonalEmail',field:'personalEmail'}, 
                                    {title:'PerformaType',field:'performa'}, 
                                    {title:'PassOut',field:'passOut'},
                                    {title:'OrganizationInstituteName',field:'currentplace'},
                                    {title:'Org/InstAddress',field:'currentaddress'}, 
                                    {title:'Org/InstType',field:'orgInsType'}, 
                                    {title:'Org/InstJoin',field:'joining'}, 
                                    {title:'Org/InstCountry',field:'country'},
                                    {title:'StartUpType',field:'startUpType'},  
                                    {title:'AnnualIncome',field:'turnOver'},                                   
                                    // {title:'+Detail',field:'detail'}
                                ]}
                                data={                                    
                                  this.state.stdDetail.map((stdDetailData,index)=>(
                                    {
                                      'sno': index+1,                                
                                      'prog':stdDetailData.program,
                                      'admissionyear': stdDetailData.academicyear,
                                      'registration':stdDetailData.admissionno,
                                      'sportsQuota':stdDetailData.sportsQuota,
                                      'name':stdDetailData.name,
                                      'fName':stdDetailData.fathername,
                                      'mName':stdDetailData.mothername,
                                      'gender':stdDetailData.gender,
                                      'personalEmail':stdDetailData.personalEmailId,
                                      'performa':stdDetailData.perfoma,
                                      'passOut':stdDetailData.universityPassout,
                                      'currentplace':stdDetailData.organizationname?stdDetailData.organizationname:'--',
                                      'currentaddress':stdDetailData.address?stdDetailData.address:'--',
                                      'orgInsType':stdDetailData.typeOrganization?stdDetailData.typeOrganization:'--',
                                      'joining':stdDetailData.monthyearjoined?stdDetailData.monthyearjoined:'--',
                                      'country':stdDetailData.country?stdDetailData.country:'--',
                                      'startUpType':stdDetailData.startUpType?stdDetailData.startUpType:'--',
                                      'turnOver':stdDetailData.annualTurnOver?stdDetailData.annualTurnOver:'--',




            //   'detail':<InboxApprove   stdProg={stdDetailData.program}
            //                            stdAdmission={stdDetailData.academicyear}
            //                            stdRegistration={stdDetailData.admissionno}
            //                            stdName={stdDetailData.name}
            //                            stdFName={stdDetailData.fathername}
            //                            stdPersonalEmail={stdDetailData.personalEmailId}
            //                            stdPerforma={stdDetailData.perfoma}
            //                            stdPassoutYear={stdDetailData.universityPassout}
            //                            stdOrgInsName={stdDetailData.organizationname}
            //                            stdOrgInsAddress={stdDetailData.address}
            //                            stdOrgInsType={stdDetailData.typeOrganization}
            //                            stdOrgInsJoined={stdDetailData.monthyearjoined}
            //                            stdOrgInsCountry={stdDetailData.country}
            //                            stdOrgInsStartUp={stdDetailData.startUpType}
            //                            stdOrgInsTurnOver={stdDetailData.startUpType}
            //                            stdQuota={stdDetailData.sportsQuota}
            //                            stdEmail={stdDetailData.email_id}
            //                            stdMName={stdDetailData.mothername}                                                               
            //                            stdLog={stdDetailData.stdinfolog}
            //                            loginId={this.state.loginId}
            //                            stdInfoTrackId={stdDetailData.trackId}
            //                            stdProgId={stdDetailData.programmaster_id}
            //                            stdId={stdDetailData.std_id}
            //                            stdInfoId={stdDetailData.studentinfo_id}
                                                                                                                           
                                                            //    />
                                                         
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
                    
                </Container>
            </div>
        )
    }
}
export default HodInbox