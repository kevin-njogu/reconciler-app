import axios from 'axios';

export const axiosInstace = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
});

axiosInstace.interceptors.request.use(
    async function (config) {
        let token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        let csrfToken = localStorage.getItem('csrfToken');
        if (!csrfToken) {
            try {
                const response = await axios.get('http://localhost:8080/api/csrf_token', { withCredentials: true });
                csrfToken = response.data.token;
                localStorage.setItem('csrfToken', csrfToken);
            } catch (error) {
                console.error(error.message);
            }
        }
        if (csrfToken) {
            config.headers['X-XSRF-TOKEN'] = csrfToken;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);
