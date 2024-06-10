import axios from "axios"


const axiosPublic = axios.create({
    baseURL : 'https://6569-msh.knowme.sbs'
})
export default function useAxiosPublic() {
  return axiosPublic;
}
