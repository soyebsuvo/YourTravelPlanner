import { useContext } from "react"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { MyContext } from "../Components/Context/Context";

export default function useCheckRole() {
    const { user } = useContext(MyContext);
    const axiosPublic = useAxiosPublic();
    const { data: role , isPending : isRolePending, refetch } = useQuery({
        queryKey: ["userRole", user],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/admin/${user?.email}`);
            return res.data.role;
        }
    })
    return [role , isRolePending, refetch]
}
