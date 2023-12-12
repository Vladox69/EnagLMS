import { enagApi } from "@/apis"

export const deleteUser=async(user:any)=>{
    try {
        const res = await enagApi.delete(`/users/user_id=${user.id}`)
        return res
    } catch (error) {
        return error
    }
}