import axiosInstance from "./axiosInstance";

export function sentenceadminadd(postData) {
    return axiosInstance.post(`/sentence/admin/add`,postData);
}

export function categoryall() {
    return axiosInstance.get(`/category/all`);
}

export function userregister(postData) {
    return axiosInstance.post(`/user/register`,postData);
}

export function userlogin(postData) {
    return axiosInstance.post(`/user/login`,postData);
}