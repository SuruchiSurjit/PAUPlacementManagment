import Axios from "axios";

export default function ViewAllMarkedStudent(loginId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllMarkedStudent',
            loginId             
        }
    });
    return response;
}