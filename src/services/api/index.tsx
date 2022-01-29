import axios, {Canceler, AxiosRequestConfig} from 'axios';
import {ServerErrorHandling} from './errorHandling';
require('dotenv').config()


interface IapiCreator {
    headers: any,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data: any,
    token?: string,
    toast?: boolean
}

const config: AxiosRequestConfig = {
    baseURL: process.env.BASE_URL,
    timeout: 50000,
    responseType: 'json',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    onUploadProgress: (progressEvent: ProgressEvent) => {
    },
    onDownloadProgress: (progressEvent: ProgressEvent) => {
    },
    maxContentLength: 2000,
    maxBodyLength: 2000,
    validateStatus: (status: number) => status >= 200 && status < 300,
    maxRedirects: 5,
    cancelToken: new axios.CancelToken((cancel: Canceler) => {
    })
};

const reHydrateStore = () => {

    if (localStorage.getItem('applicationState') !== null) {
        const data: any = localStorage.getItem('applicationState');
        return JSON.parse(data)

    } else
        return undefined
}

const ApiCreator = async (IapiCreator: IapiCreator) => {
    const token_ = await reHydrateStore().users.data.token;
    const customConfig = {
        ...config,
        headers: {
            'language': 'fa',
            ...(token_ && { token:  token_ }),
            ...(IapiCreator.headers && { ...IapiCreator.headers }),
        },
        url: IapiCreator.url,
        method: IapiCreator.method,
        data: IapiCreator.data
    }

    return await axios(customConfig)
        .then(response => response.data.data ).catch(err => ServerErrorHandling(err,IapiCreator.toast))
};

interface Iapi {
    header?: any,
    url: string,
    data?: any,
    token?: string,
    toast?: boolean
}

class Api {
    static GET = (Iapi: Iapi) => ApiCreator({
        headers: Iapi.header,
        method: 'get',
        url: Iapi.url,
        data: Iapi.data,
        token: Iapi.token,
        toast: Iapi.toast
    });

    static POST = (Iapi: Iapi) => ApiCreator({
        headers: Iapi.header,
        method: 'post',
        url: Iapi.url,
        data: Iapi.data,
        token: Iapi.token,
        toast: Iapi.toast
    });

    static PUT = (Iapi: Iapi) => ApiCreator({
        headers: Iapi.header,
        method: 'put',
        url: Iapi.url,
        data: Iapi.data,
        token: Iapi.token,
        toast: Iapi.toast
    });

    static PATCH = (Iapi: Iapi) => ApiCreator({
        headers: Iapi.header,
        method: 'patch',
        url: Iapi.url,
        data: Iapi.data,
        token: Iapi.token,
        toast: Iapi.toast
    });

    static DELETE = (Iapi: Iapi) => ApiCreator({
        headers: Iapi.header,
        method: 'delete',
        url: Iapi.url,
        data: Iapi.data,
        token: Iapi.token,
        toast: Iapi.toast
    });
}

export default Api;
