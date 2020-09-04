import axios from 'axios'

// 后端请求地址
const baseUrl = 'http://localhost:3000';

// axios实例配置
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json; charset=utf-8' }
});

// ==========================================HTTP==========================================
// Get请求
export function getHttp(url) {
  return instance({
    url: url,
    method: "GET",
    params: {}
  });
}

// Post请求
export function postHoop(url, data) {
  return instance({
    url: url,
    method: 'POST',
    data: data
  })
}

// 上传文件
export function upload(file, filename) {
  let formData = new FormData();
  formData.append("filename", filename);
  formData.append("file", file);
  return axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: { 'Authorization': 'Bearer', 'Content-Type': 'multipart/form-data' },
  })({
    url: '/upload',
    method: "POST",
    data: formData
  })
}

export default instance

