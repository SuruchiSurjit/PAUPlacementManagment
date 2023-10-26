import Axios from "axios";

export default function ViewAllAccessType(){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllAccessType',
            }
    });
    return response;
}