import { exec } from 'child_process';
import { apiHandler, usersRepo, omit } from 'helpers/api';


export default apiHandler({
    get: getPodlist
});

var myObj = {};
var result_string = '';

myObj.list = function(callback){
    exec("pwd", function (error, stdout, stderr) {
       callback(stdout);
    });
  }
  

function getPodlist(req, res) {
    console.log("get pod list")
    
    myObj.list(function (result) {
        //console.log(result)
        result_string = result
        //return res.status(200).json({result});
     });
    //console.log(result_string)
    result_string = "pod_name age port"
    return res.status(200).json({text: result_string});
}



