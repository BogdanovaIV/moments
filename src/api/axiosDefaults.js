import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-bogdanova-063bce22af65.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
