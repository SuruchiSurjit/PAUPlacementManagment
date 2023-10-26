import React from "react";
import Container from 'react-bootstrap/Container';
import MaterialTable from 'material-table';
import ViewAllMarkedStudent from '../methods/ViewAllMarkedStudent';
import InboxApprove from './InboxApprove';
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
    this.handleViewAllMarkedStudent();      
  }

 
handleViewAllMarkedStudent=()=>{
    const{loginId}=this.state
    ViewAllMarkedStudent(loginId).then(resp=>{
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
                <MaterialTable 
                            title="Advisory Inbox"  
                                         
                            columns  ={[
                                    {title:'S.NO',field:'sno'},
                                    {title:'Program',field:'prog'}, 
                                    {title:'AdmissionYear',field:'admissionyear'},   
                                    {title:'RegistrationNo',field:'registration'},
                                    {title:'Name',field:'name'},
                                    {title:'FatherName',field:'fName'},                                    
                                    {title:'PersonalEmail',field:'personalEmail'}, 
                                    {title:'PerformaType',field:'performa'},                                   
                                    {title:'+Detail',field:'detail'}
                                ]}
                                data={                                    
                                  this.state.stdDetail.map((stdDetailData,index)=>(
                                    {
                                      'sno': index+1,                                
                                      'prog':stdDetailData.program,
                                      'admissionyear': stdDetailData.academicyear,
                                      'registration':stdDetailData.admissionno,
                                      'name':stdDetailData.name,
                                      'fName':stdDetailData.fathername,
                                      'personalEmail':stdDetailData.personalEmailId,
                                      'performa':stdDetailData.perfoma,
                                      'detail':<InboxApprove   stdProg={stdDetailData.program}
                                                               stdAdmission={stdDetailData.academicyear}
                                                               stdRegistration={stdDetailData.admissionno}
                                                               stdName={stdDetailData.name}
                                                               stdFName={stdDetailData.fathername}
                                                               stdPersonalEmail={stdDetailData.personalEmailId}
                                                               stdPerforma={stdDetailData.perfoma}
                                                               stdPassoutYear={stdDetailData.universityPassout}
                                                               stdOrgInsName={stdDetailData.organizationname}
                                                               stdOrgInsAddress={stdDetailData.address}
                                                               stdOrgInsType={stdDetailData.typeOrganization}
                                                               stdOrgInsJoined={stdDetailData.monthyearjoined}
                                                               stdOrgInsCountry={stdDetailData.country}
                                                               stdOrgInsStartUp={stdDetailData.startUpType}
                                                               stdOrgInsTurnOver={stdDetailData.annualTurnOver}
                                                               stdQuota={stdDetailData.sportsQuota}
                                                               stdEmail={stdDetailData.email_id}
                                                               stdMName={stdDetailData.mothername}                                                               
                                                               stdLog={stdDetailData.stdinfolog}
                                                               loginId={this.state.loginId}
                                                               stdInfoTrackId={stdDetailData.trackId}
                                                               stdProgId={stdDetailData.programmaster_id}
                                                               stdId={stdDetailData.std_id}
                                                               stdInfoId={stdDetailData.studentinfo_id}

                                                            //    stdOrgInsName={stdDetailData.organizationname}

                                                               
                                                               />
                                                         
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