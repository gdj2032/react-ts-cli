export const mockSwitch = true; // mock开关
const isProduction = process.env.NODE_ENV !== 'development';
const Credentials = 'include'; // include 跨域使用 、 same-origin 同源使用

let API_HOST = 'http://192.168.1.179:3721'

if (isProduction) {
  API_HOST = 'http://config-gateway.yuna.svc.cluster.dev2:8700/api'; // 
} else {
  API_HOST += !mockSwitch ? '' : '/mock';
}

export {
  API_HOST,
  Credentials
};
