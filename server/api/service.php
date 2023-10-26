<?php
require 'conf.dev.php';
// require 'conf.prod.php';
//DB Connection
require_once 'MysqliDb.php';
//register_shutdown_function('shutdown');
//date_default_timezone_set('America/Los_Angeles');
date_default_timezone_set("Asia/Kolkata");
ini_set("session.cookie_lifetime", $sessionMaxTime);
ini_set("session.rc_maxlifetime", $sessionMaxTime);
ini_set ('display_errors', 'on');
ini_set ('log_errors', 'on');
ini_set ('display_startup_errors', 'on');
ini_set ('error_reporting', E_ALL);
session_set_cookie_params($sessionMaxTime, "/");
session_start();
$db = new MysqliDb(Array (
    'host' => $dbHost,
    'username' => $dbUser,
    'password' => $dbPassword,
    'db' => $dbDb,
    'charset' => 'utf8mb4'
));


if($a=$_GET["a"]){
    if($a){
        if($a=='addCollege'){          
          $collegeName=$_GET["college"]; 
          $data= Array("college"=>$collegeName,
                       "colgLog"=>$db->now());

          $id=$db->insert('collegemaster',$data);
          if( $id){
            echo "Succesfully Inserted";
          }
          else{
            echo"Technical Issue has been encountered.";
          }           
        } 
        
        if($a=='viewAllCollege'){
          $collegeList=$db->get("collegemaster");
          echo json_encode($collegeList);
        }

        if($a=='addColgDepartment'){
          $collegeIdData=$_GET['collegeId'];
          $department=$_GET['department'];
          $dataColgDept=Array("college_id"=>$collegeIdData,
                                "department"=>$department,
                                "departmentLog"=>$db->now()
                              );
              $id=$db->insert('departmentmaster',$dataColgDept);
              if( $id){
                echo "Succesfully Inserted";
              }
              else{
                echo"Technical Issue has been encountered.";
              }

        }

        if($a=='viewAllColgDept'){
          $collegeId=$_GET['collegeId'];
          $db->where("college_id",$collegeId);
          $colgDept=$db->get("departmentmaster");
          if($colgDept){
            echo json_encode($colgDept);
          }
          else{
            echo "NO";
          }
        }

        if($a=='addColgDeptProgram'){
              $collegeSelectProg=$_GET['collegeSelectProg'];
              $colgDeptProg=$_GET['colgDeptProg'];
              $program=$_GET['program'];
              $nofyear=$_GET['programDuration'];
              $progType=$_GET['programType'];
              $progAbbrivation=$_GET['progAbbrivation'];
              $progLevel=$_GET['progLevel'];        
            $dataColgDept=Array(
                                "department_id"=>$colgDeptProg,
                                "program"=>$program,
                                "noofyear"=>$nofyear,
                                "programType"=>$progType,
                                "programAbbrivation"=>$progAbbrivation,
                                "programLevel"=>$progLevel,
                                "programmasterlog"=>$db->now()
                               );
          $id=$db->insert('programmaster',$dataColgDept);
          if($id){
            // echo json_encode($id);
            echo "Succesfully Inserted";
          }
          else{
            echo "NO";
          }
        }

        /** Start Create Dean Level Logins */
        if($a=='createDeanLogin'){
          $departmentIdId=$_GET['colgAsDept'];
          $designationId=$_GET['designationListLogin'];
          $name=$_GET['name'];
          $mobileNo=$_GET['mobileNo'];
          $userName=$_GET['username'];
          $password=$_GET['password'];
          $deanAccessId=1;
          $loginStatus=2;
      $dataUserMaster=Array("department_id"=>$departmentIdId,
                       "designation_id"=>$designationId,
                       "name"=>$name,
                       "mobileno"=>$mobileNo,
                       "userLog"=>$db->now());

              $userMasterId=$db->insert("usermaster",$dataUserMaster);
              if($userMasterId){
               $dataLogin=Array("access_id"=>$deanAccessId,
                                "user_id"=>$userMasterId,
                                "username"=>$userName,
                                "password"=>$password,
                                "loginLog"=>$db->now());
              $dataLoginId=$db->insert("loginmaster",$dataLogin);
                                if($dataLogin){
                                  echo "Succesfully Inserted";
                                }
                                else{
                                  echo "Error While Inserting Data in Table Login Master";
                                }
              }
              else{
                echo "Error While Inserting Data in Table User Master";
              }
        }
        /**Start View All College DeanLevel Login */
        if($a=='viewAllCollegeLogin'){
          $db->join("loginmaster lm","lm.user_id=um.user_id","LEFT");
          $db->join("departmentmaster dm","dm.department_id=um.department_id","LEFT");
          $db->where("dm.departmentStatus",2);
          $loginData=$db->get("usermaster um",null,"*");
          if($loginData){
            echo json_encode($loginData);
          }
          else{
            echo "Error While Fetching Data from Table L&U";
          }
         

        }

      /**Start View College as Department */
     if($a=='viewCollegeDepartment')
     {
      $deptAsColgId=2;
         $db->where("departmentStatus",$deptAsColgId);
         $colgDept=$db->get("departmentmaster");
         if($colgDept)
         echo json_encode($colgDept);
         else 
         echo "Technical Issue";
     }

     /**Start View All Designation */
     if($a=='viewAllDesignation'){
      $dataDesignation=$db->get("designationmaster");
      if($dataDesignation){
        echo json_encode($dataDesignation);
      }
      else{
        echo "Technical Issue";
      }      
     }

     /**Start View All Access Type */
     if($a=='viewAllAccessType'){
      $accessData=$db->get("accessmaster");
      if($accessData){
       echo json_encode($accessData);
      }
      else{
        echo " Some Technical Error";
      }

     }
    
      /**Start Add Faculty Detail By Dean */
      if($a=='addFacultyDetail'){
        $departmentIdD=$_GET['colgDeptProg'];
        $designationIdD=$_GET['designationListLogin'];
        $accessIdD=$_GET['accessType'];
        $facultyIdD=$_GET['facultyId'];
        $facultyNameD=$_GET['facultyName'];
        $facultyMobileNoD=$_GET['mobileNo'];
        $facultyUserNameD=$_GET['userName'];
        $facultyPasswordD=$_GET['password'];

        $dataFaculty=Array("department_id"=>$departmentIdD,
                           "designation_id"=>$designationIdD,
                           "name"=>$facultyNameD,
                           "mobileno"=>$facultyMobileNoD,
                           "userLog"=>$db->now());
            $userMasterId=$db->insert("usermaster",$dataFaculty);
            if($userMasterId){
                   $loginFaculty=Array("access_id"=>$accessIdD,
                   "user_id"=>$userMasterId,
                   "username"=>$facultyUserNameD,
                   "password"=>$facultyPasswordD,
                   "loginLog"=>$db->now());
              $loginMasterId=$db->insert("loginmaster",$loginFaculty);
              if($loginMasterId){
                echo "Successfully Create";
              }
              else{
                echo "Some Technical Issue Table LM";
              }
            }
            else{
              echo "Some Technical Issue Table UM";
            }
      }
       
      /**View  All Programs of  concern College */
      if($a=='viewAllColgProgram'){
        $dataOutput=Array();
        $collegeId=$_GET['collegeId'];
        $db->join("departmentmaster dm","cm.college_id=dm.college_id","LEFT");  
        $db->join("programmaster pm","pm.department_id=dm.department_id","LEFT");      
        $db->where("cm.college_id",$collegeId);
       $colgProg= $db->get("collegemaster cm",null,"*");
       if($colgProg){
        // echo json_encode($colgProg);
           $dataOutput['list']=$colgProg;
       }
       else{
           $dataOutput['msg']="Technical Error While Fetching Data";
       }
       echo json_encode($dataOutput);

      }

      /**Start View All Category */
      if($a=='viewAllCategory'){
        $arrayVar=Array();
       $categoryData= $db->get("categorymaster");
       if($categoryData){
        // echo json_encode($categoryData);
        $arrayVar[0]=$categoryData;
       }
       else{
        $arrayVar[1]="Insert Data into Table";
        // echo "Technical Issue  While Fetching Data From Table CM";
       }
       echo json_encode($arrayVar);
      }

      /**Start  Add Student Detail by Advisory */
      if($a=='addStudentDetail'){
        $progId=$_GET['program'];   
        $academicYear=$_GET['academicYear'];    
        $categoryId=$_GET['category'];        
        $stdId=$_GET['studentUniqueId'];
        $stdAdmissionNo=$_GET['stdAdmissionNo'];
        $stdName=$_GET['stdName'];
        $stdDOB=$_GET['stdDob'];
        $stdGender=$_GET['gender'];
        $stdMobileNo=$_GET['stdMobileNo'];
        $stdFName=$_GET['stdFName'];
        $stdMName=$_GET['stdMName'];
        $stdEmailId=$_GET['stdEmailId'];
        $loginId=$_GET['loginId'];
        $deanCollegeAccessId=3;
        $HODAccessId=2;
        $dataTrack=Array();
        $operation="Insert";
        $relatedTo="Student Master Record";

        $stdMaster=Array( "programmaster_id"=> $progId,
                          "category_id"=>$categoryId,    
                          "academicyear"=>$academicYear,                                               
                          "stdUniqueId"=>$stdId,
                          "admissionno"=>$stdAdmissionNo,
                          "name"=>$stdName,
                          "dob"=>$stdDOB,
                          "mobileno"=>$stdMobileNo,
                          "gender"=>$stdGender,
                          "fathername"=>$stdFName,
                          "mothername"=>$stdMName,
                          "email_id"=>$stdEmailId,
                          "insertedBy"=>$loginId,
                          "stdrecordlog"=>$db->now()
                          );
          $stdMasterData=$db->insert("studentrecordmaster",$stdMaster);
          if($stdMasterData){ 
                         
                       $mapStdLog=Array("std_id"=>$stdMasterData,
                                        "login_id"=>$loginId, 
                                        "userstdLog"=>$db->now() );
                              $mapStdId=$db->insert("userstudentmapping", $mapStdLog);
                                if($mapStdId){
                                  $insertLog=Array("operation"=>$operation,
                                  "relatedTo"=>$relatedTo,
                                  "std_id"=>$stdMasterData,
                                  "doneBy"=>$loginId,
                                  "log"=>$db->now());    
                               $logId=$db->insert("logmaster",$insertLog);
                          if($logId)
                          {                             
                            $dataTrack[0]="Successfully Inserted";
                          } 
                                }        
          }
            else{
              $dataTrack[1]= "Error While Inserting Data SRM";
            }
            echo json_encode($dataTrack);                    
                     
                    //   $db->join("departmentmaster dm","dm.department_id=pm.department_id","LEFT");  
                    //   $db->join("collegemaster cm","cm.college_id=dm.college_id","LEFT");                  
                    //   $db->where("pm.programmaster_id",$progId);
                    //   $progTypeData= $db->getOne("programmaster pm",null,"*");
                    //   if($progTypeData){                       
                    //     $progTypeName=$progTypeData['programType'];
                    //     $proColgId=$progTypeData['college_id'];

                    //     if($progTypeName=='UG'){ /**Marked to Dean of Concerned College */
                    //       $deanDesignationId=2;
                    //       $db->join("usermaster um","um.user_id=lm.user_id","LEFT");
                    //       $db->join("department_designation dd","dd.deptDesignation_id=um.deptDesignation_id","LEFT");
                    //       $db->join("departmentmaster dm","dm.department_id=dd.department_id","LEFT");                  
                    //       $db->where("dd.designation_id",$deanDesignationId);
                    //       $db->where("dm.college_id",$proColgId);                     
                    //        $deanIdDetail= $db->getOne("loginmaster lm",null,"*"); 

                    //      if($deanIdDetail){
                    //        $deanLoginId=$deanIdDetail['login_id'];
                    //        $dataTrack=Array("senderId"=> $loginId,
                    //                         "receiverId"=>$deanLoginId,
                    //                         "studentinfo_id"=>$stdMasterData,
                    //                         "trackLog"=>$db->now());
                    //           $dataTrackI=$db->insert("trackmaster",$dataTrack);

                    //          if($dataTrackI){
                    //                     $insertLog=Array("operation"=>$operation,
                    //                                     "relatedTo"=>$relatedTo,
                    //                                     "doneBy"=>$loginId,
                    //                                     "log"=>$db->now());    
                    //            $logId=$db->insert("logmaster",$insertLog);
                    //           if($logId)
                    //           {
                               
                    //             $dataTrack[0]="Successfully Forward to Dean";
                    //           }                             
                    //          }
                    //          else{
                    //           $dataTrack[1]="Error While Forward to Dean";
                    //          } 
                    //      } 
                    //    }
                    //    else if($progTypeName=='PG'){ /**Marked to HOD of Concerned Department*/

                    //     $HODDesignationId=4;
                    //     $db->join("programmaster pm","pm.department_id=dm.department_id","LEFT");
                    //     $db->join("departmentmaster dm","dm.department_id=dd.department_id","LEFT");
                    //     $db->join("department_designation dd","dd.deptDesignation_id=um.deptDesignation_id","LEFT");
                    //     $db->join("usermaster um","um.user_id=lm.user_id","LEFT");
                    //     $db->where("dd.designation_id", $HODDesignationId);
                    //     $db->where("pm.programmaster_id",$progId);
                    //     $hodLoginData=$db->getOne("loginmaster lm",null,"*");
                    //      if($hodLoginId){
                    //       $hodLoginId=$hodLoginData['login_id'];
                    //       $dataTrack=Array("senderId"=> $loginId,
                    //                       "receiverId"=>$hodLoginId,
                    //                       "studentinfo_id"=> $stdMasterData,
                    //                       "trackLog"=>$db->now());
                    //         $dataTrackI=$db->insert("trackmaster",$dataTrack);
                    //        if($dataTrackI){
                    //         //  $dataTrack[0]="Successfully Forward to HOD";
                    //         $insertLog=Array("operation"=>$operation,
                    //                          "relatedTo"=>$relatedTo,
                    //                          "doneBy"=>$loginId,
                    //                          "log"=>$db->now());    
                    //                 $logId=$db->insert("logmaster",$insertLog);
                    //               if($logId)
                    //               {                             
                    //                 $dataTrack[0]="Successfully Forward to HOD";
                    //               }  
                    //          }
                    //         else{
                    //          $dataTrack[1]="Error While Forward to HOD";
                    //            } 
                    //      }
                    //   }
                    //   }
                    //  }
                       
      }

      if($a=='viewAllStdProgWise'){
        $dataVar=Array();
         $academicYear=$_GET['academicYear'];
         $programId=$_GET['program'];
        
        $db->join("programmaster pm","pm.programmaster_id=srm.programmaster_id","LEFT");
        $db->where("srm.programmaster_id",$programId);
        $db->where("srm.academicyear",$academicYear);
        $stdProgList=$db->get("studentrecordmaster srm",null,"*");
        if($stdProgList){
          // echo json_encode($stdProgList);
          $dataVar['list']=$stdProgList;
        }
        else{
          $dataVar['msg']= "Insert Student Data Prgram Wise";
        }
        echo json_encode($dataVar);
      }
      
      /**Start View Particular Student Id Data */
      if($a=='viewParticularStdData'){
              $stdId=$_GET['stdId'];

              $db->join("categorymaster cm","cm.category_id=srm.category_id","LEFT");
              $db->where("srm.std_id",$stdId);
              $stdDetail=$db->getOne("studentrecordmaster srm",null,"*");
              if($stdDetail){
                echo json_encode($stdDetail);
              }
              else{
                echo "Error While Fetching Data Table SRM+CM";
              }
      }

      /**Start insert placement  */
      if($a=='addPlacementRecord'){
              $arrayVar=array();
             $stdId=$_GET['student'];
             $sportsQuota=$_GET['sportQuota'];
             $performaType=$_GET['performa'];
             $eduProJoined=$_GET['eduProg'];
             $nameofInsOrg=$_GET['nameOfInstitute'];
             $addressOfInsOrg=$_GET['addressOfInstitute'];
             $typeOfInsOrg=$_GET['typeOfInstitue'];
             $admissionDate=$_GET['admissionDate'];
             $turnOver=$_GET['turnOver'];
             $personalEmailId=$_GET['personalEmail'];
             $insertedBy=$_GET['loginId'];
             $uniPassOut=$_GET['universityPassout'];
             $passOutColgId=$_GET['collegeSelect'];
             $passOutProgId=$_GET['colg_Prog'];
             $progId=$_GET['program'];

             $operation="Insert";
             $relatedTo="Student Placement Data";

             if($uniPassOut=="Yes"){
                $programId= $passOutProgId;
             }
             else{
                $programId=0;
             }
                                     $stdPlacementData=Array("std_id"=>$stdId,
                                      "perfoma"=>$performaType,                                      
                                      "organizationname"=>$nameofInsOrg,
                                      "address"=>$addressOfInsOrg,
                                      "typeOrganization"=>$typeOfInsOrg,
                                      "monthyearjoined"=> $admissionDate,
                                      "sportsQuota"=>$sportsQuota,
                                      "annualTurnOver"=>$turnOver,
                                      "personalEmailId"=>$personalEmailId,
                                      "insertedBy"=>$insertedBy,
                                      "universityPassout"=>$uniPassOut,
                                      "passOutProgId"=>$programId,
                                      "stdinfolog"=>$db->now()
                                          );

                $stdPlacementId=$db->insert("studentinfo", $stdPlacementData);                     
              if($stdPlacementId)
              {
                  $HODDesignationId=4;
                  $db->join("programmaster pm","pm.department_id=dm.department_id","LEFT");
                  $db->join("departmentmaster dm","dm.department_id=dd.department_id","LEFT");
                  $db->join("department_designation dd","dd.deptDesignation_id=um.deptDesignation_id","LEFT");
                  $db->join("usermaster um","um.user_id=lm.user_id","LEFT");
                  $db->where("dd.designation_id", $HODDesignationId);
                  $db->where("pm.programmaster_id",$progId);
                  $hodLoginData=$db->getOne("loginmaster lm",null,"*");
                   if($hodLoginId){
                    $hodLoginId=$hodLoginData['login_id'];
                    $dataTrack=Array("senderId"=> $insertedBy,
                                    "receiverId"=>$hodLoginId,
                                    "studentinfo_id"=> $stdPlacementId,
                                    "trackLog"=>$db->now());
                      $dataTrackI=$db->insert("trackmaster",$dataTrack);
                     if($dataTrackI){
                      //  $dataTrack[0]="Successfully Forward to HOD";
                      $insertLog=Array("operation"=>$operation,
                                       "relatedTo"=>$relatedTo,
                                       "std_id"=>$stdId,
                                       "doneBy"=>$insertedBy,
                                       "log"=>$db->now());    
                              $logId=$db->insert("logmaster",$insertLog);
                            if($logId)
                            {                             
                              $arrayVar[0]="Successfully Forward to HOD";
                            }  
                       }
                      else{
                        $arrayVar[1]="Error While Forward to HOD";
                         } 
                   }


              //   $db->join("departmentmaster dm","dm.department_id=pm.department_id","LEFT");  
              //   $db->join("collegemaster cm","cm.college_id=dm.college_id","LEFT");                  
              //   $db->where("pm.programmaster_id",$progId);
              //   $progTypeData= $db->getOne("programmaster pm",null,"*");
              //   if($progTypeData){                       
              //     $progTypeName=$progTypeData['programType'];
              //     $proColgId=$progTypeData['college_id'];

              //     if($progTypeName=='UG'){ /**Marked to Dean of Concerned College */
              //       $deanDesignationId=2;

                    

              //       $db->join("usermaster um","um.user_id=lm.user_id","LEFT");
              //       $db->join("department_designation dd","dd.deptDesignation_id=um.deptDesignation_id","LEFT");
              //       $db->join("departmentmaster dm","dm.department_id=dd.department_id","LEFT");                  
              //       $db->where("dd.designation_id",$deanDesignationId);
              //       $db->where("dm.college_id",$proColgId);                     
              //        $deanIdDetail= $db->getOne("loginmaster lm",null,"*");              
              //      if($deanIdDetail){
              //       $deanLoginId=$deanIdDetail['login_id'];                       
              //            $dataTrack=Array("senderId"=> $insertedBy,
              //                             "receiverId"=>$deanLoginId,
              //                             "studentinfo_id"=>$stdPlacementId,
              //                             "trackLog"=>$db->now());
                                        
              //           $dataTrackI=$db->insert("trackmaster",$dataTrack);                      
              //          if($dataTrackI){
                       
              //                       $insertLog=Array("operation"=>$operation,
              //                               "relatedTo"=>$relatedTo,
              //                                 "std_id"=>$stdId,
              //                               "doneBy"=>$insertedBy,
              //                               "log"=>$db->now());    
              //                           $logId=$db->insert("logmaster",$insertLog);
              //           if($logId)
              //           {   
                                               
              //             $arrayVar[0]="Successfully Forward to Dean";
              //           }                             
              //          }
              //          else{
                       
              //           $arrayVar[1]="Error While Forward to Dean";
              //          } 
              //      } 

              //      echo "No Data ---";
              //    }
              //    else if($progTypeName=='PG'){ /**Marked to HOD of Concerned Department*/

              //     $HODDesignationId=4;
              //     $db->join("programmaster pm","pm.department_id=dm.department_id","LEFT");
              //     $db->join("departmentmaster dm","dm.department_id=dd.department_id","LEFT");
              //     $db->join("department_designation dd","dd.deptDesignation_id=um.deptDesignation_id","LEFT");
              //     $db->join("usermaster um","um.user_id=lm.user_id","LEFT");
              //     $db->where("dd.designation_id", $HODDesignationId);
              //     $db->where("pm.programmaster_id",$progId);
              //     $hodLoginData=$db->getOne("loginmaster lm",null,"*");
              //      if($hodLoginId){
              //       $hodLoginId=$hodLoginData['login_id'];
              //       $dataTrack=Array("senderId"=> $insertedBy,
              //                       "receiverId"=>$hodLoginId,
              //                       "studentinfo_id"=> $stdPlacementId,
              //                       "trackLog"=>$db->now());
              //         $dataTrackI=$db->insert("trackmaster",$dataTrack);
              //        if($dataTrackI){
              //         //  $dataTrack[0]="Successfully Forward to HOD";
              //         $insertLog=Array("operation"=>$operation,
              //                          "relatedTo"=>$relatedTo,
              //                          "std_id"=>$stdId,
              //                          "doneBy"=>$insertedBy,
              //                          "log"=>$db->now());    
              //                 $logId=$db->insert("logmaster",$insertLog);
              //               if($logId)
              //               {                             
              //                 $arrayVar[0]="Successfully Forward to HOD";
              //               }  
              //          }
              //         else{
              //           $arrayVar[1]="Error While Forward to HOD";
              //            } 
              //      }
              //   }
              //   }               
              // }             
              // else {
              //   $arrayVar[2]="Error While Inserting Data SI";
              // }
              }
              echo json_encode($arrayVar);             
      }


      if($a=='viewcolgPro'){
        $dataVar=array();
        $collegeId=$_GET['colgId'];
        // $db->join("departmentmaster dm","cm.college_id=dm.college_id","LEFT");  
        // $db->join("programmaster pm","dm.department_id=pm.department_id","LEFT");      
        // $db->where("cm.college_id",$collegeId);
        // $colgProg= $db->get("collegemaster cm",null,"programmaster_id ,program");
       
        $db->join("departmentmaster dm","pm.department_id=dm.department_id","LEFT");  
        $db->join("collegemaster cm","cm.college_id=dm.college_id","LEFT"); 
        $db->where("cm.college_id",$collegeId);
        $colgProg= $db->get("programmaster pm",null,"pm.programmaster_id ,pm.program");
       if($colgProg){
        // echo json_encode($colgProg);
         $dataVar['list']=$colgProg;
       }
       else{
      //  echo "NO";
       $dataVar['NO']="Insert Data into Table";
       }
       echo json_encode($dataVar);
      }
   
      /**To get Student Data based on Academic Year and Program + Create by (login iD) */
      if($a=='viewStudentDetial'){
        $loginId=$_GET['loginId'];
        $progId=$_GET['program'];
        $academicYear=$_GET['academicYear'];
        $arrVar=Array();

        $db->join("studentrecordmaster srm","srm.insertedBy=usm.login_id","LEFT");
        $db->join("categorymaster cm","srm.category_id=cm.category_id","LEFT"); 
        $db->join("programmaster pm","pm.programmaster_id=srm.programmaster_id","LEFT");      
         $db->where("srm.academicyear",$academicYear);
         $db->where("srm.programmaster_id",$progId);
         $db->where("usm.login_id",$loginId);
        $stdDetail=$db->get("userstudentmapping usm",null,"*");

        if($stdDetail){
          $arrVar[0]=$stdDetail;
        }
        else{
          $arrVar[1]="No Data Found";
        }
        echo json_encode ($arrVar);
      }

      /**Start To View all marked Students */
      if($a=='viewAllMarkedStudent'){
        $arrVar=Array();
        $loginId=$_GET['loginId'];                
        $db->join("studentinfo si","si.studentinfo_id=tm.studentinfo_id","LEFT");
        $db->join("studentrecordmaster srm","srm.std_id=si.std_id","LEFT");
        $db->join("programmaster pm","pm.programmaster_id=srm.programmaster_id","LEFT");
        $db->where("tm.trackStatus",0);
        $db->where("tm.receiverId",$loginId);
        $stdata=$db->get("trackmaster tm",null,"*");
        if($stdata){
          $arrVar[0]=$stdata;
        }
        else{
          $arrVar[1]="No Record Found";
        }
        echo json_encode($arrVar);
      }
       /**End To View all marked Students */

    /**Start Approve Std Detail by HOD */
    if($a=='approveStdDetailHOD'){
      $arrayVar=Array();
      $senderId=$_GET['loginId'];
      $stdTrackStdId=$_GET['stdTrackId'];
      $programId=$_GET['progId'];
      $stdPlacementId=$_GET['stdInfoId']; 
      $stdId=$_GET['stdId'];
      $operation="Insert";
      $relatedTo="Approval of Placement Record-HOD";
      $trackStatusDeanColg=1;
      $trackStatus=88;
      // $trackStatusDeanPGS=2;


 /**Send Dean Colg or Dean PGS according to Program Id */
       $db->where("programmaster_id",$programId);
       $programDetail=$db->getOne("programmaster");
       if($programDetail){
          $progType=$programDetail['programType'];
          if($progType=='UG') /**Forward to Dean Colg */
          {
            $arrUpdate=Array('trackStatus'=>$trackStatus);
            $db->where('trackId', $stdTrackStdId);
            if($db->update('trackmaster',$arrUpdate))
            {
                 $accessId=3;    //College Dean                    
                 $db->join("usermaster um","lm.user_id=um.user_id","LEFT");  
                 $db->join("departmentmaster dm","dm.department_id=um.department_id","LEFT");                    
                 $db->join("programmaster pm","pm.department_id=dm.department_id","LEFT");                
                 $db->where("pm.programmaster_id",$programId);
                 $db->where("lm.access_id",$accessId);
                 $receiverDetail=$db->getOne("loginmaster lm",null,"*");                
                if($receiverDetail){
                   $receiverDeanColgId=$receiverDetail['login_id'];

                   $dataTrack=Array("senderId"=> $senderId,
                                    "receiverId"=>$receiverDeanColgId,
                                    "studentinfo_id"=>$stdPlacementId,
                                    "trackStatus"=>$trackStatusDeanColg,
                                    "trackLog"=>$db->now());                                        
                   $dataTrackI=$db->insert("trackmaster",$dataTrack);
                   if($dataTrackI){
                             $insertLog=Array("operation"=>$operation,
                                              "relatedTo"=>$relatedTo,
                                              "std_id"=>$stdId,
                                              "doneBy"=>$senderId,
                                              "log"=>$db->now());    
                            $logId=$db->insert("logmaster",$insertLog);
                          if($logId){
                            $arrayVar[0]="Successfully Forward to Dean-Colg";
                          }
                          else{
                            $arrayVar[1]="Error While Inserting LogMaster";
                          }
                   }
                   else{
                            $arrayVar[2]="Error While Inserting Table:-Track Master ";
                   }
                }
               else{
                         $arrayVar[3]= "No Receiver Found";
                }           
            }
             else{
                     $arrayVar[4]="Unable To Update";
             }
        }
          elseif($progType=='PG') /**Forward to Dean PGS */
          {  
            $arrUpdate=Array('trackStatus'=>$trackStatus);
            $db->where('trackId', $stdTrackStdId);
            if($db->update('trackmaster',$arrUpdate))
            { 
              $accessId=4; //Dean PGS Access Id
              $db->where("access_id",$accessId);
              $deanDetail= $db->getOne("loginmaster");
             if($deanDetail){
              $receiverDeanPGSLoginId=$deanDetail['login_id'];
              $dataTrack= Array("senderId"=> $senderId,
                                "receiverId"=>$receiverDeanPGSLoginId,
                                "studentinfo_id"=>$stdPlacementId,
                                "trackStatus"=>$trackStatusDeanColg,
                                "trackLog"=>$db->now());                                        
            $dataTrackI=$db->insert("trackmaster",$dataTrack);
            if($dataTrackI){
              $insertLog= Array("operation"=>$operation,
                                 "relatedTo"=>$relatedTo,
                                 "std_id"=>$stdId,
                                 "doneBy"=>$senderId,
                                 "log"=>$db->now());    
                      $logId=$db->insert("logmaster",$insertLog);
                  if($logId){
                    $arrayVar[0]="Successfully Forward to Dean-PGS";
                        }
                  else{
                    $arrayVar[1]="Error While Inserting LogMaster";
                      }
            }
            else{
                    $arrayVar[2]="Error While Inserting Table:-Track Master ";
            }
             }
             else{
              $arrayVar[3]= "No Receiver Found";
             }
            }
            else{
              $arrayVar[4]="Unable To Update";
             }
           }        
       }
       else{
        $arrayVar[5]="Unable To Fetch Data from PM Table";
       }
              echo json_encode($arrayVar);
    }  
    /**End Approve Std Detail by HOD */

    /**Start View All request of Dean/Dean PGS */
    if($a=='viewAllMarkedStudentDean'){
      $arrVar=Array();
        $loginId=$_GET['loginId'];                
        $db->join("studentinfo si","si.studentinfo_id=tm.studentinfo_id","LEFT");
        $db->join("studentrecordmaster srm","srm.std_id=si.std_id","LEFT");
        $db->join("programmaster pm","pm.programmaster_id=srm.programmaster_id","LEFT");
        $db->where("tm.trackStatus",1);
        $db->where("tm.receiverId",$loginId);
        $stdata=$db->get("trackmaster tm",null,"*");
        if($stdata){
          $arrVar[0]=$stdata;
        }
        else{
          $arrVar[1]="No Record Found";
        }
        echo json_encode($arrVar);
    }
    /**End View All Request of Dean/Dean PGS */

    /** Start Dean/Dean PGS Approve and Mark to PlacementCell */
    if($a=='approveStdDetailDean'){
      $accessId=5; //Placement Cell Id
      
      $arrayVar=Array();
      $senderId=$_GET['loginId'];
      $stdTrackStdId=$_GET['stdTrackId'];
      $programId=$_GET['progId'];
      $stdPlacementId=$_GET['stdInfoId']; 
      $stdId=$_GET['stdId'];
      $operation="Insert";
      $relatedTo="Approval of Placement Record-Dean/Dean PGS";
      $trackStatusDeanColg=2;
      $trackStatus=99;

      $arrUpdate=Array('trackStatus'=>$trackStatus);
                     $db->where('trackId', $stdTrackStdId);
      if($db->update('trackmaster',$arrUpdate))
      {
        $db->where("access_id",$accessId);
      $placementLoginDetail=$db->getOne("loginmaster");
      if($placementLoginDetail){
        $placementLoginId=$placementLoginDetail['login_id'];
        $dataTrack= Array("senderId"=> $senderId,
                          "receiverId"=>$placementLoginId,
                          "studentinfo_id"=>$stdPlacementId,
                          "trackStatus"=>$trackStatusDeanColg,
                          "trackLog"=>$db->now());                                        
             $dataTrackI=$db->insert("trackmaster",$dataTrack);                  
                      if($dataTrackI)
                      {
                          $insertLog= Array("operation"=>$operation,
                                            "relatedTo"=>$relatedTo,
                                            "std_id"=>$stdId,
                                            "doneBy"=>$senderId,
                                            "log"=>$db->now());    
                                  $logId=$db->insert("logmaster",$insertLog);
                                    if($logId){
                                  $arrayVar[0]="Successfully Forward to Placement Cell";
                                  }
                                else{
                                  $arrayVar[1]="Error While Inserting LogMaster";
                                    }
                      }
                  else{
                                 $arrayVar[2]="Error While Inserting Table:-Track Master ";
                      }
              }
          else{
                                $arrayVar[3]= "No Receiver Found";
              }
      }
      else{
        $arrayVar[4]="Unable To Update";
      }   
          echo json_encode($arrayVar);     
    }
    /**End Dean/Dean PGS Approve and Mark to PlacementCell */

    /**Start Placement Cell Inbox */
    if($a=='viewAllMarkedStudentPC'){
      $arrVar=Array();
        $loginId=$_GET['loginId'];                
        $db->join("studentinfo si","si.studentinfo_id=tm.studentinfo_id","LEFT");
        $db->join("studentrecordmaster srm","srm.std_id=si.std_id","LEFT");
        $db->join("programmaster pm","pm.programmaster_id=srm.programmaster_id","LEFT");
        $db->where("tm.trackStatus",2);
        $db->where("tm.receiverId",$loginId);
        $stdata=$db->get("trackmaster tm",null,"*");
        if($stdata){
          $arrVar[0]=$stdata;
        }
        else{
          $arrVar[1]="No Record Found";
        }
        echo json_encode($arrVar);

    }
    /**End Placement Cell Inbox */

}
}
?>