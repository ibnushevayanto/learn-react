import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN INSTANCE";
instance.defaults.headers.post["Conten-Type"] = "application/json";

instance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  

export default instance;
