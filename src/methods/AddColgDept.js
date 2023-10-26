import Axios from "axios";

export default function AddColgDept(collegeId,department){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'addColgDepartment',
                collegeId,
                department
        }
    });
    return response;
}