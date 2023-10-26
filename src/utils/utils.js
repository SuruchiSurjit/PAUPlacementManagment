const LOGIN_ID = 'LOGIN_ID';
const ACCESS_ID = 'ACCESS_ID';

export const login = (loginId, accessId) => {
    sessionStorage.setItem(LOGIN_ID, loginId);
    sessionStorage.setItem(ACCESS_ID, accessId);
}

export const logout = () => {
    sessionStorage.removeItem(LOGIN_ID);
    sessionStorage.removeItem(ACCESS_ID);
}
export const isLogin = () => {
    // if(sessionStorage.getItem(ACCESS_ID) && sessionStorage.getItem(ACCESS_ID)=== 2){
    //     return 'USER'
    // }
    // else if(sessionStorage.getItem(ACCESS_ID) && sessionStorage.getItem(ACCESS_ID)=== 1){
    //     return 'ADMIN'
    // }
    // sessionStorage.removeItem(LOGIN_ID);
    // sessionStorage.removeItem(ACCESS_ID);
    return sessionStorage.getItem(ACCESS_ID) && sessionStorage.getItem(LOGIN_ID);
}

export const emptySession=()=>{
    sessionStorage.removeItem(LOGIN_ID);
    sessionStorage.removeItem(ACCESS_ID);
}