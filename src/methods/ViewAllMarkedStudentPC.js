import Axios from "axios";

export default function ViewAllMarkedStudentPC(loginId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllMarkedStudentPC',
            loginId             
        }
    });
    return response;
}