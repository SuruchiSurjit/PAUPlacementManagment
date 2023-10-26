import Axios from "axios";

export default function ViewParticularStdData(stdId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewParticularStdData',
                stdId,                
        }
    });
    return response;
}