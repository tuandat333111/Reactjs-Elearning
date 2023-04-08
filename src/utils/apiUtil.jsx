import axios from "axios";

const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c";

const api = axios.create({
    baseURL:"https://elearningnew.cybersoft.edu.vn/api/",
});
api.interceptors.request.use((config) => {
    const renderAuth=()=>{
        if(localStorage.getItem("UserAdmin")){
            return `Bearer ${JSON.parse(localStorage.getItem("UserAdmin")).accessToken}`;
        }
        else if(localStorage.getItem("User")){
            return `Bearer ${JSON.parse(localStorage.getItem("User")).accessToken}`;
        }
        else{
            return "";
        }
    }
    config.headers = {
        ...config.headers,
        TokenCybersoft:TOKEN_CYBERSOFT,
        Authorization:renderAuth(),
    }
    return config;
})

export default api;