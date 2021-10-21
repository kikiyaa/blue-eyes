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
    console.log("run " + words[1] + " in " + words[0])
    const kubectl_create = exec('kubectl create -f ./yaml_template/ttyd.yaml');

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