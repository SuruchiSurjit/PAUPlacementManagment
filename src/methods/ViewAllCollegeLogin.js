import Axios from "axios";

export default function ViewAllCollegeLogin(){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllCollegeLogin',
            }
    });
    return response;
}