import Axios from "axios";

export default function ViewAllMarkedStudentDean(loginId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllMarkedStudentDean',
            loginId             
        }
    });
    return response;
}