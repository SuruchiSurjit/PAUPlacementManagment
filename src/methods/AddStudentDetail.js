import Axios from "axios";

export default function AddStudentDetail(program,academicYear,category,studentUniqueId,stdAdmissionNo,stdName,stdDob,gender,stdMobileNo,stdFName,stdMName,stdEmailId,loginId){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'addStudentDetail',
            program,
            academicYear,
            category,            
            studentUniqueId,
            stdAdmissionNo,
            stdName,
            stdDob,
            gender,
            stdMobileNo,
            stdFName,
            stdMName,
            stdEmailId,
            loginId
        }
    });
    return response;
}




