import { Layout } from 'components/users';
import { userService } from 'services';
import { ksService } from 'services/ksservice';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import React from 'react';


export default Index;

function Index() {
    let timer;
    const server_url = "http://150.183.146.192:"

    const [connectLink, setLink] = useState(null);
    const [status, setStatus] = useState(null);

    const username = userService.userValue?.firstName
    
    useEffect(() => {
        setLink("")
        setStatus("-")
        const response = ksService.podList(username, "filerun")
        //console.log("get result")
        response.then(function (result){
            if(result == undefined){
                console.log("null return");
                return;
            }
            const words = result.text.split(' ');
            //setLink(result.text)
            setStatus(words[0]);
            if(words[0] == "Running"){
                setLink(server_url+words[1]);
            }
        });
    }, []);

    function click_create() {
        ksService.podCreate(username, "filerun")
        click_connect()
    }

    function click_connect(){
        timer = setTimeout(function () {
            click_connect();
          }, 5000);
        const response = ksService.podList(username, "filerun")
        //console.log("get result")
        response.then(function (result){
            if(result == undefined){
                console.log("null return");
                return;
            }
            console.log(result.text);
            const words = result.text.split(' ');
            if(words.length == 2 && words[0] == "Running"){
                setStatus(words[0]);
                setLink(server_url+words[1]);
                clearTimeout(timer);
            }
        });
    }

    function click_delete(){
        ksService.podDelete(username, "filerun")
        setLink("")
        setStatus("-")
        clearTimeout(timer);
    }

    return (
        <Layout>
            <h1>File Manager</h1>
            Hi {userService.userValue?.firstName}!
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Pod Name</th>
                        <th style={{ width: '10%' }}>Status</th>
                        <th style={{ width: '50%' }}>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>File Manager</td>
                        <td>{status}</td>
                        <td><Link href={`${connectLink}?page=login&action=login&nonajax=1&username=superuser&password=superuser`} ><a target='_blank'>{connectLink}</a></Link></td>
                        <td style={{ whiteSpace: 'nowrap' }}>
                            <button onClick={() => click_create()} className="btn btn-sm btn-success btn-delete-user" disabled={false}>create</button>&nbsp;
                            <button onClick={() => click_delete()} className="btn btn-sm btn-danger btn-delete-user" disabled={false}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}
