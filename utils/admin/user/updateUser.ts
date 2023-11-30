import { enagApi } from "@/apis";
import { uploadFile } from "@/utils";

export const updateUser=async(user:any)=>{
    try {
        let resP;

        if(user.photo_file!=undefined){
            resP=await uploadFile(user.photo_file)
        }

        const body={
            id:user.id,       
            username:user.username,
            password:user.password, 
            email:user.email,
            rol:user.rol,
            photo_url: (user.photo_file!=undefined)? resP?.url:user.photo_url
        }

        const res = await enagApi.put(`/users/user_id=${user.id}`,body)
        return res
    } catch (error) {
        return error
    }
}