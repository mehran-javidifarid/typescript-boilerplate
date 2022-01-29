import Api from './index';
import {ILogin} from "../../redux/authentication/types";

export const loginApi = (data:ILogin) => Api.POST({ url: "/login",data});
