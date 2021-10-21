import { exec } from 'child_process';
import { apiHandler } from 'helpers/api';

export default apiHandler({
    post: podDelete
});

function podDelete(req, res) {
    // split out password from user details
    console.log(req.body)
    const message = req.body;
    const words = message.split(' ');
    console.log("delete " + words[1] + " in " + words[0]);
    const command = "kubectl delete -f ./kube_script/"+words[1]+".yaml -n "+words[0];
    const kubectl_delete = exec(command);

    kubectl_delete.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    kubectl_delete.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    kubectl_delete.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
    return res.status(200).json({});
}