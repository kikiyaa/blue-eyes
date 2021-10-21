import { execSync } from 'child_process';
import { apiHandler} from 'helpers/api';


export default apiHandler({
    get: getPodlist
});

function getPodlist(req, res) {
    console.log("get pod list")
    const status = execSync ('kubectl get pod -l app=ttyd -o jsonpath="{.items[*].status.phase}"')
    const port = execSync ('kubectl  get svc ttyd -o=jsonpath="{.spec.ports[*].nodePort}"')
    const result_string = ""+status.toString() + " " + port.toString();
    console.log(result_string)
    return res.status(200).json({text: result_string});
}