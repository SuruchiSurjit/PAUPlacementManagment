import Axios from "axios";

export default function ViewColgProg(colgId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewcolgPro',
            colgId,                
        }
    });
    return response;
}