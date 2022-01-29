import {AxiosError} from 'axios';
import {toast} from 'react-toastify';

export const ServerErrorHandling = (err: AxiosError, hasToast = true) => {
    if (err.response) {
        switch (err.response.status) {
            case 403:
                window.localStorage.clear();
                window.location.reload();
                break;
            default:
                if (hasToast)
                    err.response.data.exception.detail.map((error: any) => toast.error(error.messages))
                console.log('error::::::::::>', err.response.data.exception.detail)
                return
        }
    } else {
        toast.dismiss()
        toast.error('مشکل در اتصال به اینترنت در صورت استفاده از فیلتر شکن آن را خاموش کنید');
        return
    }
    throw err;
};