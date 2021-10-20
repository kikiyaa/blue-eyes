import child_process from 'child_process';
import { apiHandler } from 'helpers/api';

export default apiHandler({
    post: podDelete
});

function podDelete(req, res) {
    // split out password from user details
    console.log(req.body)
    const message = req.body;
    const words = message.split(' ');
    console.log("delete " + words[1] + " in " + words[0])
    return res.status(200).json({});
}