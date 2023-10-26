import Axios from "axios";

export default function ViewAllDesignation(){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewAllDesignation',
            }
    });
    return response;
}