import axios from "axios";
const axiosInstance = axios.create({
           // local instance of firebase functions
  // baseURL: "http://localhost:5001/clone-1ed0a/us-central1/api",
           // deployed instance of amazon server on render.com
  baseURL: "https://amazon-api-deploy-p04r.onrender.com",
});
export {axiosInstance}