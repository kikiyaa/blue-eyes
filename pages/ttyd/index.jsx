import { Layout } from 'components/users';
import { userService } from 'services';
import { ksService } from 'services/ksservice';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import React from 'react';
import NextNprogress from 'nextjs-progressbar';
import NProgress from "nprogress";
import Router from "next/router";


export default Index;

function Index() {
    let timer;

    const [connectLink, setLink] = useState(null);
    const [status, setStatus] = useState(null);

    const username = userService.userValue?.firstName
    
    useEffect(() => {
        setLink("")
        setStatus("-")
    }, []);

    function click_create() {
        ksService.podCreate(username, "ttyd")
        //return ks_service.create(username)
    }

    function click_connect(){
        timer = setTimeout(function () {
            click_connect();
          }, 5000);
        const response = ksService.podList(username, "ttyd")
        //console.log("get result")
        response.then(function (result){
            console.log(result.text);
            const words = result.text.split(' ');
            //setLink(result.text)
            setStatus(words[0]);
            if(words[0] == "Running"){
                setLink("http://150.183.249.17:"+words[1]);
                clearTimeout(timer);
            }
        });
    }

    function click_delete(){
        ksService.podDelete(username, "ttyd")
        setLink("")
        setStatus("-")
        clearTimeout(timer);
    }

    return (
        <Layout>
            <h1>Web Terminal</h1>
            Hi {userService.userValue?.firstName}!
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Pod Name</th>
                        <th style={{ width: '10%' }}>Status</th>
                        <th style={{ width: '50%' }}>Link</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TTYD</td>
                        <td>{status}</td>
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
