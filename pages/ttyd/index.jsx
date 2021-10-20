import { Layout } from 'components/users';
import { userService } from 'services';
import { ksService } from 'services/ksservice';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import React from 'react';


export default Index;

function Index() {

    const [connectLink, setLink] = useState(null);
    const [podName, setPodname] = useState(null);
    const [podAge, setPodage] = useState(null);
    const username = userService.userValue?.firstName

    useEffect(() => {
        setLink("")
        setPodname("-")
        setPodage("-")
      }, []);
    

    function click_create() {
        ksService.podCreate(username, "ttyd")
        //return ks_service.create(username)
    }

    function click_connect(){
        const response = ksService.podList(username, "ttyd")
        //console.log("get result")
        response.then(function (result){
            console.log(result.text)
            const words = result.text.split(' ');
            //setLink(result.text)
            setPodname(words[0])
            setPodage(words[1])
            setLink("http://150.183.146.192:"+words[2])
        });
    }

    function click_delete(){
        ksService.podDelete(username, "ttyd")
        setLink("")
        setPodname("-")
        setPodage("-")
    }

    return (
        <Layout>
            <h1>Web Terminal</h1>
            Hi {userService.userValue?.firstName}!
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Pod Name</th>
                        <th style={{ width: '10%' }}>Ages</th>
                        <th style={{ width: '50%' }}>Link</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{podName}</td>
                        <td>{podAge}</td>
                        <td><Link href={`${connectLink}`} ><a target='_blank'>{connectLink}</a></Link></td>
                        <td style={{ whiteSpace: 'nowrap' }}>
                            <button onClick={() => click_create()} className="btn btn-sm btn-success btn-delete-user" disabled={false}>create</button>&nbsp;
                            <button onClick={() => click_connect()} className="btn btn-sm btn-info btn-delete-user" disabled={false}>connect</button>&nbsp;
                            <button onClick={() => click_delete()} className="btn btn-sm btn-danger btn-delete-user" disabled={false}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}
