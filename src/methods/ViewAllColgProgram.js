import Axios from "axios";

export default function ViewAllColgProgram(collegeId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllColgProgram',
                collegeId,                
        }
    });
    return response;
}