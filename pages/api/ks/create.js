import { exec } from 'child_process';
import { apiHandler } from 'helpers/api';

export default apiHandler({
    post: create
});

function create(req, res) {
    // split out password from user details
    console.log(req.body)
    const message = req.body;
    const words = message.split(' ');
    console.log("create " + words[1] + " in " + words[0]);
    const command = "./kube_script/ttyd.sh" + words[0];
    //console.log(command)
    const kubectl_create = exec(command);

    kubectl_create.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    kubectl_create.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    kubectl_create.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
    return res.status(200).json({});
}