import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"


export const newUser=async(user:any)=>{
    try {
        
        const resP=await uploadFile(user.photo_file)

        const body={
            id:user.id,       
            username:user.username,
            password:user.password, 
            email:user.email,
            rol:user.rol,
            photo_url:resP.url
        }

        const res= await enagApi.post(`/users`,body)
        return res
    } catch (error) {
        return error
    }
}