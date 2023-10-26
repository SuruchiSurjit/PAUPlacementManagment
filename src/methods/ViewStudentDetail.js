import Axios from "axios";

export default function ViewStudentDetail(loginId,program,academicYear){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'viewStudentDetial',
                loginId, 
                program,
                academicYear               
        }
    });
    return response;
}