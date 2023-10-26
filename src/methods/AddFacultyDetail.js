

import Axios from "axios";

export default function AddFacultyDetail(colgDeptProg,designationListLogin,accessType,facultyId,facultyName,mobileNo,userName,password){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'addFacultyDetail',
            colgDeptProg,
            designationListLogin,
            accessType,
            facultyId,
            facultyName,
            mobileNo,
            userName,
            password
        }
    });
    return response;
}




