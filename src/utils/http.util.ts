import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

const KEY = '19de8e43'
const Http = axios.create({
    baseURL: 'http://www.omdbapi.com/'
})

const requestInterceptor = (request: AxiosRequestConfig): AxiosRequestConfig => {
    request.url = `${request.url}${request.url?.includes('?') ? '&' : '?'}apikey=${KEY}`
    return request
}

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
    return response.data ?? response
}
const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
}

Http.interceptors.request.use(requestInterceptor)
Http.interceptors.response.use(responseInterceptor, errorInterceptor)


export default Http
