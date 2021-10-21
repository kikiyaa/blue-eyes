import getConfig from 'next/config';
import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/ks`;

export const ksService = {
    podCreate,
    podList,
    podDelete
};



function podCreate(user, serviceName) {
    console.log("ks pod create ")
    const message = user + " " + serviceName
    return fetchWrapper.post(`${baseUrl}/create`, message);
}

async function podList(user, serviceName) {
    //const test = "test"
    console.log("async")
    const message = user + " " + serviceName
    try {
      console.log("ks pod list")
      const response = await fetchWrapper.get(`${baseUrl}/list?user=${user}&service=${serviceName}`);
      //console.log("return value")
      //console.log(response)
      return response;
    }
    catch (err) {
      console.log('fetch failed', err);
    }
}


function podDelete(user, serviceName) {
    console.log("ks pod delete")
    const message = user + " " + serviceName
    return fetchWrapper.post(`${baseUrl}/delete`, message);
}