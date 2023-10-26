import Axios from "axios";

export default function ViewAllCollege(){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllCollege',
            }
    });
    return response;
}