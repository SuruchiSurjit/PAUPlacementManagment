import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MaterialTable from 'material-table';

class AdInbox extends React.Component{
    constructor(props)
{
    super(props);   
    this.state={
    performa:'',
   }
   
}
setPerforma = ({ target: { value } }) => {
    this.setState({
        performa: value,

    })
}

    render(){
        return(
            <div>
                <Container fluid>
                <MaterialTable 
                            title="Advisory Inbox"
                      
                            columns  ={[
                                    {title:'S.NO',field:'sno'},
                                    {title:'Collage Name',field:'collage'}, 
                                    {title:'Name',field:'name'},   
                                    {title:'User Name',field:'userName'},
                                    {title:'Password',field:'password'},                        
                                ]}
                              //   data={                                    
                              //     this.state.collegeLoginList.map((collegeLoginData,index)=>(
                              //       {
                              //         'sno': index+1,                                
                              //         'collage':collegeLoginData.department,
                              //         'name': collegeLoginData.name,
                              //         'userName':collegeLoginData.username,
                              //         'password':collegeLoginData.password,                           
                              //       }
                              //     )  )
                              // } 
                              
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
export default AdInbox