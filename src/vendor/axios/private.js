import axios from 'axios';

const privateInstance = axios.create({
    baseURL: 'http://localhost:4004'
});


privateInstance.interceptors.response.use(function(res){
    const token = res.headers && res.headers.authorization;
    console.log('token',token);
    configurateInterceptors(token);
    return res;
},function(error){
    if(error.response.status === 401){
        // call action for removing of the user's session
        console.log('Token is expired')
    }
    Promise.reject(error);
})

export const configurateInterceptors = ( token ) => {
    privateInstance.defaults.headers.common["authorization"] = `${token}`;
}

export default privateInstance;

