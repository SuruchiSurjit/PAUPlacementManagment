import Axios from "axios";

export default function AddCollege(college){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'addCollege',
              college
        }
    });
    return response;
}