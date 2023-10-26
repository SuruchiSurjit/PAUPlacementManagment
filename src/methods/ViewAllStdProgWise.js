import Axios from "axios";

export default function ViewAllStdProgWise(academicYear,program){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllStdProgWise',
            academicYear,
            program,                
        }
    });
    return response;
}