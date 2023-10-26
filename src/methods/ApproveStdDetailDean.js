import Axios from "axios";

export default function ApproveStdDetailDean(loginId,stdTrackId,progId,stdId,stdInfoId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'approveStdDetailDean',
            loginId,
            stdTrackId,
            progId,
            stdId,
            stdInfoId
        }
    });
    return response;
}