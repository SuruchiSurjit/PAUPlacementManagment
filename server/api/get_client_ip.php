<?php  
function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
//     function getIPAddress() {  
//     //whether ip is from the share internet  
//      if(!emptyempty($_SERVER['HTTP_CLIENT_IP'])) {  
//                 $ip = $_SERVER['HTTP_CLIENT_IP'];  
//         }  
//     //whether ip is from the proxy  
//     elseif (!emptyempty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  
//                 $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];  
//      }  
// //whether ip is from the remote address  
//     else{  
//              $ip = $_SERVER['REMOTE_ADDR'];  
//      }  
//      return $ip;  
// }  
// $ip = getIPAddress();  
// echo 'User Real IP Address - '.$ip;  
?>  