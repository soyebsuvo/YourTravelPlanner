import axios from "axios"


const axiosPublic = axios.create({
    baseURL : 'https://server.wandergeniellm.com'
})
export default function useAxiosPublic() {
  return axiosPublic;
}
