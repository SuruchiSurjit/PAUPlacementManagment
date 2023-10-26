import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Template extends React.Component{
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
                    
                </Container>
            </div>
        )
    }
}
export default Template