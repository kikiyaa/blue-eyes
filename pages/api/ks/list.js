import { execSync } from 'child_process';
import { apiHandler} from 'helpers/api';


export default apiHandler({
    get: getPodlist
});

function getPodlist(req, res) {
    console.log("get list");
    console.log(req.query.user)
    console.log(req.query.service)
    
    const get_status_command = "kubectl get pod -l app="+req.query.service+" -o jsonpath=\"{.items[*].status.phase}\" -n "+req.query.user;
    console.log(get_status_command)
    const get_port_command = "kubectl  get svc "+req.query.service+" -o=jsonpath=\"{.spec.ports[*].nodePort}\" -n "+req.query.user;
    console.log(get_port_command)

    
    const status = execSync (get_status_command)
    const port = execSync (get_port_command)
    const result_string = ""+status.toString() + " " + port.toString();
    console.log(result_string)
    return res.status(200).json({text: result_string});
}