import Axios from "axios";

export default function AddPlacementRecord(student,sportQuota,performa,eduProg,nameOfInstitute,
    addressOfInstitute,typeOfInstitue,admissionDate,turnOver,personalEmail,universityPassout,collegeSelect,colg_Prog,loginId,program){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'addPlacementRecord',
            student,
            sportQuota,
            performa,
            eduProg,
            nameOfInstitute,
            addressOfInstitute,
            typeOfInstitue,
            admissionDate,
            turnOver,
            personalEmail,
            universityPassout,
            collegeSelect,
            colg_Prog,
            loginId,
            program
        }
    });
    return response;
}




