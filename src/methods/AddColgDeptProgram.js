import Axios from "axios";

export default function AddColgDeptProgram(collegeSelectProg,colgDeptProg,program,programDuration,programType,progAbbrivation,progLevel){
    let response = Axios.get(process.env.REACT_APP_GATEWAY_URL, {
        params: {
            a: 'addColgDeptProgram',
            collegeSelectProg,
            colgDeptProg,
            program,
            programDuration,
            programType,
            progAbbrivation,
            progLevel
        }
    });
    return response;
}