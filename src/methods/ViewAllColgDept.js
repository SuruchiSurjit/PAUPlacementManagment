import Axios from "axios";

export default function ViewAllColgDept(collegeId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllColgDept',
                collegeId,                
        }
    });
    return response;
}