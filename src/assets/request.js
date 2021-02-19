import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant';

//post请求
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data, {
            indices: false
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                Toast('请求错误或服务器异常!请联系管理员！');
                reject(err)
            })
    })
}
//get请求
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
