import axios, {AxiosAdapter} from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';
import config from "@/api/config";
import { Response } from "@/models/Response";

// axios.defaults.adapter = mpAdapter;
const instance = axios.create({
    baseURL: config.baseUrl.default,
    adapter: mpAdapter as AxiosAdapter,
    headers: {
        "Content-Type": "application/json"
    }
});


/* Get
Perform http request to backend with method GET.
@Generic Types:
    T: expected type of return object.
@Parameters:
    url: http request path starting with '/', e.g. "/user".
    params: parameter of this request. Must be a JSON. Default is {}(no parameter).
@Return:
    A Promise(defined in model folder) containing a Response from backend.
    The type of Response.data should be T. If the return object is not
    a Response, or the type of data is not compatible with the one in model,
    check your code or contact backend developers.
*/
export async function get<T>(url: string, params: any={}): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
        instance
          .get<Response<T>>(url, {params: params})
          .then(response => {
              resolve(response.data as Response<T>);
          })
          .catch(err => {
              reject(err)
          })
    });
}

/* Post
Perform http request to backend with method POST.
@Generic Types:
    M: type of the data that needs to be uploaded.
    T: expected type of return object.
@Parameters:
    url: http request path starting with '/', e.g. "/user".
    data: data of this request. Must be a JSON.
@Return:
    A Promise(defined in model folder) containing a Response from backend.
    The type of Response.data should be T. If the return object is not
    a Response, or the type of data is not compatible with the one in model,
    check your code or contact backend developers.
*/
export async function post<T>(url: string, data: any): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
        instance
          .post<Response<T>>(url, data)
          .then(response => {
                resolve(response.data as Response<T>);
            },
            err => {
                reject(err);
            });
    });
}
