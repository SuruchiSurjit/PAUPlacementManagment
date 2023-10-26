import Axios from "axios";

export default function CreateDeanLogin(colgAsDept,designationListLogin,name,mobileNo,username,password){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'createDeanLogin',
            colgAsDept,
            designationListLogin,
            name,
            mobileNo,
            username,
            password
        }
    });
    return response;
}